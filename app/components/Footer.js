import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve açıklama */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex flex-col items-center gap-1 border-r border-gray-600 pr-3">
                <Image
                  src="/assets/maviinflatelogo.png"
                  alt="Merve KISA Logo"
                  width={100}
                  height={40}
                  priority
                />
                <span className="text-sm sm:text-base text-center font-semibold text-[var(--primary-700)] tracking-wide">
                  Merve KISA
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#34495e] font-medium">Psikoterapist</p>
                <p className="text-[#34495e] font-medium">
                  Psikolojik Danışman
                </p>
              </div>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Profesyonel psikolojik destek ve terapi hizmetleri. Bireysel,
              online ve aile terapileriyle yaşam kalitenizi artırın.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaInstagram className="relative z-10 h-10 w-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
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
                  className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  href="/terapiler"
                  className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200"
                >
                  Terapiler
                </Link>
              </li>
              <li>
                <Link
                  href="/egitimler"
                  className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200"
                >
                  Eğitimler
                </Link>
              </li>
              <li>
                <Link
                  href="/yazilar"
                  className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-200"
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
                +90 (501) 536 06 04
              </li>
              <li className="text-gray-600">
                <span className="font-medium">E-posta:</span>
                <br />
                info@pdruzmani.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Merve KISA. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-500 hover:text-[var(--primary)] text-sm transition-colors duration-200"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-[var(--primary)] text-sm transition-colors duration-200"
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
