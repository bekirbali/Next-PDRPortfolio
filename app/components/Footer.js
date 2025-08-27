import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-800 mb-4 block"
            >
              PDR Uzmanı
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Profesyonel psikolojik destek ve terapi hizmetleri. Bireysel, çift
              ve aile terapileri ile yaşam kalitenizi artırın.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987 6.618 0 11.987-5.369 11.987-11.987C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hakkimda"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  href="/terapiler"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Terapiler
                </Link>
              </li>
              <li>
                <Link
                  href="/egitimler"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Eğitimler
                </Link>
              </li>
              <li>
                <Link
                  href="/yazilar"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Yazılar
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">Telefon:</span>
                <br />
                +90 (555) 123 45 67
              </li>
              <li className="text-gray-600">
                <span className="font-medium">E-posta:</span>
                <br />
                info@pdruzmani.com
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Adres:</span>
                <br />
                Merkez Mah. Örnek Sok. No:123
                <br />
                Çankaya, Ankara
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 PDR Uzmanı. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/gizlilik"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kvkk"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

