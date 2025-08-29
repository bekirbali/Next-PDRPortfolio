"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogAPI, apiUtils } from "../lib/api";
import { HiClipboardList } from "react-icons/hi";

export default function Blog() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(["Tümü"]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Paralel olarak verileri yükle
        const [featuredData, postsData, categoriesData] = await Promise.all([
          blogAPI.getFeaturedPosts(),
          blogAPI.getAllPosts(),
          blogAPI.getCategories(),
        ]);

        // Debug: Backend'den gelen verileri konsola yazdır
        console.log(
          "Featured Data:",
          featuredData,
          "Type:",
          typeof featuredData,
          "Array:",
          Array.isArray(featuredData)
        );
        console.log(
          "Posts Data:",
          postsData,
          "Type:",
          typeof postsData,
          "Array:",
          Array.isArray(postsData)
        );
        console.log(
          "Categories Data:",
          categoriesData,
          "Type:",
          typeof categoriesData,
          "Array:",
          Array.isArray(categoriesData)
        );

        // Birden fazla öne çıkarılan makale varsa en yeni tarihli olanı seç
        let selectedFeaturedPost = null;
        if (Array.isArray(featuredData) && featuredData.length > 0) {
          if (featuredData.length === 1) {
            selectedFeaturedPost = featuredData[0];
          } else {
            // Birden fazla öne çıkarılan makale varsa published_at veya created_at'e göre en yenisini seç
            selectedFeaturedPost = featuredData.reduce((latest, current) => {
              const latestDate = latest.published_at || latest.created_at;
              const currentDate = current.published_at || current.created_at;
              return new Date(currentDate) > new Date(latestDate)
                ? current
                : latest;
            });
            console.warn(
              `Birden fazla öne çıkarılan makale bulundu (${featuredData.length} adet). En yeni tarihli olan seçildi:`,
              selectedFeaturedPost.title
            );
          }
        }
        setFeaturedPost(selectedFeaturedPost);
        setPosts(Array.isArray(postsData) ? postsData : []);
        setFilteredPosts(Array.isArray(postsData) ? postsData : []);

        // Kategorileri "Tümü" ile birlikte ayarla
        const categoryNames = [
          "Tümü",
          ...(Array.isArray(categoriesData)
            ? categoriesData.map((cat) => cat.name)
            : []),
        ];
        setCategories(categoryNames);
      } catch (error) {
        console.error("Error loading blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Kategori değiştiğinde filtreleme yap
  useEffect(() => {
    let filtered = posts;

    // Kategori filtresi
    if (selectedCategory !== "Tümü") {
      filtered = filtered.filter(
        (post) => post.category?.name === selectedCategory
      );
    }

    // Arama filtresi
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.tags_list || []).some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery, posts]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)] mx-auto"></div>
            <p className="mt-4 text-gray-600">Yazılar yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Yazılar ve Makaleler
              </h1>
            </div>
            {/* Data Source Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => {
                  apiUtils.enableMockData();
                  window.location.reload();
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  apiUtils.isUsingMockData()
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Mock
              </button>
              <button
                onClick={() => {
                  apiUtils.enableBackendData();
                  window.location.reload();
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  !apiUtils.isUsingMockData()
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                API
              </button>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mental sağlık, kişisel gelişim ve yaşam kalitesi konularında faydalı
            bilgiler ve pratik öneriler.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Şu anda{" "}
            {apiUtils.isUsingMockData() ? "mock veriler" : "backend API"}{" "}
            kullanılıyor
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Makale ara..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    category === selectedCategory
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[var(--primary)] to-teal-600 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 text-white">
                  <span className="inline-block bg-white bg-opacity-20 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Öne Çıkan Yazı
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <div
                    className="text-[var(--primary-100)] mb-6 text-lg rich-text-content line-clamp-4"
                    dangerouslySetInnerHTML={apiUtils.prepareRichTextContent(
                      featuredPost.excerpt
                    )}
                  />
                  <div className="flex items-center space-x-4 text-[var(--primary-100)] text-sm mb-6">
                    <span>
                      {apiUtils.formatDate(
                        featuredPost.published_at || featuredPost.created_at
                      )}
                    </span>
                    <span>•</span>
                    <span>
                      {apiUtils.formatReadingTime(featuredPost.reading_time)}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.category?.name || "Kategori"}</span>
                  </div>
                  <Link
                    href={`/yazilar/${featuredPost.slug}`}
                    className="bg-white text-[var(--primary-700)] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    Devamını Oku
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-[#ffcf88] to-teal-400 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <HiClipboardList className="w-12 h-12 text-teal-600 drop-shadow-md" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      Yazıda Neler Var?
                    </h3>
                    {featuredPost.key_points ? (
                      <div
                        className="text-left text-base max-w-xs rich-text-content line-clamp-8"
                        dangerouslySetInnerHTML={apiUtils.prepareRichTextContent(
                          featuredPost.key_points
                        )}
                      />
                    ) : (
                      <p className="text-sm opacity-90">
                        Faydalı bilgiler ve pratik öneriler
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 text-lg">
                {posts.length === 0
                  ? "Henüz hiç makale bulunmuyor."
                  : "Arama kriterlerinize uygun makale bulunamadı."}
              </div>
              <p className="text-gray-400 mt-2">
                {posts.length === 0
                  ? "Backend'den veri yüklenmeye çalışılıyor..."
                  : "Farklı anahtar kelimeler veya kategoriler deneyebilirsiniz."}
              </p>
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {post.featured_image ? (
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {post.category?.name || "Kategori Yok"}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[var(--primary-100)] to-teal-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <span className="text-[var(--primary-700)] font-medium text-sm">
                        {post.category?.name || "Kategori Yok"}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <Link href={`/yazilar/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <div
                    className="text-gray-600 mb-4 rich-text-content line-clamp-4"
                    dangerouslySetInnerHTML={apiUtils.prepareRichTextContent(
                      post.excerpt
                    )}
                  />
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>
                      {apiUtils.formatDate(
                        post.published_at || post.created_at
                      )}
                    </span>
                    <span>{apiUtils.formatReadingTime(post.reading_time)}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(post.tags_list || []).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/yazilar/${post.slug}`}
                    className="text-[var(--primary-700)] font-medium hover:text-[var(--primary)] transition-colors duration-200 flex items-center"
                  >
                    Devamını Oku
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Yeni Yazılardan Haberdar Olun
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Mental sağlık ve kişisel gelişim konularındaki en güncel yazıları
            e-posta kutunuzda almak için bültenimize abone olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Abone Ol
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Haftalık bülten • Spam göndermiyoruz • İstediğiniz zaman
            çıkabilirsiniz
          </p>
        </div>
      </div>
    </div>
  );
}
