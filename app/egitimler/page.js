"use client";
import { useState, useEffect } from "react";
import { educationAPI, apiUtils } from "../lib/api";
import Image from "next/image";
import { FaRegCalendarCheck } from "react-icons/fa";
import Link from "next/link";

export default function Education() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sabit veriler - backend'e eklenmeyecek veriler şimdilik static kalıyor
  const upcomingEducations = [
    {
      title: "Kaygı Bozuklukları ve Bilişsel Davranışçı Terapi",
      date: "15-16 Mart 2024",
      time: "09:00 - 17:00",
      duration: "2 Gün (16 Saat)",
      price: "1.200 TL",
      type: "Atölye",
      level: "Orta",
      capacity: "20 Kişi",
      description:
        "Kaygı bozukluklarının tanı ve tedavisinde bilişsel davranışçı terapi yaklaşımlarının uygulanması.",
      topics: [
        "Kaygı bozukluklarının teorik temelleri",
        "BDT yaklaşımında değerlendirme teknikleri",
        "Bilişsel yeniden yapılandırma teknikleri",
        "Davranışsal aktivasyon stratejileri",
        "Maruz bırakma ve tepki önleme",
        "Vaka çalışmaları ve grup uygulamaları",
      ],
      targetAudience: [
        "Psikolojik Danışmanlar",
        "Psikologlar",
        "Sosyal Hizmet Uzmanları",
        "Psikiyatristler",
      ],
    },
    {
      title: "Çift ve Aile Terapisi Temel Eğitimi",
      date: "22-23 Mart 2024",
      time: "09:00 - 17:00",
      duration: "2 Gün (16 Saat)",
      price: "1.500 TL",
      type: "Sertifika Programı",
      level: "Başlangıç",
      capacity: "15 Kişi",
      description:
        "Çift ve aile terapisinin temel ilke ve tekniklerini öğrenmeye yönelik kapsamlı eğitim.",
      topics: [
        "Sistem teorisi ve aile dinamikleri",
        "Çift terapisinde değerlendirme süreci",
        "İletişim becerileri eğitimi",
        "Çatışma çözümü teknikleri",
        "Yapısal aile terapisi yaklaşımı",
        "Pratik uygulamalar ve süpervizyon",
      ],
      targetAudience: [
        "PDR Uzmanları",
        "Aile Danışmanları",
        "Sosyal Hizmet Uzmanları",
        "Evlilik Danışmanları",
      ],
    },
    {
      title: "Travma Odaklı Terapi Yaklaşımları",
      date: "5-6 Nisan 2024",
      time: "09:00 - 17:00",
      duration: "2 Gün (16 Saat)",
      price: "1.400 TL",
      type: "Uzman Eğitimi",
      level: "İleri",
      capacity: "12 Kişi",
      description:
        "Travma sonrası stres bozukluğu ve travma odaklı terapi yaklaşımlarının uygulanması.",
      topics: [
        "Travma teorisi ve nörobiyolojisi",
        "EMDR temel prensipleri",
        "Travma odaklı BDT teknikleri",
        "Güvenlik ve stabilizasyon",
        "Travma anılarının işlenmesi",
        "Entegrasyon ve güçlendirme süreci",
      ],
      targetAudience: [
        "Deneyimli Terapistler",
        "EMDR Uygulayıcıları",
        "Travma Uzmanları",
        "Klinik Psikologlar",
      ],
    },
  ];

  const pastEducations = [
    {
      title: "Mindfulness Temelli Stres Azaltma",
      date: "Şubat 2024",
      participants: 18,
      rating: 4.8,
    },
    {
      title: "Ergen Psikolojisi ve Danışmanlık",
      date: "Ocak 2024",
      participants: 22,
      rating: 4.9,
    },
    {
      title: "Pozitif Psikoloji Uygulamaları",
      date: "Aralık 2023",
      participants: 25,
      rating: 4.7,
    },
  ];

  useEffect(() => {
    // Document title'ı ayarla
    document.title = "Eğitimler - PDR Uzmanı";
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      setLoading(true);
      const data = await educationAPI.getAllEducations();
      setEducations(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching educations:", err);
      setError("Eğitim verileri yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Eğitim Programları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesyonel gelişiminiz için tasarlanmış uzman eğitimleri, sertifika
            programları ve atölye çalışmaları.
          </p>
        </div>

        {/* Backend'den gelen eğitimler */}
        {educations.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Eğitimlerimiz
            </h2>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)] mx-auto"></div>
                <p className="mt-4 text-gray-600">Eğitimler yükleniyor...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-red-600">{error}</p>
                <button
                  onClick={fetchEducations}
                  className="mt-4 bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-700)] transition-colors"
                >
                  Tekrar Dene
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {educations.map((education) => (
                  <div
                    key={education.id}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
                  >
                    <div className="relative h-56 flex-shrink-0 bg-gray-50 flex items-center justify-center p-4">
                      <Image
                        src={education.image}
                        alt={education.title}
                        className="w-full h-full object-contain max-h-full max-w-full"
                        width={256}
                        height={256}
                        onError={(e) => {
                          e.target.src = "/assets/egitim.jpg"; // Fallback image
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] flex items-start">
                        {education.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-4 mt-auto">
                        <FaRegCalendarCheck className="w-5 h-5 text-[var(--primary-700)] mr-2 flex-shrink-0" />
                        <span>{apiUtils.formatDate(education.date)}</span>
                      </div>
                      <Link
                        href={`/iletisim`}
                        className="w-full bg-[var(--primary)] text-white py-2 px-4 rounded-lg hover:bg-[var(--primary-700)] transition-colors duration-200 font-semibold mt-auto"
                      >
                        Kayıt Ol
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Upcoming Educations */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Yaklaşan Eğitimler
          </h2>
          <div className="space-y-8">
            {upcomingEducations.map((education, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3"> */}
        {/* Left - Main Info */}
        {/* <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium px-3 py-1 rounded-full">
                            {education.type}
                          </span>
                          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                            {education.level}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {education.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {education.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-3">
                          Eğitim Konuları:
                        </h4>
                        <ul className="space-y-1">
                          {education.topics.map((topic, topicIndex) => (
                            <li
                              key={topicIndex}
                              className="flex items-start text-base text-gray-600"
                            >
                              <svg
                                className="w-4 h-4 text-[var(--primary-700)] mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-3">
                          Hedef Kitle:
                        </h4>
                        <ul className="space-y-1">
                          {education.targetAudience.map(
                            (audience, audienceIndex) => (
                              <li
                                key={audienceIndex}
                                className="flex items-center text-base text-gray-600"
                              >
                                <svg
                                  className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                                {audience}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div> */}

        {/* Right - Details & Registration */}
        {/* <div className="bg-gradient-to-br from-[var(--primary-50)] to-teal-50 p-8">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-[var(--primary-700)] mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h1a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z"
                          />
                        </svg>
                        <span className="font-medium">{education.date}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-[var(--primary-700)] mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{education.time}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-[var(--primary-700)] mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-[var(--primary-700)] mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>{education.capacity}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-center mb-6">
                        <span className="text-3xl font-bold text-[var(--primary-700)]">
                          {education.price}
                        </span>
                      </div>

                      <button className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-lg hover:bg-[var(--primary-700)] transition-colors duration-200 font-semibold mb-3">
                        Kayıt Ol
                      </button>

                      <a
                        href="/iletisim"
                        className="block text-center text-[var(--primary-700)] hover:text-[var(--primary)] transition-colors duration-200 text-sm font-medium"
                      >
                        Detaylı Bilgi Al
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Past Educations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Geçmiş Eğitimler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEducations.map((education, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {education.title}
                </h3>
                <p className="text-gray-600 mb-4">{education.date}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {education.participants} Katılımcı
                  </span>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">{education.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Benefits */}
        <div className="bg-gradient-to-br from-[var(--primary-50)] to-teal-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Eğitimlerimizin Avantajları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sertifikalı Eğitim
              </h3>
              <p className="text-gray-600">
                Katılım sertifikası ve sürekli eğitim kredisi
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Küçük Gruplar
              </h3>
              <p className="text-gray-600">
                Maksimum 25 kişilik sınıflarla etkili öğrenme
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pratik Odaklı
              </h3>
              <p className="text-gray-600">
                Vaka çalışmaları ve uygulamalı eğitim
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Süpervizyon
              </h3>
              <p className="text-gray-600">
                Eğitim sonrası süpervizyon desteği
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Profesyonel Gelişiminize Devam Edin
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Güncel eğitimler hakkında bilgi almak için bültenimize abone olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            />
            <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--primary-700)] transition-colors duration-200 font-semibold">
              Abone Ol
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
