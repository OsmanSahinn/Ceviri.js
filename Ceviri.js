/**
 * Osman ŞAHİN - benosmansahin@gmail.com
 * Ceviri.js
 * 
 * Bu kütüphane, belirli bir dil dosyasından (JSON formatında) dil bilgilerini
 * çekerek, HTML öğelerinde `data-dil` özniteliği ile belirtilmiş anahtarlar
 * için içeriği günceller ve basit bir şekilde çeviri imkanı sunar. 
 * 
 * Fonksiyon Adı: Ceviri()
 * 
 * Kullanım:
 * - Sayfanın `<body>` etiketinde `data-dil` özniteliği bulunmalıdır. Bu öznitelik,
 *   hangi dil dosyasının yükleneceğini belirtir (örneğin, `data-dil="en"`).
 * - JSON dosyaları, `en.json`, `tr.json` gibi isimlerle proje içinde bulunmalıdır.
 * - HTML öğelerinde `data-dil` özniteliği ile JSON dosyasındaki anahtarlar belirtilir.
 *   Örneğin, `<p data-dil="gonder">...</p>` öğesi için JSON dosyasında `"gonder": "Send"`
 *   gibi bir tanımlama olmalıdır.
 * 
 * Desteklenen HTML Öğeleri:
 * - `<p>`
 * - `<span>`
 * - `<div>`
 * - `<button>`
 * 
 * Çalışma Prensibi:
 * - `Ceviri()` fonksiyonu, sayfa yüklendikten sonra veya manuel olarak çağrıldığında
 *   dil dosyasını yükler ve `data-dil` özniteliği bulunan öğelerin içeriğini günceller.
 * 
 * Örnek JSON Dosyaları:
 * -------------------------
 * Örnek: `en.json`
 * {
 *     "gonder": "Send",
 *     "kaydet": "Save",
 *     "iptal": "Cancel"
 * }
 * 
 * Örnek: `tr.json`
 * {
 *     "gonder": "Gönder",
 *     "kaydet": "Kaydet",
 *     "iptal": "İptal"
 * }
 * -------------------------
 * 
 * Örnek Kullanım:
 * -------------------------
 * HTML:
 * <body data-dil="en">
 *     <p data-dil="gonder">Gönder</p>
 *     <button data-dil="kaydet">Kaydet</button>
 *     <div data-dil="iptal">İptal</div>
 * </body>
 * 
 * JS:
 * Ceviri(); // Sayfa yüklendiğinde veya ihtiyaç duyulduğunda çalıştırın.
 * -------------------------
 * 
 * Özellikler:
 * - Dil dosyası (`data-dil` ile belirtilen) JSON formatında olmalıdır.
 * - Öğelerin içeriği, JSON dosyasındaki karşılıkları ile değiştirilir.
 * - Eğer JSON dosyası bulunamazsa veya yüklenemezse, konsola hata mesajı yazılır.
 * - Eğer JSON dosyasında öğedeki `data-dil` anahtarına karşılık gelmeyen bir değer varsa, öğenin içeriği değişmeden kalır.
 * 
 * Uyarılar:
 * - Dil dosyasının yolu doğru olmalı ve dosya projenin kök dizininde veya erişilebilir bir klasörde bulunmalıdır.
 * - Geçersiz veya eksik JSON dosyası durumunda konsola hata mesajı yazılır.
 * - Eğer bir öğede `data-dil` ile belirtilen anahtar JSON dosyasında bulunmuyorsa, o öğenin içeriği güncellenmez.
 */

function Ceviri() {
    const dil = document.body.getAttribute('data-dil');
    const dilDosyasi = `${dil}.json`;
    fetch(dilDosyasi)
        .then(response => {
            if (!response.ok) {
                throw new Error('Dil dosyası bulunamadı');
            }
            return response.json();
        })
        .then(data => {
            const elements = document.querySelectorAll('p[data-dil], span[data-dil], div[data-dil], button[data-dil]');
            elements.forEach(el => {
                const key = el.getAttribute('data-dil');
                if (data[key]) {
                    el.textContent = data[key];
                }
            });
        })
        .catch(error => {
            console.error('Bir hata oluştu:', error);
        });
}
