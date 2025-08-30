import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--primary-50)] to-teal-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Metin */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Yaşamınızda
              <span className="text-[var(--primary-700)] block">
                Pozitif Değişim
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Profesyonel psikolojik destek ile kendinizi keşfedin,
              ilişkilerinizi güçlendirin ve yaşam kalitenizi artırın. Güvenli ve
              destekleyici bir ortamda birlikte ilerleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/iletisim"
                className="bg-[var(--primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--primary-700)] transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Randevu Al
              </Link>
              <Link
                href="/hakkimda"
                className="border-2 border-[var(--primary)] text-[var(--primary-700)] px-8 py-4 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors duration-200 font-semibold text-lg"
              >
                Hakkımda
              </Link>
            </div>
          </div>

          {/* Sağ taraf - Görsel */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 lg:p-6">
              <div className="aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="/assets/heroimg1.jpg"
                  alt="Danışmanlık görüşmesi görseli"
                  width={800}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/**
             * Aşağıdaki eski blok istenirse tekrar kullanılmak üzere yorum satırına alındı.
             * Başlık: "Güvenli Alan"
             */}
            {/*
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-[var(--primary-100)] to-teal-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Güvenli Alan
                  </h3>
                  <p className="text-gray-600">
                    Profesyonel destek için güvenli ve rahat bir ortam
                  </p>
                </div>
              </div>
            </div>
            */}

            {/* Decorative elements */}
            {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--primary-200)] rounded-full opacity-50"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
