# 🕵️ Oltacı Dedektifi

Çocuklara yönelik, e-posta tuzaklarını (phishing) tanımayı öğreten kısa bir farkındalık testi. 10 e-posta gösterilir, oyuncu her biri için "Tuzak" ya da "Güvenli" der ve cevaptan sonra kısa bir açıklama görür.

**Canlı:** https://aekatipoglu.github.io/PhishingQuiz/
**Sonuçlar:** https://aekatipoglu.github.io/PhishingQuiz/results.html

## Özellikler
- Telefona uygun, çocuk dostu arayüz (framework yok, saf HTML/CSS/JS)
- 10 Türkçe soru, her cevapta öğretici ipucu
- Anonim istatistik: toplam oyuncu, soru bazlı doğru oranı, puan dağılımı
- Aynı sayfa yüklemesinde sadece ilk tur istatistiğe eklenir

## Dosyalar
| Dosya | Görevi |
|---|---|
| `index.html` | Sayfa ve stil |
| `app.js` | Sorular (`Q` dizisi) ve oyun mantığı |
| `results.html` | İstatistik sayfası |
| `favicon.png` | Sekme ikonu |

## Gizlilik
Ad, e-posta, çerez ya da localStorage kullanılmaz. Oyun bittiğinde sadece anonim sayaçlar [Abacus](https://jasoncameron.dev/abacus/) servisine (`abacus.jasoncameron.dev`) gönderilir. İsteğin IP adresi o servis tarafından görülebilir, bu projede IP kaydedilmez.

## Kendi sürümünü yayınlama
1. Repoyu çatallayın, **Settings → Pages → main / root** seçin.
2. `app.js` ve `results.html` içindeki `NS` değerini kendi benzersiz adınızla değiştirin.
3. Soruları değiştirmek için `app.js` içindeki `Q` dizisini düzenleyin (`p:1` tuzak, `p:0` güvenli).

## Lisans ve kaynaklar
Sekme ikonu: [Twemoji](https://github.com/jdecked/twemoji) (CC-BY 4.0). Sorular bu proje için özgün yazılmıştır.
