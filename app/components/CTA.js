import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          İlk Adımı Atmaya Hazır mısınız?
        </h2>
        <p className="text-xl text-[var(--primary-100)] mb-8 max-w-2xl mx-auto">
          Değişim yolculuğunuz bugün başlayabilir. Güvenli ve destekleyici bir
          ortamda birlikte çalışalım ve hedeflerinize ulaşmanıza yardımcı
          olalım.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/iletisim"
            className="bg-white text-[var(--primary-700)] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Ücretsiz İlk Görüşme
          </Link>
          <Link
            href="tel:+905074760309"
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[var(--primary-700)] transition-colors duration-200 font-semibold text-lg"
          >
            Hemen Ara: 0 (507) 476 03 09
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">7/24</div>
            <div className="text-[var(--primary-100)]">Acil Durum Desteği</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">%100</div>
            <div className="text-[var(--primary-100)]">Gizlilik Garantisi</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">6+</div>
            <div className="text-[var(--primary-100)]">Yıllık Deneyim</div>
          </div>
        </div>
      </div>
    </section>
  );
}
