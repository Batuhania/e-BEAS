// Kritik Bilgiler - Nihai Ezber Kağıdı (Cheat Sheet)
// Sınavda çıkacak tüm kritik rakamlar, süreler, kurallar ve kavramlar
export const kritikBilgiler = [
    // ============== BES MEVZUATI ==============
    {
        baslik: "KRİTİK SÜRELER VE YAŞLAR",
        kartlar: [
            { anahtar: "Emeklilik Şartı", deger: "En az 10 yıl sistemde kalma + 56 yaş", renk: "blue" },
            { anahtar: "Cayma Hakkı", deger: "Teklifin imzasından itibaren 2 ay (60 gün)", renk: "blue" },
            { anahtar: "Cayma İade Süresi", deger: "Bildirimden itibaren 10 İŞ GÜNÜ içinde para iade", renk: "red" },
            { anahtar: "Ertelenmiş Giriş Aidatı", deger: "5 yıl dolmadan çıkarsan birikimden kesilir", renk: "blue" },
            { anahtar: "Aktarım Şartı", deger: "En az 2 yıl kalmak (aktarımla geldiyse 1 yıl)", renk: "blue" },
            { anahtar: "Ayrılma Bilgi Formu", deger: "Şirket en geç 5 İŞ GÜNÜ içinde göndermeli", renk: "red" },
            { anahtar: "Para İade (Ayrılma/Kısmi)", deger: "İşlem sonrası 10 iş günü içinde hesaba yatar", renk: "red" },
            { anahtar: "Fon Dağılımı Değişikliği", deger: "Yılda en fazla 12 kez", renk: "blue" },
            { anahtar: "Emeklilik Planı Değişikliği", deger: "Yılda en fazla 4 kez", renk: "blue" },
            { anahtar: "Risk Uyarısı", deger: "Emekliliğe en az 2 yıl kala düşük riskli fona geç", renk: "blue" },
            { anahtar: "Düzensiz Ödeme", deger: "Art arda 3 ay ödeme yapmazsan → ek kesinti hakkı doğar", renk: "yellow" },
            { anahtar: "Sisteme Giriş Tarihi", deger: "İmza DEĞİL, paranın hesaba düştüğü tarih (nakden intikal)", renk: "red" },
            { anahtar: "Lehdar Aktarım", deger: "Lehdar aktarım talep EDEMEZ", renk: "red" },
        ]
    },
    {
        baslik: "DEVLET KATKISI HAK EDİŞ ORANLARI",
        kartlar: [
            { anahtar: "0-3 Yıl → Çık", deger: "%0 (Sıfır hak ediş)", renk: "red" },
            { anahtar: "3-6 Yıl → Çık", deger: "%15 hak ediş", renk: "yellow" },
            { anahtar: "6-10 Yıl → Çık", deger: "%35 hak ediş", renk: "yellow" },
            { anahtar: "10+ Yıl → Emekli Ol", deger: "%60 hak ediş", renk: "blue" },
            { anahtar: "Vefat / Maluliyet", deger: "%100 (Tüm kilitleri açar)", renk: "green" },
            { anahtar: "DK Yıllık Limiti", deger: "Yıllık Brüt Asgari Ücret Toplamının %20'si", renk: "blue" },
            { anahtar: "Gecikme Cezası → DK", deger: "Gecikme cezalarına devlet katkısı ÖDENMEZ", renk: "red" },
        ]
    },
    {
        baslik: "İŞVEREN HAK KAZANMA (VESTİNG)",
        kartlar: [
            { anahtar: "Tavan Süre", deger: "En fazla 7 yıl", renk: "red" },
            { anahtar: "2 Yıllık Sözleşme", deger: "1. yıl: %0, 2. yıl: %100 (Hep Ya Hiç)", renk: "blue" },
            { anahtar: "4 Yıllık Sözleşme", deger: "3. yıl: %75, 4. yıl: %100", renk: "blue" },
            { anahtar: "7 Yıllık (Tavan)", deger: "Kademeli artarak 7. yılda %100", renk: "blue" },
            { anahtar: "Vefat / Maluliyet", deger: "Süre fark etmez → anında %100", renk: "green" },
            { anahtar: "İstifa / Kovulma", deger: "Süre dolmadıysa patronun parasını ALAMAZSIN", renk: "red" },
        ]
    },
    {
        baslik: "KESİNTİLER, VERGİ VE STOPAJ",
        kartlar: [
            { anahtar: "YGK + Giriş Aidatı Tavanı", deger: "İlk 5 yılda her yıl brüt asgari ücretin maks %8.5'i", renk: "red" },
            { anahtar: "Hesaplama Örneği", deger: "33.000 × 0.085 = 2.805 TL/yıl maks kesinti", renk: "yellow" },
            { anahtar: "Aktarımda Kesinti Limiti", deger: "A şirketi 2.500 kestiyse B şirketi max 305 TL (2.805-2.500)", renk: "yellow" },
            { anahtar: "Peşin Giriş Aidatı", deger: "Cayma HARİCİNDE asla iade edilmez", renk: "red" },
            { anahtar: "Vergi İndirimi Tavanı", deger: "Brüt ücretin %15'i VE yıllık asgari ücreti aşamaz", renk: "blue" },
            { anahtar: "Stopaj: Emekli → %5", deger: "Getiriden (irattan) kesilir", renk: "green" },
            { anahtar: "Stopaj: 10 Yıl Kalıp Çık → %10", deger: "Getiriden (irattan) kesilir", renk: "yellow" },
            { anahtar: "Stopaj: <10 Yıl Çık → %15", deger: "Getiriden (irattan) kesilir", renk: "red" },
            { anahtar: "STOPAJ TUZAĞI", deger: "Ana paradan ve DK'dan DEĞİL, sadece kârdan kesilir!", renk: "red" },
            { anahtar: "Stopaj Hesabı", deger: "İrat = Toplam Birikim - Anapara - DK. Vergi = İrat × Oran", renk: "yellow" },
        ]
    },
    {
        baslik: "KISMİ ÖDEME VE ALACAĞIN DEVRİ",
        kartlar: [
            { anahtar: "Kısmi Ödeme Limiti", deger: "Birikimin en fazla %50'si çekilebilir", renk: "blue" },
            { anahtar: "Evlilik / Konut Alımı", deger: "%20 DK ödenir. Şart: 5 yıl + 5× asgari ücret KP + 3 yıl taahhüt", renk: "green" },
            { anahtar: "Doğal Afet", deger: "%25 DK ödenir. Süre/birikim şartı ARANMAZ", renk: "green" },
            { anahtar: "Yersiz Kısmi Ödeme", deger: "Evrak (tapu, cüzdan) süresi içinde iletilmezse → yersiz ödeme", renk: "yellow" },
            { anahtar: "BES'i Teminat Gösterme", deger: "Kredi kapanana kadar sözleşme iptal/aktarım yapılamaz", renk: "red" },
            { anahtar: "İşveren Grup + DK", deger: "Devre konu EDİLEMEZ (teminat gösterilemez)", renk: "red" },
            { anahtar: "2 Taksit Ödemezsen", deger: "30 gün süre verilir → borç muaccel → BES bozulur", renk: "red" },
        ]
    },
    {
        baslik: "HACİZ, VATANDAŞLIK VE BEFAS",
        kartlar: [
            { anahtar: "Haczedilemez Tutar", deger: "(Kalınan ay × Brüt Asgari Ücret) kadar tutar haczedilemez", renk: "blue" },
            { anahtar: "YGS Maaşı", deger: "Yıllık Gelir Sigortası maaşı HİÇ haczedilemez", renk: "green" },
            { anahtar: "Vatandaşlık Planı", deger: "Min 500.000 USD, 3 yıl kalma, giriş aidatı ALINAMAZ", renk: "blue" },
            { anahtar: "BEFAS İşletmeci", deger: "EGM tarafından işletilir", renk: "blue" },
            { anahtar: "BEFAS'ta YOK", deger: "OKS fonları, Yabancı fonlar, Emeklilik Gelir Planları", renk: "red" },
        ]
    },
    {
        baslik: "OTOMATİK KATILIM (OKS)",
        kartlar: [
            { anahtar: "OKS Kesinti Oranı", deger: "Prime Esas Kazancın %3'ü (asgari ücret DEĞİL, brüt maaş)", renk: "red" },
            { anahtar: "OKS İlk Fon", deger: "Başlangıç Fonu → sonra Standart Fon", renk: "blue" },
            { anahtar: "OKS Cayma", deger: "Başlangıç dönemi (2 ay) içinde", renk: "yellow" },
            { anahtar: "OKS Ara Verme", deger: "Başlangıç döneminde YAPILAMAZ. Hak devredilemez.", renk: "red" },
            { anahtar: "OKS Parayı Kim Öder?", deger: "Çalışanın maaşından kesilir (patron sadece aracı)", renk: "blue" },
        ]
    },
    {
        baslik: "CAYMA HAKKI KURALLARI",
        kartlar: [
            { anahtar: "Cayma Süresi", deger: "2 ay (60 gün) içinde", renk: "blue" },
            { anahtar: "İade Edilenler", deger: "Giriş aidatı + YGK → GERİ VERİLİR", renk: "green" },
            { anahtar: "İade EDİLMEYEN", deger: "Fon Toplam Gider Kesintisi (FTGK) → İADE EDİLMEZ", renk: "red" },
            { anahtar: "Cayma Para İadesi", deger: "Bildirimden itibaren 10 iş günü", renk: "blue" },
        ]
    },
    // ============== KURUMLAR ==============
    {
        baslik: "SİSTEMİN KURUMLARI (Kim Ne Yapar?)",
        kartlar: [
            { anahtar: "SEDDK", deger: "Baş Hakem: Kuralları belirler, ceza keser, kesinti tavanı koyar", renk: "teal" },
            { anahtar: "SPK", deger: "Yatırım Hakemi: Fon kuruluş izni, pay kaydı, içtüzük onayı", renk: "teal" },
            { anahtar: "EGM", deger: "Gözlemci: Veri toplar, e-BEAS sınavı yapar, lisans kaydı, BEFAS işletir", renk: "teal" },
            { anahtar: "Takasbank", deger: "Kasa: Fonları saklar. Şirket borcu yüzünden fona haciz KONULAMAZ", renk: "teal" },
            { anahtar: "Şirket Yönetim Kurulu", deger: "En az 5 kişi zorunlu", renk: "blue" },
            { anahtar: "Fon Tavsiyesi", deger: "Şirket tavsiye verebilir ama ücret/kesinti YAPAMAZ", renk: "green" },
            { anahtar: "Tavsiye Sınırı", deger: "Sadece BES konusunda. Yastık altı/banka parası hakkında HAYIR", renk: "red" },
        ]
    },
    // ============== FON TÜRLERİ VE SINIRLAR ==============
    {
        baslik: "FON TÜRLERİ VE ORANLAR",
        kartlar: [
            { anahtar: "Borçlanma Araçları Fonu", deger: "Min %80 tahvil/bono", renk: "teal" },
            { anahtar: "Hisse Senedi Fonu", deger: "Min %80 hisse senedi", renk: "teal" },
            { anahtar: "Fon Sepeti Fonu", deger: "Min %80 başka fonların katılma payları (fonun fonu)", renk: "teal" },
            { anahtar: "Likit (Para Piyasası) Fon", deger: "Max 184 gün vadeli, ort. max 45-60 gün", renk: "teal" },
            { anahtar: "Serbest (Hedge) Fon", deger: "Sadece nitelikli yatırımcılar", renk: "teal" },
            { anahtar: "A Tipi Fon", deger: "Min %25 hisse senedi", renk: "teal" },
            { anahtar: "Katılım Fonu", deger: "Faize dayalı olmayan", renk: "teal" },
            { anahtar: "Karma Fon", deger: "En az iki farklı araç", renk: "teal" },
            { anahtar: "Standart / Başlangıç Fonu", deger: "Devlet belirlemiş portföy. OKS ilk durak=Başlangıç", renk: "teal" },
        ]
    },
    {
        baslik: "FON YATIRIM SINIRLARI",
        kartlar: [
            { anahtar: "Mevduat Sınırı", deger: "Fonun max %30'u bankaya mevduat olabilir", renk: "blue" },
            { anahtar: "Başka Fon Alım Sınırı", deger: "Fonun max %20'si başka yatırım fonlarına gidebilir", renk: "blue" },
            { anahtar: "Tek İhraççı Sınırı (Endeks)", deger: "Devlet tahvili hariç tek şirkete max %20", renk: "blue" },
            { anahtar: "Min Fon Sayısı", deger: "Şirket kurmak için en az 3 farklı strateji fon zorunlu", renk: "blue" },
            { anahtar: "DK Fonu Kesintisi", deger: "Günlük en fazla yüz binde 1 (çok düşük)", renk: "green" },
            { anahtar: "Fon Fiyatı Hesaplama", deger: "Her akşam hesaplanır, ertesi iş günü duyurulur", renk: "blue" },
            { anahtar: "Olağanüstü Durum", deger: "Savaş/afet → fiyat hesaplanmayabilir. Şirket iflası olağanüstü DEĞİL", renk: "red" },
        ]
    },
    // ============== FİNANS VE YATIRIM ==============
    {
        baslik: "FİNANS VE YATIRIM",
        kartlar: [
            { anahtar: "Para Piyasası", deger: "<1 yıl vadeli araçlar", renk: "blue" },
            { anahtar: "Sermaye Piyasası", deger: ">1 yıl vadeli araçlar", renk: "blue" },
            { anahtar: "Birincil Piyasa", deger: "İlk ihraç. İkincil = sonra borsa", renk: "blue" },
            { anahtar: "Spot vs Türev", deger: "Spot=anında teslimat. Türev=gelecekte teslimat", renk: "blue" },
            { anahtar: "Hisse Senedi", deger: "Ortaklık, vadesi yok, temettü. Nominal altında satılamaz", renk: "teal" },
            { anahtar: "Rüçhan Hakkı", deger: "Yeni hisse alımında mevcut ortağa öncelik", renk: "teal" },
            { anahtar: "Tahvil vs Bono", deger: "Borçluluk. Bono <1 yıl, Tahvil >1 yıl. İskontolu satılabilir", renk: "teal" },
            { anahtar: "TAHTEREVALLİ", deger: "Tahvil Fiyat ↑ = Faiz ↓ (KESİN TERS ORANTI)", renk: "red" },
            { anahtar: "TCMB Repo", deger: "Piyasaya para verir → Faiz ↓, Döviz ↑", renk: "yellow" },
            { anahtar: "TCMB Ters Repo", deger: "Piyasadan para çeker → Faiz ↑, Döviz ↓", renk: "yellow" },
        ]
    },
    // ============== SATIŞ VE PAZARLAMA ==============
    {
        baslik: "SATIŞ VE PAZARLAMA",
        kartlar: [
            { anahtar: "İhtiyaç Analizi", deger: "Açık uçlu / dolaylı sorularla belirlenir", renk: "blue" },
            { anahtar: "Satış Adımları", deger: "Hazırlık → İlk temas → İhtiyaç → Sunum → Kapanış", renk: "blue" },
            { anahtar: "Maslow En Alt", deger: "Fizyolojik (yeme/içme/uyku)", renk: "teal" },
            { anahtar: "Son Şans Tekniği", deger: "'Eldeki son ürün, stokta bitti'", renk: "yellow" },
            { anahtar: "Kızıştırma Tekniği", deger: "'Almazsanız başkasına satacağım'", renk: "yellow" },
            { anahtar: "Pazarın Kaymağı", deger: "Yüksek fiyatla gir, yatırımı hızla geri dön, sonra düşür", renk: "blue" },
            { anahtar: "Derinliğine Girme", deger: "En düşük fiyatla gir, pazar payını ele geçir", renk: "blue" },
            { anahtar: "Empati", deger: "Kendini başkasının yerine koyma", renk: "blue" },
            { anahtar: "Sinerji", deger: "1+1=3 (Birlikte daha büyük değer)", renk: "blue" },
            { anahtar: "Ürün Hayat Eğrisi", deger: "Sunuş → Büyüme → Olgunluk → Gerileme", renk: "teal" },
            { anahtar: "Karmaşık Satın Alma", deger: "Ev, araba, BES gibi pahalı/riskli ürünler", renk: "blue" },
            { anahtar: "Rutin Satın Alma", deger: "Ekmek gibi düşünülmeden alınanlar", renk: "blue" },
            { anahtar: "Pazar Araştırması", deger: "Problemin tanımlanmasıyla başlar. 'Yönetici yetiştirmek' amacı DEĞİL", renk: "red" },
        ]
    },
    // ============== KATILIM BES ==============
    {
        baslik: "KATILIM ESASLI BES (İSLAMİ AKİTLER)",
        kartlar: [
            { anahtar: "Muamelat", deger: "Fıkhın finansal/ticari konuları içeren bölümü", renk: "teal" },
            { anahtar: "Asli Kaynaklar", deger: "Kur'an ve Sünnet", renk: "teal" },
            { anahtar: "Kavli Sünnet", deger: "Peygamberin SÖZÜ", renk: "blue" },
            { anahtar: "Fiili Sünnet", deger: "Peygamberin EYLEMİ", renk: "blue" },
            { anahtar: "Takriri Sünnet", deger: "Başkasının eylemini ONAYLAMASI", renk: "blue" },
            { anahtar: "İcma", deger: "Alimlerin görüş birliği", renk: "blue" },
            { anahtar: "Kıyas", deger: "Benzer olaya aynı hükmü verme", renk: "blue" },
            { anahtar: "Liaynihi Haram", deger: "Özü haram (içki, faiz)", renk: "red" },
            { anahtar: "Ligayrihi Haram", deger: "Aslında helal ama duruma göre haram (Cuma vakti alışveriş)", renk: "yellow" },
            { anahtar: "Mudarebe (Emek+Sermaye)", deger: "Zarar → sadece SERMAYEdar üstlenir. Çalışanın emeği boşa gider", renk: "red" },
            { anahtar: "Muşareke (Sermaye+Sermaye)", deger: "Zarar → sermaye ORANINDA paylaşılır", renk: "green" },
            { anahtar: "Murabaha", deger: "Maliyet + kâr eklenerek satış (şeffaf)", renk: "green" },
            { anahtar: "Selem", deger: "Para peşin, mal veresiye (Tarım)", renk: "green" },
            { anahtar: "İstisna", deger: "Sipariş usulü üretim (İmalat/İnşaat)", renk: "green" },
            { anahtar: "İcare", deger: "Kira / Leasing / Sukuk sertifikası", renk: "green" },
            { anahtar: "Sarf", deger: "Döviz bozdurma (mübadele)", renk: "blue" },
            { anahtar: "Karz", deger: "Borç verme", renk: "blue" },
            { anahtar: "Rehin", deger: "İpotek / teminat gösterme", renk: "blue" },
            { anahtar: "Hibe", deger: "Karşılıksız bağış", renk: "blue" },
            { anahtar: "Kefalet", deger: "Kefil olma / teminat mektubu", renk: "blue" },
            { anahtar: "İcap ve Kabul", deger: "İcap=teklifi sunan, Kabul=onaylayan", renk: "blue" },
            { anahtar: "Tekâfül", deger: "İslami sigorta. Hibe esaslı. Sermaye fonu ≠ Risk fonu (ayrı yönetilir)", renk: "teal" },
            { anahtar: "Danışma Komitesi", deger: "Dine uygunluğu en az 3 kişi onaylar/denetler", renk: "red" },
            { anahtar: "Akit Bozucu", deger: "En büyük tehlike BELİRSİZLİK (fiyat/teslim belirsiz = bozulur)", renk: "red" },
        ]
    },
    // ============== İKTİSAT VE İŞLETME ==============
    {
        baslik: "İŞLETME VE İKTİSAT",
        kartlar: [
            { anahtar: "Stagflasyon", deger: "Durgunluk + Enflasyon aynı anda (EN KÖTÜ)", renk: "red" },
            { anahtar: "Deflasyon", deger: "Fiyatların sürekli düşmesi (enflasyonun tersi)", renk: "blue" },
            { anahtar: "Devalüasyon", deger: "Ulusal paranın yabancı para karşısında düşürülmesi", renk: "yellow" },
            { anahtar: "Maliyet Enflasyonu", deger: "Hammadde/petrol/enerji fiyat artışı → enflasyon", renk: "yellow" },
            { anahtar: "Talep Enflasyonu", deger: "Talep çok, mal az → fiyat artışı", renk: "yellow" },
            { anahtar: "Çekirdek Enflasyon", deger: "Enerji ve gıda HARİÇ hesaplanır, uzun dönem trendi gösterir", renk: "yellow" },
            { anahtar: "Fırsat Maliyeti", deger: "Bir şeyi seçince vazgeçilen şeyin değeri", renk: "blue" },
            { anahtar: "Tam Rekabet", deger: "Sonsuz alıcı-satıcı + homojen ürün", renk: "teal" },
            { anahtar: "Oligopol", deger: "Az sayıda dev şirket (GSM operatörleri gibi)", renk: "teal" },
            { anahtar: "Monopollü Rekabet", deger: "Çok satıcı ama ürünler farklılaşmış", renk: "teal" },
            { anahtar: "Verimlilik", deger: "Çıktı / Girdi", renk: "blue" },
            { anahtar: "Kârlılık", deger: "Kâr / Sermaye", renk: "blue" },
            { anahtar: "Ekonomiklik", deger: "Toplam Satış / Maliyet", renk: "blue" },
            { anahtar: "Rasyonellik Tuzağı", deger: "'Dayanıklılık' diye rasyonellik oranı YOKTUR!", renk: "red" },
            { anahtar: "Konsorsiyum", deger: "Dev proje için geçici birleşme (bağımsızlık korunur)", renk: "teal" },
            { anahtar: "Fiyat Karteli", deger: "Alt fiyat anlaşması → rekabeti yok etme (YASAK)", renk: "red" },
            { anahtar: "Proaktif vs Reaktif", deger: "Önceden tedbir vs olay sonrası tepki", renk: "blue" },
        ]
    },
    {
        baslik: "İKTİSAT İLERİ KAVRAMLAR",
        kartlar: [
            { anahtar: "GSYİH", deger: "Türkiye sınırları içinde üretilen HER ŞEY (yabancılar dahil)", renk: "blue" },
            { anahtar: "GSMH", deger: "Sadece Türk vatandaşlarının ürettiği değer (yurtdışı dahil)", renk: "blue" },
            { anahtar: "GSYİH > GSMH", deger: "Yabancılar bizde, bizim dışarıda kazandığımızdan fazla kazanıyorsa", renk: "yellow" },
            { anahtar: "İkame Mal", deger: "Çay-Kahve: Birinin fiyatı ↑, diğerinin talebi ↑", renk: "teal" },
            { anahtar: "Tamamlayıcı Mal", deger: "Araba-Benzin: Birinin fiyatı ↑, diğerinin talebi ↓", renk: "teal" },
            { anahtar: "Talep Esnekliği = 0", deger: "Fiyat artsa bile almak ZORUNLU (hayati ilaç gibi)", renk: "red" },
            { anahtar: "İkame Esnekliği = 0", deger: "Yerine kullanacak hiçbir alternatif yoksa", renk: "red" },
            { anahtar: "Marjinal Fayda", deger: "İhtiyaç şiddeti ↑ = Marjinal fayda ↑ (çölde su)", renk: "blue" },
            { anahtar: "Yatay Büyüme", deger: "Aynı ürünün farklı versiyonlarını üretme (ürün farklılaştırma)", renk: "blue" },
        ]
    },
    {
        baslik: "İŞLETME YÖNETİM İLKELERİ",
        kartlar: [
            { anahtar: "Matriks Örgüt", deger: "Bir çalışan birden fazla patrona bağlı (esnek/karmaşık)", renk: "blue" },
            { anahtar: "Yetki Göçerimi", deger: "Yöneticinin karar hakkını asta devretmesi", renk: "blue" },
            { anahtar: "Yönetim Alanı", deger: "Bir yöneticinin etkin denetleyebileceği kişi sayısı sınırlıdır", renk: "blue" },
            { anahtar: "Amaç Birliği", deger: "Tüm bölümler işletmenin ANA HEDEFİ için çalışır", renk: "blue" },
            { anahtar: "Komuta Birliği", deger: "Her çalışan sadece TEK bir amirden emir almalı", renk: "blue" },
        ]
    },
    // ============== SİGORTACILIK ==============
    {
        baslik: "SİGORTACILIK PRENSİPLERİ",
        kartlar: [
            { anahtar: "Tazminat", deger: "Zenginleştirmez, hasarı ödeyip eski haline getirir", renk: "blue" },
            { anahtar: "Azami İyi Niyet", deger: "Riskleri saklamadan dürüstçe beyan et", renk: "blue" },
            { anahtar: "Sigortalanabilir Menfaat", deger: "Sadece yasal bağın olan şeyi sigortalatabilirsin", renk: "blue" },
            { anahtar: "Yakın Neden", deger: "Zarara yol açan ilk ve en etkili sebep poliçede olmalı", renk: "blue" },
            { anahtar: "Halefiyet (Rücu)", deger: "Şirket zararı ödedikten sonra kusurlu 3. kişiye dava açar", renk: "blue" },
        ]
    },
    {
        baslik: "SİGORTA MESLEKLERİ VE TERİMLER",
        kartlar: [
            { anahtar: "Broker", deger: "MÜŞTERİYİ temsil eden bağımsız aracı", renk: "teal" },
            { anahtar: "Acente", deger: "SİGORTA ŞİRKETİNİ temsil eden aracı", renk: "teal" },
            { anahtar: "Eksper", deger: "Hasar miktarı ve nedenini tarafsızca belirler", renk: "teal" },
            { anahtar: "Aktüer", deger: "İstatistik/matematikle prim ve karşılık hesaplar", renk: "teal" },
            { anahtar: "Sedan", deger: "Reasüransta riski devreden (satan) şirket", renk: "yellow" },
            { anahtar: "Reasürör", deger: "Riski devralan şirket", renk: "yellow" },
            { anahtar: "Sesyon", deger: "Kabul edilen iş miktarı", renk: "yellow" },
            { anahtar: "Eksik Sigorta", deger: "Poliçe değeri < gerçek değer → Nispet Kaidesi uygulanır", renk: "red" },
            { anahtar: "Çifte Sigorta", deger: "Aynı risk birden fazla şirkete → zenginleşme yok, hasar paylaşılır", renk: "red" },
            { anahtar: "Müşterek Sigorta (Koasürans)", deger: "Birden çok sigortacı aynı anda organize sigortalama", renk: "blue" },
            { anahtar: "Tahkim Komisyonu", deger: "15.000 TL üstü uyuşmazlıklarda Hakem Heyeti zorunlu", renk: "red" },
            { anahtar: "Güvence Hesabı", deger: "Sigortasız araç çarparsa burada ödenir. Hazine denetler.", renk: "blue" },
            { anahtar: "Hasar Ödeme Şekilleri", deger: "Nakit, Onarım veya Yenisini Koyma. TAKAS YAPILAMAZ!", renk: "red" },
        ]
    },
    {
        baslik: "HAYAT SİGORTASI TERİMLERİ",
        kartlar: [
            { anahtar: "Risk Primi", deger: "Vefat/kaza/sakatlık riski için kesilen 'giden' para", renk: "blue" },
            { anahtar: "Birikim Primi", deger: "Tasarruf/yatırım amaçlı alınan 'kalan' para", renk: "blue" },
            { anahtar: "Matematik Karşılık", deger: "Şirketin gelecekteki ödemeleri için kenarda tuttuğu garanti havuz", renk: "blue" },
            { anahtar: "Mortalite Tablosu", deger: "Hangi yaşta kaç kişi hayatta kalır / ölür (ölüm istatistiği)", renk: "teal" },
            { anahtar: "Morbidite Tablosu", deger: "Hangi yaşta hastalanma/yaralanma/sakatlık ihtimali", renk: "teal" },
            { anahtar: "Sermaye İtfa Sigortası", deger: "Hiç risk YOK, sadece para biriktirme amaçlı hayat sigortası", renk: "green" },
            { anahtar: "Tenzil", deger: "Prim ödeyemeyince → kısıtlı ücretsiz sigortaya dönüşme", renk: "yellow" },
            { anahtar: "30 Gün Kuralı", deger: "Şirket teklifi 30 gün içinde reddetmezse → KABUL EDİLMİŞ sayılır", renk: "red" },
        ]
    },
    // ============== SOSYAL GÜVENLİK VE VERGİ ==============
    {
        baslik: "SOSYAL GÜVENLİK SİSTEMİ",
        kartlar: [
            { anahtar: "1. Basamak", deger: "Zorunlu Devlet (SGK)", renk: "blue" },
            { anahtar: "2. Basamak", deger: "Mesleki/Şirket sandıkları (OYAK gibi)", renk: "blue" },
            { anahtar: "3. Basamak", deger: "Bireysel/Gönüllü (BES)", renk: "blue" },
            { anahtar: "Dağıtım Modeli (SGK)", deger: "Gençlerin parası → emeklilerin maaşı. Nüfusa bağımlı", renk: "yellow" },
            { anahtar: "Fonlama Modeli (BES)", deger: "Herkes kendi hesabında biriktirir. Nüfustan bağımsız", renk: "green" },
            { anahtar: "İşsizlik Maaşı Şartı", deger: "Son dönemde en az 600 gün prim ödenmiş", renk: "blue" },
            { anahtar: "İşsizlik Maaşı Tutarı", deger: "Son 4 ay ort. brüt maaşın %40'ı, en fazla 300 gün", renk: "blue" },
        ]
    },
    {
        baslik: "VERGİ MEVZUATI",
        kartlar: [
            { anahtar: "Vergi İndirimi Şartı", deger: "Sigorta primi ≤ aylık brüt maaşın %15'i VE yıllık asgari ücret", renk: "blue" },
            { anahtar: "Muafiyet", deger: "KİŞİNİN vergiden affedilmesi", renk: "teal" },
            { anahtar: "İstisna", deger: "KONUNUN/PARANIN vergi dışı bırakılması", renk: "teal" },
            { anahtar: "BES Fon Kazancı", deger: "Kurumlar Vergisinden İSTİSNA", renk: "green" },
            { anahtar: "BES Kağıt İşlemleri", deger: "Damga Vergisinden İSTİSNA", renk: "green" },
            { anahtar: "Veraset (Ölüm Halinde)", deger: "Yasal varislere → miras vergisi. 3. kişiye → ivazsız iktisap vergisi", renk: "yellow" },
        ]
    },
    {
        baslik: "EMEKLİLİK PLAN TÜRLERİ",
        kartlar: [
            { anahtar: "Katkı Payı Esaslı (BES)", deger: "Ne yatıracağın belli, ne alacağın sürpriz (fon başarısına bağlı)", renk: "blue" },
            { anahtar: "Maaş Esaslı", deger: "Ne alacağın belli, ne yatırman gerektiğini aktüer hesaplar", renk: "blue" },
        ]
    },
    // ============== CEZALAR VE ÖZEL KURALLAR ==============
    {
        baslik: "CEZALAR VE ÖNEMLİ KURALLAR",
        kartlar: [
            { anahtar: "Aracı Lisans İptali", deger: "İhlal yapan aracı → 3 yıl sınava giremez", renk: "red" },
            { anahtar: "5 Yıl Hapis Cezası", deger: "Kasıtlı suçtan 5+ yıl alan → şirkette imza yetkilisi olamaz", renk: "red" },
            { anahtar: "Aktarım Gecikmesi", deger: "Şirket geç kalırsa → parasal kaybı cebinden öder", renk: "red" },
            { anahtar: "Blokaj Tuzağı (Kredi Kartı)", deger: "KK ile ödeyip blokaj dolmadan aktarım → provizyon iptal edilir", renk: "yellow" },
            { anahtar: "Mesafeli Satış (Online)", deger: "Matbu form zorunlu DEĞİL, elektronik onay yeterli", renk: "green" },
        ]
    },
    // ============== TUZAK SAVAR ==============
    {
        baslik: "SINAV TUZAKLARI VE KARIŞAN TERİMLER",
        kartlar: [
            { anahtar: "DK ≠ İşveren Katkısı", deger: "Oranları TAMAMEN farklı. DK=devlet, İK(vesting)=patron", renk: "red" },
            { anahtar: "İşe Giriş ≠ Söz. Tarihi", deger: "7 yıl sözleşme tarihinden başlar", renk: "red" },
            { anahtar: "Maluliyet Oranı", deger: "%50 engel = %50 DK DİYE BİR ŞEY YOK → her zaman %100", renk: "red" },
            { anahtar: "Gecikme = Ceza Değil", deger: "Ceza yok, parasal kayıp tazmin edilir", renk: "red" },
            { anahtar: "'5 gün' vs '5 iş günü'", deger: "Operasyonel sürelerde İŞ GÜNÜ geçerli", renk: "red" },
            { anahtar: "Stopaj = Kârdan", deger: "ASLA anaparadan değil. İrat = Birikim - Anapara - DK", renk: "red" },
            { anahtar: "Kesinti Limiti Ortaktır", deger: "Eski+yeni şirket toplamı %8.5 tavanını aşamaz", renk: "red" },
            { anahtar: "Doğal Afet İstisnası", deger: "5 yıl ve birikim şartı ARANMAZ (tek istisna)", renk: "red" },
            { anahtar: "Mudarebe vs Muşareke", deger: "Mudarebe: zarar=sermayedar. Muşareke: zarar=orana göre HERKES", renk: "red" },
            { anahtar: "Selem vs İstisna", deger: "Selem=para peşin/mal veresiye(tarım). İstisna=sipariş üretim(imalat)", renk: "red" },
            { anahtar: "Deflasyon vs Stagflasyon", deger: "Deflasyon=fiyat↓. Stagflasyon=durgunluk+enflasyon birlikte", renk: "red" },
            { anahtar: "Repo vs Ters Repo", deger: "Repo=piyasaya para→faiz↓. Ters Repo=piyasadan para→faiz↑", renk: "red" },
        ]
    },
    // ============== FON KESİNTİ ORANLARI ==============
    {
        baslik: "FON TOPLAM GİDER KESİNTİSİ (FTGK) ORANLARI",
        kartlar: [
            { anahtar: "DK Fonu Kesintisi", deger: "Günlük max YÜZBİNDE 1 (en düşük)", renk: "green" },
            { anahtar: "Para Piyasası (Likit) Fon", deger: "Günlük max YÜZBİNDE 3", renk: "blue" },
            { anahtar: "Orta Risk (Standart/Borçlanma/Endeks)", deger: "Günlük max YÜZBİNDE 5,25 → Yıllık %1,91", renk: "blue" },
            { anahtar: "Yüksek Risk (Karma/Hisse/Değişken)", deger: "Günlük max YÜZBİNDE 6,25", renk: "red" },
            { anahtar: "Kıymetli Madenler Fonu", deger: "5,25 grubuna GİRMEZ (farklı limit)", renk: "yellow" },
            { anahtar: "Yıllık Hesaplama", deger: "Günlük oran × 365 = Yıllık oran", renk: "blue" },
        ]
    },
    // ============== FON PORTFÖY LİMİTLERİ VE HUKUKİ KORUMA ==============
    {
        baslik: "FON PORTFÖY LİMİTLERİ VE HUKUKİ KORUMA",
        kartlar: [
            { anahtar: "Mevduat/Katılma Hesabı", deger: "Fon portföyünün max %25'i bankada bekletilebilir", renk: "red" },
            { anahtar: "Takasbank Para Piyasası", deger: "Max %10", renk: "blue" },
            { anahtar: "Tek İhraççı (Şirket)", deger: "Max %20", renk: "blue" },
            { anahtar: "Topluluk (Holding)", deger: "Max %30", renk: "blue" },
            { anahtar: "Fon Dokunulmazlığı", deger: "Haczedilemez + Rehnedilemez + İflas masasına dahil edilemez", renk: "green" },
            { anahtar: "Fon Teminat OLAMAZ", deger: "Emeklilik parası bankaya ipotek/teminat gösterilemez", renk: "red" },
            { anahtar: "Tüzel Kişilik YOKTUR", deger: "Fon şirket DEĞİL, sadece malvarlığı havuzudur", renk: "red" },
            { anahtar: "Fon Süresiz Kurulur", deger: "Fon süresizdir + SPK kurumu niteliğindedir", renk: "blue" },
            { anahtar: "Zorunlu Giderler", deger: "Saklama, Denetim, Tescil/İlan → devlet emri", renk: "blue" },
            { anahtar: "FTGK ≠ Zorunlu Masraf", deger: "FTGK = şirketin aldığı KOMİSYON, zorunlu değil", renk: "red" },
            { anahtar: "BES ≠ Reasürans", deger: "BES mevzuatında 'Emeklilik' kelimesi aranır, Reasürans farklı alan", renk: "yellow" },
        ]
    },
    // ============== OPERASYONEL SÜRELER ==============
    {
        baslik: "OPERASYONEL SÜRELER (DETAYLI)",
        kartlar: [
            { anahtar: "Ayrılma Formu Gönderimi", deger: "5 İŞ GÜNÜ", renk: "blue" },
            { anahtar: "Teklif Reddi → Para İadesi", deger: "5 İŞ GÜNÜ (şirket reddetti=hızlı iade)", renk: "blue" },
            { anahtar: "Cayma → Para İadesi", deger: "10 İŞ GÜNÜ", renk: "red" },
            { anahtar: "Plan Değişikliği İşlemi", deger: "10 İŞ GÜNÜ", renk: "red" },
            { anahtar: "Hesap Bildirim Cetveli", deger: "Hesap dönemi sonrası 10 İŞ GÜNÜ", renk: "red" },
            { anahtar: "Sahipsiz Para İadesi", deger: "2 İŞ GÜNÜ içinde kaynağına iade (kesinti YOK)", renk: "yellow" },
            { anahtar: "Kuruluş İzni → Ruhsat", deger: "1 YIL içinde faaliyet ruhsatına başvur", renk: "blue" },
            { anahtar: "Aktarım Min. Bekleme", deger: "Şirkette en az 1 YIL kalınmalı", renk: "blue" },
            { anahtar: "Ara Verme Tetikleyici", deger: "3 AY ödemezsen → düzensiz ödeme → ek kesinti", renk: "yellow" },
            { anahtar: "KK Blokaj + Aktarım", deger: "Blokaj dolmadan aktarım = provizyon İPTAL", renk: "red" },
            { anahtar: "Hayat Sigortası Teklif", deger: "30 gün reddetmezse → KABUL SAYILIR", renk: "red" },
        ]
    },
    // ============== SPK KURALLARI ==============
    {
        baslik: "SPK KURALLARI VE FON İZİNLERİ",
        kartlar: [
            { anahtar: "SPK Reddedebilir", deger: "Gerekçe göstererek başvuruyu kabul etmeyebilir (imtina)", renk: "red" },
            { anahtar: "Eksik Evrak = İşleme Almaz", deger: "Tam dosya yoksa başvuru değerlendirmeye ALINMAZ", renk: "red" },
            { anahtar: "Şart Kaybedilirse", deger: "Şirket kuruluş şartını kaybederse → fon izni VERİLMEZ", renk: "red" },
            { anahtar: "Müşteri Sayısı", deger: "SPK müşteri/yatırımcı sayısına BAKMAZ (100.000 uydurma)", renk: "red" },
            { anahtar: "Fon Raporları Esasları", deger: "Günlük/6 aylık/yıllık rapor kurallarını SPK belirler", renk: "blue" },
            { anahtar: "Fon Birleştirme", deger: "Sadece AYNI şirketin fonları birleşebilir (rakiple olmaz)", renk: "blue" },
            { anahtar: "SPK Fon El Koyma Sebebi DEĞİL", deger: "Katılımcı sayısı az diye fona el konmaz", renk: "yellow" },
            { anahtar: "Bağımsız Dış Denetim", deger: "YILLIK (6 aylık faaliyet raporu ile karıştırma!)", renk: "blue" },
        ]
    },
    // ============== BES TERMİNOLOJİ VE BELGELER ==============
    {
        baslik: "BES TERMİNOLOJİSİ VE BELGELER",
        kartlar: [
            { anahtar: "Birikim", deger: "Anapara + Getiri (DK hariç). Devlet parası birikim DEĞİL", renk: "blue" },
            { anahtar: "İrat", deger: "Kâr/Getiri = Birikim - Anapara - DK. Stopaj sadece irattan", renk: "red" },
            { anahtar: "Katkı Payı", deger: "Senin cebinden çıkan saf para (anapara). İrat DEĞİL", renk: "blue" },
            { anahtar: "İzahname", deger: "Fonun kalın yasal kılavuzu (SPK onaylı)", renk: "blue" },
            { anahtar: "Tanıtım Formu", deger: "İzahnamenin ÖZET tek sayfalık versiyonu", renk: "blue" },
            { anahtar: "Fon İçtüzüğü", deger: "Fonun ANAYASASI. İltihaki (pazarlık yapılmaz). Saklama ve yönetim kuralları", renk: "teal" },
            { anahtar: "Hesap Bildirim Cetveli", deger: "Hesap ekstresi + yasal değişiklik bilgi notu birlikte yollanır", renk: "blue" },
            { anahtar: "Fon İç Kontrol Sistemi", deger: "Hataları önleyen denetim mekanizması. Emeklilik şirketi kurar", renk: "blue" },
            { anahtar: "Fon Dağılım Oranları", deger: "Paranın fonlar arası %'lik paylaştırılması = dağılım oranları", renk: "blue" },
            { anahtar: "Getiri Taahhüdü", deger: "BES'te garanti getiri VAAT EDİLEMEZ. Yasaktır!", renk: "red" },
            { anahtar: "BES'te 3 Kesinti", deger: "1) Giriş Aidatı 2) YGK 3) FTGK. 'Özel hizmet gideri' YOKTUR", renk: "red" },
        ]
    },
    // ============== ŞİRKET KURULUŞ VE DENETİM ==============
    {
        baslik: "ŞİRKET KURULUŞ VE YÖNETİM",
        kartlar: [
            { anahtar: "Kuruluş Adımları", deger: "1) Kuruluş İzni → 2) Faaliyet Ruhsatı → 3) Fon Kuruluş", renk: "blue" },
            { anahtar: "Sermaye Artırımı", deger: "Kuruluş sürecinde DEĞİL, sonraki ticari hayatta yapılır", renk: "yellow" },
            { anahtar: "Fon Kurucu", deger: "Emeklilik Şirketi kurar. PYŞ sadece YÖNETİR", renk: "red" },
            { anahtar: "Saklayıcı", deger: "Takasbank saklar. Şirket batsa bile fona haciz KONULAMAZ", renk: "green" },
            { anahtar: "Emir Zinciri", deger: "Müşteri → Emeklilik Şirketi → Saklayıcı (Takasbank)", renk: "blue" },
            { anahtar: "İzahname Nerede?", deger: "Emeklilik şirketi merkez/şube/web sitesinde (SPK/Takasbank'ta DEĞİL)", renk: "blue" },
            { anahtar: "Eğitim Kaçırma", deger: "Tamamlayıcı eğitime gitmezsen → SATIŞ YETKİSİ iptal (lisans değil)", renk: "yellow" },
            { anahtar: "Fon Değerleme Döviz", deger: "TCMB DÖVİZ ALIŞ kuru ile çarpılır (satış/efektif DEĞİL)", renk: "red" },
            { anahtar: "Olağanüstü Durum DEĞİL", deger: "Şirket iflası olağanüstü DEĞİL → fon fiyatı hesaplanır", renk: "red" },
        ]
    },
    // ============== ALTIN KURALLAR ==============
    {
        baslik: "ALTIN KURALLAR",
        kartlar: [
            { anahtar: "BES ≠ Sigorta", deger: "BES = Kumbara (Tasarruf). Risk teminatı vermez", renk: "red" },
            { anahtar: "BES ≠ SGK Alternatifi", deger: "BES SGK'nın tamamlayıcısıdır, alternatifi DEĞİL", renk: "red" },
            { anahtar: "Emekli = Artık Yatıramaz", deger: "Emekli olan hesaba katkı payı YATIRAMAZ", renk: "red" },
            { anahtar: "Aynı Şirkette 2. Söz.", deger: "Giriş aidatı ALINAMAZ", renk: "green" },
            { anahtar: "Cayma = DK Sıfır", deger: "Cayan kişi Devlet Katkısı'ndan 1 kuruş alamaz", renk: "red" },
            { anahtar: "Her Sözleşme Ayrı", deger: "Yeni sözleşme = Yeni 10 yıl (km sıfırlanır)", renk: "red" },
            { anahtar: "Hesap Birleştirme", deger: "Sadece EMEKLİLİK talebinde yapılabilir (yolun ortasında değil)", renk: "blue" },
            { anahtar: "Ara Verme → Süre İşler", deger: "Ödeme yapılmasa bile 10 yıllık kronometre DURMAZ", renk: "green" },
            { anahtar: "SGK'ya Aktarım YOK", deger: "BES birikimi SGK'ya prim olarak aktarılamaz", renk: "red" },
            { anahtar: "Nakden İntikal Şart", deger: "Para tam ödenmedikçe fon payı hesaba geçmez (veresiye yok)", renk: "red" },
            { anahtar: "Hatanın Faturası", deger: "Fon değeri yanlış hesaplanırsa zararı EMEKLİLİK ŞİRKETİ öder", renk: "red" },
            { anahtar: "Kanun Boşluğu", deger: "4632'de yoksa → Sermaye Piyasası + Sigortacılık mevzuatına bak", renk: "blue" },
            { anahtar: "Giriş Tarihi", deger: "OKS hariç, yürürlükteki en ESKİ sözleşme baz alınır", renk: "blue" },
        ]
    },
    // ============== SOSYAL GÜVENLİK ==============
    {
        baslik: "SOSYAL GÜVENLİK SİSTEMİ",
        kartlar: [
            { anahtar: "1. Basamak", deger: "Zorunlu devlet sistemi (SGK) → Dağıtım modeli", renk: "blue" },
            { anahtar: "2. Basamak", deger: "Mesleki/İşyeri sandıkları (Örn: OYAK)", renk: "blue" },
            { anahtar: "3. Basamak", deger: "Gönüllü bireysel emeklilik (BES) → Fonlama modeli", renk: "blue" },
            { anahtar: "Dağıtım Modeli", deger: "Gençlerin primiyle emeklinin maaşı ödenir (Aktif/Pasif dengesi kritik)", renk: "yellow" },
            { anahtar: "Fonlama Modeli", deger: "Herkes kendi hesabında biriktir, demografiden etkilenmez (BES)", renk: "green" },
            { anahtar: "İşsizlik Maaşı Şartı", deger: "En az 600 gün prim ödemek gerekir", renk: "red" },
            { anahtar: "İşsizlik Maaşı Tutarı", deger: "Son 4 ay ort. brüt kazancın %40'ı, max 300 gün", renk: "red" },
            { anahtar: "Ücret Garanti Fonu", deger: "İşveren iflasında son 3 aylık maaşı öder. İşsizlik fonu işveren payından finanse edilir", renk: "blue" },
            { anahtar: "Fiili Hizmet Zammı", deger: "Ağır/yıpratıcı işlerde prim gününe eklenen ilave süre", renk: "blue" },
            { anahtar: "Sosyal Yardımlar", deger: "Primsiz sistem: devlet bütçesinden muhtaçlara yapılır", renk: "blue" },
        ]
    },
    // ============== VERGİ DETAYLARI ==============
    {
        baslik: "VERGİ VE MUAFYET DETAYLARI",
        kartlar: [
            { anahtar: "Veraset Vergisi (Miras)", deger: "Vefatta birikim varislere kalırsa → terekeye dahil → vergi alınır", renk: "red" },
            { anahtar: "Lehdar'a Kalırsa", deger: "İvazsız iktisap (karşılıksız kazanım) sayılır → veraset vergisi", renk: "red" },
            { anahtar: "Damga Vergisi Muafiyeti", deger: "BES şirketleri kuruluş işlemleri Damga Vergisinden İSTİSNA", renk: "green" },
            { anahtar: "Kurumlar Vergisi İstisna", deger: "Fonların kazançları Kurumlar Vergisinden İSTİSNA", renk: "green" },
            { anahtar: "Aranmayan Paralar", deger: "5 yıl talep edilmeyen paralar → TCMB'ye devredilir", renk: "yellow" },
            { anahtar: "Vergi İndirimi Tavanı", deger: "Sigorta primi: aylık brüt maaşın %15'i ve yıllık asgari ücret", renk: "red" },
            { anahtar: "Muafiyet vs İstisna", deger: "Muafiyet = kişi vergiden af. İstisna = konu/para vergi dışı", renk: "yellow" },
        ]
    },
    // ============== SİGORTACILIK TERİMLERİ ==============
    {
        baslik: "SİGORTACILIK TERİMLERİ",
        kartlar: [
            { anahtar: "Broker", deger: "MÜŞTERİYİ temsil eden bağımsız aracı", renk: "blue" },
            { anahtar: "Acente", deger: "SİGORTA ŞİRKETİNİ temsil eden, bölgesel aracı", renk: "blue" },
            { anahtar: "Eksper", deger: "Hasar miktarı ve nedenini tarafsızca belirleyen uzman", renk: "blue" },
            { anahtar: "Aktüer", deger: "İstatistik/matematik ile prim ve karşılık hesaplayan uzman", renk: "blue" },
            { anahtar: "Sedan", deger: "Reasüransta riski DEVREDEN (satan) şirket", renk: "teal" },
            { anahtar: "Reasürör", deger: "Riski DEVRALAN (alan) şirket", renk: "teal" },
            { anahtar: "Sesyon", deger: "Kabul edilen iş miktarı (devredilen pay)", renk: "teal" },
            { anahtar: "Eksik Sigorta", deger: "Poliçe değeri < gerçek değer → Nispet kaidesi (orantılı kesinti)", renk: "red" },
            { anahtar: "Çifte Sigorta", deger: "Aynı malı 2+ şirkete sigortalatma → şirketler paylaşır, zenginleşme YOK", renk: "red" },
            { anahtar: "Müşterek Sigorta", deger: "Koasürans: Bir menfaatı birden çok sigortacı aynı anda sigorta eder", renk: "yellow" },
            { anahtar: "Muafiyet", deger: "Hasarın belli kısmı sigortalının üzerinde kalır (kesinti)", renk: "yellow" },
            { anahtar: "Spekülatif Risk", deger: "Hem kazanma hem kaybetme olasılığı olan risk (borsa gibi)", renk: "yellow" },
            { anahtar: "Tahkim Komisyonu", deger: "15.000 TL üzeri → Hakem Heyeti ZORUNLU", renk: "red" },
            { anahtar: "Güvence Hesabı", deger: "Sigortasız araç çarparsa mağduru öder. Hazine denetler", renk: "blue" },
        ]
    },
    // ============== SİGORTA PRENSİPLERİ ==============
    {
        baslik: "SİGORTANIN 5 TEMEL PRENSİBİ",
        kartlar: [
            { anahtar: "Tazminat", deger: "Amaç: zenginleştirmek DEĞİL, eski haline getirmek", renk: "blue" },
            { anahtar: "Azami İyi Niyet", deger: "Riski doğru beyan et, saklama!", renk: "blue" },
            { anahtar: "Sigortalanabilir Menfaat", deger: "Zarar gördüğünde cebinizden çıkacak şeyli sigortalatabilirsiniz", renk: "blue" },
            { anahtar: "Yakın Neden", deger: "Hasarı başlatan ilk neden poliçede yazılı olmalı (kalp krizi=hayat sig.)", renk: "blue" },
            { anahtar: "Halefiyet (Rücu)", deger: "Şirket hasarı öder → kusurluya sizin adınıza dava açar", renk: "blue" },
            { anahtar: "Hasar Ödeme Şekli", deger: "Nakit / Onarım / Yenisini koyma. TAKAS yapılamaz!", renk: "red" },
        ]
    },
    // ============== HAYAT SİGORTASI ==============
    {
        baslik: "HAYAT SİGORTASI DETAYLARI",
        kartlar: [
            { anahtar: "Risk Primi", deger: "Vefat, kaza, sakatlık tazminatı için kesilen para", renk: "blue" },
            { anahtar: "Birikim Primi", deger: "Yatırım/tasarruf amacıyla biriken para", renk: "blue" },
            { anahtar: "Matematik Karşılık", deger: "Şirketin ilerideki ödemeleri için kenarda tuttuğu birikim havuzu", renk: "blue" },
            { anahtar: "Mortalite Tablosu", deger: "Yaşama/ölüm istatistikleri", renk: "teal" },
            { anahtar: "Morbidite Tablosu", deger: "Hastalık/maluliyet istatistikleri", renk: "teal" },
            { anahtar: "Komütasyon Tablosu", deger: "Mortalite + Morbidite'nin iskonto edilmiş hali", renk: "teal" },
            { anahtar: "Tenzil", deger: "Prim ödeyemeyince poliçe 'ücretsiz sigortaya' dönüşür", renk: "yellow" },
            { anahtar: "30 Gün Kuralı", deger: "Teklif 30 gün reddedilmezse → poliçe kabul edilmiş sayılır", renk: "red" },
            { anahtar: "Sermaye İtfa Sigortası", deger: "Hiç risk yok, sadece para biriktirme amaçlı hayat sigortası", renk: "yellow" },
        ]
    },
    // ============== KATILIM BES AKİTLER ==============
    {
        baslik: "KATILIM BES - AKİT TÜRLERİ (BANKO)",
        kartlar: [
            { anahtar: "Murabaha", deger: "Maliyet + Kâr = Satış fiyatı (maliyet biliniyor)", renk: "blue" },
            { anahtar: "Mudarebe", deger: "Emek-Sermaye ortaklığı. Zarar → sadece sermayedar üstlenir!", renk: "red" },
            { anahtar: "Muşareke", deger: "Sermaye-Sermaye ortaklığı. Zarar → sermaye oranında paylaşılır", renk: "red" },
            { anahtar: "İcare", deger: "Kiralama (Leasing / Sukuk sertifikası)", renk: "blue" },
            { anahtar: "Selem", deger: "Para PEŞİN, mal VERESİYE (tarımda kullanılır)", renk: "blue" },
            { anahtar: "İstisna", deger: "Sipariş üzerine üretim (imalat/inşaat)", renk: "blue" },
            { anahtar: "Sarf", deger: "Döviz mübadelesi (bozdurma)", renk: "teal" },
            { anahtar: "Karz", deger: "Borç verme", renk: "teal" },
            { anahtar: "Rehin", deger: "İpotek / Teminat", renk: "teal" },
            { anahtar: "Hibe", deger: "Karşılıksız bağış", renk: "teal" },
            { anahtar: "Kefalet", deger: "Teminat mektubu = Kefalet sözleşmesi", renk: "teal" },
            { anahtar: "Danışma Komitesi", deger: "Katılım fonlarını denetler, en az 3 kişi", renk: "red" },
            { anahtar: "Tekâfül", deger: "İslami sigorta modeli: Hibe (yardımlaşma) esaslı, sermayedar fonu ayrı", renk: "yellow" },
        ]
    },
    // ============== KATILIM BES FIKHI KAYNAKLAR ==============
    {
        baslik: "KATILIM BES - FIKHI KAYNAKLAR",
        kartlar: [
            { anahtar: "Muamelat", deger: "Fıkhın ticari konuları inceleyen bölümü", renk: "blue" },
            { anahtar: "Asli Kaynaklar", deger: "Kur'an + Sünnet", renk: "blue" },
            { anahtar: "İcma", deger: "Alimlerin görüş birliğine varması", renk: "blue" },
            { anahtar: "Kıyas", deger: "Benzer olaya aynı hükmü verme", renk: "blue" },
            { anahtar: "İcap", deger: "Sözleşmede ilk teklifi yapma", renk: "teal" },
            { anahtar: "Kabul", deger: "Teklifi onaylama", renk: "teal" },
            { anahtar: "Kavli Sünnet", deger: "Peygamberin SÖZLERİ", renk: "yellow" },
            { anahtar: "Fiili Sünnet", deger: "Peygamberin DAVRANIŞLARI", renk: "yellow" },
            { anahtar: "Takriri Sünnet", deger: "Peygamberin başkasının eylemini ONAYLAMASI (susması)", renk: "yellow" },
            { anahtar: "Liaynihi Haram", deger: "Özü itibariyle haram: İçki, faiz, domuz", renk: "red" },
            { anahtar: "Ligayrihi Haram", deger: "Aslında helal, dış sebepten dolayı haram (Cuma vaktinde ticaret)", renk: "red" },
            { anahtar: "Farz-ı Ayın", deger: "Herkesin bizzat yapması gereken (Namaz)", renk: "blue" },
            { anahtar: "Farz-ı Kifaye", deger: "Bir kısmı yaparsa diğerlerinden kalkar (Cenaze namazı)", renk: "blue" },
        ]
    },
    // ============== İŞLETME KAVRAMLARI ==============
    {
        baslik: "İŞLETME KAVRAMLARI",
        kartlar: [
            { anahtar: "Yönetim Fonksiyonları", deger: "Planlama → Örgütleme → Koordinasyon (Yöneltme) → Kontrol", renk: "blue" },
            { anahtar: "Verimlilik", deger: "Çıktı / Girdi oranı", renk: "blue" },
            { anahtar: "Kârlılık", deger: "Kâr / Sermaye oranı", renk: "blue" },
            { anahtar: "Ekonomiklik", deger: "Toplam Satış / Maliyet", renk: "blue" },
            { anahtar: "Etkinlik", deger: "Hedeflere ulaşabilme becerisi (verimlilik ile karıştırma!)", renk: "yellow" },
            { anahtar: "Konsorsiyum", deger: "Hukuki bağımsızlık koruyup proje için geçici birleşme", renk: "teal" },
            { anahtar: "Fiyat Karteli", deger: "Belli fiyatın altında satmama anlaşması (rekabet yasak)", renk: "red" },
            { anahtar: "Matriks Örgüt", deger: "Çalışan birden fazla yöneticiye bağlı (çapraz yapı)", renk: "teal" },
            { anahtar: "Proaktif", deger: "Olay olmadan ÖNCE tedbir alma", renk: "green" },
            { anahtar: "Reaktif", deger: "Olay olduktan SONRA tepki verme", renk: "yellow" },
            { anahtar: "Yetki Göçerimi", deger: "Yöneticinin karar yetkisini astlara devretmesi", renk: "blue" },
            { anahtar: "Yönetim Alanı", deger: "Bir patronun etkin denetleyebileceği çalışan sayısı sınırlıdır", renk: "blue" },
            { anahtar: "Amaç Birliği", deger: "Tüm bölümler aynı hedef için çalışmalı", renk: "blue" },
            { anahtar: "Komuta Birliği", deger: "Her çalışan TEK bir amirden emir almalı", renk: "blue" },
        ]
    },
    // ============== İKTİSAT TERİMLERİ ==============
    {
        baslik: "İKTİSAT TERİMLERİ",
        kartlar: [
            { anahtar: "Stagflasyon", deger: "Durgunluk (işsizlik) + Enflasyon aynı anda", renk: "red" },
            { anahtar: "Deflasyon", deger: "Fiyatların sürekli düşmesi (enflasyonun tersi)", renk: "red" },
            { anahtar: "Devalüasyon", deger: "Ulusal paranın yabancı para karşısında değer kaybı", renk: "red" },
            { anahtar: "Çekirdek Enflasyon", deger: "Enerji + gıda çıkarılır → uzun dönem trendi gösterir", renk: "yellow" },
            { anahtar: "Maliyet Enflasyonu", deger: "Hammadde/enerji fiyatı artışından kaynaklı", renk: "blue" },
            { anahtar: "Talep Enflasyonu", deger: "Talep > Arz (mal az, isteyen çok)", renk: "blue" },
            { anahtar: "Fırsat (Alternatif) Maliyeti", deger: "Bir şeyi seçerken vazgeçtiğin diğerinin değeri", renk: "blue" },
            { anahtar: "İkame Mal", deger: "Çay-Kahve: biri yükselince diğerinin talebi ARTAR", renk: "teal" },
            { anahtar: "Tamamlayıcı Mal", deger: "Araba-Benzin: biri düşünce diğerinin talebi de DÜŞER", renk: "teal" },
            { anahtar: "Tam Rekabet", deger: "Çok alıcı, çok satıcı, homojen ürün", renk: "blue" },
            { anahtar: "Oligopol", deger: "Az sayıda dev firma piyasayı kontrol eder (GSM gibi)", renk: "blue" },
            { anahtar: "Monopollü Rekabet", deger: "Çok satıcı, farklılaştırılmış ürünler", renk: "blue" },
            { anahtar: "GSYİH", deger: "Ülke SINIRL. içindeki tüm üretim (yabancılar dahil)", renk: "yellow" },
            { anahtar: "GSMH", deger: "Türk vatandaşlarının (yurt dışı dahil) tüm üretimi", renk: "yellow" },
            { anahtar: "Esneklik 0", deger: "Fiyat artsa bile almak ZORUNDASIN → talep esnekliği SIFIR", renk: "red" },
            { anahtar: "Tüketici Rantı", deger: "Ödeyeceğin max fiyattan ucuza alınca elde edilen kazanç", renk: "blue" },
            { anahtar: "Gizli İşsizlik", deger: "Çalışıyor gözükür ama üretime katkısı YOK (tarımda)", renk: "yellow" },
            { anahtar: "Konjonktürel İşsizlik", deger: "Ekonomik krize bağlı dönemsel işsizlik", renk: "yellow" },
        ]
    },
    // ============== SATIŞ TEKNİKLERİ VE STRATEJİLER ==============
    {
        baslik: "SATIŞ TEKNİKLERİ VE STRATEJİLER",
        kartlar: [
            { anahtar: "Açık Uçlu Soru", deger: "Müşteriyi konuşturan soru (Ayda ne kadar ayırabilirsiniz?)", renk: "blue" },
            { anahtar: "Maslow En Temel", deger: "Fizyolojik ihtiyaçlar (yeme, içme, uyku)", renk: "blue" },
            { anahtar: "Empati", deger: "Kendini karşıdakinin yerine koymak", renk: "blue" },
            { anahtar: "Sinerji", deger: "1+1 = 3 etkisi (birlikte daha büyük güç)", renk: "blue" },
            { anahtar: "Son Şans Tekniği", deger: "\"Elimdeki son ürün, bitti bitiyor\"", renk: "teal" },
            { anahtar: "Kızıştırma Tekniği", deger: "\"Almazsanız başkasına satacağım\"", renk: "teal" },
            { anahtar: "Kaymağını Alma", deger: "Pazara yüksek fiyatla gir, rakipler gelince düşür", renk: "yellow" },
            { anahtar: "Derinliğine Girme", deger: "Pazara düşük fiyatla gir, herkese yayıl (nüfuz etme)", renk: "yellow" },
            { anahtar: "Köşe Tutucu (Nicher)", deger: "Çok küçük, spesifik alanda uzmanlaşan işletme", renk: "blue" },
            { anahtar: "Karmaşık Satınalma", deger: "Pahalı, riskli, markalar arası fark çok → uzun araştırma (ev, araba)", renk: "blue" },
            { anahtar: "Rutin Satınalma", deger: "Ekmek/sigara gibi hiç düşünülmeden alınan ürün", renk: "blue" },
            { anahtar: "Satış Süreci Sırası", deger: "Hazırlık → İlk temas → İhtiyaç → Sunum → Kapanış", renk: "green" },
            { anahtar: "Satış İlk Adım", deger: "Daima 'Potansiyel Müşteri Yaratma' ile başlar", renk: "green" },
            { anahtar: "Ürün Hayat Eğrisi", deger: "Sunuş → Büyüme → Olgunluk → Gerileme", renk: "blue" },
        ]
    },
    // ============== HESAPLAMA FORMÜLLERI ==============
    {
        baslik: "HESAPLAMA FORMÜLLERI (SINAV MATEMATİĞİ)",
        kartlar: [
            { anahtar: "YGK Yıllık Limit", deger: "Brüt Asg. Ücret × %8.5 (33.000 × 0.085 = 2.805 TL)", renk: "red" },
            { anahtar: "Aktarımda Kalan", deger: "2.805 - Eski şirketin kestiği = Yeni şirketin kesebileceği", renk: "red" },
            { anahtar: "İrat Hesabı", deger: "İrat = Toplam Birikim - Anapara - Devlet Katkısı", renk: "red" },
            { anahtar: "Stopaj Hesabı", deger: "Stopaj = İrat × Oran (%5/%10/%15)", renk: "red" },
            { anahtar: "Net Faiz", deger: "Brüt Faiz - (Brüt Faiz × Stopaj Oranı)", renk: "blue" },
            { anahtar: "Haciz Koruma Tutarı", deger: "Kalınan ay sayısı × Brüt asgari ücret", renk: "blue" },
            { anahtar: "Vergi İndirimi", deger: "Min(Ödenen prim, Brüt maaş × %15) → indirim tutarı", renk: "blue" },
            { anahtar: "Evlilik/Konut DK", deger: "Çekilen tutarın %20'si kadar DK (5 yıl + 5× asg. ücret şart)", renk: "yellow" },
            { anahtar: "Doğal Afet DK", deger: "Çekilen tutarın %25'i kadar DK (süre/birikim şartı YOK)", renk: "green" },
            { anahtar: "DK Limiti", deger: "Yıllık max = Yıllık brüt asg. ücret × %20", renk: "red" },
        ]
    },
    // ============== EMEKLİLİK PLAN TÜRLERİ ==============
    {
        baslik: "EMEKLİLİK PLAN TÜRLERİ",
        kartlar: [
            { anahtar: "Katkı Payı Esaslı", deger: "Ödeme belli, sonuç sürpriz (BES böyledir)", renk: "blue" },
            { anahtar: "Maaş Esaslı", deger: "Emekli maaşı garanti, buna göre prim hesaplanır", renk: "blue" },
            { anahtar: "Bütünleşik Plan", deger: "BES + Sağlık/Kaza sigortası birlikte. DASK sunulamaz!", renk: "yellow" },
            { anahtar: "Bütünleşik İndirim", deger: "Ek faydaların indirim oranı en az %0.3 olmalı", renk: "blue" },
        ]
    },
    // ============== TUZAK SAVAR REHBERİ ==============
    {
        baslik: "TUZAK SAVAR REHBERİ",
        kartlar: [
            { anahtar: "Stopaj Ana Paradan mı?", deger: "HAYIR! Sadece getiriden (irattan) kesilir", renk: "red" },
            { anahtar: "DK Hak Ediş = Vesting?", deger: "HAYIR! DK: 3-6-10 yıl. İşveren Vesting: max 7 yıl", renk: "red" },
            { anahtar: "Mudarebe Zarar?", deger: "Sermayedar mali zararı çeker, emekçinin emeği boşa gider", renk: "red" },
            { anahtar: "5 Yıl Şartı Aranmaz?", deger: "DOĞAL AFET → süre ve birikim şartı aranmaz", renk: "green" },
            { anahtar: "Fon = Tüzel Kişi?", deger: "HAYIR! Fon = malvarlığı havuzu, tüzel kişiliği YOK", renk: "red" },
            { anahtar: "İşveren Grubu Devir?", deger: "İşveren grup sözleşmesi alacağın devrine konu EDİLEMEZ", renk: "red" },
            { anahtar: "Repo = Para girer mi?", deger: "EVET! Repo → TCMB piyasaya para verir (Ters repo tersi)", renk: "yellow" },
            { anahtar: "Tahvil Fiyat ↑ = Faiz?", deger: "Fiyat ↑ = Faiz ↓ (TERS ORANTI)", renk: "yellow" },
            { anahtar: "Deflasyon = Stagflasyon?", deger: "HAYIR! Deflasyon = fiyat düşüşü. Stagflasyon = durgunluk + enflasyon", renk: "red" },
            { anahtar: "Selem vs İstisna", deger: "Selem: para peşin mal veresiye. İstisna: sipariş üzerine üretim", renk: "yellow" },
            { anahtar: "Liaynihi vs Ligayrihi", deger: "Liaynihi: öz haram (faiz). Ligayrihi: dış sebep haram (Cuma ticareti)", renk: "yellow" },
        ]
    },
    // ============== SON DETAYLAR ==============
    {
        baslik: "SON DETAYLAR VE İSTİSNALAR",
        kartlar: [
            { anahtar: "Fon Dağılım Değişikliği", deger: "Yılda max 12 kez", renk: "blue" },
            { anahtar: "Emeklilik Planı Değişikliği", deger: "Yılda max 4 kez", renk: "blue" },
            { anahtar: "Düzensiz Ödeme", deger: "Art arda 3 ay ödemezsen → ek kesinti hakkı doğar", renk: "red" },
            { anahtar: "Yönetim Kurulu", deger: "Emeklilik şirketinde en az 5 kişi", renk: "blue" },
            { anahtar: "Fon Tavsiyesi Ücreti", deger: "Fon tavsiyesi için ücret ALINAMAZ", renk: "green" },
            { anahtar: "Lisans İptali", deger: "Kural ihlali → 3 yıl sınava giremez", renk: "red" },
            { anahtar: "Hapis Cezası", deger: "5+ yıl hapis → imza yetkilisi olamaz", renk: "red" },
            { anahtar: "Aktarım Gecikmesi", deger: "Şirket geç kalırsa parasal kaybı cebinden öder", renk: "red" },
            { anahtar: "Mesafeli Satış", deger: "İnternet/mobil BES'te matbu form zorunlu DEĞİL, e-onay yeterli", renk: "green" },
            { anahtar: "Kredi Kartı Blokajı", deger: "Aktarım yapılırsa → provizyon İPTAL (kart çekimi geri alınır)", renk: "yellow" },
            { anahtar: "Min 3 Fon Kurma", deger: "Emeklilik şirketi kuruluşunda en az 3 farklı fon zorunlu", renk: "blue" },
            { anahtar: "Dengeleme Karşılığı", deger: "Gelecek tazminat dalgalanmalarını dengelemek için ayrılan fon", renk: "blue" },
        ]
    }
];
