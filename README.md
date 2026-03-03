# e-BEAS — BES Sınav Hazırlık Platformu

Bireysel Emeklilik Aracılık Sınavı (BES) için kapsamlı hazırlık platformu. Tüm sınav konularını kapsayan interaktif öğrenme araçları, soru havuzu, sınav simülasyonu ve performans takibi.

## Özellikler

### Öğrenme Modülleri

| Modül | Açıklama |
|-------|----------|
| **Konu Anlatımı** | 12 yapılandırılmış ders. Karşılaştırma tabloları ve hesaplama örnekleri ile |
| **Bilgi Kartları** | 150 kavram kartı. Aktif hatırlama tekniği ile öğrenme. Öğrenme ilerlemesi takibi |
| **Doğru / Yanlış** | 80 ifade. Kavram tuzaklarını tespit etme ve yaygın yanlış anlamaları düzeltme |
| **Kritik Bilgiler** | 54 bölüm, 550+ hızlı referans kartı. Sınavda en çok sorulan rakamlar ve kurallar |
| **Soru Havuzu** | 1197 gerçek sınav sorusu. Sıralı, karışık, zamanlı veya zayıf konudan çözme modları |
| **Sınav Simülasyonu** | Gerçek sınav formatında 100 soru / 120 dakika. Soru işaretleme ve navigator |

### Analiz ve Takip

- **Performans Analizi** — Hazırlık skoru (0-100), kategori bazlı analiz, 7 günlük aktivite grafiği
- **Yanlışlarım** — Yapılan hataların detaylı açıklamalarıyla birlikte arşivlenmesi
- **Zayıf Konudan Çöz** — Hataları analiz edip en zayıf kategoriden otomatik soru yükleme
- **Çalışma Serisi** — Ardışık gün takibi ve motivasyon sistemi
- **Öğrenme İlerlemesi** — Bilgi kartı ve D/Y modüllerinde kalıcı ilerleme kaydı

### Veri Yönetimi

Tüm ilerleme verileri tarayıcının localStorage'ında saklanır. Ayarlar panelinden modül bazlı veya toplu sıfırlama yapılabilir.

## Teknoloji

- React 19 + Vite 7
- Framer Motion (animasyonlar)
- React Icons (Feather icon seti)
- localStorage (veri kalıcılığı)
- GitHub Pages (hosting)

## Kurulum

```bash
git clone https://github.com/batuhania/e-BEAS.git
cd e-BEAS
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Derleme

```bash
npm run build
```

Üretim dosyaları `dist/` klasörüne oluşturulur.

## Canlı Demo

[https://batuhania.github.io/e-BEAS/](https://batuhania.github.io/e-BEAS/)

## İçerik Kapsamı

| Sınav Bölümü | Soru Sayısı |
|-------------|-------------|
| Emeklilik Sistemleri ve BES Mevzuatı | 461 |
| Temel İşletme ve İktisat | 233 |
| Finans ve Yatırım Araçları | 175 |
| Sigortacılık | 116 |
| Satış Yönetimi ve Pazarlama | 113 |
| Katılım Esaslı BES | 99 |
| **Toplam** | **1197** |

## Lisans

Bu proje kişisel eğitim amaçlı geliştirilmiştir.
