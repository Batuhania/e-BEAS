// Kapsamlı Konu Anlatımı - Sıfırdan, hiç bilmeyene anlatır gibi
// 6 ana bölüm, karşılaştırma tabloları, hesaplama örnekleri

export const konuAnlatimi = [
    // ============================================
    // BÖLÜM 1: BES MEVZUATI (%45)
    // ============================================
    {
        id: 1,
        baslik: "Kumbaramız: BES Nedir?",
        bolum: "BES Mevzuatı",
        agirlik: "%45",
        emoji: "",
        ozet: "BES, yaşlandığınızda rahat etmek için bugünden para attığınız şeffaf bir kumbaradır.",
        icerik: [
            {
                altBaslik: "Emeklilik Şartları",
                metin: "Bu kumbarayı kırıp 'emekli' sayılmanız için iki kural var: Kumbarada en az **10 yıl** kalacaksınız VE **56 yaşınızı** dolduracaksınız. İkisi birden olmalı!",
                onemli: true
            },
            {
                altBaslik: "Cayma Hakkı",
                metin: "'Ben oynamıyorum' derseniz, sözleşmeyi imzaladıktan sonraki **2 ay** içinde paranızı kesintisiz geri alıp çıkabilirsiniz. Sadece fon işletim gideri iade edilmez. OKS'de (Otomatik Katılım) da başlangıç dönemi 2 aydır.",
            },
            {
                altBaslik: "Aktarım (Şirket Değiştirme)",
                metin: "Kumbaranızı A şirketinden B şirketine taşıyabilirsiniz. Ama en az **2 yıl** o şirkette kalmanız gerekir. Aktarımla geldiyseniz **1 yıl** yeterli. **Lehdar** aktarım talep edemez!",
                onemli: true
            },
        ],
        karsilastirma: {
            baslik: "Cayma vs Aktarım vs Emeklilik",
            sutunlar: ["Özellik", "Cayma", "Aktarım", "Emeklilik"],
            satirlar: [
                ["Süre Şartı", "İlk 2 ay", "Min. 2 yıl", "10 yıl + 56 yaş"],
                ["Para İadesi", "Tam (fon gideri hariç)", "Birikimle birlikte", "Tam + DK"],
                ["Devlet Katkısı", "Alamaz (%0)", "Hesapta kalır", "%100 alır"],
                ["Kim Talep Eder?", "Katılımcı", "Katılımcı/Sponsor", "Katılımcı"],
            ]
        },
    },
    {
        id: 2,
        baslik: "Devletin Hediyesi: Devlet Katkısı",
        bolum: "BES Mevzuatı",
        agirlik: "%45",
        emoji: "",
        ozet: "Siz kumbaraya para attıkça, devlet de sizi tebrik etmek için kendi cebinden kumbaranıza para atar.",
        icerik: [
            {
                altBaslik: "Limit Nedir?",
                metin: "Devlet diyor ki: 'Sana sonsuz para veremem.' Bir yılda alabilecek en büyük hediye, o yılki **Yıllık Brüt Asgari Ücretin toplamının %20'si** kadardır. Gecikme cezalarına devlet katkısı ödenmez!",
                onemli: true
            },
            {
                altBaslik: "Hak Ediş (Sadakat Ödülü)",
                metin: "Devlet attığı parayı hemen vermez. 'Sistemde kal, sadakatini göreyim' der. Ne kadar kalırsan o kadar çok alırsın:",
            },
        ],
        karsilastirma: {
            baslik: "Devlet Katkısı Hak Ediş Tablosu",
            sutunlar: ["Süre", "Hak Ediş %", "Açıklama"],
            satirlar: [
                ["3 yıldan az", "%0", "Hiçbir şey alamazsın"],
                ["3 - 6 yıl", "%15", "Hediyenin küçük dilimi"],
                ["6 - 10 yıl", "%35", "Hediyenin üçte biri"],
                ["10 yıl+ (emekli olmadan)", "%60", "Hediyenin yarısından fazlası"],
                ["Emeklilik / Vefat / Maluliyet", "%100", "Hediyenin TAMAMI senin!"],
            ]
        },
    },
    {
        id: 3,
        baslik: "Kesintiler ve Vergiler",
        bolum: "BES Mevzuatı",
        agirlik: "%45",
        emoji: "",
        ozet: "Şirket kumbarayı yönettiği için ücret alır, devlet de çıkışta vergi keser. İkisinin de sınırları var.",
        icerik: [
            {
                altBaslik: "YGK + Giriş Aidatı Sınırı (Altın Kural)",
                metin: "Şirket ilk 5 yıl boyunca, her yıl için en fazla **asgari ücretin %8.5'i** kadar kesinti yapabilir. Sınavda asgari ücret genelde **33.000 TL** verilir → %8.5'i = **2.805 TL**.",
                onemli: true
            },
            {
                altBaslik: "Aktarımda Kesinti",
                metin: "A şirketi 2.500 TL kesti, B şirketine geçtin. B şirketi o yıl sadece kalan **305 TL**'yi (2.805 - 2.500) kesebilir. Limit ortaktır!",
                onemli: true
            },
            {
                altBaslik: "Stopaj (Vergi Kesintisi)",
                metin: "Stopaj sadece **getiriden (irattan)** kesilir. Ana paradan ve devlet katkısından KESİLMEZ! Emekli: **%5**, 10 yıl kalıp erken çıkan: **%10**, 10 yıldan erken çıkan: **%15**.",
                onemli: true
            },
        ],
        hesaplamaOrnegi: {
            baslik: "Stopaj Hesaplama Örneği",
            adimlar: [
                "Ahmet Bey toplam birikim: 1.250.000 TL",
                "Yatırdığı anapara: 750.000 TL",
                "Devlet katkısı: 150.000 TL",
                "İrat (Kâr) = 1.250.000 - 750.000 - 150.000 = 350.000 TL",
                "Emekli olduğu için stopaj oranı: %5",
                "Stopaj = 350.000 × %5 = 17.500 TL",
                "Sonuç: 17.500 TL vergi ödenir (ana paradan değil!)"
            ]
        },
        karsilastirma: {
            baslik: "Stopaj Oranları",
            sutunlar: ["Durum", "Oran", "Kimler?"],
            satirlar: [
                ["Emeklilik / Vefat / Maluliyet", "%5", "Hak eden herkes"],
                ["10 yıl kalıp erken çıkma", "%10", "Sabırlı ama erken giden"],
                ["10 yıldan az kalma", "%15", "Erken kaçanlar (en yüksek ceza)"],
            ]
        },
    },
    {
        id: 4,
        baslik: "Kısmen Ödeme ve Alacağın Devri",
        bolum: "BES Mevzuatı",
        agirlik: "%45",
        emoji: "",
        ozet: "Kumbarayı kırmadan içinden para almanın iki yolu: Kısmen çekme veya bankaya teminat gösterme.",
        icerik: [
            {
                altBaslik: "Kısmen Ödeme",
                metin: "Birikiminizin en fazla **%50**'sini çekebilirsiniz. Nedenine göre kurallar değişir:",
            },
            {
                altBaslik: "Evlilik ve Konut Alımı",
                metin: "Çekilen tutarın **%20**'si kadar devlet katkısı da alınır. Şartlar: En az **5 yıl** sistemde olmak, asgari ücretin **5 katı** katkı payı ödemek ve **3 yıl** daha kalma taahhüdü vermek.",
            },
            {
                altBaslik: "Doğal Afet",
                metin: "Çekilen tutarın **%25**'i kadar devlet katkısı alınır. Süre ve birikim şartı **ARANMAZ**! En avantajlı durum.",
                onemli: true
            },
            {
                altBaslik: "Alacağın Devri (BES'i Bankaya Teminat)",
                metin: "BES birikimini bankaya devrederek kredi çekersiniz. Kredi kapanana kadar sözleşmenizi sonlandıramazsınız ve aktaramazsınız. **İşveren grup sözleşmeleri** ve **Devlet Katkısı** devre konu edilemez!",
                onemli: true
            },
        ],
        karsilastirma: {
            baslik: "Kısmen Ödeme Karşılaştırması",
            sutunlar: ["Özellik", "Evlilik/Konut", "Doğal Afet"],
            satirlar: [
                ["DK Oranı", "%20", "%25"],
                ["5 Yıl Şartı", "EVET", "HAYIR"],
                ["5× Asgari Ücret", "EVET", "HAYIR"],
                ["3 Yıl Taahhüdü", "EVET", "HAYIR"],
                ["Çekim Limiti", "Birikimin %50'si", "Birikimin %50'si"],
            ]
        },
    },
    // ============================================
    // BÖLÜM 2: FİNANS VE YATIRIM (%15)
    // ============================================
    {
        id: 5,
        baslik: "Piyasalar ve Yatırım Araçları",
        bolum: "Finans ve Yatırım",
        agirlik: "%15",
        emoji: "",
        ozet: "Paranızı nerede büyütürsünüz? Piyasalar, hisse senedi, tahvil ve fonların ABC'si.",
        icerik: [
            {
                altBaslik: "Piyasa Türleri",
                metin: "**Para Piyasası**: 1 yıldan kısa vadeli araçlar. **Sermaye Piyasası**: 1 yıldan uzun vadeli araçlar. **Birincil Piyasa**: Hissenin ilk defa satıldığı yer. **İkincil Piyasa**: Borsa gibi sonradan alınıp satıldığı yer. **Spot**: Anında teslimat. **Türev**: Gelecekte teslimat.",
            },
            {
                altBaslik: "TAHTEREVALLİ KURALI (%100 Çıkar!)",
                metin: "Bir tahvilin veya bononun piyasadaki **fiyatı yükseliyorsa**, onun **faizi DÜŞER**. Ters orantı var, tahterevalli gibi biri çıkarsa diğeri iner!",
                onemli: true
            },
            {
                altBaslik: "Merkez Bankası (TCMB) İşlemleri",
                metin: "**Repo**: TCMB piyasaya para verir → para bollaşır → TL faizi düşer, döviz artar. **Ters Repo**: TCMB piyasadan para çeker → para azalır → TL faizi artar, döviz düşer.",
                onemli: true
            },
        ],
        karsilastirma: {
            baslik: "Hisse Senedi vs Tahvil",
            sutunlar: ["Özellik", "Hisse Senedi", "Tahvil/Bono"],
            satirlar: [
                ["Hak", "Ortaklık (Mülkiyet)", "Alacaklılık (Borç)"],
                ["Vade", "YOKTUR (sonsuz)", "VAR (bono <1 yıl, tahvil >1 yıl)"],
                ["Getiri", "Temettü + Sermaye kazancı", "Faiz geliri"],
                ["Nominal altı satış", "HAYIR", "EVET (İskontolu olabilir)"],
                ["Rüçhan Hakkı", "VAR (yeni hisse önceliği)", "YOK"],
            ]
        },
    },
    {
        id: 6,
        baslik: "TCMB ve Repo/Ters Repo",
        bolum: "Finans ve Yatırım",
        agirlik: "%15",
        emoji: "",
        ozet: "Merkez Bankası piyasadaki paranın musluğunu kontrol eder. Repo açar, ters repo kapatır.",
        icerik: [
            {
                altBaslik: "Repo Nedir?",
                metin: "TCMB piyasaya **nakit para verir** (musluğu açar). Ortalık paraya doyunca paranın değeri (TL faizi) düşer, döviz fiyatları artar. Düşünün: Para bolsa ucuzdur!",
            },
            {
                altBaslik: "Ters Repo Nedir?",
                metin: "TCMB piyasadan **parayı geri çeker** (suyu keser). Para azalınca kıymete biner, TL faizi artar, döviz fiyatları düşer. Düşünün: Para azsa kıymetlidir!",
            },
        ],
        karsilastirma: {
            baslik: "Repo vs Ters Repo Özet",
            sutunlar: ["", "Repo", "Ters Repo"],
            satirlar: [
                ["TCMB ne yapar?", "Piyasaya para VERİR", "Piyasadan para ÇEKER"],
                ["Piyasada para", "BOLLAŞIR", "AZALIR"],
                ["TL Faizi", "DÜŞER ↓", "ARTAR ↑"],
                ["Döviz Kuru", "ARTAR ↑", "DÜŞER ↓"],
            ]
        },
    },
    // ============================================
    // BÖLÜM 3: SATIŞ VE PAZARLAMA (%15)
    // ============================================
    {
        id: 7,
        baslik: "Müşteriyi İkna Etmek",
        bolum: "Satış ve Pazarlama",
        agirlik: "%15",
        emoji: "",
        ozet: "Satış süreci, müşteri psikolojisi, iletişim teknikleri ve pazarlama stratejileri.",
        icerik: [
            {
                altBaslik: "Maslow Hiyerarşisi",
                metin: "İnsanın en temel ihtiyacı nefes almak, yemek yemek ve uyumaktır = **Fizyolojik ihtiyaçlar**. Karnı aç olan adam BES yaptırmaz! Sıra: Fizyolojik → Güvenlik → Sosyal → Saygı → Kendini Gerçekleştirme.",
            },
            {
                altBaslik: "Satış Süreci",
                metin: "Sıra: **Hazırlık → İlk temas → İhtiyaç belirleme → Ürün sunumu → Kapanış**. Her şey 'Potansiyel Müşteri Yaratma' ile başlar. Müşterinin ne istediğini bulmak için **açık uçlu sorular** sorun.",
            },
            {
                altBaslik: "Satış Kapanış Taktikleri",
                metin: "**Son Şans**: 'Elimdeki son ürün, stokta bitti!' → **Kızıştırma**: 'Almazsanız bekleyen başka müşterim var.' → **Empati**: Kendini müşterinin yerine koymak. → **Sinerji**: 1+1 = 3 etkisi.",
            },
        ],
        karsilastirma: {
            baslik: "Fiyatlandırma Stratejileri",
            sutunlar: ["Strateji", "Fiyat", "Amaç"],
            satirlar: [
                ["Kaymağını Alma", "YÜKSEK giriş", "Yatırımı çabuk kurtar, rakipler gelince düşür"],
                ["Derinliğine Girme", "DÜŞÜK giriş", "Pazara hızla yayıl, tüm pazar payını kap"],
            ]
        },
    },
    // ============================================
    // BÖLÜM 4: KATILIM BES (%15)
    // ============================================
    {
        id: 8,
        baslik: "İslami Finans ve Katılım BES",
        bolum: "Katılım Esaslı BES",
        agirlik: "%15",
        emoji: "",
        ozet: "Faize bulaşmadan yatırım: Murabaha, Mudarebe, Muşareke ve diğer İslami akit türleri.",
        icerik: [
            {
                altBaslik: "Fıkıh Kaynakları",
                metin: "İslam hukukunun ticari konuları inceleyen bölümüne **Muamelat** denir. 4 temel kaynak: **Kur'an** ve **Sünnet** (asli kaynaklar), **İcma** (alimlerin görüş birliği), **Kıyas** (benzer olaya aynı hükmü verme).",
            },
            {
                altBaslik: "Mudarebe (Emek + Sermaye)",
                metin: "Biri **parayı** koyar, diğeri **emeğini** koyar. SINAV TUZAĞI: Zarar edilirse (kasıt yoksa) mali zararı sadece **sermayedar** çeker. Emekçinin ise emeği boşa gitmiş olur!",
                onemli: true
            },
            {
                altBaslik: "Muşareke (Sermaye + Sermaye)",
                metin: "Herkes cebinden **para** koyar. Kâr anlaşılan oranda dağıtılır. Zarar edilirse herkes **sermaye oranında** zarara katlanır.",
                onemli: true
            },
            {
                altBaslik: "Danışma Komitesi",
                metin: "Katılım fonlarının dine uygun olup olmadığını denetleyen ve onaylayan kurul. En az **3 kişiden** oluşur. Faizli işlemlere giren şirketlerin hisseleri portföye alınamaz.",
            },
        ],
        karsilastirma: {
            baslik: "İslami Akit (Sözleşme) Türleri",
            sutunlar: ["Akit", "Ne Demek?", "Örnek"],
            satirlar: [
                ["Murabaha", "Maliyet + Kâr = Satış fiyatı", "Fiyatı bilinen mal üzerine kâr ekleme"],
                ["Mudarebe", "Emek + Sermaye ortaklığı", "Biri para, diğeri iş gücü koyar"],
                ["Muşareke", "Sermaye + Sermaye ortaklığı", "Herkes para koyar, ortak olur"],
                ["İcare", "Kiralama (Leasing)", "Sukuk sertifikaları da bu gruba girer"],
                ["Selem", "Para PEŞİN, mal VERESİYE", "Çiftçinin mahsulünü önceden almak"],
                ["İstisna", "Sipariş üzerine üretim", "İnşaat, imalat sözleşmeleri"],
                ["Sarf", "Döviz bozdurma", "TL-Dolar mübadelesi"],
                ["Karz", "Borç verme", "Faizsiz borç"],
                ["Kefalet", "Kefil olma / Teminat mektubu", "Banka teminat mektupları"],
            ]
        },
    },
    // ============================================
    // BÖLÜM 5: İŞLETME VE İKTİSAT (%5)
    // ============================================
    {
        id: 9,
        baslik: "Ekonominin Canavarları",
        bolum: "İşletme ve İktisat",
        agirlik: "%5",
        emoji: "",
        ozet: "Enflasyon, deflasyon, stagflasyon ve temel ekonomi/işletme kavramları.",
        icerik: [
            {
                altBaslik: "Ekonomik Hastalıklar",
                metin: "**Enflasyon**: Fiyatların sürekli artması (Talep > Arz ise Talep Enflasyonu, enerji artışı ise Maliyet Enflasyonu). **Deflasyon**: Fiyatların sürekli düşmesi. **Stagflasyon**: Hem durgunluk hem enflasyon aynı anda (en kötüsü!).",
                onemli: true
            },
            {
                altBaslik: "Temel Kavramlar",
                metin: "**Fırsat Maliyeti**: Bir şeyi seçerken vazgeçtiğin diğerinin değeri. **Verimlilik**: Çıktı/Girdi. **Kârlılık**: Kâr/Sermaye. **Tam Rekabet**: Çok alıcı-satıcı, homojen ürün. **Oligopol**: Az sayıda dev firma piyasayı kontrol eder.",
            },
        ],
        karsilastirma: {
            baslik: "Karıştırılan Ekonomi Terimleri",
            sutunlar: ["Terim", "Anlamı", "Karıştırma!"],
            satirlar: [
                ["Deflasyon", "Fiyatlar sürekli DÜŞER", "Enflasyonun tersi"],
                ["Stagflasyon", "Durgunluk + Enflasyon AYNI ANDA", "En kötü senaryo"],
                ["Devalüasyon", "Ulusal paranın değeri DÜŞÜRÜLÜR", "Dışa yönelik, bilinçli karar"],
                ["Çekirdek Enflasyon", "Enerji+gıda ÇIKARILIR", "Uzun dönem trendi gösterir"],
            ]
        },
    },
    // ============================================
    // BÖLÜM 6: SİGORTACILIK (%5)
    // ============================================
    {
        id: 10,
        baslik: "Kötü Gün Dostu: Sigortacılık",
        bolum: "Sigortacılık",
        agirlik: "%5",
        emoji: "",
        ozet: "Sigortanın 5 temel prensibi, önemli meslekler ve reasürans kavramları.",
        icerik: [
            {
                altBaslik: "5 Temel Prensip",
                metin: "**Tazminat**: Zenginleştirmek değil, eski haline getirmek. **Azami İyi Niyet**: Yalan söyleme, riski saklama. **Sigortalanabilir Menfaat**: Yasal bağın olmalı. **Yakın Neden**: Hasarı başlatan ilk neden poliçede yazılı olmalı. **Halefiyet**: Şirket zararı ödeyip kusurluya dava açar.",
            },
            {
                altBaslik: "Meslekler",
                metin: "**Broker**: Müşteriyi temsil eder (bağımsız). **Acente**: Şirketi temsil eder (bölgesel). **Eksper**: Hasarın miktarını belirleyen tarafsız uzman. **Aktüer**: Prim ve istatistik hesaplayan matematik uzmanı.",
            },
            {
                altBaslik: "Reasürans",
                metin: "Sigorta şirketinin kendini de sigortalatması. Riski satan: **Sedan**. Alan: **Reasürör**. Devredilen iş miktarı: **Sesyon**. Tahkim Komisyonu: 15.000 TL üzeri → Hakem Heyeti zorunlu.",
            },
        ],
        karsilastirma: {
            baslik: "Meslekler Karşılaştırması",
            sutunlar: ["Meslek", "Kimi Temsil Eder?", "Ne Yapar?"],
            satirlar: [
                ["Broker", "MÜŞTERİYİ", "Bağımsız olarak en iyi sigortayı bulur"],
                ["Acente", "SİGORTA ŞİRKETİNİ", "Bölgesinde şirket adına satış yapar"],
                ["Eksper", "TARAFSIZ", "Hasarın miktarını ve nedenini belirler"],
                ["Aktüer", "ŞİRKET", "Matematik/istatistikle prim hesaplar"],
            ]
        },
    },
    // ============================================
    // SOSYAL GÜVENLİK VE KURUMLAR
    // ============================================
    {
        id: 11,
        baslik: "Devletin Güvenlik Şemsiyesi",
        bolum: "BES Mevzuatı",
        agirlik: "%45",
        emoji: "",
        ozet: "3 basamaklı güvenlik sistemi, sistemin kurumları ve operasyonel kurallar.",
        icerik: [
            {
                altBaslik: "3 Basamaklı Sistem",
                metin: "**1. Basamak**: Zorunlu devlet (SGK) → Dağıtım modeli (gençlerin primiyle emeklinin maaşı ödenir). **2. Basamak**: Mesleki sandıklar (OYAK gibi). **3. Basamak**: Gönüllü bireysel emeklilik (BES) → Fonlama modeli (herkes kendi hesabına biriktir).",
            },
            {
                altBaslik: "Kurumlar - Kim Ne Yapar?",
                metin: "**SEDDK**: Baş Hakem, kuralları belirler. **SPK**: Fon kuruluş izni verir. **EGM**: Sınav yapar, BEFAS'ı işletir. **Takasbank**: Parayı saklar. Şirket batsa bile fona haciz konulamaz!",
                onemli: true
            },
            {
                altBaslik: "İşsizlik Sigortası",
                metin: "En az **600 gün** prim ödemiş olmak gerekir. Maaş: Son 4 ay ortalamasının **%40**'ı, en fazla **300 gün** ödenir.",
            },
        ],
        karsilastirma: {
            baslik: "Dağıtım vs Fonlama Modeli",
            sutunlar: ["Özellik", "Dağıtım (SGK)", "Fonlama (BES)"],
            satirlar: [
                ["Para kaynağı", "Gençlerin primleri", "Kendi hesabınız"],
                ["Nüfusa bağlı mı?", "EVET (aktif/pasif dengesi)", "HAYIR"],
                ["Örnek", "SGK", "BES"],
                ["Risk", "Yaşlanan nüfus", "Yatırım performansı"],
            ]
        },
    },
    // ============================================
    // HAYAT SİGORTASI VE VERGİ
    // ============================================
    {
        id: 12,
        baslik: "Hayat Sigortası ve Vergi Detayları",
        bolum: "Sigortacılık",
        agirlik: "%5",
        emoji: "",
        ozet: "Hayat sigortası terimleri (mortalite, tenzil) ve vergi muafiyetleri.",
        icerik: [
            {
                altBaslik: "Hayat Sigortası Primleri",
                metin: "**Risk Primi**: Vefat/kaza/sakatlık tazminatı için. **Birikim Primi**: Tasarruf/yatırım amacıyla biriken para. **Tenzil**: Prim ödeyemediğinde poliçenin 'ücretsiz sigortaya' dönüşmesi.",
            },
            {
                altBaslik: "Mortalite ve Morbidite",
                metin: "**Mortalite**: Yaşama/ölüm istatistikleri. **Morbidite**: Hastalık/maluliyet istatistikleri. **Komütasyon Tablosu**: İkisinin iskonto edilmiş (bugünkü değere çekilmiş) hali.",
            },
            {
                altBaslik: "Vergi İstisnaları",
                metin: "BES fonlarının kazançları **Kurumlar Vergisinden** istisna. Kuruluş işlemleri **Damga Vergisinden** istisna. 5 yıl talep edilmeyen paralar **TCMB'ye** devredilir.",
            },
        ],
    },
];
