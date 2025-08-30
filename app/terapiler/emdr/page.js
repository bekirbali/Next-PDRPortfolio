import Image from "next/image";

export const metadata = {
  title:
    "EMDR - Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme - PDR Uzmanı",
  description:
    "EMDR ile travma ve stres kaynaklı psikolojik sıkıntıları güvenli bir şekilde çözün ve iyileşin.",
};

export default function EMDRTherapy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            EMDR – Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Travma ve stres kaynaklı psikolojik sıkıntıların çözümünde etkili
            bir terapi yöntemi
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/assets/emdrdetay.jpg"
              alt="EMDR Terapisi - Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme"
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
              EMDR, travma ve stres kaynaklı psikolojik sıkıntıların çözümünde
              etkili bir terapi yöntemidir. Beynin doğal öğrenme mekanizmasını
              kullanarak işlenmemiş anıları güvenli bir şekilde bütünleştirir ve
              her yaşta psikolojik sorunların iyileşmesine katkı sağlar.
            </p>
          </div>

          {/* Kimler İçin Uygundur */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Kimler İçin Uygundur?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Travma yaşamış çocuklar, ergenler ve yetişkinler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Kaygı, korku, panik ve fobiler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Depresyon, öfke ve duygusal regülasyon güçlükleri
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  TSSB ve stres kaynaklı semptomlar
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Günlük yaşamda tetikleyici olabilecek olumsuz deneyimler
                  (aile, iş, okul)
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
                  Travmatik ve rahatsız edici anıların yeniden işlenmesini
                  sağlar
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Olumsuz duygu, düşünce ve bedensel tepkileri azaltır
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Olumlu inançlar ve duygular kazandırır
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Kişisel gelişimi ve ilişkileri destekler
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-lg text-gray-700">
                  Semptomları hafifletir, güvenli bir bakış açısı sağlar
                </span>
              </li>
            </ul>
          </div>

          {/* Nasıl İşler */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Nasıl İşler?
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                EMDR, Adaptif Bilgi İşleme Modeli&#39; ne dayanır. Normal
                koşullarda beyin deneyimleri işler ve öğrenmeye dönüştürür.
                Travmatik olaylar bu süreci bozabilir; bilgiler izole kalır ve
                şimdiki tetikleyicilerle yeniden yaşanır gibi hissedilir
                dolayısıyla size zor gelen anıyı tekrar tekrar yaşarsınız.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Terapide göz hareketleri veya diğer çift yönlü uyarımlar
                (dokunma, işitsel) kullanılarak bu kilitli anılar güvenli bir
                şekilde işlenir ve diğer anılarla bütünleştirilir. Böylece çok
                canlıymış gibi yaşadığınız zorlayıcı anınıza karşı
                duyarsızlaşırsınız ve sizi eskisi gibi rahatsız etmemeye
                başlamıştır.
              </p>
            </div>
          </div>

          {/* Neden Tercih Edilmeli */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Neden Tercih Edilmeli?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              EMDR, sadece semptomları azaltmakla kalmaz; danışanın kendine ve
              dünyaya bakışını olumlu yönde değiştirir. Travmatik deneyimlerin
              güvenli bir şekilde işlenmesini sağlar, geçmişin yükünü hafifletir
              ve geleceğe uyumlu, sağlıklı bir bakış açısı kazandırır. Hızlı ve
              etkili sonuçları ile güvenli ve kanıtlanmış bir terapi yöntemidir.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-700 rounded-2xl shadow-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              EMDR Terapisi Hakkında Daha Fazla Bilgi Alın
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Travmatik deneyimlerinizi güvenli bir şekilde işleyin ve iyileşin
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
