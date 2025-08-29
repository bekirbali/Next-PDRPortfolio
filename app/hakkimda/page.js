export const metadata = {
  title: "Hakkımda - PDR Uzmanı",
  description:
    "PDR uzmanı olarak eğitim geçmişim, deneyimlerim ve çalışma felsefem hakkında bilgi edinin.",
};

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hakkımda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Psikolojik Danışmanlık ve Rehberlik alanında uzman olarak,
            bireylerin yaşam kalitesini artırmak için çalışıyorum.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[var(--primary-100)] to-teal-100 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-[var(--primary)] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
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
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Merve BİLGİ KISA
              </h2>
              <p className="text-gray-600 font-medium">
                Psikoterapist & Psikolojik Danışman
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Merhaba!
              </h3>
              <p className="text-gray-600 mb-6">
                8 yılı aşkın süredir Psikolojik Danışmanlık ve Rehberlik
                alanında çalışıyorum. Her bireyin benzersiz olduğuna inanıyor ve
                danışanlarımla birlikte onların iç güçlerini keşfetmelerine
                yardımcı oluyorum.
              </p>
              <p className="text-gray-600 mb-6">
                Çalışma yaklaşımımda empatik, yargısız ve destekleyici bir ortam
                yaratmayı hedefliyorum. Danışanlarımın kendilerini güvende
                hissettikleri bir alan oluşturarak, birlikte çözüm odaklı
                çalışmalar yürütüyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Eğitim
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--primary)] pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Yüksek Lisans
                </h4>
                <p className="text-gray-600">
                  Psikolojik Danışmanlık ve Rehberlik
                </p>
                <p className="text-gray-500">Ankara Üniversitesi - 2018</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Lisans</h4>
                <p className="text-gray-600">
                  Psikolojik Danışmanlık ve Rehberlik
                </p>
                <p className="text-gray-500">Hacettepe Üniversitesi - 2016</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Deneyim
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Özel Pratik
                </h4>
                <p className="text-gray-600">PDR Uzmanı</p>
                <p className="text-gray-500">2020 - Günümüz</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Aile Danışmanlık Merkezi
                </h4>
                <p className="text-gray-600">Klinik Psikolog</p>
                <p className="text-gray-500">2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Uzmanlık Alanlarım
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Kaygı Bozuklukları",
              "Depresyon",
              "İlişki Sorunları",
              "Stres Yönetimi",
              "Öfke Kontrolü",
              "Benlik Saygısı",
              "Travma Tedavisi",
              "Aile Terapisi",
            ].map((specialty, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <p className="font-medium text-gray-900">{specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-[var(--primary-50)] to-teal-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Çalışma Felsefem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Empatik Yaklaşım
              </h4>
              <p className="text-gray-600">
                Her danışanın benzersiz deneyimlerini anlayarak, empati kurmaya
                odaklanırım.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Çözüm Odaklı
              </h4>
              <p className="text-gray-600">
                Danışanımla ihtiyaç ve değerlerine uygun çözümler geliştirir,
                hedeflediği yaşama ulaşmasında profesyonel destek veririm.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Bilimsel Temelli
              </h4>
              <p className="text-gray-600">
                Kanıta dayalı terapi yöntemlerini kullanarak etkili sonuçlar
                elde ederim.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Birlikte Çalışmaya Başlayalım
          </h3>
          <p className="text-gray-600 mb-8">
            Size nasıl yardımcı olabileceğimi konuşmak için iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center bg-[var(--primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--primary-700)] transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            İletişime Geç
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
