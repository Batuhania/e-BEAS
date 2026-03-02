// Bilgi Bazlı Flashcard Verileri
// Konu anlatımından süzülmüş hızlı bilgi kartları - soru değil, bilgi ölçen kartlar

export const flashcardData = [
    // ============== BES MEVZUATI ==============
    { id: 1, kategori: "BES Mevzuatı", on: "Emeklilik şartları nelerdir?", arka: "En az 10 yıl sistemde kalma + 56 yaşını doldurma. İkisi birden olmalı!", onem: "kritik" },
    { id: 2, kategori: "BES Mevzuatı", on: "Cayma hakkı süresi nedir?", arka: "Teklifin imzalanmasından itibaren 2 ay (60 gün). Fon işletim gideri hariç tüm kesintiler iade edilir.", onem: "kritik" },
    { id: 3, kategori: "BES Mevzuatı", on: "Aktarım için minimum bekleme süresi?", arka: "En az 2 yıl (aktarımla gelindiyse 1 yıl). Lehdar aktarım talep EDEMEZ!", onem: "yuksek" },
    { id: 4, kategori: "BES Mevzuatı", on: "YGK + Giriş Aidatı tavanı nedir?", arka: "İlk 5 yılda her yıl brüt asgari ücretin max %8.5'i. 33.000 TL ise → 2.805 TL/yıl. Limit şirketler arası ORTAKTIR!", onem: "kritik" },
    { id: 5, kategori: "BES Mevzuatı", on: "Stopaj nereden kesilir?", arka: "Sadece GETİRİDEN (irattan) kesilir. Ana paradan ve devlet katkısından KESİLMEZ! Oranlar: Emekli %5, 10 yıl+ %10, <10 yıl %15.", onem: "kritik" },
    { id: 6, kategori: "BES Mevzuatı", on: "Devlet katkısı yıllık limiti?", arka: "Yıllık brüt asgari ücret toplamının %20'si. Gecikme cezalarına DK ödenmez!", onem: "yuksek" },
    { id: 7, kategori: "BES Mevzuatı", on: "DK hak ediş: 3 yıldan az kalırsan?", arka: "%0 — Sıfır! Hiçbir devlet katkısı alamazsın.", onem: "kritik" },
    { id: 8, kategori: "BES Mevzuatı", on: "DK hak ediş: 3-6 yıl kalırsan?", arka: "%15 oranında devlet katkısı alırsın.", onem: "yuksek" },
    { id: 9, kategori: "BES Mevzuatı", on: "DK hak ediş: 6-10 yıl kalırsan?", arka: "%35 oranında devlet katkısı alırsın.", onem: "yuksek" },
    { id: 10, kategori: "BES Mevzuatı", on: "DK hak ediş: 10 yıl+ (emekli olmadan)?", arka: "%60 oranında devlet katkısı alırsın.", onem: "yuksek" },
    { id: 11, kategori: "BES Mevzuatı", on: "DK hak ediş: Emeklilik / Vefat / Maluliyet?", arka: "%100 — Hediyenin TAMAMI senindir!", onem: "kritik" },
    { id: 12, kategori: "BES Mevzuatı", on: "İşveren katkısı hak kazanma süresi?", arka: "En fazla 7 yıl. Devlet katkısı hak ediş süreleriyle (3-6-10) KARIŞTIRILMAMALI!", onem: "kritik" },
    { id: 13, kategori: "BES Mevzuatı", on: "Kısmen ödeme limiti nedir?", arka: "Birikimin en fazla %50'si çekilebilir.", onem: "yuksek" },
    { id: 14, kategori: "BES Mevzuatı", on: "Evlilik/Konut için kısmen ödemede DK oranı?", arka: "%20. Şart: 5 yıl sistemde + 5× asgari ücret ödemiş + 3 yıl kalma taahhüdü.", onem: "kritik" },
    { id: 15, kategori: "BES Mevzuatı", on: "Doğal afet için kısmen ödemede DK oranı?", arka: "%25. Süre ve birikim şartı ARANMAZ! En avantajlı durum.", onem: "kritik" },
    { id: 16, kategori: "BES Mevzuatı", on: "Alacağın devri kuralları?", arka: "Kredi kapanana kadar sözleşme sonlandırılamaz ve aktarılamaz. İşveren grubu ve DK devre konu EDİLEMEZ!", onem: "yuksek" },
    { id: 17, kategori: "BES Mevzuatı", on: "Haczedilemez tutar formülü?", arka: "(Kalınan ay sayısı × Brüt asgari ücret). Yıllık gelir sigortasına bağlanan maaş ise hiç haczedilemez.", onem: "yuksek" },
    { id: 18, kategori: "BES Mevzuatı", on: "Vergi indirimi tavanı?", arka: "Sigorta primi: ödendiği ayki brüt ücretin %15'i ve yıllık asgari ücret tutarını aşamaz.", onem: "yuksek" },
    { id: 19, kategori: "BES Mevzuatı", on: "Vatandaşlık Emeklilik Planı kuralları?", arka: "Min. 500.000 USD + 3 yıl kalma + Giriş aidatı ALINAMAZ.", onem: "orta" },
    { id: 20, kategori: "BES Mevzuatı", on: "BEFAS nedir ve kim işletir?", arka: "Fon Alım Satım Platformu. EGM işletir. Emeklilik Gelir Planları BEFAS'ta işlem GÖRMEZ.", onem: "orta" },
    { id: 21, kategori: "BES Mevzuatı", on: "Fon dağılım değişikliği limiti?", arka: "Yılda max 12 kez. Emeklilik planı değişikliği ise max 4 kez.", onem: "orta" },
    { id: 22, kategori: "BES Mevzuatı", on: "Düzensiz ödeme ne zaman olur?", arka: "Art arda 3 ay ödeme yapılmazsa. Şirkete ek YGK kesinti hakkı doğar.", onem: "orta" },
    { id: 23, kategori: "BES Mevzuatı", on: "Emeklilik fonunun tüzel kişiliği var mı?", arka: "HAYIR! Fon = malvarlığı havuzu. Tüzel kişiliği yoktur. Haczedilemez, rehnedilemez, iflas masasına dahil edilemez.", onem: "kritik" },
    { id: 24, kategori: "BES Mevzuatı", on: "Aranmayan paralar ne olur?", arka: "5 yıl talep edilmeyen paralar Merkez Bankası'na (TCMB) devredilir.", onem: "orta" },

    // ============== SOSYAL GÜVENLİK ==============
    { id: 25, kategori: "Sosyal Güvenlik", on: "3 basamaklı güvenlik sistemi?", arka: "1) Zorunlu devlet (SGK/Dağıtım). 2) Mesleki sandıklar (OYAK). 3) Gönüllü BES (Fonlama).", onem: "yuksek" },
    { id: 26, kategori: "Sosyal Güvenlik", on: "Dağıtım modeli nedir?", arka: "Gençlerin primleriyle emeklilerin maaşı ödenir (SGK). Aktif/Pasif dengesi hayati!", onem: "yuksek" },
    { id: 27, kategori: "Sosyal Güvenlik", on: "Fonlama modeli nedir?", arka: "Herkes kendi hesabında biriktir (BES). Nüfus değişimlerinden etkilenmez.", onem: "yuksek" },
    { id: 28, kategori: "Sosyal Güvenlik", on: "İşsizlik maaşı şartı?", arka: "En az 600 gün prim. Son 4 ay ort. brütün %40'ı, max 300 gün ödenir.", onem: "yuksek" },

    // ============== FİNANS VE YATIRIM ==============
    { id: 29, kategori: "Finans", on: "Para piyasası vs Sermaye piyasası?", arka: "Para: <1 yıl vadeli. Sermaye: >1 yıl vadeli araçlar.", onem: "yuksek" },
    { id: 30, kategori: "Finans", on: "Birincil vs İkincil piyasa?", arka: "Birincil: İlk kez satılan (ihraç). İkincil: Borsa gibi sonradan el değiştiren.", onem: "yuksek" },
    { id: 31, kategori: "Finans", on: "Spot vs Türev piyasa?", arka: "Spot: Anında teslimat. Türev: Gelecekte teslimat.", onem: "yuksek" },
    { id: 32, kategori: "Finans", on: "Hisse senedi ne hak verir?", arka: "Ortaklık (mülkiyet). Vadesi yok. Temettü + sermaye kazancı. Rüçhan hakkı var. Nominal altında satılamaz.", onem: "yuksek" },
    { id: 33, kategori: "Finans", on: "Tahvil ne hak verir?", arka: "Alacaklılık (borç). Vadesi var. Faiz geliri. Nominal altında (iskontolu) satılabilir.", onem: "yuksek" },
    { id: 34, kategori: "Finans", on: "TAHTEREVALLİ KURALI?", arka: "Tahvil fiyatı ↑ = faiz ↓. Tahvil fiyatı ↓ = faiz ↑. TERS ORANTI! %100 çıkar.", onem: "kritik" },
    { id: 35, kategori: "Finans", on: "TCMB Repo ne yapar?", arka: "Piyasaya para VERİR → Para bollaşır → TL faizi DÜŞER → Döviz ARTAR.", onem: "kritik" },
    { id: 36, kategori: "Finans", on: "TCMB Ters Repo ne yapar?", arka: "Piyasadan para ÇEKER → Para azalır → TL faizi ARTAR → Döviz DÜŞER.", onem: "kritik" },
    { id: 37, kategori: "Finans", on: "A Tipi fon nedir?", arka: "Portföyünün min %25'i hisse senedinden oluşan fon.", onem: "orta" },
    { id: 38, kategori: "Finans", on: "Likit fon özellikleri?", arka: "Max 184 gün vadeli araçlar. Ağırlıklı ortalama vade max 45-60 gün.", onem: "orta" },
    { id: 39, kategori: "Finans", on: "Rüçhan hakkı nedir?", arka: "Şirket yeni hisse çıkarınca mevcut ortakların öncelikli alma hakkı.", onem: "orta" },
    { id: 40, kategori: "Finans", on: "Fon mevduat sınırı?", arka: "Bir emeklilik fonu parasının max %30'unu bankaya mevduat yatırabilir.", onem: "orta" },

    // ============== SATIŞ VE PAZARLAMA ==============
    { id: 41, kategori: "Satış/Pazarlama", on: "Maslow'da en temel ihtiyaç?", arka: "Fizyolojik ihtiyaçlar: Yeme, içme, uyku. Karnı aç olan BES yaptırmaz!", onem: "yuksek" },
    { id: 42, kategori: "Satış/Pazarlama", on: "Empati nedir?", arka: "Kendini karşıdakinin (müşterinin) yerine koyabilmek.", onem: "yuksek" },
    { id: 43, kategori: "Satış/Pazarlama", on: "Son Şans Tekniği?", arka: "'Elimdeki son ürün, stokta bitti bitiyor!' → Aciliyet yaratma.", onem: "yuksek" },
    { id: 44, kategori: "Satış/Pazarlama", on: "Kızıştırma Tekniği?", arka: "'Almazsanız başkasına satacağım, bekleyen var!' → Rekabet duygusu.", onem: "yuksek" },
    { id: 45, kategori: "Satış/Pazarlama", on: "Pazarın Kaymağını Alma?", arka: "Pazara YÜKSEK fiyatla gir, yatırımı kurtar, rakipler gelince düşür.", onem: "yuksek" },
    { id: 46, kategori: "Satış/Pazarlama", on: "Pazara Derinliğine Girme?", arka: "Pazara DÜŞÜK fiyatla gir, herkese yayıl (nüfuz etme).", onem: "yuksek" },
    { id: 47, kategori: "Satış/Pazarlama", on: "Sinerji nedir?", arka: "1+1 = 3 etkisi. Birlikte çalışarak tek tek yapılandan daha büyük güç üretme.", onem: "orta" },
    { id: 48, kategori: "Satış/Pazarlama", on: "Satış süreci sırası?", arka: "Hazırlık → İlk temas → İhtiyaç belirleme → Ürün sunumu → Kapanış.", onem: "yuksek" },
    { id: 49, kategori: "Satış/Pazarlama", on: "Ürün hayat eğrisi?", arka: "Sunuş → Büyüme → Olgunluk → Gerileme.", onem: "orta" },

    // ============== KATILIM BES ==============
    { id: 50, kategori: "Katılım BES", on: "Muamelat nedir?", arka: "Fıkhın (İslam hukuku) ticari konuları inceleyen bölümü.", onem: "yuksek" },
    { id: 51, kategori: "Katılım BES", on: "İslam'ın 4 temel kaynağı?", arka: "Asli: Kur'an + Sünnet. Tali: İcma (görüş birliği) + Kıyas (benzer olaya hüküm verme).", onem: "kritik" },
    { id: 52, kategori: "Katılım BES", on: "Kavli / Fiili / Takriri Sünnet?", arka: "Kavli: Peygamberin SÖZLERİ. Fiili: DAVRANIŞLARI. Takriri: Başkasının eylemini ONAYLAMASI.", onem: "yuksek" },
    { id: 53, kategori: "Katılım BES", on: "Murabaha nedir?", arka: "Maliyeti bilinen malın üstüne kâr ekleyip satma. (Maliyet + Kâr = Fiyat)", onem: "kritik" },
    { id: 54, kategori: "Katılım BES", on: "Mudarebe nedir? Zarar olursa?", arka: "Emek + Sermaye ortaklığı. Zarar → sadece SERMAYEDAR üstlenir! Emekçinin emeği boşa gider.", onem: "kritik" },
    { id: 55, kategori: "Katılım BES", on: "Muşareke nedir? Zarar olursa?", arka: "Sermaye + Sermaye ortaklığı. Zarar → SERMAYE ORANINDA paylaşılır. Kâr → anlaşılan oranda.", onem: "kritik" },
    { id: 56, kategori: "Katılım BES", on: "Selem nedir?", arka: "Para PEŞİN, mal VERESİYE. Tarımda kullanılır (mahsulü önceden alma).", onem: "yuksek" },
    { id: 57, kategori: "Katılım BES", on: "İstisna nedir?", arka: "Ortada OLMAYAN malın sipariş üzerine üretimi. İmalat/inşaat.", onem: "yuksek" },
    { id: 58, kategori: "Katılım BES", on: "İcare nedir?", arka: "Kiralama = Leasing. Sukuk (kira sertifikası) da bu gruba girer.", onem: "yuksek" },
    { id: 59, kategori: "Katılım BES", on: "Liaynihi vs Ligayrihi Haram?", arka: "Liaynihi: ÖZÜ itibariyle haram (faiz, içki). Ligayrihi: Aslında helal ama DIŞ sebepten haram (Cuma ticareti).", onem: "kritik" },
    { id: 60, kategori: "Katılım BES", on: "Danışma Komitesi kaç kişi?", arka: "En az 3 kişi. Katılım fonlarındaki faizsizliği denetler ve onaylar.", onem: "yuksek" },
    { id: 61, kategori: "Katılım BES", on: "Tekâfül nedir?", arka: "İslami sigorta modeli. Hibe (yardımlaşma) esaslı. Sermayedar fonu ve risk fonu AYRI yönetilir.", onem: "yuksek" },
    { id: 62, kategori: "Katılım BES", on: "Sarf / Karz / Rehin ne demek?", arka: "Sarf: Döviz bozdurma. Karz: Borç verme. Rehin: İpotek/teminat.", onem: "orta" },
    { id: 63, kategori: "Katılım BES", on: "İcap ve Kabul?", arka: "İcap: İlk teklifi yapma. Kabul: Teklifi onaylama.", onem: "orta" },

    // ============== İKTİSAT ==============
    { id: 64, kategori: "İktisat", on: "Stagflasyon nedir?", arka: "Durgunluk (işsizlik) + Enflasyon AYNI ANDA. En kötü ekonomik hastalık!", onem: "kritik" },
    { id: 65, kategori: "İktisat", on: "Deflasyon nedir?", arka: "Fiyatların sürekli ve düzenli olarak DÜŞMESİ. Enflasyonun tersi.", onem: "yuksek" },
    { id: 66, kategori: "İktisat", on: "Fırsat (Alternatif) Maliyeti?", arka: "Bir şeyi seçerken VAZGEÇTİĞİN diğerinin değeri. Sinemaya gidersen kitap okuyamazsın.", onem: "yuksek" },
    { id: 67, kategori: "İktisat", on: "İkame mal nedir? Örnek?", arka: "Çay-Kahve: Biri yükselince diğerinin talebi ARTAR.", onem: "yuksek" },
    { id: 68, kategori: "İktisat", on: "Tamamlayıcı mal nedir? Örnek?", arka: "Araba-Benzin: Biri düşünce diğerinin talebi de DÜŞER.", onem: "yuksek" },
    { id: 69, kategori: "İktisat", on: "Tam Rekabet piyasası?", arka: "Çok alıcı, çok satıcı, homojen (aynı) ürünler. Fiyatı piyasa belirler.", onem: "orta" },
    { id: 70, kategori: "İktisat", on: "Oligopol piyasa?", arka: "Az sayıda dev firma piyasayı kontrol eder (GSM operatörleri gibi).", onem: "orta" },
    { id: 71, kategori: "İktisat", on: "Verimlilik nedir?", arka: "Çıktı / Girdi oranı.", onem: "orta" },
    { id: 72, kategori: "İktisat", on: "Konsorsiyum vs Kartel?", arka: "Konsorsiyum: Proje için geçici birleşme (legal). Kartel: Fiyat anlaşması yapıp rekabeti önleme (illegal).", onem: "orta" },
    { id: 73, kategori: "İktisat", on: "GSYİH vs GSMH?", arka: "GSYİH: Ülke SINIRI içindeki tüm üretim (yabancılar dahil). GSMH: Türk vatandaşlarının (yurt dışı dahil) üretimi.", onem: "orta" },

    // ============== SİGORTACILIK ==============
    { id: 74, kategori: "Sigortacılık", on: "Tazminat prensibi?", arka: "Amaç: Zenginleştirmek DEĞİL, eski haline getirmek. Gerçek hasardan fazlası ödenmez.", onem: "yuksek" },
    { id: 75, kategori: "Sigortacılık", on: "Halefiyet (Rücu) nedir?", arka: "Şirket hasarı SIZE öder → sonra kusurluya SİZİN ADINIZA dava açar.", onem: "yuksek" },
    { id: 76, kategori: "Sigortacılık", on: "Broker vs Acente?", arka: "Broker: MÜŞTERİYİ temsil eder (bağımsız). Acente: ŞİRKETİ temsil eder (bölgesel).", onem: "kritik" },
    { id: 77, kategori: "Sigortacılık", on: "Eksper vs Aktüer?", arka: "Eksper: Hasar miktarını belirleyen TARAFSIZ uzman. Aktüer: Prim hesaplayan MATEMATİK uzmanı.", onem: "yuksek" },
    { id: 78, kategori: "Sigortacılık", on: "Sedan vs Sesyon (Reasürans)?", arka: "Sedan: Riski DEVREDEN (satan) şirket. Sesyon: Devredilen iş MIKTARI.", onem: "yuksek" },
    { id: 79, kategori: "Sigortacılık", on: "Eksik Sigorta nedir?", arka: "Poliçe değeri < gerçek değer. Hasarda nispet kaidesi (orantılı kesinti) uygulanır.", onem: "yuksek" },
    { id: 80, kategori: "Sigortacılık", on: "Tahkim Komisyonu kuralı?", arka: "15.000 TL ve üzeri uyuşmazlıklarda Hakem Heyeti kurulması ZORUNLUDUR.", onem: "yuksek" },
    { id: 81, kategori: "Sigortacılık", on: "Mortalite vs Morbidite?", arka: "Mortalite: Yaşama/ÖLÜM istatistikleri. Morbidite: HASTALIK/maluliyet istatistikleri.", onem: "orta" },
    { id: 82, kategori: "Sigortacılık", on: "Tenzil nedir?", arka: "Prim ödeyemeyince poliçenin 'ücretsiz sigortaya' dönüşmesi.", onem: "orta" },
    { id: 83, kategori: "Sigortacılık", on: "Hasar ödeme şekilleri?", arka: "Nakit / Onarım / Yenisini koyma. TAKAS yapılamaz!", onem: "orta" },

    // ============== İŞLETME ==============
    { id: 84, kategori: "İşletme", on: "Yönetim fonksiyonları sırası?", arka: "Planlama → Örgütleme → Koordinasyon (Yöneltme) → Kontrol.", onem: "yuksek" },
    { id: 85, kategori: "İşletme", on: "Matriks örgüt yapısı?", arka: "Çalışan birden fazla yöneticiye/departmana bağlı (çapraz yapı).", onem: "orta" },
    { id: 86, kategori: "İşletme", on: "Proaktif vs Reaktif?", arka: "Proaktif: Olay OLMADAN önce tedbir alma. Reaktif: Olay OLDUKTAN sonra tepki verme.", onem: "orta" },

    // ============== HESAPLAMA ==============
    { id: 87, kategori: "Hesaplama", on: "İrat nasıl hesaplanır?", arka: "İrat = Toplam Birikim - Anapara - Devlet Katkısı. Stopaj bu İrat üzerinden hesaplanır!", onem: "kritik" },
    { id: 88, kategori: "Hesaplama", on: "Aktarımda kalan kesinti limiti?", arka: "2.805 TL - Eski şirketin kestiği = Yeni şirketin kesebileceği. Örnek: 2.805 - 2.500 = 305 TL.", onem: "kritik" },
    { id: 89, kategori: "Hesaplama", on: "Net faiz hesabı?", arka: "Brüt Faiz - (Brüt Faiz × Stopaj Oranı). Örn: %6 brüt, %15 stopaj → 6-(6×0.15) = %5.10 net.", onem: "yuksek" },
    { id: 90, kategori: "Hesaplama", on: "Haciz koruma tutarı formülü?", arka: "Kalınan ay sayısı × Brüt asgari ücret = Haczedilemez tutar.", onem: "yuksek" },
];
