export default function NeyeIhtiyacinVar() {
  const items = [
    {
      title: "Kabul ve Kararlılık (ACT)",
      href: "/terapiler",
      img: "/assets/psychotherapy.jpg",
    },
    {
      title: "EMDR",
      href: "/terapiler",
      img: "/assets/danismanlik.png",
    },
    {
      title: "Oyun Terapisi",
      href: "/terapiler",
      img: "/assets/oyunterapi.jpeg",
    },
    {
      title: "Kukla Terapisi",
      href: "/terapiler",
      img: "/assets/kuklaterapi1.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[var(--primary-50)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Neye ihtiyacın var?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg ring-2 ring-white/60 group-hover:ring-[var(--primary)] transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-lg md:text-xl font-medium text-slate-700">
                {item.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
