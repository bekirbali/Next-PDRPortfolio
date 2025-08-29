"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogAPI, apiUtils } from "../../lib/api";
import {
  HiArrowLeft,
  HiClock,
  HiCalendar,
  HiTag,
  HiShare,
} from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function BlogPostDetail() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // Slug ile post detayını yükle
        const postData = await blogAPI.getPostBySlug(params.slug);

        if (!postData) {
          setError("Yazı bulunamadı");
          return;
        }

        setPost(postData);

        // İlgili yazıları yükle (aynı kategoriden)
        if (postData.category?.name) {
          const related = await blogAPI.getPostsByCategory(
            postData.category.name
          );
          // Mevcut yazıyı hariç tut ve en fazla 3 tane göster
          const filtered = related
            .filter((p) => p.id !== postData.id)
            .slice(0, 3);
          setRelatedPosts(filtered);
        }
      } catch (err) {
        console.error("Error loading post:", err);
        setError("Yazı yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      loadPost();
    }
  }, [params.slug]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post?.title || "Blog Yazısı";
    const text = post?.excerpt || "";

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(
          title + " " + url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Toastify benzeri bir bildirim gösterilebilir
      alert("Link kopyalandı!");
    } catch (err) {
      console.error("Link kopyalanamadı:", err);
    }
  };

  if (loading) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)] mx-auto"></div>
            <p className="mt-4 text-gray-600">Yazı yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h1 className="text-2xl font-bold text-red-800 mb-4">
              {error || "Yazı bulunamadı"}
            </h1>
            <p className="text-red-600 mb-6">
              Aradığınız yazı mevcut değil veya kaldırılmış olabilir.
            </p>
            <button
              onClick={() => router.push("/yazilar")}
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--primary-700)] transition-colors duration-200"
            >
              Yazılara Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.push("/yazilar")}
          className="flex items-center text-[var(--primary)] hover:text-[var(--primary-700)] mb-8 transition-colors duration-200"
        >
          <HiArrowLeft className="w-5 h-5 mr-2" />
          Yazılara Dön
        </button>

        {/* Article Header */}
        <article className="mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-[var(--primary)] text-white text-sm font-medium px-4 py-2 rounded-full">
              {post.category?.name || "Kategori"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <HiCalendar className="w-5 h-5 mr-2" />
              <span>
                {apiUtils.formatDate(post.published_at || post.created_at)}
              </span>
            </div>
            <div className="flex items-center">
              <HiClock className="w-5 h-5 mr-2" />
              <span>{apiUtils.formatReadingTime(post.reading_time)}</span>
            </div>
            {post.author && (
              <div className="flex items-center">
                <span className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-sm font-semibold mr-2">
                  {typeof post.author === "string"
                    ? post.author.charAt(0).toUpperCase()
                    : post.author.first_name?.charAt(0)?.toUpperCase() || "A"}
                </span>
                <span>
                  {typeof post.author === "string"
                    ? post.author
                    : `${post.author.first_name || ""} ${
                        post.author.last_name || ""
                      }`.trim() ||
                      post.author.username ||
                      "Anonim"}
                </span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-8">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={post.featured_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <div className="mb-8">
              <div
                className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-[var(--primary)] pl-6 py-4 bg-gray-50 rounded-r-lg"
                dangerouslySetInnerHTML={apiUtils.prepareRichTextContent(
                  post.excerpt
                )}
              />
            </div>
          )}

          {/* Main Content */}
          <div className="mb-8">
            <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              {post.content ? (
                <div
                  className="rich-text-content text-lg leading-relaxed text-gray-800"
                  dangerouslySetInnerHTML={apiUtils.prepareRichTextContent(
                    post.content
                  )}
                />
              ) : (
                <div className="text-gray-500 text-center py-8">
                  <p>İçerik yüklenemedi veya bulunamadı.</p>
                  <p className="text-sm mt-2">
                    Debug: post.content = {JSON.stringify(post.content)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Share Section */}
        <div className="mb-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Bu Yazıyı Paylaş
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleShare("facebook")}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FaFacebook className="w-4 h-4" />
              Facebook
            </button>
            <button
              onClick={() => handleShare("twitter")}
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors duration-200"
            >
              <FaTwitter className="w-4 h-4" />
              Twitter
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </button>
            <button
              onClick={() => handleShare("whatsapp")}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <HiShare className="w-4 h-4" />
              Link Kopyala
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Benzer Yazılar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={index} href={`/yazilar/${relatedPost.slug}`}>
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    {relatedPost.featured_image ? (
                      <div className="h-32 relative overflow-hidden">
                        <Image
                          src={relatedPost.featured_image}
                          alt={relatedPost.title}
                          width={300}
                          height={150}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-32 bg-gradient-to-br from-[var(--primary-100)] to-teal-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[var(--primary)] transition-colors duration-200">
                        {relatedPost.title}
                      </h4>
                      <div
                        className="text-gray-600 text-sm line-clamp-3 mb-3"
                        dangerouslySetInnerHTML={apiUtils.prepareRichTextContent(
                          relatedPost.excerpt
                        )}
                      />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                          {apiUtils.formatDate(
                            relatedPost.published_at || relatedPost.created_at
                          )}
                        </span>
                        <span>
                          {apiUtils.formatReadingTime(relatedPost.reading_time)}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Daha Fazla Yazı İster misiniz?
          </h2>
          <p className="text-gray-600 mb-6">
            Mental sağlık ve kişisel gelişim konularındaki en güncel yazıları
            e-posta kutunuzda almak için bültenimize abone olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
