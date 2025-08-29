# Blog API Sistem Dokümantasyonu

Bu dokümantasyon, frontend uygulamanızda blog API'sini nasıl kullanacağınızı açıklar.

## 📁 Dosya Yapısı

```
portfolio/app/lib/
├── config.js      # API konfigürasyonu ve ayarları
├── mockData.js    # Mock veriler
├── api.js         # Ana API fonksiyonları
├── examples.js    # Kullanım örnekleri
└── README.md      # Bu döküman
```

## ⚙️ Konfigürasyon

### config.js

```javascript
export const API_CONFIG = {
  USE_MOCK_DATA: true, // true: mock data, false: backend API
  BASE_URL: "http://localhost:8000/api",
  ENDPOINTS: {
    BLOG_POSTS: "/blog/posts/",
    CATEGORIES: "/blog/categories/",
    FEATURED_POSTS: "/blog/posts/?is_featured=true",
  },
};
```

## 🔄 Mock Data ↔ Backend API Geçişi

### Otomatik Geçiş

```javascript
import { apiUtils } from "./lib/api";

// Mock data'ya geç
apiUtils.enableMockData();

// Backend API'ye geç
apiUtils.enableBackendData();

// İki kaynak arasında toggle yap
apiUtils.toggleDataSource();

// Mevcut durumu kontrol et
const usingMock = apiUtils.isUsingMockData();
```

### Manuel Konfigürasyon

`config.js` dosyasında:

```javascript
USE_MOCK_DATA: true; // Mock data kullan
USE_MOCK_DATA: false; // Backend API kullan
```

## 📊 API Fonksiyonları

### 1. Tüm Blog Yazılarını Getir

```javascript
import { blogAPI } from "./lib/api";

const posts = await blogAPI.getAllPosts();
console.log(posts);
```

### 2. Öne Çıkarılan Yazıları Getir

```javascript
const featuredPosts = await blogAPI.getFeaturedPosts();
console.log(featuredPosts);
```

### 3. Kategorileri Getir

```javascript
const categories = await blogAPI.getCategories();
console.log(categories);
```

### 4. ID ile Yazı Getir

```javascript
const post = await blogAPI.getPostById(1);
console.log(post);
```

### 5. Slug ile Yazı Getir

```javascript
const post = await blogAPI.getPostBySlug(
  "kaygi-ile-basa-cikmanin-etkili-yollari"
);
console.log(post);
```

### 6. Kategoriye Göre Yazılar

```javascript
const posts = await blogAPI.getPostsByCategory("stres-yonetimi");
console.log(posts);
```

### 7. Arama

```javascript
const results = await blogAPI.searchPosts("stres");
console.log(results);
```

## 🛠️ Utility Fonksiyonları

```javascript
import { apiUtils } from "./lib/api";

// Tarih formatla
const formattedDate = apiUtils.formatDate("2024-03-15T10:00:00Z");
// Çıktı: "15 Mart 2024"

// Okuma süresini formatla
const readingTime = apiUtils.formatReadingTime(8);
// Çıktı: "8 dakika okuma"
```

## 🎯 Kullanım Örnekleri

### React Component'te Kullanım

```javascript
"use client";

import { useState, useEffect } from "react";
import { blogAPI, apiUtils } from "./lib/api";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await blogAPI.getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <time>{apiUtils.formatDate(post.created_at)}</time>
        </article>
      ))}
    </div>
  );
}
```

## 🧪 Test Etme

### Browser Console'da Test

Uygulamayı başlattıktan sonra browser console'da şu komutları kullanabilirsiniz:

```javascript
// Tüm örnekleri çalıştır
window.blogAPIExamples.runAll();

// Tek tek test et
window.blogAPIExamples.getAllPosts();
window.blogAPIExamples.getFeaturedPosts();
window.blogAPIExamples.getCategories();

// Veri kaynağını değiştir
window.blogAPIExamples.toggleDataSource();
```

## 🔧 Error Handling

API fonksiyonları otomatik fallback mekanizması ile gelir:

1. **Mock Data Modu**: Hata durumunda exception fırlatır
2. **Backend API Modu**: Backend'den veri alınamazsa otomatik olarak mock data'ya geçer

```javascript
try {
  const posts = await blogAPI.getAllPosts();
  // Başarılı
} catch (error) {
  console.error("API Error:", error);
  // Hata yönetimi
}
```

## 📝 Veri Formatları

### Blog Post Objesi

```javascript
{
  id: 1,
  title: "Başlık",
  slug: "baslik-slug",
  excerpt: "Özet...",
  content: "İçerik...",
  author: {
    id: 1,
    username: "admin",
    first_name: "Merve",
    last_name: "Kisa"
  },
  category: {
    id: 1,
    name: "Kategori Adı",
    slug: "kategori-slug",
    description: "Açıklama"
  },
  featured_image: "/path/to/image.jpg",
  status: "published",
  is_featured: true,
  tags_list: ["tag1", "tag2"],
  reading_time: 8,
  created_at: "2024-03-15T10:00:00Z",
  updated_at: "2024-03-15T10:00:00Z",
  published_at: "2024-03-15T10:00:00Z"
}
```

### Kategori Objesi

```javascript
{
  id: 1,
  name: "Kategori Adı",
  slug: "kategori-slug",
  description: "Açıklama",
  created_at: "2024-01-01T10:00:00Z"
}
```

## 🚀 Production'a Geçiş

Production ortamında backend API kullanmak için:

1. `config.js` dosyasında `USE_MOCK_DATA: false` yapın
2. `BASE_URL`'i production API URL'i ile değiştirin
3. CORS ayarlarının doğru yapıldığından emin olun

## 📞 Destek

API ile ilgili sorularınız için:

- Console'da hata mesajlarını kontrol edin
- Network tab'inde API çağrılarını izleyin
- Mock data ile test ederek problemi isolate edin
