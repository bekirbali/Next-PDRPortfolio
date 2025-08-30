import Image from "next/image";

export const metadata = {
  title: "ACT - Kabul ve Kararlılık Terapisi - PDR Uzmanı",
  description:
    "ACT (Acceptance and Commitment Therapy) ile acıyı azaltmayı ve yaşamda daha anlamlı hedeflere ulaşmayı öğrenin.",
};

export default function ACTTherapy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ACT</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Acıyı azaltmayı ve yaşamda daha anlamlı hedeflere ulaşmayı amaçlayan
            etkileşimli bir terapi yöntemi
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/assets/actdetay.jpg"
              alt="ACT Terapisi - Kabul ve Kararlılık Terapisi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Kısa Açıklama */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ACT (Acceptance and Commitment Therapy – Kabul ve Kararlılık
              Terapisi), acıyı azaltmayı ve yaşamda daha anlamlı hedeflere
              ulaşmayı amaçlayan etkileşimli bir terapi yöntemidir. Seanslar,
              kabul ve farkındalık süreçlerini kullanarak kendinizle ilişkinizi
              güçlendirmeyi ve değerleriniz doğrultusunda davranış
              değişiklikleri yapmayı hedefler.
            </p>
          </div>

          {/* Kimler İçin Uygundur */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kimler İçin Uygundur?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Stres, kaygı ve olumsuz düşüncelerle baş etmek isteyenler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Kendini daha iyi tanımak ve farkındalığını artırmak isteyenler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Anlamlı ve değerlere dayalı bir yaşam sürmek isteyenler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Davranış değişikliği yapmak isteyenler
                </span>
              </li>
            </ul>
          </div>

          {/* Faydaları */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Faydaları</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Yaşamda esnekliği artırır
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Düşünceleri ve düşüncelerin davranışlara etkisini fark etmeyi
                  sağlar
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Farkındalık kazanmayı ve bilinçli seçimler yapmayı destekler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Kendini kabul etme becerisini geliştirir
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Değerler doğrultusunda davranışları izleme ve değiştirme
                  yeteneğini güçlendirir
                </span>
              </li>
            </ul>
          </div>

          {/* Nasıl İşler */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Nasıl İşler?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">→</span>
                <span className="text-lg text-gray-700">
                  Davranışsal egzersizler yoluyla kendinizi keşfedersiniz
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">→</span>
                <span className="text-lg text-gray-700">
                  Değerlerinizi belirleyip onlara uygun eylemler planlarsınız
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">→</span>
                <span className="text-lg text-gray-700">
                  Farkındalık ve kabul stratejileri ile zor duygularla yeniden
                  anlamlı bir bağ kurmanızı sağlar
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1">→</span>
                <span className="text-lg text-gray-700">
                  Seanslar, hedeflerinize odaklanarak kişisel taahhütlerde
                  bulunmanızı sağlar
                </span>
              </li>
            </ul>
          </div>

          {/* Neden Tercih Edilmeli */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Neden Tercih Edilmeli?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ACT, geleneksel terapi yöntemlerinden farklı olarak zihinsel ve
              davranışsal esnekliği arttırarak değerlerinize yakınlaştırır ve
              yaşam kalitenizi yükseltir.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              ACT Terapisi Hakkında Daha Fazla Bilgi Alın
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Kabul ve kararlılık terapisi ile yaşam kalitenizi artırmaya
              başlayın
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
