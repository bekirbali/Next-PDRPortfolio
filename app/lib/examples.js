// API Kullanım Örnekleri

import { blogAPI, apiUtils } from "./api";

// Örnek 1: Tüm blog yazılarını getir
export const exampleGetAllPosts = async () => {
  try {
    console.log("Mock data kullanılıyor mu?", apiUtils.isUsingMockData());

    const posts = await blogAPI.getAllPosts();
    console.log("Tüm yazılar:", posts);
    return posts;
  } catch (error) {
    console.error("Yazılar alınırken hata:", error);
  }
};

// Örnek 2: Öne çıkarılan yazıları getir
export const exampleGetFeaturedPosts = async () => {
  try {
    const featuredPosts = await blogAPI.getFeaturedPosts();
    console.log("Öne çıkarılan yazılar:", featuredPosts);
    return featuredPosts;
  } catch (error) {
    console.error("Öne çıkarılan yazılar alınırken hata:", error);
  }
};

// Örnek 3: Kategorileri getir
export const exampleGetCategories = async () => {
  try {
    const categories = await blogAPI.getCategories();
    console.log("Kategoriler:", categories);
    return categories;
  } catch (error) {
    console.error("Kategoriler alınırken hata:", error);
  }
};

// Örnek 4: Belirli bir yazıyı getir (ID ile)
export const exampleGetPostById = async (id = 1) => {
  try {
    const post = await blogAPI.getPostById(id);
    console.log(`${id} ID'li yazı:`, post);
    return post;
  } catch (error) {
    console.error(`${id} ID'li yazı alınırken hata:`, error);
  }
};

// Örnek 5: Belirli bir yazıyı getir (Slug ile)
export const exampleGetPostBySlug = async (
  slug = "kaygi-ile-basa-cikmanin-etkili-yollari"
) => {
  try {
    const post = await blogAPI.getPostBySlug(slug);
    console.log(`${slug} slug'lı yazı:`, post);
    return post;
  } catch (error) {
    console.error(`${slug} slug'lı yazı alınırken hata:`, error);
  }
};

// Örnek 6: Kategoriye göre yazıları getir
export const exampleGetPostsByCategory = async (
  categorySlug = "stres-yonetimi"
) => {
  try {
    const posts = await blogAPI.getPostsByCategory(categorySlug);
    console.log(`${categorySlug} kategorisindeki yazılar:`, posts);
    return posts;
  } catch (error) {
    console.error(
      `${categorySlug} kategorisindeki yazılar alınırken hata:`,
      error
    );
  }
};

// Örnek 7: Arama yapma
export const exampleSearchPosts = async (query = "stres") => {
  try {
    const searchResults = await blogAPI.searchPosts(query);
    console.log(`"${query}" arama sonuçları:`, searchResults);
    return searchResults;
  } catch (error) {
    console.error(`"${query}" arama yapılırken hata:`, error);
  }
};

// Örnek 8: Veri kaynağını değiştirme
export const exampleToggleDataSource = () => {
  console.log(
    "Şu anki veri kaynağı:",
    apiUtils.isUsingMockData() ? "Mock Data" : "Backend API"
  );

  // Veri kaynağını değiştir
  const newSource = apiUtils.toggleDataSource();
  console.log("Yeni veri kaynağı:", newSource ? "Mock Data" : "Backend API");
};

// Örnek 9: Mock data'ya geç
export const exampleEnableMockData = () => {
  apiUtils.enableMockData();
  console.log("Mock data etkinleştirildi");
};

// Örnek 10: Backend API'ye geç
export const exampleEnableBackendData = () => {
  apiUtils.enableBackendData();
  console.log("Backend API etkinleştirildi");
};

// Tüm örnekleri çalıştır
export const runAllExamples = async () => {
  console.log("=== API Kullanım Örnekleri ===");

  await exampleGetAllPosts();
  await exampleGetFeaturedPosts();
  await exampleGetCategories();
  await exampleGetPostById(1);
  await exampleGetPostBySlug();
  await exampleGetPostsByCategory();
  await exampleSearchPosts();

  exampleToggleDataSource();

  console.log("=== Tüm örnekler tamamlandı ===");
};

// Bu fonksiyon browser console'da çalıştırılabilir
if (typeof window !== "undefined") {
  window.blogAPIExamples = {
    getAllPosts: exampleGetAllPosts,
    getFeaturedPosts: exampleGetFeaturedPosts,
    getCategories: exampleGetCategories,
    getPostById: exampleGetPostById,
    getPostBySlug: exampleGetPostBySlug,
    getPostsByCategory: exampleGetPostsByCategory,
    searchPosts: exampleSearchPosts,
    toggleDataSource: exampleToggleDataSource,
    enableMockData: exampleEnableMockData,
    enableBackendData: exampleEnableBackendData,
    runAll: runAllExamples,
  };

  console.log(
    "Blog API örnekleri yüklendi! window.blogAPIExamples üzerinden kullanabilirsiniz."
  );
  console.log("Örnek: window.blogAPIExamples.getAllPosts()");
}
