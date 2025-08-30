// API Konfigürasyonu
export const API_CONFIG = {
  // Mock data kullanılsın mı yoksa backend'den veri çekilsin mi?
  USE_MOCK_DATA: false, // true: mock data kullan, false: backend'den veri çek

  // Backend API URL'leri
  BASE_URL: "http://localhost:8000/api",
  ENDPOINTS: {
    BLOG_POSTS: "/blog/posts/",
    CATEGORIES: "/blog/categories/",
    FEATURED_POSTS: "/blog/featured/",
    EDUCATIONS: "/education/api/educations/",
  },
};

// Geliştirme ortamı ayarları
export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";

// API timeout süreleri
export const API_TIMEOUT = 10000; // 10 saniye
