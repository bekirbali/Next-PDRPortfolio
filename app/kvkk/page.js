export const metadata = {
  title: "KVKK Aydınlatma Metni - PDR Uzmanı",
  description:
    "Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni ve veri işleme politikalarımız.",
};

export default function KVKK() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            KVKK Aydınlatma Metni
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
            kapsamında, kişisel verilerinizin işlenmesine ilişkin aydınlatma
            metnidir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            1. Veri Sorumlusu
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 mb-2">
              <strong>Veri Sorumlusu:</strong> PDR Uzmanı [Ad Soyad]
            </p>
            <p className="text-blue-800 mb-2">
              <strong>Adres:</strong> Merkez Mahallesi Örnek Sokak No:123
              Çankaya/Ankara
            </p>
            <p className="text-blue-800 mb-2">
              <strong>E-posta:</strong> info@pdruzmani.com
            </p>
            <p className="text-blue-800">
              <strong>Telefon:</strong> +90 (555) 123 45 67
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            2. Kişisel Verilerin Toplanma Yöntemi
          </h2>
          <p className="text-gray-700 mb-4">
            Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>İletişim formları aracılığıyla</li>
            <li>Telefon görüşmeleri sırasında</li>
            <li>Yüz yüze görüşmeler esnasında</li>
            <li>E-posta iletişimi yoluyla</li>
            <li>Randevu sistemi üzerinden</li>
            <li>Terapi seansları sürecinde</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            3. İşlenen Kişisel Veri Kategorileri
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    Veri Kategorisi
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    Veri Türleri
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                    Kimlik Verileri
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Ad, soyad, doğum tarihi, TC kimlik numarası
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                    İletişim Verileri
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Telefon, e-posta, adres bilgileri
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                    Sağlık Verileri
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Psikolojik durum, terapi notları, sağlık geçmişi
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                    İşlem Güvenliği Verileri
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    IP adresi, çerez bilgileri, log kayıtları
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            4. Kişisel Verilerin İşlenme Amaçları
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Psikolojik danışmanlık ve terapi hizmetlerinin sunulması</li>
            <li>Randevu planlaması ve takibinin yapılması</li>
            <li>İletişimin sağlanması ve bilgilendirme</li>
            <li>Hizmet kalitesinin geliştirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Güvenlik tedbirlerinin alınması</li>
            <li>İstatistiksel analiz ve raporlama</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            5. Kişisel Verilerin İşlenme Hukuki Sebepleri
          </h2>
          <p className="text-gray-700 mb-4">
            KVKK&apos;nın 5. maddesine uygun olarak, kişisel verileriniz
            aşağıdaki hukuki sebeplere dayanarak işlenmektedir:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Açık rızanızın bulunması (KVKK m.5/1-a)</li>
            <li>
              Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması
              (KVKK m.5/1-c)
            </li>
            <li>Kanunlarda öngörülmesi (KVKK m.5/1-ç)</li>
            <li>Meşru menfaatlerimizin gerektirmesi (KVKK m.5/1-f)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            6. Özel Nitelikli Kişisel Verilerin İşlenmesi
          </h2>
          <p className="text-gray-700 mb-4">
            Sağlık verileriniz KVKK&apos;nın 6. maddesine göre özel nitelikli
            kişisel veri olup, aşağıdaki hallerde işlenmektedir:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Açık rızanızın alınması</li>
            <li>
              Preventif hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin
              yürütülmesi
            </li>
            <li>Sağlık hizmetleri ile finansmanının planlanması ve yönetimi</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            7. Kişisel Verilerin Aktarımı
          </h2>
          <p className="text-gray-700 mb-4">
            Kişisel verileriniz aşağıdaki durumlarda üçüncü kişilere
            aktarılabilir:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Açık rızanızın bulunması durumunda</li>
            <li>Kanuni yükümlülüklerin yerine getirilmesi için</li>
            <li>Sağlık hizmeti sunumunda iş birliği yapılan kuruluşlara</li>
            <li>
              Teknik altyapı hizmet sağlayıcılarına (güvenli veri saklama)
            </li>
            <li>Yasal süreçlerde yetkili kurum ve kuruluşlara</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            8. Kişisel Veri Sahibinin Hakları
          </h2>
          <p className="text-gray-700 mb-4">
            KVKK&apos;nın 11. maddesi uyarınca sahip olduğunuz haklar:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Temel Haklar</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>• İşlenme amacını öğrenme</li>
                <li>• Yurt içi/yurt dışı aktarımları öğrenme</li>
                <li>• Eksik/yanlış işlenmiş verilerin düzeltilmesi</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">
                İleri Haklar
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Verilerin silinmesini/yok edilmesini talep</li>
                <li>• İşleme karşı itiraz etme</li>
                <li>• Otomatik sistemlerin sonuçlarına itiraz</li>
                <li>• Zararın giderilmesini talep etme</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            9. Başvuru Yöntemleri
          </h2>
          <p className="text-gray-700 mb-4">
            Haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-yellow-800 mb-2">
              Başvuru Kanalları
            </h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>
                • Yazılı başvuru: Merkez Mah. Örnek Sok. No:123 Çankaya/Ankara
              </li>
              <li>• E-posta: kvkk@pdruzmani.com</li>
              <li>• Güvenli elektronik imza ile</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            10. Veri Güvenliği Önlemleri
          </h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Teknik güvenlik önlemleri (şifreleme, güvenli ağ)</li>
            <li>İdari güvenlik önlemleri (erişim kontrolü, eğitim)</li>
            <li>Fiziksel güvenlik önlemleri (güvenli depolama)</li>
            <li>Düzenli güvenlik denetimleri</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            11. Veri Saklama Süreleri
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    Veri Türü
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    Saklama Süresi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Terapi kayıtları
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    15 yıl (Meslek etiği kuralları)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    İletişim verileri
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Hizmet ilişkisi süresi + 3 yıl
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-gray-700">
                    Log kayıtları
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">2 yıl</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-8">
            <h4 className="font-semibold text-red-800 mb-2">Önemli Uyarı</h4>
            <p className="text-sm text-red-700">
              Bu aydınlatma metni KVKK ve ilgili mevzuatlara uygun olarak
              hazırlanmıştır. Yasal değişiklikler durumunda güncellenecektir.
              Güncel versiyona web sitemizden ulaşabilirsiniz.
            </p>
          </div>

          <div className="bg-gray-100 border-l-4 border-blue-500 p-4 mt-8">
            <p className="text-sm text-gray-700">
              <strong>Yürürlük Tarihi:</strong> 15 Mart 2024
              <br />
              <strong>Son Güncelleme:</strong> 15 Mart 2024
              <br />
              <strong>Versiyon:</strong> 1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
