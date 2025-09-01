import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Görsel */}
          <div className="relative">
            <div className="rounded-2xl">
              <div className="relative aspect-square rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/uzmanlik.jpg"
                  alt="Uzman"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gray-300/50" />
                <div className="relative z-10 text-center">
                  {/* <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-12 h-12 text-white"
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
                  </div> */}
                  <h3 className="text-4xl font-semibold text-gray-900 mb-2">
                    Uzman Desteği
                  </h3>
                  <p className="text-lg text-gray-800">
                    Yılların deneyimi ile profesyonel yaklaşım
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">6+</div>
                <div className="text-gray-600 font-medium">Yıl Deneyim</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">Başarılı Serans</div>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Metin */}
          <div className="flex flex-col items-center sm:items-start justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Size Nasıl Yardımcı Olabilirim?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              PDR uzmanı olarak, bireylerin yaşam kalitesini artırmak ve
              psikolojik refah seviyelerini yükseltmek için bilimsel yaklaşımlar
              kullanıyorum.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Kanıta Dayalı Yaklaşım
                  </h3>
                  <p className="text-gray-600">
                    Bilimsel araştırmalara dayanan terapi yöntemleri kullanarak
                    etkili sonuçlar elde ediyoruz.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-teal-600"
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Empatik ve Destekleyici
                  </h3>
                  <p className="text-gray-600">
                    Her danışanın benzersiz olduğunu kabul ederek, yargısız ve
                    destekleyici bir ortam yaratıyorum.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Kişiselleştirilmiş Yaklaşım
                  </h3>
                  <p className="text-gray-600">
                    Her danışanın ihtiyaçlarına özel olarak tasarlanmış bireysel
                    terapi planları hazırlıyorum.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/hakkimda"
              className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors duration-200 font-semibold"
            >
              Daha Fazla Bilgi
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
