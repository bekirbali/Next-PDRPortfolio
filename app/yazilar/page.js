export const metadata = {
  title: "Yazılar - PDR Uzmanı",
  description:
    "Psikoloji, mental sağlık ve kişisel gelişim konularında faydalı makaleler ve blog yazıları.",
};

export default function Blog() {
  const featuredPost = {
    title: "Kaygı ile Başa Çıkmanın Etkili Yolları",
    excerpt:
      "Günlük yaşamda karşılaştığımız kaygı durumları ile başa çıkmak için kullanabileceğiniz pratik yöntemler ve teknikler.",
    date: "15 Mart 2024",
    readTime: "8 dakika",
    category: "Kaygı Yönetimi",
    image: "/placeholder-blog.jpg",
  };

  const posts = [
    {
      title: "Stres Yönetimi: Günlük Hayatta Uygulayabileceğiniz 10 Teknik",
      excerpt:
        "Modern yaşamın getirdiği stresle başa çıkmak için basit ama etkili yöntemler.",
      date: "12 Mart 2024",
      readTime: "6 dakika",
      category: "Stres Yönetimi",
      tags: ["stres", "rahatlama", "mindfulness"],
    },
    {
      title: "İlişkilerde İletişim: Empati Kurmanın Önemi",
      excerpt:
        "Sağlıklı ilişkiler kurmak ve sürdürmek için etkili iletişim becerileri.",
      date: "8 Mart 2024",
      readTime: "7 dakika",
      category: "İlişkiler",
      tags: ["iletişim", "empati", "ilişkiler"],
    },
    {
      title: "Özgüven Geliştirme: Kendinize İnanmanın Yolları",
      excerpt:
        "Düşük özgüvenin üstesinden gelmek ve kendine güvenen bir birey olmak için adımlar.",
      date: "5 Mart 2024",
      readTime: "5 dakika",
      category: "Kişisel Gelişim",
      tags: ["özgüven", "benlik saygısı", "kişisel gelişim"],
    },
    {
      title: "Depresyon Belirtileri ve Profesyonel Yardım Almanın Önemi",
      excerpt:
        "Depresyon belirtilerini tanımak ve ne zaman profesyonel destek alınması gerektiği.",
      date: "1 Mart 2024",
      readTime: "9 dakika",
      category: "Mental Sağlık",
      tags: ["depresyon", "mental sağlık", "terapi"],
    },
    {
      title: "Mindfulness ve Farkındalık: Anı Yaşamanın Gücü",
      excerpt:
        "Mindfulness pratiği ile zihinsel sağlığınızı koruyun ve yaşam kalitenizi artırın.",
      date: "28 Şubat 2024",
      readTime: "6 dakika",
      category: "Mindfulness",
      tags: ["mindfulness", "meditasyon", "farkındalık"],
    },
    {
      title: "Ergenlik Dönemi: Ailelere Öneriler",
      excerpt:
        "Ergenlik dönemindeki çocuklarla iletişim kurma ve onları anlama rehberi.",
      date: "25 Şubat 2024",
      readTime: "8 dakika",
      category: "Aile",
      tags: ["ergenlik", "aile", "ebeveynlik"],
    },
  ];

  const categories = [
    "Tümü",
    "Kaygı Yönetimi",
    "Stres Yönetimi",
    "İlişkiler",
    "Kişisel Gelişim",
    "Mental Sağlık",
    "Mindfulness",
    "Aile",
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Yazılar ve Makaleler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mental sağlık, kişisel gelişim ve yaşam kalitesi konularında faydalı
            bilgiler ve pratik öneriler.
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    index === 0
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
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[var(--primary)] to-teal-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <span className="inline-block bg-white bg-opacity-20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Öne Çıkan Makale
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-[var(--primary-100)] mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-[var(--primary-100)] text-sm mb-6">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime} okuma</span>
                  <span>•</span>
                  <span>{featuredPost.category}</span>
                </div>
                <button className="bg-white text-[var(--primary-700)] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Makaleyi Oku
                </button>
              </div>
              <div className="bg-gradient-to-br from-[#ffcf88] to-teal-400 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Faydalı İçerik</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
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
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime} okuma</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="text-[var(--primary-700)] font-medium hover:text-[var(--primary)] transition-colors duration-200 flex items-center">
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
                </button>
              </div>
            </article>
          ))}
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

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
            Daha Fazla Makale Yükle
          </button>
        </div>
      </div>
    </div>
  );
}
