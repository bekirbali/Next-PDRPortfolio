"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhatsAppFloating({
  phone = "+905015360604",
  message = "Merhaba, bilgi almak istiyorum.",
}) {
  const href = `https://wa.me/${phone.replace(
    /[^\d]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  const [showPing, setShowPing] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowPing(true);
      setTimeout(() => setShowPing(false), 2000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Link
        href={href}
        target="_blank"
        aria-label="WhatsApp ile iletişime geç"
        className={`group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 focus-visible:outline-none ${
          showPing ? "whatsapp-bounce" : ""
        }`}
      >
        {showPing && (
          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-white drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.671.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.671-1.612-.92-2.207-.242-.579-.487-.5-.671-.51-.173-.009-.372-.011-.571-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.517-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.879 9.884M20.52 3.433A11.815 11.815 0 0012.051 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.317-1.654a11.882 11.882 0 005.71 1.456h.005c6.557 0 11.892-5.335 11.895-11.893a11.821 11.821 0 00-3.507-8.476Z" />
        </svg>
      </Link>
    </div>
  );
}
