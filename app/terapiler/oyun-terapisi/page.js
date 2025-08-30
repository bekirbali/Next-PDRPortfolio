import Image from "next/image";

export const metadata = {
  title:
    "Oyun Terapisi - Çocuklar İçin Kendini İfade Etme Yöntemi - PDR Uzmanı",
  description:
    "Oyun terapisi ile çocukların güvenli bir ortamda kendilerini ifade etmelerini sağlayın ve duygusal gelişimlerini destekleyin.",
};

export default function PlayTherapy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Oyun Terapisi – Çocuklar İçin Kendini İfade Etme Yöntemi
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Çocukların güvenli bir ortamda kendilerini ve iç dünyalarını açıkça
            ifade etmelerini sağlayan bir yöntem
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/assets/oyundetay.jpg"
              alt="Oyun Terapisi - Çocuklar İçin Kendini İfade Etme Yöntemi"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kısa Açıklama
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Oyun terapisi, çocukların güvenli bir ortamda kendilerini ve iç
              dünyalarını açıkça ifade etmelerini sağlayan bir yöntemdir.
              Çocuklar oyun aracılığıyla duygularını tanımayı, anlamayı ve
              düzenlemeyi öğrenirler.
            </p>
          </div>

          {/* Kimler İçin Uygundur */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kimler İçin Uygundur?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Oyun terapisi özellikle <strong>2–10 yaş arası çocuklar</strong>{" "}
                için uygundur.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Şu durumlarda etkili bir şekilde kullanılabilir:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Duygusal veya davranışsal güçlükler
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Travma sonrası uyum sorunları
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Tırnak yeme, parmak emme, alt ıslatma
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Öfke ve öfke kontrolü güçlükleri
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Kaygı ve korkular
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Kardeş kıskançlığı
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Faydaları */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Faydaları</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Duygusal ve sosyal gelişimi destekler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Kaygı, korku ve stresi azaltır
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">Özgüveni artırır</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Travma ve zorlayıcı deneyimlerle başa çıkmayı kolaylaştırır
                </span>
              </li>
            </ul>
          </div>

          {/* Neden Tercih Edilmeli */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Neden Tercih Edilmeli?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yetişkinler sorunlarını kelimelerle ifade ederken, çocuklar
              duygularını oyunlarla ortaya koyar. Oyun terapisi, çocukların söze
              dökemediği duygularını oyun aracılığıyla ifade etmelerine imkân
              tanır. Terapist bu süreçte çocuğun iç dünyasını anlamayı ve
              oradaki çatışmaları düzenlemeyi hedefler.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Oyun Terapisi Hakkında Daha Fazla Bilgi Alın
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Çocuğunuzun duygusal gelişimini destekleyin ve oyun yoluyla
              iyileşmesini sağlayın
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
