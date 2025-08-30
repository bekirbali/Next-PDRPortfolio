import Image from "next/image";

export const metadata = {
  title:
    "Kukla Terapisi - Çocuklar İçin Oyun Temelli İfade Yöntemi - PDR Uzmanı",
  description:
    "Kukla terapisi ile çocukların duygularını güvenli bir şekilde ifade etmelerini sağlayın ve oyun temelli yaklaşımla iyileşmelerini destekleyin.",
};

export default function PuppetTherapy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kukla Terapisi
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Çocukların duygularını ve yaşadıkları zorlukları güvenli bir şekilde
            ifade etmelerini sağlayan oyun temelli bir yöntem
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/assets/kuklaterapidetay.jpg"
              alt="Kukla Terapisi - Çocuklar İçin Oyun Temelli İfade Yöntemi"
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
              Kukla terapisi, çocukların duygularını ve yaşadıkları zorlukları
              güvenli bir şekilde ifade etmelerini sağlayan oyun temelli bir
              yöntemdir. Parmak ya da el kuklalarıyla kurulan oyunlar, çocuğun
              iç dünyasını yansıtır ve hikayenin gücüyle birlikte iyileşme
              sağlanır.
            </p>
          </div>

          {/* Kimler İçin Uygundur */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kimler İçin Uygundur?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Genellikle <strong>6 yaş ve üzeri çocuklarda</strong> uygulanır,
                ancak ergenler ve yetişkinlerde de etkilidir. Özellikle şu
                durumlarda tercih edilir:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Kaygı, korkular ve fobiler
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Travmatik deneyimler
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Aile içi iletişim sorunları
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Öfke, saldırganlık, davranışsal güçlükler
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Kardeş kıskançlığı ve rekabet
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Zorbalık, akran problemleri, dışlanma
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">
                    Hakaret ya da alay sonrası duygusal zorluklar
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
                  Duyguların oyun yoluyla güvenle ifade edilmesini sağlar
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Kaygı ve travmaların işlenmesine yardımcı olur
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Aile dinamiklerini anlamayı kolaylaştırır
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Problem çözme becerilerini geliştirir
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Özgüveni ve kendini ifade etme kapasitesini artırır
                </span>
              </li>
            </ul>
          </div>

          {/* Neden Tercih Edilmeli */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Neden Tercih Edilmeli?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kuklalar, çocuk için eğlenceli ve güvenli bir ifade alanı sunar.
                Çocuk seçtiği kuklayla özdeşleşerek duygularını ve çatışmalarını
                oyuna aktarır; böylece acı verici deneyimleri doğrudan anlatmak
                zorunda kalmadan ifade edebilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Terapist ise kuklalar aracılığıyla çocuğun duygularını
                anlamasına, adlandırmasına ve sağlıklı başa çıkma yolları
                geliştirmesine destek olur. Bu sayede kukla terapisi hem
                değerlendirme hem de müdahale aracı olarak güçlü bir yöntem
                haline gelir.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Kukla Terapisi Hakkında Daha Fazla Bilgi Alın
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Çocuğunuzun oyun temelli yaklaşımla duygularını ifade etmesini
              sağlayın
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
