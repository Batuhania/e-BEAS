// Doğru/Yanlış Modu Verileri
// Konu anlatımından süzülmüş ifadeler — doğru veya yanlış olarak yanıtla

export const dogruYanlisData = [
    // BES MEVZUATI
    { id: 1, ifade: "BES'te emekli olmak için en az 10 yıl sistemde kalıp 56 yaşını doldurmak gerekir.", dogru: true, aciklama: "İki şart birlikte aranır: 10 yıl + 56 yaş.", kategori: "BES Mevzuatı" },
    { id: 2, ifade: "Cayma hakkı süresi sözleşme imzasından itibaren 3 aydır.", dogru: false, aciklama: "2 aydır (60 gün), 3 ay DEĞİL!", kategori: "BES Mevzuatı" },
    { id: 3, ifade: "Aktarım için en az 2 yıl bekleme süresi vardır.", dogru: true, aciklama: "Aktarımla gelindiyse 1 yıl yeterlidir.", kategori: "BES Mevzuatı" },
    { id: 4, ifade: "Lehdar, sözleşmenin başka şirkete aktarılmasını talep edebilir.", dogru: false, aciklama: "Lehdar aktarım talep EDEMEZ! Sadece katılımcı/sponsor talep edebilir.", kategori: "BES Mevzuatı" },
    { id: 5, ifade: "Stopaj, toplam birikimin tamamı üzerinden hesaplanır.", dogru: false, aciklama: "Stopaj sadece GETİRİDEN (irattan) kesilir. Anapara ve DK'dan KESİLMEZ!", kategori: "BES Mevzuatı" },
    { id: 6, ifade: "Emekli olan kişinin stopaj oranı %5'tir.", dogru: true, aciklama: "10 yıl+ erken çıkma: %10, <10 yıl: %15.", kategori: "BES Mevzuatı" },
    { id: 7, ifade: "İşveren katkısı hak kazanma süresi en fazla 10 yıldır.", dogru: false, aciklama: "En fazla 7 yıldır! DK hak ediş süreleriyle (3-6-10) karıştırılmamalı.", kategori: "BES Mevzuatı" },
    { id: 8, ifade: "Caymada giriş aidatı ve kesintiler iade edilir, fon işletim gideri iade edilmez.", dogru: true, aciklama: "Fon yönetimi için yapılan giderler iade edilmez.", kategori: "BES Mevzuatı" },
    { id: 9, ifade: "Aynı şirkette 2. sözleşme açılırken giriş aidatı alınabilir.", dogru: false, aciklama: "ALINAMAZ! Müşteri zaten tanınıyor, sisteme kayıtlı.", kategori: "BES Mevzuatı" },
    { id: 10, ifade: "Devlet katkısı hak edişinde 3 yıldan az kalanlar %15 alır.", dogru: false, aciklama: "%0 alır! 3 yıldan az kalanlara devlet katkısı ödenmez.", kategori: "BES Mevzuatı" },
    { id: 11, ifade: "Emeklilik yatırım fonunun tüzel kişiliği yoktur.", dogru: true, aciklama: "Fon = malvarlığı havuzu. Tüzel kişiliği yok!", kategori: "BES Mevzuatı" },
    { id: 12, ifade: "Fon malvarlığı teminat olarak gösterilebilir.", dogru: false, aciklama: "Haczedilemez, rehnedilemez, iflas masasına dahil edilemez, teminat gösterilemez!", kategori: "BES Mevzuatı" },
    { id: 13, ifade: "Kısmen ödemede birikimin en fazla %50'si çekilebilir.", dogru: true, aciklama: "Evlilik/konut veya doğal afet durumlarında çekilebilir.", kategori: "BES Mevzuatı" },
    { id: 14, ifade: "Doğal afet durumunda kısmen ödeme için 5 yıl şartı aranmaz.", dogru: true, aciklama: "Doğal afette süre ve birikim şartı ARANMAZ! En avantajlı durum.", kategori: "BES Mevzuatı" },
    { id: 15, ifade: "Gecikme cezalarına devlet katkısı ödenir.", dogru: false, aciklama: "Gecikme cezalarına DK ÖDENMEZ!", kategori: "BES Mevzuatı" },
    { id: 16, ifade: "Emekli olan kişi hesabına katkı payı yatırabilir.", dogru: false, aciklama: "Emekli = para ALMA dönemi. Artık katkı payı YATIRAMAZ!", kategori: "BES Mevzuatı" },
    { id: 17, ifade: "İşveren grup emeklilik sözleşmesinde katkı payını işveren öder.", dogru: true, aciklama: "İstihdam ilişkisine dayalı, parayı tamamen patron öder. OKS'de ise maaştan kesilir.", kategori: "BES Mevzuatı" },
    { id: 18, ifade: "Sisteme giriş tarihi sözleşmenin imzalandığı gündür.", dogru: false, aciklama: "İmza tarihi DEĞİL! Paranın hesaba düştüğü (nakden intikal) tarih geçerlidir.", kategori: "BES Mevzuatı" },

    // FİNANS
    { id: 19, ifade: "Tahvil fiyatı yükseldiğinde faizi de yükselir.", dogru: false, aciklama: "TERS ORANTI! Fiyat ↑ = Faiz ↓ (Tahterevalli Kuralı).", kategori: "Finans" },
    { id: 20, ifade: "Repo işleminde TCMB piyasaya para verir.", dogru: true, aciklama: "Repo → Para bollaşır → Faiz düşer → Döviz artar.", kategori: "Finans" },
    { id: 21, ifade: "Ters Repo ile piyasadaki para miktarı azalır.", dogru: true, aciklama: "TCMB parayı toplar → Para azalır → Faiz artar → Döviz düşer.", kategori: "Finans" },
    { id: 22, ifade: "Hisse senedi sahibi şirketin borçlusudur.", dogru: false, aciklama: "ORTAKTIR (mülkiyet hakkı), borçlu değil! Tahvil sahibi alacaklıdır.", kategori: "Finans" },
    { id: 23, ifade: "Hisse senedinin rüçhan hakkı yoktur.", dogru: false, aciklama: "Rüçhan hakkı VARDIR! Yeni hisse çıkarılınca öncelikli alma hakkı verir.", kategori: "Finans" },
    { id: 24, ifade: "Bir emeklilik fonunun parasının max %30'u bankaya mevduat yatırılabilir.", dogru: true, aciklama: "Mevduat sınırı %30'dur.", kategori: "Finans" },
    { id: 25, ifade: "Para piyasası 1 yıldan uzun vadeli araçların alınıp satıldığı piyasadır.", dogru: false, aciklama: "Para piyasası: <1 yıl vadeli! >1 yıl vadeli olanlar SERMAYE piyasasıdır.", kategori: "Finans" },

    // SİGORTACILIK
    { id: 26, ifade: "Sigortanın tazminat prensibi insanları zenginleştirmeyi amaçlar.", dogru: false, aciklama: "Zenginleştirmek DEĞİL, eski haline getirmek amaçtır!", kategori: "Sigortacılık" },
    { id: 27, ifade: "Broker sigorta şirketini temsil eden bölgesel aracıdır.", dogru: false, aciklama: "Broker MÜŞTERİYİ temsil eder (bağımsız). ACENTE şirketi temsil eder.", kategori: "Sigortacılık" },
    { id: 28, ifade: "Aktüer hasar miktarını belirleyen uzmandır.", dogru: false, aciklama: "EKSPER hasar belirler! Aktüer matematik/istatistikle PRİM hesaplar.", kategori: "Sigortacılık" },
    { id: 29, ifade: "Reasüransta riski devreden şirkete sedan denir.", dogru: true, aciklama: "Sedan: Devreden. Reasürör: Devralan. Sesyon: Devredilen iş miktarı.", kategori: "Sigortacılık" },
    { id: 30, ifade: "Hasarın poliçede belirtilen nedenden kaynaklanması 'yakın neden' prensibidir.", dogru: true, aciklama: "Hasarı başlatan ilk neden poliçede yazılı olmalı.", kategori: "Sigortacılık" },

    // KATILIM BES
    { id: 31, ifade: "Mudarebede zarar olursa hem sermayedar hem emekçi mali zararı paylaşır.", dogru: false, aciklama: "Zarar → sadece SERMAYEDAR üstlenir! Emekçinin emeği boşa gider.", kategori: "Katılım BES" },
    { id: 32, ifade: "Muşarekede kâr anlaşılan oranda, zarar sermaye oranında paylaşılır.", dogru: true, aciklama: "Herkes para koyar, kâr serbestçe dağıtılır ama zarar sermaye payına göre bölünür.", kategori: "Katılım BES" },
    { id: 33, ifade: "Selem akdinde para veresiye, mal peşin teslim edilir.", dogru: false, aciklama: "TERSİ! Para PEŞİN, mal VERESİYE. Tarımda kullanılır.", kategori: "Katılım BES" },
    { id: 34, ifade: "Danışma Komitesi en az 5 kişiden oluşur.", dogru: false, aciklama: "En az 3 kişiden oluşur!", kategori: "Katılım BES" },
    { id: 35, ifade: "Liaynihi haram, özü itibariyle haram olan şeylerdir (faiz, içki gibi).", dogru: true, aciklama: "Ligayrihi ise aslında helal olup dış sebepten haram olan (Cuma ticareti gibi).", kategori: "Katılım BES" },
    { id: 36, ifade: "Murabaha, maliyet bilinmeden yapılan satış türüdür.", dogru: false, aciklama: "Maliyeti BİLİNEN mal üstüne kâr eklenerek satılır: Maliyet + Kâr = Fiyat.", kategori: "Katılım BES" },

    // İKTİSAT
    { id: 37, ifade: "Stagflasyon, fiyatların sürekli düşmesi anlamına gelir.", dogru: false, aciklama: "O deflasyondur! Stagflasyon = Durgunluk + Enflasyon aynı anda.", kategori: "İktisat" },
    { id: 38, ifade: "İkame malda, birinin fiyatı artınca diğerinin talebi artar.", dogru: true, aciklama: "Çay-Kahve gibi. Biri pahalanınca diğerine yönelirsin.", kategori: "İktisat" },
    { id: 39, ifade: "Tamamlayıcı malda, birinin fiyatı düşünce diğerinin talebi de düşer.", dogru: false, aciklama: "Biri DÜŞÜNCE diğerinin talebi ARTAR! Araba ucuzlarsa benzin talebi artar.", kategori: "İktisat" },
    { id: 40, ifade: "GSYİH, Türk vatandaşlarının yurt dışı dahil tüm üretimini kapsar.", dogru: false, aciklama: "O GSMH'dir! GSYİH = Ülke SINIRI içindeki tüm üretim (yabancılar dahil).", kategori: "İktisat" },

    // SATIŞ
    { id: 41, ifade: "Maslow'un ihtiyaçlar hiyerarşisinde en temel basamak güvenlik ihtiyacıdır.", dogru: false, aciklama: "En temel basamak FİZYOLOJİK ihtiyaçlardır (yemek, su, uyku)!", kategori: "Satış/Pazarlama" },
    { id: 42, ifade: "Pazara yüksek fiyatla girip sonra düşürme stratejisine 'Kaymağını Alma' denir.", dogru: true, aciklama: "Düşük fiyatla girme ise 'Derinliğine Girme' (Nüfuz Etme) stratejisidir.", kategori: "Satış/Pazarlama" },
    { id: 43, ifade: "Satış sürecinin ilk adımı ürün sunumudur.", dogru: false, aciklama: "İlk adım HAZIRLIK ve POTANSİYEL MÜŞTERİ YARATMA'dır.", kategori: "Satış/Pazarlama" },

    // SOSYAL GÜVENLİK
    { id: 44, ifade: "BES (3. basamak) dağıtım modeline göre çalışır.", dogru: false, aciklama: "BES FONLAMA modeline göre çalışır! Dağıtım modeli SGK'dır (1. basamak).", kategori: "Sosyal Güvenlik" },
    { id: 45, ifade: "SEDDK, emeklilik şirketlerinin kurallarını belirleyen baş denetim organıdır.", dogru: true, aciklama: "SEDDK = Baş Hakem. SPK fon izni verir. EGM sınav yapar.", kategori: "Sosyal Güvenlik" },
];
