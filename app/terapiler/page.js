export const metadata = {
  title: "Terapiler - PDR Uzmanı",
  description:
    "Bireysel terapi, çift terapisi, aile terapisi ve grup terapisi hizmetleri hakkında detaylı bilgi.",
};

export default function Therapies() {
  const therapies = [
    {
      title: "Bireysel Terapi",
      description:
        "Kişisel sorunlarınızı çözmek ve yaşam kalitenizi artırmak için birebir destek.",
      duration: "50 dakika",
      frequency: "Haftada 1-2 seans",
      price: "400 TL",
      features: [
        "Kaygı ve depresyon tedavisi",
        "Stres yönetimi",
        "Benlik saygısı geliştirme",
        "Kişisel gelişim",
        "Travma tedavisi",
        "Öfke kontrolü",
      ],
      process: [
        "İlk değerlendirme ve tanışma",
        "Hedef belirleme ve plan yapma",
        "Düzenli terapi seansları",
        "İlerleme değerlendirmesi",
        "Sonlandırma ve takip",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Çift Terapisi",
      description:
        "İlişkinizi güçlendirmek ve iletişim sorunlarını çözmek için çiftlere özel destek.",
      duration: "60 dakika",
      frequency: "Haftada 1 seans",
      price: "600 TL",
      features: [
        "İletişim becerileri geliştirme",
        "Çatışma çözüm teknikleri",
        "Güven inşası",
        "Intimacy sorunları",
        "Boşanma danışmanlığı",
        "Evlilik öncesi hazırlık",
      ],
      process: [
        "Çift olarak değerlendirme",
        "İlişki dinamiklerini anlama",
        "İletişim becerileri eğitimi",
        "Ev ödevleri ve uygulamalar",
        "İlerleme takibi",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Aile Terapisi",
      description:
        "Aile içi iletişimi güçlendirmek ve aile dinamiklerini iyileştirmek için kapsamlı destek.",
      duration: "75 dakika",
      frequency: "2 haftada 1 seans",
      price: "800 TL",
      features: [
        "Aile iletişimi geliştirme",
        "Ebeveynlik becerileri",
        "Ergen sorunları çözümü",
        "Sınır belirleme",
        "Aile kuralları oluşturma",
        "Nesiller arası sorunlar",
      ],
      process: [
        "Tüm aile ile tanışma",
        "Aile dinamiklerini değerlendirme",
        "Bireysel ve grup seansları",
        "Aile aktiviteleri planlama",
        "Ev ortamında uygulama",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Grup Terapisi",
      description:
        "Benzer deneyimler yaşayan kişilerle birlikte grup dinamiği ile iyileşme.",
      duration: "90 dakika",
      frequency: "Haftada 1 seans",
      price: "200 TL",
      features: [
        "Sosyal beceri geliştirme",
        "Paylaşım ve empati",
        "Grup desteği",
        "Sosyal kaygı azaltma",
        "İletişim becerileri",
        "Kendi deneyimini anlama",
      ],
      process: [
        "Grup uygunluk değerlendirmesi",
        "Gruba oryantasyon",
        "Düzenli grup seansları",
        "Grup kuralları belirleme",
        "Sonlandırma süreci",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terapi Hizmetlerim
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her bireyin ve ailenin benzersiz ihtiyaçlarına yönelik
            kişiselleştirilmiş terapi yaklaşımları sunuyorum.
          </p>
        </div>

        {/* Therapies Grid */}
        <div className="space-y-16">
          {therapies.map((therapy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ffb650] to-teal-300 rounded-xl flex items-center justify-center text-white mr-4">
                      {therapy.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {therapy.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>{therapy.duration}</span>
                        <span>•</span>
                        <span>{therapy.frequency}</span>
                        <span>•</span>
                        <span className="font-semibold text-[var(--primary-700)]">
                          {therapy.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    {therapy.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Kapsadığı Alanlar:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {therapy.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Process */}
                <div className="bg-gradient-to-br from-[var(--primary-50)] to-teal-50 p-8 lg:p-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Süreç Nasıl İşler?
                  </h3>
                  <div className="space-y-4">
                    {therapy.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="/iletisim"
                      className="inline-flex items-center bg-[var(--primary)] text-white px-6 py-3 rounded-full hover:bg-[var(--primary-700)] transition-colors duration-200 font-semibold"
                    >
                      Randevu Al
                      <svg
                        className="w-4 h-4 ml-2"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                İlk seansta ne olur?
              </h3>
              <p className="text-gray-600 mb-6">
                İlk seans tanışma ve değerlendirme seansıdır. Sizinle görüşme
                yaparak ihtiyaçlarınızı belirler ve en uygun terapi planını
                oluştururuz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ne kadar sürer?
              </h3>
              <p className="text-gray-600 mb-6">
                Terapi süresi kişiden kişiye değişir. Bazı sorunlar birkaç
                seansta çözülürken, bazıları daha uzun süreli çalışma
                gerektirebilir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gizlilik nasıl sağlanır?
              </h3>
              <p className="text-gray-600">
                Tüm görüşmeler %100 gizlidir. Etik kurallara uygun olarak
                bilgileriniz hiçbir şekilde üçüncü kişilerle paylaşılmaz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Online terapi mümkün mü?
              </h3>
              <p className="text-gray-600">
                Evet, güvenli video konferans platformları üzerinden online
                terapi seansları da düzenleyebiliriz.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hangi Terapi Size Uygun?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Sizin için en uygun terapi yaklaşımını birlikte belirleyelim.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Ücretsiz Ön Görüşme
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
