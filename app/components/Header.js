"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımda", href: "/hakkimda" },
    { name: "Terapiler", href: "/terapiler" },
    { name: "Eğitimler", href: "/egitimler" },
    { name: "Yazılar", href: "/yazilar" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-[var(--primary-100)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-1">
            <Link
              href="/"
              className="flex flex-col items-center gap-1 border-r border-gray-600"
            >
              <Image
                src="/assets/maviinflatelogo.png"
                alt="Merve KISA Logo"
                width={100}
                height={40}
                priority
                className="w-[100px] h-auto"
              />
              <span className="text-sm sm:text-base text-center font-semibold text-[var(--primary-700)] tracking-wide">
                Merve KISA
              </span>
            </Link>
            <div className="flex flex-col gap-1">
              <p className="text-[#34495e] font-medium">Psikoterapist</p>
              <p className="text-[#34495e] font-medium">Psikolojik Danışman</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-[var(--primary-700)]"
                    : "text-gray-700 hover:text-[var(--primary)]"
                } transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/iletisim"
              className="bg-[var(--primary)] text-white px-6 py-2 rounded-full hover:bg-[var(--primary-700)] transition-colors duration-200 font-medium"
            >
              Randevu Al
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[var(--primary)] transition-colors duration-200"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-[var(--primary-700)]"
                      : "text-gray-700 hover:text-[var(--primary)]"
                  } transition-colors duration-200 font-medium px-3 py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/iletisim"
                className="bg-[var(--primary)] text-white px-4 py-2 rounded-full hover:bg-[var(--primary-700)] transition-colors duration-200 font-medium text-center mx-3 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Randevu Al
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
