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

    // ============== OKS (OTOMATİK KATILIM) ==============
    { id: 91, kategori: "BES Mevzuatı", on: "OKS'de kimler kapsam dışıdır?", arka: "Kendi adına bağımsız çalışanlar (esnaf, serbest meslek). OKS sadece maaşlı çalışanlara (işçi/memur) zorunludur.", onem: "kritik" },
    { id: 92, kategori: "BES Mevzuatı", on: "OKS kesinti oranı nedir?", arka: "Prime esas kazancın (SGK matrahı) %3'ü. Asgari ücretten DEĞİL!", onem: "kritik" },
    { id: 93, kategori: "BES Mevzuatı", on: "OKS'de ilk para nereye yatırılır?", arka: "Başlangıç Fonu'na zorunlu olarak yönlendirilir.", onem: "yuksek" },
    { id: 94, kategori: "BES Mevzuatı", on: "OKS'de şirketi kim seçer?", arka: "İşveren (patron) seçer. Ancak çalışanın ara verme ve fon dağılım değiştirme hakkı vardır, patron bunu engelleyemez.", onem: "yuksek" },
    { id: 95, kategori: "BES Mevzuatı", on: "OKS'de işveren kendi cebinden ödeme yapar mı?", arka: "HAYIR! İşveren sadece maaştan keserek aktaran bir aracıdır. Kendi cebinden ödeme zorunluluğu yoktur.", onem: "kritik" },

    // ============== SÖZLEŞME VE SİSTEM ==============
    { id: 96, kategori: "BES Mevzuatı", on: "BES, SGK'nın alternatifi midir?", arka: "HAYIR! BES sadece tamamlayıcıdır. SGK zorunlu, BES gönüllü. BES ile sağlık hizmeti alınamaz, SGK'ya prim aktarılamaz.", onem: "kritik" },
    { id: 97, kategori: "BES Mevzuatı", on: "Kaç sözleşme yapılabilir?", arka: "SINIR YOKTUR! Her katılımcı istediği şirketten sınırsız sözleşme yapabilir.", onem: "yuksek" },
    { id: 98, kategori: "BES Mevzuatı", on: "Emeklilik Planı nedir ve nereye kaydedilir?", arka: "İşin matematiğini anlatan Teknik Esaslardır. EGM'nin elektronik plan tanımlama sisteminde kayda alınır.", onem: "orta" },
    { id: 99, kategori: "BES Mevzuatı", on: "4632 sayılı BES kanunu ne yapar?", arka: "Tek amacı: Katkı paylarının fonlarda toplanması ve değerlendirilmesi. Borsa veya sigorta şirketi kuruluşuna KARIŞMAZ.", onem: "orta" },
    { id: 100, kategori: "BES Mevzuatı", on: "Katkı payı ara verme kuralı?", arka: "İSTEDİĞİN ZAMAN ara verebilirsin. 5 yıl beklemeye veya onay almaya gerek yok. Boş geçen süre 10 yıl süresinden sayılır.", onem: "yuksek" },
    { id: 101, kategori: "BES Mevzuatı", on: "3 ay üst üste ödemezsen ne olur?", arka: "Şirket ek yönetim gideri kesintisi cezası alır (düzensiz ödeme).", onem: "yuksek" },

    // ============== OPERASYONEL SÜRELER ==============
    { id: 102, kategori: "BES Mevzuatı", on: "Katkı payı yatırım talimatı süresi?", arka: "Paranın hesaba intikalinden sonra en geç 2. iş günü.", onem: "yuksek" },
    { id: 103, kategori: "BES Mevzuatı", on: "Ayrılma bilgi formu süresi?", arka: "Talepten sonra en geç 5 iş günü içinde gönderilir.", onem: "yuksek" },
    { id: 104, kategori: "BES Mevzuatı", on: "Plan değişikliği yıllık kotası?", arka: "Fon dağılımı: Yılda max 12 kez. Emeklilik planı: Yılda max 4 kez.", onem: "kritik" },
    { id: 105, kategori: "BES Mevzuatı", on: "Hesap bildirim cetveli ne zaman gönderilir?", arka: "Hesap dönemini takip eden 10 iş günü içinde.", onem: "orta" },

    // ============== EMEKLİLİK EVRESİ ==============
    { id: 106, kategori: "BES Mevzuatı", on: "Emekli olan ama susan müşteriye ne olur?", arka: "Sözleşmesi askıya ALINMAZ, yürürlükte kalır.", onem: "orta" },
    { id: 107, kategori: "BES Mevzuatı", on: "Emekli maaş tutarı ne sıklıkla değiştirilebilir?", arka: "Yılda en fazla 2 kez.", onem: "yuksek" },
    { id: 108, kategori: "BES Mevzuatı", on: "Emekliliğe 2 yıl kala şirket ne yapar?", arka: "Müşteriye düşük riskli fonlara geçiş ÖNERMESİ zorunludur.", onem: "yuksek" },
    { id: 109, kategori: "BES Mevzuatı", on: "Devlet katkısı yıllık tavanı?", arka: "İlgili yılın brüt asgari ücret toplamının %30'u.", onem: "kritik" },
    { id: 110, kategori: "BES Mevzuatı", on: "Vergi oranlarını kim belirler?", arka: "Stopaj oranlarını %0'a indirme veya %15'e çıkarma yetkisi Cumhurbaşkanı'ndadır.", onem: "yuksek" },
    { id: 111, kategori: "BES Mevzuatı", on: "Vefat tazminatı vergilendirilir mi?", arka: "HAYIR! Ferdi kaza sonucu ödenen vefat tazminatı hiçbir şekilde vergilendirilmez.", onem: "kritik" },
    { id: 112, kategori: "BES Mevzuatı", on: "İmza kimin? (İşveren Grup)", arka: "Teklif ve giriş formunu bizzat İŞVEREN (patron) imzalar, işçi DEĞİL!", onem: "yuksek" },

    // ============== ŞİRKET KURULUŞ ==============
    { id: 113, kategori: "BES Mevzuatı", on: "Şirket kuruluş için en önemli belge?", arka: "İş Planı ve Sistem Tasarımı ile Yapılabilirlik (Fizibilite) Raporu.", onem: "yuksek" },
    { id: 114, kategori: "BES Mevzuatı", on: "Şirket hisseleri nasıl olmalı?", arka: "Nama Yazılı (isime yazılı). Hamiline yazılı OLAMAZ! Sermayenin %51'i tecrübeli tüzel kişilere ait olmalı.", onem: "kritik" },
    { id: 115, kategori: "BES Mevzuatı", on: "YK ve FK kaç kişi? GM tecrübe?", arka: "Yönetim Kurulu: min 5 kişi. Fon Kurulu: min 3 kişi. Genel Müdür: 10 yıl, Yardımcısı: 7 yıl tecrübe.", onem: "kritik" },
    { id: 116, kategori: "BES Mevzuatı", on: "Aracı lisansı iptal olursa?", arka: "3 yıl boyunca sınava giremez. 5 yıl kasten hapis yatan, 1. derece imza yetkilisi olamaz.", onem: "yuksek" },
    { id: 117, kategori: "BES Mevzuatı", on: "Eğitim zorunluluğu nedir?", arka: "İlk 2 yıl içinde ve sonraki her yıl tamamlayıcı eğitim almak ZORUNLU. Almazsa satış yetkisi iptal.", onem: "yuksek" },

    // ============== FON KURALLARI ==============
    { id: 118, kategori: "Finans", on: "Fonların tüzel kişiliği ve vergi durumu?", arka: "Fonların tüzel kişiliği YOKTUR, Kurumlar Vergisinden MUAFTIR. Emeklilik ŞİRKETLERİ vergi öder.", onem: "kritik" },
    { id: 119, kategori: "Finans", on: "Fonların ömrü ve korunması?", arka: "SÜRESİZ kurulur. Haczedilemez, iflas masasına giremez, TEMİNAT gösterilemez. Personel maaşı fondan ödenmez.", onem: "kritik" },
    { id: 120, kategori: "Finans", on: "Fonun kuruluşu nasıl tamamlanır?", arka: "İçtüzüğün Ticaret Siciline Tescili ile. Her fonun ayrı içtüzüğü olmalı, ortak içtüzük ONAYLANAMAZ.", onem: "yuksek" },
    { id: 121, kategori: "Finans", on: "Takasbank ne iş yapar?", arka: "Saklama (kasa) + Kontrol. Yediemin DEĞİLDİR! Aynı zamanda fon portföyünün SPK kurallarına uygunluğunu kontrol eder.", onem: "yuksek" },
    { id: 122, kategori: "Finans", on: "Fon başlangıç tutarı ne kadar?", arka: "Şirket sermayesinin en az 1/20'si. 3 zorunlu fon kurulmalı.", onem: "orta" },
    { id: 123, kategori: "Finans", on: "DK fonunda sınırlar?", arka: "Mevduat max %6, tek hisse max %1.", onem: "yuksek" },
    { id: 124, kategori: "Finans", on: "%51 BİST kuralı nedir?", arka: "En az %51 Borsa İstanbul hissesi barındıran fonlar, 1 yıldan fazla tutulursa satışta stopaj SIFIR.", onem: "kritik" },
    { id: 125, kategori: "Finans", on: "İştirak Kazancı vs Kâr Payı?", arka: "Şirket başka şirketten kâr alırsa: İştirak Kazancı. Gerçek kişi alırsa: Kâr Payı.", onem: "orta" },
    { id: 126, kategori: "Finans", on: "Uydurma fon türleri?", arka: "'Özel Fon' veya 'A Tipi / B Tipi Fon' diye resmi BES fon türü YOKTUR!", onem: "kritik" },
    { id: 127, kategori: "Finans", on: "Döviz değerlemesi hangi kurla?", arka: "Yabancı paraların TL değeri daima TCMB Döviz ALIŞ Kuru ile hesaplanır.", onem: "yuksek" },
    { id: 128, kategori: "Finans", on: "Likidite riski nedir?", arka: "İkincil piyasada satmak istendiğinde yeterli alıcı bulunamaması.", onem: "orta" },
    { id: 129, kategori: "Finans", on: "Spesifik risk nedir?", arka: "Portföy çeşitlendirmesiyle azaltılabilen şirkete özgü risk. Grevler de bu gruba girer.", onem: "orta" },

    // ============== SGK VE SOSYAL GÜVENLİK ==============
    { id: 130, kategori: "Sosyal Güvenlik", on: "SGK ne DEĞİLDİR?", arka: "Sosyal hizmet (bakımevi/çocuk esirgeme) DEĞİL! SGK bir çatı sigorta kurumudur.", onem: "yuksek" },
    { id: 131, kategori: "Sosyal Güvenlik", on: "SGK kime yardım etmez?", arka: "Maaş alan, sağlığı yerinde ÇALIŞANLARA gelir yardımı yapmaz.", onem: "yuksek" },
    { id: 132, kategori: "Sosyal Güvenlik", on: "SGK primsiz sisteme hizmet eder mi?", arka: "EVET! 'Sadece prim ödeyenlere hizmet verir' YALANDIR. Muhtaç bireylere yardım programları içerir.", onem: "kritik" },
    { id: 133, kategori: "Sosyal Güvenlik", on: "Aktif-Pasif dengesi nedir?", arka: "Aktif (çalışan) = Gelir, Pasif (emekli) = Gider. Bu oran yükseliyorsa gelişmiş ülke DEĞİLDİR.", onem: "yuksek" },
    { id: 134, kategori: "Sosyal Güvenlik", on: "İşsizlik maaşı formülü?", arka: "Son 4 ay brüt ortalamanın %40'ı, max brüt asgari ücretin %80'i, max 300 gün ödenir.", onem: "kritik" },
    { id: 135, kategori: "Sosyal Güvenlik", on: "Ücret Garanti Fonu?", arka: "İşveren iflas ederse işçinin SON 3 AYLIK maaşı bu fondan ödenir. Fonun kaynağı: İşveren işsizlik sigortası payı.", onem: "yuksek" },
    { id: 136, kategori: "Sosyal Güvenlik", on: "Meslek hastalığı vs iş kazası?", arka: "Tekrarlanan sebeple/zamana yayılarak = Meslek Hastalığı. Anlık/hemen olan = İş Kazası.", onem: "yuksek" },
    { id: 137, kategori: "Sosyal Güvenlik", on: "Kayıt dışını ne teşvik ETMEZ?", arka: "BES'i (özel emekliliği) tercih etmek yasal bir tercihtir, kaçak çalışmayı teşvik ETMEZ.", onem: "orta" },
    { id: 138, kategori: "Sosyal Güvenlik", on: "SGK açığı neyi artırır?", arka: "Kamu borcunu ve enflasyonu patlatır. Ancak CARİ AÇIĞI artırmaz!", onem: "orta" },

    // ============== VERGİ ==============
    { id: 139, kategori: "Finans", on: "Vergi süreçleri sırası?", arka: "Tarh (hesaplama) → Tebliğ (bildirme) → Tahakkuk (ödenecek hale gelme) → Tahsil (ödeme).", onem: "kritik" },
    { id: 140, kategori: "Finans", on: "Muafiyet vs İstisna?", arka: "Muafiyet: KİŞİYE uygulanır. İstisna: KONUYA/işleme uygulanır.", onem: "kritik" },
    { id: 141, kategori: "Finans", on: "Vefat tazminatı vergisi?", arka: "Mirasçılara ödenirse: Veraset-İntikal Vergisi. Lehdara ödenirse: İvazsız İktisap → yine Veraset-İntikal.", onem: "yuksek" },
    { id: 142, kategori: "Finans", on: "Beyanname tarihleri?", arka: "Gelir Vergisi: MART ayında. Kurumlar Vergisi: NİSAN ayında verilir.", onem: "orta" },

    // ============== SİGORTACILIK EK ==============
    { id: 143, kategori: "Sigortacılık", on: "Zımni kabul kuralı?", arka: "Hayat sigortası teklifine şirket 30 gün içinde 'Hayır' demezse teklif otomatik KABUL edilmiş sayılır.", onem: "yuksek" },
    { id: 144, kategori: "Sigortacılık", on: "Sigorta zamanaşımı süresi?", arka: "Sigorta sözleşmesinden doğan talepler 2 yılda zamanaşımına uğrar.", onem: "yuksek" },
    { id: 145, kategori: "Sigortacılık", on: "Poliçe saatleri?", arka: "Aksi kararlaştırılmadıkça Türkiye saati ile öğlen 12:00'de başlar, 12:00'de biter.", onem: "orta" },
    { id: 146, kategori: "Sigortacılık", on: "Çifte sigorta vs Müşterek sigorta?", arka: "Çifte: Aynı malı gizlice 2 şirkete sigortalamak (şirketler zararı paylaşır). Müşterek (Koasürans): Büyük riskin organize şekilde birden çok şirketçe sigortalanması.", onem: "kritik" },
    { id: 147, kategori: "Sigortacılık", on: "Konservasyon nedir?", arka: "Reasüransta şirketin kendi üzerinde tuttuğu risk payı.", onem: "orta" },
    { id: 148, kategori: "Sigortacılık", on: "Sermaye İtfa Sigortası?", arka: "İçinde ölüm/kaza riski TAŞIMAYAN, sadece birikim amaçlı hayat sigortası.", onem: "orta" },
    { id: 149, kategori: "Sigortacılık", on: "Komütasyon Tablosu?", arka: "Mortalite/Morbidite tablolarının teknik faizle iskonto edilmiş (hesaplanmış) hali.", onem: "orta" },
    { id: 150, kategori: "Sigortacılık", on: "Risk Primi vs Birikim Primi?", arka: "Risk Primi: Ölüm/hastalık ihtimali için ayrılan tutar. Birikim Primi: Risk hariç, sadece yatırım amaçlı alınan tutar.", onem: "orta" },
];
