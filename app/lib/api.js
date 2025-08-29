import { API_CONFIG, API_TIMEOUT } from "./config";
import { mockFeaturedPost, mockBlogPosts, mockCategories } from "./mockData";
import DOMPurify from "isomorphic-dompurify";

// Backend API fetch fonksiyonları
const fetchFromBackend = async (endpoint) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Backend API Error:", error);
    throw error;
  }
};

// Mock data fonksiyonları
const getMockData = {
  blogPosts: () => Promise.resolve(mockBlogPosts),
  featuredPosts: () => Promise.resolve([mockFeaturedPost]),
  categories: () => Promise.resolve(mockCategories),
  blogPost: (id) => {
    const post =
      id === 1
        ? mockFeaturedPost
        : mockBlogPosts.find((p) => p.id === parseInt(id));
    return Promise.resolve(post || null);
  },
  blogPostBySlug: (slug) => {
    const post =
      slug === mockFeaturedPost.slug
        ? mockFeaturedPost
        : mockBlogPosts.find((p) => p.slug === slug);
    return Promise.resolve(post || null);
  },
  postsByCategory: (categorySlug) => {
    const posts = [mockFeaturedPost, ...mockBlogPosts].filter(
      (post) => post.category.slug === categorySlug
    );
    return Promise.resolve(posts);
  },
};

// Backend data fonksiyonları
const getBackendData = {
  blogPosts: async () => {
    const response = await fetchFromBackend(API_CONFIG.ENDPOINTS.BLOG_POSTS);
    return response.results || response; // DRF pagination format için
  },
  featuredPosts: async () => {
    const response = await fetchFromBackend(
      API_CONFIG.ENDPOINTS.FEATURED_POSTS
    );
    return response.results || response; // DRF pagination format için
  },
  categories: async () => {
    const response = await fetchFromBackend(API_CONFIG.ENDPOINTS.CATEGORIES);
    return response.results || response; // DRF pagination format için
  },
  blogPost: (id) =>
    fetchFromBackend(`${API_CONFIG.ENDPOINTS.BLOG_POSTS}${id}/`),
  blogPostBySlug: (slug) =>
    fetchFromBackend(`${API_CONFIG.ENDPOINTS.BLOG_POSTS}?slug=${slug}`),
  postsByCategory: async (categorySlug) => {
    const response = await fetchFromBackend(
      `${API_CONFIG.ENDPOINTS.BLOG_POSTS}?category=${categorySlug}`
    );
    return response.results || response;
  },
};

