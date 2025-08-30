export const metadata = {
  title: "Hakkımda - Merve BİLGİ KISA | Psikoterapist & PDR Uzmanı",
  description:
    "8 yılı aşkın deneyime sahip PDR uzmanı Merve BİLGİ KISA hakkında detaylı bilgi. EMDR, ACT, Oyun Terapisi ve daha fazlası.",
};

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hakkımda
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Lise eğitimimi Hollanda&apos;da tamamladıktan sonra Necmettin
            Erbakan Üniversitesi Psikolojik Danışmanlık ve Rehberlik
            Bölümü&apos;ne başladım ve 2019 yılında mezun oldum.
          </p>
        </div> */}

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
              <p className="text-gray-600 font-medium mb-3">
                Psikoterapist & Psikolojik Danışman
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>EMDR • ACT • Oyun Terapisi</p>
                <p>Kukla Terapisi</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Merhaba! Ben Merve BİLGİ KISA
              </h3>
              <p className="text-gray-600 mb-6">
                Lise eğitimimi Hollanda&apos;da tamamladıktan sonra Necmettin
                Erbakan Üniversitesi Psikolojik Danışmanlık ve Rehberlik
                Bölümü&apos;ne başladım ve 2019 yılında mezun oldum.
              </p>
              <p className="text-gray-600 mb-6">
                2017 yılında Uluslararası Doktorlar Derneği (AID) bünyesinde,
                savaş travması yaşamış danışanlarla çalışmaya başladım. Üç yıl
                boyunca gönüllü olarak, özellikle dezavantajlı anneler ve
                çocuklara yönelik travma odaklı psikoterapi hizmeti verdim ve
                koordinatörlük görevini yürüttüm.
              </p>
              <p className="text-gray-600 mb-6">
                Mezuniyetim sonrası Lale Koleji Ortaokulu&apos;nda ergenler ve
                aileleriyle çalışmalar yaptım; ardından ilkokul düzeyinde
                çocuklar ve ailelerine psikolojik destek vermeye devam ettim.
              </p>
              <p className="text-gray-600 mb-6">
                Terapiye odaklanma arzum beni klinik çalışmalara yönlendirdi. Şu
                anda online psikolojik danışmanlık ve psikoterapi hizmeti
                sunuyorum. Deneyimlerime ve sürekli öğrenmeye açık yaklaşımıma
                dayanarak, danışanlarıma online ortamda &quot;terapi odası&quot;
                kalitesinde güvenli ve verimli destek sağlamayı amaçlıyorum.
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
                  Necmettin Erbakan Üniversitesi
                </h4>
                <p className="text-gray-600">
                  Psikolojik Danışmanlık ve Rehberlik Bölümü
                </p>
                <p className="text-gray-500">2019</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  EMDR Eğitim ve Süpervizyonu
                </h4>
                <p className="text-gray-600">
                  Emre Konuk (DBE Davranış Bilimleri Enstitüsü)
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  ACT (Acceptance and Commitment Therapy)
                </h4>
                <p className="text-gray-600">Esra Oras</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Oyun Terapisi
                </h4>
                <p className="text-gray-600">Mehmet Teber</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Kukla Terapisi
                </h4>
                <p className="text-gray-600">Mehmet Teber</p>
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
                  Uluslararası Doktorlar Derneği (AID) – Danışman & Koordinatör
                </h4>
                <p className="text-gray-600">2017–2020</p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>
                    • Göç etmiş ve travma sonrası stres yaşayan ailelere acil
                    psikolojik destek
                  </li>
                  <li>
                    • Anneler için travma sonrası stres bozukluğu (TSSB) odaklı
                    EMDR terapisi
                  </li>
                  <li>
                    • Ebeveynlik becerilerini geliştirmeye yönelik psikoeğitim
                    programları
                  </li>
                  <li>
                    • Çocuklar için oyun terapisi, kukla terapisi ve yaşa uygun
                    atölye çalışmaları
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Lale Koleji Ortaokulu – Psikolojik Danışmanlık
                </h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>
                    • 8. sınıf öğrencilerine bire bir akademik ve psikolojik
                    destek
                  </li>
                  <li>• Sınav kaygısına yönelik bireysel ve grup terapileri</li>
                  <li>• Akademik motivasyon ve ders takibi</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Lale Koleji İlkokulu – Psikolojik Danışmanlık
                </h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>
                    • Anasınıfı ve ilkokul öğrencilerine gözlem ve bireysel
                    yönlendirme
                  </li>
                  <li>
                    • Ayrılık kaygısı yaşayan çocuklara özel aile terapisi
                  </li>
                  <li>
                    • Teknoloji bağımlılığı ve akran zorbalığına yönelik grup
                    terapileri
                  </li>
                  <li>• Veli seminerleri ve anne destek atölyeleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Konuştuğum Diller
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl p-6 text-center">
              <h4 className="font-bold text-lg mb-2">Türkçe</h4>
              <p className="text-white/90">Anadil</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
              <h4 className="font-bold text-lg mb-2">Flemenkçe (Hollandaca)</h4>
              <p className="text-white/90">İleri Seviye</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
              <h4 className="font-bold text-lg mb-2">İngilizce</h4>
              <p className="text-white/90">İleri Seviye</p>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Uzmanlık Alanlarım
          </h3>

          {/* Terapi Yöntemleri */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Terapi Yöntemleri
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "EMDR Terapisi",
                  desc: "Travma tedavisi",
                  bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
                },
                {
                  name: "ACT Terapisi",
                  desc: "Kabul ve kararlılık terapisi",
                  bgColor: "bg-gradient-to-r from-teal-500 to-cyan-600",
                },
                {
                  name: "Oyun Terapisi",
                  desc: "Çocuklarla çalışma",
                  bgColor: "bg-gradient-to-r from-green-500 to-green-600",
                },
                {
                  name: "Kukla Terapisi",
                  desc: "Çocuklar için terapi",
                  bgColor: "bg-gradient-to-r from-orange-500 to-orange-600",
                },
              ].map((method, index) => (
                <div
                  key={index}
                  className={`${method.bgColor} text-white rounded-xl p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1`}
                >
                  <h5 className="font-bold text-lg mb-2">{method.name}</h5>
                  <p className="text-white/90 text-sm">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Çalışma Alanları */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Çalışma Alanları
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Travma Sonrası Stres Bozukluğu",
                "Savaş Travması",
                "Göç ve Uyum Sorunları",
                "Çocuk Psikolojisi",
                "Ergen Psikolojisi",
                "Aile Terapisi",
                "Ebeveynlik Becerileri",
                "Akademik Destek",
                "Sınav Kaygısı",
                "Ayrılık Kaygısı",
                "Teknoloji Bağımlılığı",
                "Akran Zorbalığı",
              ].map((specialty, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--primary-50)]"
                >
                  <p className="font-medium text-gray-900">{specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gradient-to-r from-[var(--primary-50)] to-teal-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
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
                Her danışanın benzersiz deneyimlerini anlayarak, yargısız ve
                destekleyici bir ortam yaratırım.
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
                Danışanımla birlikte ihtiyaç ve değerlerine uygun çözümler
                geliştirir, hedeflediği yaşama ulaşmasında profesyonel destek
                veririm.
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

        {/* Personal Quote */}
        <div className="bg-gradient-to-r from-[var(--primary)] to-teal-600 rounded-2xl p-8 mb-16 text-center text-white">
          <blockquote className="text-xl italic mb-4">
            &quot;Farklı kültürlerden danışanlarla çalışmak, terapi sürecine
            daha geniş bir bakış açısı katmamı sağlıyor. Bu sayede danışanlar,
            kendi dillerinde ifade edebilme rahatlığını yaşayabiliyorlar.&quot;
          </blockquote>
          <p className="text-white/90">- Merve BİLGİ KISA</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Birlikte Çalışmaya Başlayalım
          </h3>
          <p className="text-gray-600 mb-8">
            Size nasıl yardımcı olabileceğimi konuşmak için iletişime geçin.
            Online ve yüz yüze terapi seçenekleri mevcuttur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <a
              href="/terapiler"
              className="inline-flex items-center bg-white text-[var(--primary)] border-2 border-[var(--primary)] px-8 py-4 rounded-full hover:bg-[var(--primary-50)] transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Terapi Yöntemlerim
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
