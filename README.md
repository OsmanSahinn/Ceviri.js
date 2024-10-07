# Ceviri.js

Osman ŞAHİN - benosmansahin@gmail.com

`Ceviri.js`, bir web sayfasında, belirli bir JSON dosyasından dil bilgilerini çekerek, öğeleri otomatik olarak çevirebilen bir JavaScript fonksiyonudur. Sayfa üzerindeki dil ayarına göre JSON dosyasını dinamik olarak yükler ve `data-dil` özniteliği bulunan öğelerin içeriğini günceller.

## Özellikler

- **Dinamik Dil Yükleme:** Sayfanın `body` etiketinde tanımlı `data-dil` özniteliğine göre uygun dil dosyasını yükler (örneğin `en` veya `tr`).
- **JSON Dosyasından Çeviri:** Öğelerde tanımlı `data-dil` anahtarlarına göre JSON dosyasındaki dil karşılıklarını öğelere uygular.
- **Özelleştirilebilir Öğeler:** `p`, `span`, `div`, `button` gibi HTML öğelerinde dil tanımları yapılabilir ve içeriği dinamik olarak güncellenir.

## Kurulum

Projeye `Ceviri.js` dosyasını dahil edin ve `Ceviri()` fonksiyonunu çağırarak dil çevirisini başlatın.
##Örnek en.json Json dosyası
{
    "gonder": "Send",
    "kaydet": "Save",
    "iptal": "Cancel"
}
### HTML Dosyası
```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON ve Javascript Kullanarak Basit Dil Çevirisi</title>
</head>
<body data-dil="en">
    <p data-dil="gonder">Gönder</p>
    <button data-dil="kaydet">Kaydet</button>
    <div data-dil="iptal">İptal</div>

    <script src="Ceviri.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            Ceviri();
        });
    </script>
</body>
</html>