// Ana API fonksiyonları - USE_MOCK_DATA ayarına göre mock veya backend data döndürür
export const blogAPI = {
  // Tüm blog yazılarını getir
  async getAllPosts() {
    try {
      if (API_CONFIG.USE_MOCK_DATA) {
        return await getMockData.blogPosts();
      } else {
        const data = await getBackendData.blogPosts();
        // Backend'den gelen verinin array olduğundan emin ol
        if (!Array.isArray(data)) {
          console.warn("Blog posts data is not an array:", data);
          return [];
        }
        return data;
      }
    } catch (error) {
      console.error("Error fetching all posts:", error);
      // Backend'den veri alınamazsa mock data'ya fallback
      if (!API_CONFIG.USE_MOCK_DATA) {
        console.warn("Falling back to mock data");
        return await getMockData.blogPosts();
      }
      return []; // Hata durumunda boş array döndür
    }
  },

  // Öne çıkarılan yazıları getir
  async getFeaturedPosts() {
    try {
      if (API_CONFIG.USE_MOCK_DATA) {
        return await getMockData.featuredPosts();
      } else {
        const data = await getBackendData.featuredPosts();
        // Backend'den gelen verinin array olduğundan emin ol
        if (!Array.isArray(data)) {
          console.warn("Featured posts data is not an array:", data);
          return [];
        }
        return data;
      }
    } catch (error) {
      console.error("Error fetching featured posts:", error);
      if (!API_CONFIG.USE_MOCK_DATA) {
        console.warn("Falling back to mock data");
        return await getMockData.featuredPosts();
      }
      return []; // Hata durumunda boş array döndür
    }
  },

  // Kategorileri getir
  async getCategories() {
    try {
      if (API_CONFIG.USE_MOCK_DATA) {
        return await getMockData.categories();
      } else {
        const data = await getBackendData.categories();
        // Backend'den gelen verinin array olduğundan emin ol
        if (!Array.isArray(data)) {
          console.warn("Categories data is not an array:", data);
          return [];
        }
        return data;
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      if (!API_CONFIG.USE_MOCK_DATA) {
        console.warn("Falling back to mock data");
        return await getMockData.categories();
      }
      return []; // Hata durumunda boş array döndür
    }
  },

  // ID ile tek yazı getir
  async getPostById(id) {
    try {
      if (API_CONFIG.USE_MOCK_DATA) {
        return await getMockData.blogPost(id);
      } else {
        return await getBackendData.blogPost(id);
      }
    } catch (error) {
      console.error("Error fetching post by ID:", error);
      if (!API_CONFIG.USE_MOCK_DATA) {
        console.warn("Falling back to mock data");
        return await getMockData.blogPost(id);
      }
      throw error;
    }
  },

  // Slug ile tek yazı getir
  async getPostBySlug(slug) {
    try {
      if (API_CONFIG.USE_MOCK_DATA) {
        return await getMockData.blogPostBySlug(slug);
      } else {
        const response = await getBackendData.blogPostBySlug(slug);

        // DRF'den gelen yanıtın "results" dizisi içerip içermediğini kontrol et
        // Slug filtresi genellikle tek elemanlı bir dizi döndürür
        if (
          response &&
          Array.isArray(response.results) &&
          response.results.length > 0
        ) {
          return response.results[0];
        }

        // Eğer 'results' yoksa ama yanıtın kendisi bir array ise (eski yapı)
        if (Array.isArray(response) && response.length > 0) {
          return response[0];
        }

        // Eğer doğrudan nesne geliyorsa (örneğin /api/posts/slug/ yapısı)
        // Bu yapı şu an kullanılmıyor ama geleceğe dönük bir kontrol
        if (
          response &&
          typeof response === "object" &&
          !Array.isArray(response) &&
          response.slug === slug
        ) {
          return response;
        }

        console.warn(`No post found for slug: ${slug}`, response);
        return null; // Yazı bulunamazsa null döndür
      }
    } catch (error) {
      console.error("Error fetching post by slug:", error);
      if (!API_CONFIG.USE_MOCK_DATA) {
        console.warn("Falling back to mock data");
        return await getMockData.blogPostBySlug(slug);
      }
      throw error;
    }
  },

  // Kategoriye göre yazıları getir
  async getPostsByCategory(categorySlug) {
    try {
      if (API_CONFIG.USE_MOCK_DATA) {
        return await getMockData.postsByCategory(categorySlug);
      } else {
        return await getBackendData.postsByCategory(categorySlug);
      }
    } catch (error) {
      console.error("Error fetching posts by category:", error);
      if (!API_CONFIG.USE_MOCK_DATA) {
        console.warn("Falling back to mock data");
        return await getMockData.postsByCategory(categorySlug);
      }
      throw error;
    }
  },

  // Arama fonksiyonu
  async searchPosts(query) {
    try {
      if (API_CONFIG.USE_MOCK_DATA) {
        const allPosts = await getMockData.blogPosts();
        const featuredPosts = await getMockData.featuredPosts();
        const combined = [...featuredPosts, ...allPosts];

        return combined.filter(
          (post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            post.tags_list.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            )
        );
      } else {
        return await fetchFromBackend(
          `${API_CONFIG.ENDPOINTS.BLOG_POSTS}?search=${encodeURIComponent(
            query
          )}`
        );
      }
    } catch (error) {
      console.error("Error searching posts:", error);
      if (!API_CONFIG.USE_MOCK_DATA) {
        console.warn("Falling back to mock data");
        const allPosts = await getMockData.blogPosts();
        return allPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(query.toLowerCase())
        );
      }
      throw error;
    }
  },
};

// Utility fonksiyonları
export const apiUtils = {
  // Mevcut ayarı kontrol et
  isUsingMockData: () => API_CONFIG.USE_MOCK_DATA,

  // Mock data'ya geçiş yap
  enableMockData: () => {
    API_CONFIG.USE_MOCK_DATA = true;
    console.log("Switched to mock data");
  },

  // Backend data'ya geçiş yap
  enableBackendData: () => {
    API_CONFIG.USE_MOCK_DATA = false;
    console.log("Switched to backend data");
  },

  // Ayarı değiştir
  toggleDataSource: () => {
    API_CONFIG.USE_MOCK_DATA = !API_CONFIG.USE_MOCK_DATA;
    console.log(
      `Switched to ${API_CONFIG.USE_MOCK_DATA ? "mock" : "backend"} data`
    );
    return API_CONFIG.USE_MOCK_DATA;
  },

  // Tarih formatla
  formatDate: (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },

  // Okuma süresini formatla
  formatReadingTime: (minutes) => {
    return `${minutes} dakika okuma`;
  },

  // HTML içeriğini güvenli şekilde sanitize et
  sanitizeHTML: (htmlContent) => {
    if (!htmlContent) return "";
    return DOMPurify.sanitize(htmlContent, {
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "b",
        "em",
        "i",
        "u",
        "s",
        "strike",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ul",
        "ol",
        "li",
        "blockquote",
        "pre",
        "code",
        "a",
        "img",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "div",
        "span",
      ],
      ALLOWED_ATTR: [
        "href",
        "title",
        "target",
        "rel",
        "src",
        "alt",
        "width",
        "height",
        "class",
        "style",
      ],
      ALLOW_DATA_ATTR: false,
    });
  },

  // Rich text içeriğini render etmek için hazırla
  prepareRichTextContent: (htmlContent) => {
    const sanitized = apiUtils.sanitizeHTML(htmlContent);
    return { __html: sanitized };
  },

  // Metin içeriğinden HTML strip et (excerpt için)
  stripHTML: (htmlContent) => {
    if (!htmlContent) return "";
    const sanitized = DOMPurify.sanitize(htmlContent, { ALLOWED_TAGS: [] });
    return sanitized.replace(/\s+/g, " ").trim();
  },
};

export default blogAPI;
