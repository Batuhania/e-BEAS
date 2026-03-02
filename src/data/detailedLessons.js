// Detaylı Konu Anlatımı - Analitik Soru Çözümleri
// Her sorunun tam otopsisi: Konu anlatımı, hafıza şifresi, hap bilgi, analiz
export const detailedLessons = [
    {
        id: 1,
        kategori: "BES Mevzuatı",
        konuBasligi: "Bireysel Emeklilik Sistemi Mevzuatı / Ayrılma ve Kesintiler",
        soruMetni: "Bireysel emeklilik sistemine 3 yıl boyunca 15.000 TL katkı payı ödeyen 35 yaşındaki bir katılımcı sistemden ayrılmak istemektedir. Katılımcının 5 yıldan önce ayrılma durumunda tahsil edilmek üzere 100 TL ertelenmiş giriş aidatı borcu bulunmaktadır. İlgili sözleşmeye ödenen katkı payı için devlet katkısı alınmadığı varsayımı ile birikim tutarı, 20.000 TL olan katılımcının sistemden ayrılması durumunda alacağı tutar ne kadar olacaktır?",
        soruOzeti: "3 yıldır sistemde olan biri 15.000 TL yatırmış, parası 20.000 TL olmuş. Çıkmak istiyor. 100 TL aidat borcu var. Devlet katkısı sıfır. Bu adama net kaç TL ödenir?",
        konuAnlatimi: `Bir müşteri sistemden erken çıkmak istediğinde şirket (Allianz, Garanti vs.) müşterinin bakiyesine bakar ve kanunun izin verdiği cezaları keser. Bu soruda müşterinin toplam 20.000 TL'si var. Şirketin kesebileceği tek bir şey belirtilmiş: "Ertelenmiş Giriş Aidatı".

Daha önce konuştuğumuz o meşhur 5 Yıl Kuralını hatırla. Şirketler müşteriyi içeri alırken "Senden giriş parası almıyorum" derler ama bunu 5 yıl içeride kalman şartına bağlarlar. Müşteri 3. yılda çıkmak istediği için şirket anında o 100 TL'lik cezayı devreye sokar. Toplam para olan 20.000 TL'den bu 100 TL borç kesilir.

Not: Güncel sınavda bu tarz sorularda 5.000 TL'lik kâr üzerinden %15 stopaj da hesaplatılır, ancak şıklarda stopajsız hali verildiği için sadece borç düşülmüştür.`,
        dogruCevap: "19.150 TL",
        bilmenGerekenler: [
            "Müşteri 5 yılı doldurmadan çıkarsa, sözleşmedeki \"Ertelenmiş Giriş Aidatı\" doğrudan toplam birikiminden eksi (-) olarak düşülür.",
            "Soruda \"Devlet katkısı alınmadığı varsayımıyla\" diyorsa, devlet katkısı hak ediş oranlarını hesaba katmana gerek yoktur; sadece ana parayı ve şirketin keseceği cezayı hesaplarsın."
        ],
        hafizaSifresi: "5 Yıl Kuralı: 5 yıldan önce çıkarsan, ertelenen aidat birikimden düşülür. Hesap basit: Birikim - Borç = Net Ödeme.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 2,
        kategori: "BES Mevzuatı",
        konuBasligi: "BES Mevzuatı / Giriş Aidatı İstisnaları",
        soruMetni: "A emeklilik şirketinde, bir bireysel emeklilik sözleşmesi olan bir katılımcı, ilgili şirkette yeni bir bireysel emeklilik sözleşmesi akdetmek istemektedir. Katılımcının 01.01.2013 tarihinden sonra imzaladığı teklife istinaden düzenlenen sözleşmeden tahsil edilebilecek giriş aidatı tutarı hakkında aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "Zaten A şirketinde hesabı olan bir müşteri, aynı şirkette ikinci bir hesap (sözleşme) daha açıyor. Bu ikinci hesaptan giriş aidatı kesilir mi?",
        konuAnlatimi: `Giriş aidatı, müşterinin sisteme kaydı yapılırken şirketin yaptığı kırtasiye ve operasyonel masraflar için aldığı bir ücrettir.

Kanun koyucu (Devlet), emeklilik şirketlerinin müşteriyi yolunacak kaz gibi görmesini engellemek için bir kural koymuştur: Bir müşteri bir şirkete ilk kez girerken giriş aidatı ödeyebilir (veya bu aidat 5 yıl ertelenebilir). Ancak aynı müşteri, aynı şirkette ikinci, üçüncü veya dördüncü sözleşmesini açarsa, şirket o müşteriyi zaten tanıyordur, sisteme kaydı vardır.

Bu yüzden ikinci ve sonraki sözleşmeler için yasal olarak bir daha giriş aidatı talep edilemez.`,
        dogruCevap: "Giriş aidatı alınamaz.",
        bilmenGerekenler: [
            "Aynı şirkette açılan 2. sözleşme her zaman \"Giriş Aidatından\" muaftır. Sıfır kesinti yapılır.",
            "Sınavda bu soruyu gördüğünde hiçbir limite veya yıla bakmadan direkt \"Alınamaz\" şıkkını işaretlemelisin."
        ],
        hafizaSifresi: "Aynı Kapıdan İkinci Giriş Ücretsiz! Aynı şirkette ikinci sözleşme = Giriş aidatı sıfır.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 3,
        kategori: "BES Mevzuatı",
        konuBasligi: "Emeklilik Yatırım Fonları / Fon Türleri",
        soruMetni: "Fon portföyünün tamamı devamlı olarak kira sertifikaları katılma hesapları, ortaklık payları, altın ve diğer kıymetli madenler ile Sermaye Piyasası Kurulunca uygun görülen diğer faize dayalı olmayan para ve sermaye piyasası araçlarında oluşan emeklilik yatırım fonlarına ne ad verilir?",
        soruOzeti: "İçinde faiz barındıran araçların kesinlikle olmadığı, sadece altın, kira sertifikası gibi araçlardan oluşan fon türünün yasal adı nedir?",
        konuAnlatimi: `Emeklilik sisteminde toplanan paralar "Fon" adı verilen havuzlarda değerlendirilir. Bazı müşteriler dini hassasiyetleri gereği paralarının faizli bankacılık ürünlerinde (repo, devlet tahvili, vadeli mevduat) değerlenmesini istemezler.

Devlet bu müşteriler için özel bir fon türü tanımlamıştır. Bu fonun içine sadece faizsiz (İslami finansa uygun) yatırım araçları konulabilir. Bunların en bilinenleri; faizsiz bankacılık ürünü olan "Katılma Hesapları" ve faizsiz tahvil diyebileceğimiz "Kira Sertifikaları (Sukuk)"dır.

İçinde sıfır faiz olan bu özel fonlara "Katılım Fonu" denir.`,
        dogruCevap: "Katılım fonu",
        bilmenGerekenler: [
            "Soruda \"Faize dayalı olmayan\" ve \"Kira sertifikası\" kelimelerini aynı cümlede gördüğün an cevap her zaman Katılım Fonudur.",
            "Altın veya hisse senedi (ortaklık payı) hem normal fonlarda hem de katılım fonlarında bulunabilir. Ayrıştırıcı kelime \"faizsizlik\"tir."
        ],
        hafizaSifresi: "\"Faize dayalı olmayan\" = Katılım. Banko soru, tanım ezberle ve geç.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 4,
        kategori: "BES Mevzuatı",
        konuBasligi: "BES Mevzuatı / Emeklilik Dönemi Hakları",
        soruMetni: "Emekliliğe hak kazanan ve emeklilik hesabındaki birikimi ile devlet katkısı hesabındaki tutarları emeklilik gelir sözleşmesi kapsamında hazırlanan bir program çerçevesinde kendisine ödenmeye başlanan katılımcının hakları ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        soruOzeti: "Adam sistemde 10 yıl + 56 yaş kuralını doldurmuş, emekli olmuş. Artık birikimi kendisine \"maaş\" gibi aydan aya geri ödeniyor. Bu adamın sistemdeki haklarıyla ilgili hangisi yanlıştır?",
        konuAnlatimi: `Bireysel Emeklilik Sistemi (BES) iki evreden oluşur:

1. Evre (Birikim Evresi): Yıllarca para yatırırsın.
2. Evre (Geri Ödeme/Emeklilik Evresi): Yaşın ve süren dolunca yatırdığın parayı maaş olarak veya topluca geri alırsın.

Sorudaki müşteri 2. evreye geçmiş. Artık kendisine bir ödeme programı (örneğin ayda 10.000 TL) bağlanmış.

Mevzuata göre emekli olan biri fon dağılımını (parasının değerlendiği yeri) değiştirebilir, şirketini değiştirebilir (aktarım) veya "Vazgeçtim, kalan tüm paramı verin gideyim" diyebilir.

Ancak yapamayacağı tek bir şey vardır: Artık emekli olduğu ve "Geri Ödeme" programına geçtiği için, o hesaba dışarıdan tekrar aylık taksitler (katkı payı) yatırıp hesabı büyütmeye devam edemez.`,
        dogruCevap: "Emeklilik hesabına katkı payı ödeyebilir. (Bu ifade YANLIŞTIR, ödeyemez).",
        bilmenGerekenler: [
            "Emekli olup maaş bağlatan biri, o hesaba bir daha yeni para (katkı payı) sokamaz.",
            "Emekli olmuş olsa bile müşteri içeride kalan parasının değerlendiği fonu değiştirme veya parasını alıp başka şirkete geçme özgürlüğüne her zaman sahiptir."
        ],
        hafizaSifresi: "Emeklilik = Para ALMA dönemi, artık YATIRMA dönemi değil. Katkı payı ödeyemez.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 5,
        kategori: "BES Mevzuatı",
        konuBasligi: "Grup Emeklilik Sözleşmeleri / Hak Kazanma Süreleri",
        soruMetni: "01.01.2013 tarihinden sonra teklifi imzalanan işveren grup emeklilik sözleşmelerinde, işveren tarafından katılımcı hesabına ödenen katkı payları ve getirilerinden oluşan birikimlere katılımcının hak kazanma süresi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "Patronun çalışan adına BES açıp primleri kendisinin ödediği (İşveren Grup) sistemde, çalışanın bu paraların \"tamamını alıp gidebilmesi\" için gereken yasal bekleme (hak kazanma) süresinin tavanı nedir?",
        konuAnlatimi: `İşveren Grup Emeklilik Sistemi, şirketlerin çalışanlarını ellerinde tutmak (sadakat) için kullandıkları bir araçtır. Şirket der ki: "Senin adına her ay BES'e 3.000 TL atacağım ama 2 ay sonra işten çıkarsan o parayı alıp gidemezsin, yanar. Belli bir süre benimle çalışmalısın."

Buna "Hak Kazanma Süresi" denir.

Ancak devlet, patronların çalışanı köle gibi sisteme bağlamasını engellemek için bu süreye kanuni bir sınır (tavan) çekmiştir. Patron, çalışanı parayla en fazla 7 yıl içeride tutabilir. 7. yılın sonunda işveren tarafından yatırılan paraların mülkiyeti %100 oranında tamamen çalışana geçer. Sözleşmeye "10 yıl" gibi bir şart yazılamaz.`,
        dogruCevap: "Katılımcının işveren grup emeklilik sözleşmesine giriş tarihinden itibaren 7 yılı aşamaz.",
        bilmenGerekenler: [
            "İşveren (Patron) katkılı sözleşmelerde kilit sayı 7 YIL'dır. 7 yıl maksimum hak kazanma süresidir.",
            "Bu 7 yıllık sayaç, çalışanın şirkete (işe) girdiği tarihte değil; \"Emeklilik sözleşmesinin (BES'in) başladığı tarihte\" işlemeye başlar. Şıklardaki \"İşe giriş tarihinden itibaren\" tuzaklarına asla düşme."
        ],
        hafizaSifresi: "Patronun parası için maksimum bekleme = 7 YIL. Sayaç sözleşme tarihinden başlar, işe giriş tarihinden DEĞİL.",
        onemDuzeyi: "kritik"
    },
    {
        id: 6,
        kategori: "BES Mevzuatı",
        konuBasligi: "Emeklilik Yatırım Fonları",
        soruMetni: "Her birinin değeri fon portföyünün %20'sinden az olmayacak şekilde, fon portföyünün en az %80'i ortaklık payları, borçlanma araçları, altın ve diğer kıymetli madenler ile kira sertifikalarının en az ikisinden oluşan emeklilik yatırım fonlarına ne ad verilir?",
        soruOzeti: "İçinde hisse senedi, tahvil, altın gibi enstrümanların en az iki tanesinin bir arada bulunduğu ve harmanlandığı fon türü hangisidir?",
        konuAnlatimi: `Emeklilik fonları, içerdikleri ağırlıklı yatırım aracına göre isimlendirilir. Sadece hisse senedi varsa "Hisse Senedi Fonu", sadece altın varsa "Kıymetli Madenler Fonu" denir.

Ancak bir fon yöneticisi riski dağıtmak isteyip sepetin içine biraz altın, biraz hisse senedi, biraz da tahvil atarsa (yani en az 2 farklı türü karıştırırsa) bu fonun adı yasal olarak değişir. Tek bir şeye odaklanmadığı için "karışık" anlamına gelen bir isim alır.`,
        dogruCevap: "Karma fon",
        bilmenGerekenler: [
            "Soruda \"En az ikisinden oluşan\" kelime grubunu gördüğün an cevap saniyesinde KARMA fondur.",
            "Sayısal oranlarla (%20, %80) aklını bulandırmaya çalışırlar, o oranları okuyup hesap yapmana hiç gerek yok."
        ],
        hafizaSifresi: "\"Karışık pizza\" gibi düşün. İçinde sosis de var, mantar da var (En az 2 malzeme = Karma).",
        onemDuzeyi: "yuksek"
    },
    {
        id: 7,
        kategori: "BES Mevzuatı",
        konuBasligi: "Sözleşme Türleri ve Kapsamı",
        soruMetni: "Emeklilik sözleşmesi aşağıdaki konulardan hangisinin/hangilerinin esas ve usullerini belirler? I.Şirket nezdinde bireysel emeklilik hesabı açılması. II.Katkı paylarının yatırıma yönlendirilmesi. III.Hesaba katkı payı ödenmesi. IV.Risk teminatı alınması.",
        soruOzeti: "Bireysel Emeklilik Sistemi (BES) sözleşmesinde hangi maddeler yer alır? İşin içinde \"Risk Teminatı\" (kaza/ölüm/hastalık sigortası) var mıdır?",
        konuAnlatimi: `Bireysel Emeklilik Sistemi bir "Tasarruf ve Yatırım" sistemidir. Bir "Sigorta" poliçesi DEĞİLDİR.

Yani sen BES yaptırdığında hastalanırsan hastane masrafını ödemez, kaza yaparsan arabanı tamir etmez.

Bu yüzden BES sözleşmelerinde sadece paranın yatırılması, hesabın açılması ve fonlara yönlendirilmesi (I, II ve III) yer alır. "Risk Teminatı" (IV) hayat sigortası veya kaza sigortası poliçelerinin konusudur, BES'in değil.`,
        dogruCevap: "I, II ve III",
        bilmenGerekenler: [
            "BES = KUMBARA. Kumbara seni trafik kazasından korumaz (Risk Teminatı vermez), sadece içine attığın parayı büyütür.",
            "Risk kelimesini gördüğün an üstünü çiz."
        ],
        hafizaSifresi: "BES = KUMBARA, Sigorta DEĞİL. Risk Teminatı sigortaya ait, BES'e ait değil.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 8,
        kategori: "BES Mevzuatı",
        konuBasligi: "İşveren Grup Emeklilik / Hak Kazanma",
        soruMetni: "Birikimlerin tamamına hak kazanılması için 4 yıllık sürenin öngörüldüğü... katılımcının birikimlere hak kazanma süresine ilişkin aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "Patron senin adına BES açtı. Sözleşme 4 yıllıksa, 3. yılın sonunda paranın ne kadarını alabilirsin?",
        konuAnlatimi: `Burada çok tehlikeli bir sınav tuzağı var! Devlet Katkısı oranları (%15, %35, %60) ile İşveren Katkısı (Patronun Parası) oranları tamamen farklıdır.

Devlet sana "Devlet Katkısını" verirken standart bir 3-6-10 yıl kuralı uygular. Ama patronun yatırdığı parada standart bir kural yoktur, sözleşmeye yazılan yıla göre oran değişir:

• Eğer patron sözleşmeyi 4 yıllık yaptıysa: 3. yıl bittiğinde paranın %75'ini cebe atarsın, 4. yıl bitince tamamını alırsın.

Patronun parasında %15, %35 gibi Devlet Katkısı oranları YOKTUR.`,
        dogruCevap: "3. yılın sonunda %75'ine, 4. yılın sonunda tamamına hak kazanır.",
        bilmenGerekenler: [
            "4 Yıllık Sözleşme: 3. yılda %75 (üç çeyrek), 4. yılda %100.",
            "Devlet Katkısı oranları ile İşveren Katkısı oranlarını ASLA karıştırma."
        ],
        hafizaSifresi: "\"3'te 3 çeyrek kuralı\": 4 yıllık sözleşmede 3. yılda %75, 4. yılda %100.",
        onemDuzeyi: "kritik"
    },
    {
        id: 9,
        kategori: "BES Mevzuatı",
        konuBasligi: "İşveren Grup Emeklilik / Hak Kazanma",
        soruMetni: "Birikimlerin tamamına hak kazanılması için 2 yıllık sürenin öngörüldüğü... katılımcının birikimlere hak kazanma süresine ilişkin aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "Patron sözleşmeyi 2 yıllık yaptıysa kural nedir?",
        konuAnlatimi: `2 yıllık sözleşmede kural çok basittir: "Hep Ya Hiç" prensibi geçerlidir.

İlk yıl tek kuruş alamazsın, dişini sıkarsın. 2. yıl bittiğinde paranın %100'ü senin olur.

Burada ara bir oran (%25, %50 gibi) YOKTUR. Ya hiç ya tamamen.`,
        dogruCevap: "2. yıl sonunda birikiminin %100'üne hak kazanır.",
        bilmenGerekenler: [
            "2 Yıllık Sözleşme: İlk yıl SIFIR, 2. yıl %100. Ara oran yok.",
            "Patronun parasında Devlet Katkısı tablosundaki %15, %35 gibi kademeli oranlar geçerli DEĞİLDİR."
        ],
        hafizaSifresi: "2 yıllık = \"Hep Ya Hiç\". İlk yıl 0, ikinci yıl %100.",
        onemDuzeyi: "kritik"
    },
    {
        id: 10,
        kategori: "BES Mevzuatı",
        konuBasligi: "Müşteri Bilgilendirme Yükümlülükleri",
        soruMetni: "Emeklilik şirketi, katılımcının birikiminin mali piyasalardaki risklerden daha az etkilenmesini sağlamak amacıyla düşük risk düzeyine sahip fonlara geçişi ile ilgili değerlendirme yapmasını sağlamak üzere ne zaman katılımcıya yazılı öneride bulunur?",
        soruOzeti: "Şirket müşteriye \"Emekliliğin yaklaştı, paranı düşük riskli yerlere alalım\" uyarısını ne zaman yapmak zorundadır?",
        konuAnlatimi: `Bireysel Emeklilikte en büyük trajedi, tam emekli olacağın hafta borsanın çökmesi ve 10 yıllık birikiminin yarısının buhar olmasıdır.

Kanun koyucu bu felaketi önlemek için şirketlere bir görev vermiştir. Müşteri emekliliğe yaklaştığında şirket onu uyarmak zorundadır.

Yasal sınır, emeklilik tarihine "Asgari 2 Yıl" kaladır. Şirket bu tarihte müşteriye yazılı bildirim yapar ve "Kemerleri bağla, riski düşür" der.`,
        dogruCevap: "Emekliliğe hak kazanılmadan asgari 2 yıl önce",
        bilmenGerekenler: [
            "Emeklilik işlemleriyle ilgili kritik uyarılar genellikle uzun vadeli planlandığı için aylar bazında değil, yıllar bazında (2 yıl) sorulur.",
            "Kilit sayı: 2 YIL"
        ],
        hafizaSifresi: "\"Son Viraj Kuralı\": Bitiş çizgisine (Emekliliğe) 2 YIL kala frene basılır (Düşük riskli fona geçilir).",
        onemDuzeyi: "yuksek"
    },
    {
        id: 11,
        kategori: "BES Mevzuatı",
        konuBasligi: "Emeklilik Dönemi ve Gelir Sözleşmeleri",
        soruMetni: "Emekliliğe hak kazanan ve emeklilik hesabındaki birikimi ile devlet katkısı hesabındaki tutarları emeklilik gelir sözleşmesi kapsamında hazırlanan bir program çerçevesinde kendisine ödenmeye başlanan katılımcı için aşağıdakilerden hangisi doğrudur?",
        soruOzeti: "Emekli olup parasını \"maaş gibi\" almaya başlayan müşteri, maaş tutarını veya alma sıklığını yılda kaç kere değiştirebilir?",
        konuAnlatimi: `BES'te emekli olduğunda paranı topluca alıp gidebileceğin gibi, şirkette bırakıp sana "düzenli maaş" (Emeklilik Gelir Sözleşmesi) bağlamalarını da isteyebilirsin.

Diyelim ki "Bana ayda 10.000 TL verin" dedin. Ancak 5 ay sonra enflasyon arttı ve "Ayda 15.000 TL verin" demek istedin.

Şirketlerin operasyonel olarak her gün bu taleple uğraşmaması için kanun koyucu bir sınır çizmiştir. Emekli maaş programında kafana göre her ay değişiklik yapamazsın. Bu değişiklik hakkı yılla sınırlandırılmıştır.`,
        dogruCevap: "Ödeme dönemini veya tutarını yılda en fazla 2 kez değiştirebilir.",
        bilmenGerekenler: [
            "Emekli maaş planı esnektir ama oyuncak değildir, sadece 6 ayda bir (yılda 2 kez) revize edilebilir.",
            "Emeklilik Gelir Sözleşmesinde plan değişikliği limiti = Yılda 2 defa."
        ],
        hafizaSifresi: "Türkiye'de emekliler yılda kaç kez zam alır? Ocak ve Temmuz = 2 kez. BES emeklisinin maaş değişim hakkı da Yılda 2'dir.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 12,
        kategori: "BES Mevzuatı",
        konuBasligi: "Sözleşme Tarafları ve Hakları",
        soruMetni: "Aşağıda belirtilen haklardan hangisi ya da hangilerinin bireysel emeklilik sözleşmesinde katılımcı ad ve hesabına katkı payı ödeyen kişiler tarafından kullanılması kararlaştırılamaz? I.Başka şirkete aktarım II.Sistemden ayrılma III.Emeklilik",
        soruOzeti: "Parayı yatıran baban veya eşin, senin adına hangi işlemleri yapamaz?",
        konuAnlatimi: `Bireysel Emeklilik Sisteminde tek bir patron vardır: Katılımcı (Sözleşme Sahibi). Sisteme kimin para pompaladığının yasal olarak hiçbir önemi yoktur.

Kanun, parayı ödeyen kişinin bir gün sinirlenip "Paramı geri çekiyorum, sözleşmeyi bitiriyorum" diyerek katılımcıyı mağdur etmesini engeller.

Bu nedenle, sözleşmeyi tamamen sonlandıran iki büyük işlem olan "Sistemden Ayrılma (İptal/Cayma)" ve "Emekli Olup Parayı Alma" hakları sadece ve sadece katılımcıya aittir. Parayı ödeyen kişi bu hakları kullanamaz.

Not: Aktarım (I) sadece şirketi değiştirmektir, sistemi bitirmediği için istisnai durumlarda ödeyene bu hak verilebilir, ama bitirme hakkı asla verilemez.`,
        dogruCevap: "II ve III (Sistemden ayrılma ve Emeklilik)",
        bilmenGerekenler: [
            "Parayı veren düdüğü çalmaz. Parayı ödeyen kişi sözleşmeyi bitiremez veya parayı alıp kaçamaz.",
            "Fişi çekme hakkı (Ayrılma ve Emeklilik) daima sözleşme sahibinindir (katılımcınındır)."
        ],
        hafizaSifresi: "\"Son Söz Katılımcının\". Sözleşmeyi sonlandıran işlemleri (II ve III) başkası yapamaz.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 13,
        kategori: "BES Mevzuatı",
        konuBasligi: "Aracının El Kitabı / Bilgilendirme Evrakları",
        soruMetni: "Emeklilik planı, plan kapsamında sunulan fonlar, yapılan kesintiler, katkı payı tutarı, emeklilik sözleşmesinin tarafları ve katılımcının yatırım tercihlerine ilişkin hususlar ile benzeri bilgileri içeren form aşağıdakilerden hangisidir?",
        soruOzeti: "İçinde ne kadar para yatıracağın, kesinti ve fon tercihinin detaylıca yazıldığı o asıl sözleşme evrakının adı nedir?",
        konuAnlatimi: `Müşteriye sistemi satarken önüne birkaç farklı kağıt koyarsın.

"Giriş Bilgi Formu" sadece BES'in ne kadar güzel bir şey olduğunu anlatan genel bir broşürdür, içinde Ahmet'in veya Mehmet'in özel rakamları yazmaz.

Ancak müşteriye "Sen ayda 5.000 TL ödeyeceksin, biz senden 100 TL aidat keseceğiz, paranı da Altın fonuna koyacağız" dediğin, yani işin tamamen kişiselleştiği ve resmiyete döküldüğü o detaylı formun adı "Teklif Formu"dur. Bu form imzalandığında veya onaylandığında sözleşme süreci resmen başlamış olur.`,
        dogruCevap: "Teklif formu",
        bilmenGerekenler: [
            "Detaylı rakamların (kesintiler, fon tercihleri, tutarlar) yazdığı yasal belgenin adı Teklif Formudur.",
            "Kişiye özel kesinti ve fonlar = Teklif Formu."
        ],
        hafizaSifresi: "\"Esnaf Mantığı\": Ürün tanıtımı = Katalog (Giriş bilgi formu). Cebinden çıkacak parayı gösteren kağıt = TEKLİF.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 14,
        kategori: "BES Mevzuatı",
        konuBasligi: "Fonların Denetimi ve Kamuyu Aydınlatma",
        soruMetni: "Emeklilik Yatırım Fonlarının Kuruluş ve Faaliyetlerine İlişkin Esaslar Hakkında Yönetmelikte, emeklilik yatırım fonları hakkındaki hangi raporların emeklilik şirketinde katılımcıların incelemesi için hazır bulundurulması istenmektedir?",
        soruOzeti: "Müşteri şirkete gelip \"Fonların resmi raporlarını gösterin\" derse, şirket hangi zaman dilimlerine ait raporları koymak zorundadır?",
        konuAnlatimi: `Emeklilik fonları SPK ve SEDDK denetimi altındadır ve şeffaflık zorunludur.

Günlük veya haftalık raporlar çok değişkendir, borsanın anlık dalgalanmasını yansıtır ve kalıcı bir veri sunmaz.

Kanun, müşterinin fonların genel gidişatını görebilmesi için şirketlere belirli periyotlardaki makro raporları hazır tutma zorunluluğu getirmiştir.`,
        dogruCevap: "Yıllık rapor ve altı aylık rapor",
        bilmenGerekenler: [
            "Fonların genel röntgeni kısa vadeli değil, uzun vadeli raporlarla müşteriye sunulur.",
            "Şirkette hazır bulunması gereken fon raporları: Yıllık ve 6 Aylık."
        ],
        hafizaSifresi: "Üniversitedeki \"Vize ve Final\" mantığı. Vize (6. Ay) ve Final (Yıl sonu). Şirket sana sadece iki ana raporu sunmak zorundadır.",
        onemDuzeyi: "orta"
    },
    {
        id: 15,
        kategori: "BES Mevzuatı",
        konuBasligi: "Emeklilik Şartları",
        soruMetni: "Sistemde yalnızca bir adet sözleşmesi bulunan ve ilgili sözleşmeden emeklilik hakkını kullanan katılımcının sistemde yeni bir emeklilik sözleşmesi akdetmesi halinde bu sözleşmeden emeklilik hakkını kazanabilmesi hangi koşula bağlıdır?",
        soruOzeti: "İlk sözleşmesinden emekli olmuş biri, yeni bir sözleşme açarsa, bu yeni sözleşmeden de emekli olabilmesi için ne gerekir?",
        konuAnlatimi: `BES'te "Bir kere emekli oldum, artık sisteme her girdiğimde anında emekli sayılırım" diye bir dünya yoktur.

Emeklilik hakkı "kişiye" değil, "sözleşmeye" verilir.

Müşteri daha önce yaşını ve yılını doldurup emekli olmuş olsa bile, açtığı her yeni sözleşme kanun karşısında 0 kilometre bir bebek gibidir.

Kişinin yaşı zaten 56'yı geçmiş olduğu için yaş şartı otomatikman sağlanmış olur, ancak "sistemde kalma süresi" şartını o sözleşme için baştan doldurması şarttır.`,
        dogruCevap: "Yeni sözleşmenin en az 10 yıl sistemde bulunması gerekir.",
        bilmenGerekenler: [
            "Her sözleşmenin kendi 10 yıllık ömrü vardır. Geçmiş başarılar yeni sözleşmeye transfer edilemez.",
            "İkinci, üçüncü veya beşinci emeklilik fark etmez; her yeni sözleşme için kural EN AZ 10 YIL'dır."
        ],
        hafizaSifresi: "\"Kilometre Sıfırlanır\": Yeni araba (sözleşme) aldığında kilometre sayacı sıfırdan başlar. Her sözleşmenin kendi 10 yılı var.",
        onemDuzeyi: "kritik"
    },
    {
        id: 16,
        kategori: "BES Mevzuatı",
        konuBasligi: "İşveren Grup Emeklilik / İstisnai Hak Kazanma Durumları",
        soruMetni: "İşveren grup emeklilik sözleşmesi olan katılımcının maluliyet nedeni ile işinden ayrılması durumunda, işveren tarafından ödenen katkı payları ve getirilerine hak kazanma durumu hakkındaki aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "Patronun senin adına BES açtı ama süren dolmadan malul (sakat) oldun. Patronun yatırdığı paralar ne olur?",
        konuAnlatimi: `Normal şartlarda kendi isteğinle (istifa edip) işten ayrılsaydın, o süreyi doldurmadığın için parayı alamazdın.

Ancak ortada senin elinde olmayan bir "Mücbir Sebep" yani zorunlu bir durum (Maluliyet veya Vefat) varsa, devlet der ki: "Bu adam keyfinden ayrılmıyor, çalışamayacak durumda."

Böyle bir felaket senaryosunda, sözleşmede yazan o 3 yıllık, 5 yıllık bekleme süreleri anında çöpe atılır. Paranın bir kısmını değil, o güne kadar birikmiş olan patron katkısının ve getirisinin %100'ünü anında alırsın.

BES mevzuatında "Vefat" ve "Maluliyet" sistemin tüm kilitlerini açan joker kartlarıdır. Bu iki durumda hiçbir süre sınırı, ceza veya kesinti işlemez.

Bu bilgi sadece işveren sözleşmelerinde değil, "Devlet Katkısı" hak edişlerinde de aynen geçerlidir. (Normalde 10 yıl bekleyip alacağın %60'lık devlet katkısını, vefat/maluliyet durumunda süresiz olarak %100 alırsın).`,
        dogruCevap: "Hak kazanma süresinin tamamlanmasını beklemeden tümüne hak kazanır.",
        bilmenGerekenler: [
            "Vefat ve Maluliyet = Tüm kilitleri açan joker kart. Hiçbir süre sınırı işlemez.",
            "Kanunda maluliyetin bir oranı üzerinden hesaplama YAPILMAZ. Maluliyet raporu varsa %100.",
            "\"Maluliyet oranına göre verilir\" gibi şıklar TUZAKTIR."
        ],
        hafizaSifresi: "\"Felaket Anında Süreler Sıfırlanır\": Vefat ve Maluliyet kelimesini gördüğün an = \"Beklemeden\" ve \"%100\" şıklarını ara.",
        onemDuzeyi: "kritik"
    },
    {
        id: 17,
        kategori: "BES Mevzuatı",
        konuBasligi: "Bireysel Emeklilik Sistemi Mevzuatı / Aktarım ve Kesintiler",
        soruMetni: "Giriş aidatının ertelendiği bir katılımcının, sözleşmesinin 5 yılı dolmadan önce birikiminin başka bir şirkete aktarımını talep etmesi durumunda emeklilik şirketi ertelenmiş giriş aidatı için aşağıdakilerden hangisini uygular?",
        soruOzeti: "5 yılı doldurmadan paraını başka şirkete taşımak (aktarım) istiyorsun. Eski şirketin ertelenmiş giriş aidatını nasıl tahsil eder?",
        konuAnlatimi: `Bireysel Emeklilikte müşteriler şirketler arasında paralarını transfer edebilirler (Buna "Aktarım" denir).

Şirketlerin senden "Giriş Aidatı" kesebilmek için 5 yıllık bir yasal süresi vardır. Sen 5 yılı beklemeden kaçarsan, mevcut şirketin der ki: "Ben senden o aidatı girişte almamıştım, madem erken gidiyorsun o parayı şimdi ödeyeceksin."

Peki bu parayı nasıl alır? Seni borçlu olarak yeni şirkete mi gönderir? Hayır. Şirketler arası borç transferi diye bir şey yoktur.

Mevcut şirketin, transferi onaylamadan hemen önce senin toplam birikiminden (kasandaki paradan) o aidat cezasını keser ve sadece geriye kalan net bakiyeyi yeni şirkete gönderir.`,
        dogruCevap: "Ertelenmiş giriş aidatı, katılımcının bireysel emeklilik hesabındaki birikiminden indirilebilir.",
        bilmenGerekenler: [
            "5 yıldan önce yapılan her türlü kaçışta (iptal veya aktarım) \"Ertelenmiş Giriş Aidatı\" mutlaka tahsil edilir.",
            "BES şirketleri birbirine borçlu müşteri yollamaz. Ceza eski şirkette birikimden kesilir, yeni şirkete temiz para gider.",
            "Şirket bu parayı senin onayını beklemeden tek taraflı olarak birikiminden düşme hakkına sahiptir."
        ],
        hafizaSifresi: "\"Hesabı Ödemeden Masadan Kalkılmaz\": Eski restoran (şirket) veresiyesini yeni restorana yazdırmaz. Birikiminden o an keser.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 18,
        kategori: "BES Mevzuatı",
        konuBasligi: "Emeklilik Yatırım Fonları / Portföy İçeriği",
        soruMetni: "Aşağıdakilerden hangisi veya hangileri emeklilik yatırım fonu portföyüne alınabilir? I.Vadeli mevduat ve katılma hesabı. II.Borçlanma araçları, repo ve ters repo işlemleri ile ortaklık payları. III.Kıymetli madenler",
        soruOzeti: "Bir emeklilik fonunun içine vadeli mevduat, hisse senedi, repo, altın gibi araçları koyabilir miyiz?",
        konuAnlatimi: `Emeklilik Yatırım Fonları, Sermaye Piyasası Kurulu'nun (SPK) onayladığı her türlü finansal aracı kullanarak paranı büyütmeye çalışan havuzlardır.

Kanun koyucu, fon yöneticilerinin elini kısıtlamaz, onlara geniş bir menü sunar:

• Risksiz kazanç isteyenler için: Vadeli Mevduat veya İslami muadili olan Katılma Hesabı (I).
• Devlete borç vererek veya şirketlere ortak olarak: Borçlanma Araçları (Tahvil/Bono) ve Ortaklık Payları (Hisse senetleri) (II).
• Geleneksel ve güvenli: Kıymetli Madenler (Altın, Gümüş vb.) (III).

Yasal borsada ve finansal piyasalarda işlem gören bu araçların tamamı bir emeklilik fonunun yapı taşı olabilir.

Not: "Kripto Paralar" veya "Kaldıraçlı Foreks İşlemleri" gibi SPK regüle etmediği spekülatif araçlar BES fonlarına giremez.`,
        dogruCevap: "I, II, III (Hepsi)",
        bilmenGerekenler: [
            "Fonlar sadece borsadan ibaret değildir. Bankadaki vadeli mevduat bile fon sepetinin bir parçası olabilir.",
            "SPK onaylı tüm klasik finansal araçlar serbesttir."
        ],
        hafizaSifresi: "\"SPK Onaylı Her Şey Serbesttir\": Mevduat, Faiz, Repo, Hisse, Altın... Hepsini kabul et, işaretle ve geç.",
        onemDuzeyi: "orta"
    },
    {
        id: 19,
        kategori: "BES Mevzuatı",
        konuBasligi: "Emeklilik Yatırım Fonları / Fon Tanımları",
        soruMetni: "Fon portföyünün en az %80'i devamlı olarak yerli ve/veya yabancı kamu ve/veya özel sektör borçlanma araçları ile kamu borçlanma araçlarının konu olduğu ters repodan oluşan emeklilik yatırım fonlarına ne ad verilir?",
        soruOzeti: "İçindeki paranın en az %80'i ile sadece borçlanma aracı (tahvil, bono) ve repo alınan fon türüne ne denir?",
        konuAnlatimi: `Emeklilik yatırım fonlarında isimler, fonun içindeki ağırlıklı malzemeye göre belirlenir. Eğer fonun %80'i ile hisse senedi alıyorsan buna "Hisse Senedi Fonu" dersin. Eğer fonun %80'i ile devletin veya şirketlerin çıkardığı "Borçlanma Araçlarını" (tahvil/bono) alıyorsan, bu fonun adı doğal olarak "Borçlanma Araçları Fonu" olur.

Çok basit bir eşleştirme sorusudur. Matematik hesabı veya ezber gerektirmez. Soru metnindeki kilit kelimeyi (Borçlanma araçları) bul, şıklarda o kelimenin geçtiği fon türünü işaretle.`,
        dogruCevap: "Borçlanma araçları fonu",
        bilmenGerekenler: [
            "Soru metnindeki kilit kelimeyi (Borçlanma araçları) bul, şıklarda o kelimenin geçtiği fon türünü işaretle.",
            "Hap Bilgi: En az %80'i Borçlanma aracı olan fon = Borçlanma Araçları Fonu"
        ],
        hafizaSifresi: "Fonun adı = içindeki malzemenin adı. %80 borçlanma aracı varsa = Borçlanma Araçları Fonu.",
        onemDuzeyi: "orta"
    },
    {
        id: 20,
        kategori: "BES Mevzuatı",
        konuBasligi: "Sözleşmenin Yürürlüğü ve Başlangıcı",
        soruMetni: "Başka bir emeklilik sözleşmesi bulunmayan ve işveren grup emeklilik sözleşmesi yürürlüğe girdikten sonra gruba dahil olan bir katılımcının sisteme giriş tarihi olarak alınan tarih aşağıdakilerden hangisidir?",
        soruOzeti: "Bir şirkette işe girdin, patron seni mevcut BES grubuna dahil etti. Senin için sistemin başladığı gün yasal olarak ne zamandır?",
        konuAnlatimi: `BES sisteminde hiçbir sözleşme kağıt üzerinde atılan imza ile başlamaz. Devletin ve sistemin tanıdığı tek bir "başlangıç" kuralı vardır: Nakit akışı. Parayı kasanın içinde görmeden kronometreyi (10 yıllık bekleme süresini) başlatmazlar.

Bu yüzden patron sözleşmeyi 1 Ocak'ta imzalamış olsa bile, eğer ilk taksiti (katkı payını) 15 Şubat'ta şirketin hesabına yatırırsa, senin sisteme giriş tarihin 15 Şubat olarak kabul edilir.

Komisyonun en sevdiği tuzak! Şıklara hep "İmza tarihi", "İmzadan 30 gün sonra" gibi yalanlar koyarlar.`,
        dogruCevap: "İlgili grup emeklilik planına göre katılımcı ad ve hesabına katkı payı olarak yapılan ilk ödemenin şirket hesaplarına nakden intikal ettiği tarih.",
        bilmenGerekenler: [
            "BES'te \"Yürürlük\" ve \"Sisteme Giriş\" kelimelerini gördüğünde, cümlenin içinde mutlaka \"Nakden intikal\" veya \"Hesaba yatan para\" kelimelerini aramalısın.",
            "İmza kağıt parçasıdır, mühim olan paranın hesabın içine düşmesidir."
        ],
        hafizaSifresi: "\"Para Yoksa Sistem Yok\". İmza tarihi tuzaktır, doğru cevap her zaman paranın hesaba düştüğü tarihtir.",
        onemDuzeyi: "kritik"
    },
    {
        id: 21,
        kategori: "BES Mevzuatı",
        konuBasligi: "Otomatik Katılım Sistemi (OKS) / Katkı Payı Kesintisi",
        soruMetni: "Otomatik katılım kapsamında işvereni aracılığıyla otomatik olarak bir emeklilik planına dahil edilen çalışanın ücretinden asgari kesilecek katkı payı tutarına ilişkin aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "OKS'de çalışanın maaşından zorunlu olarak her ay kesilen asgari paranın yasal oranı yüzde kaçtır ve neyin üzerinden hesaplanır?",
        konuAnlatimi: `Devlet, maaşlı çalışanları tasarrufa zorlamak için "Otomatik Katılım" (OKS) diye bir sistem çıkardı. Bu sistemde sen istesen de istemesen de işe girdiğinde maaşından BES'e para kesilir (sonradan cayabilirsin).

Bu kesinti kafaya göre yapılmaz, kanunla belirlenmiştir. SGK'ya bildirilen brüt maaşının (Prime Esas Kazancının) sabit bir yüzdesi kesilmek zorundadır. Bu sabit yasal kesinti oranı %3'tür.

DİKKAT: Şıklardaki "asgari ücretin %3'ü" tuzağına düşme! Senin maaşın 50.000 TL ise onun %3'ü kesilir, asgari ücretin değil.`,
        dogruCevap: "İlgisine göre prime esas kazancın veya emeklilik keseneğine esas aylığın yüzde üçü kadardır.",
        bilmenGerekenler: [
            "OKS Kesinti Oranı = Prime Esas Kazancın %3'ü.",
            "\"Asgari ücretin %3'ü\" tuzağına düşme! Neyin %3'ü? Brüt maaşının (prime esas kazancın) %3'ü."
        ],
        hafizaSifresi: "OKS = %3 Kuralı. Prime esas kazancın %3'ü. Asgari ücret DEĞİL, senin brüt maaşın.",
        onemDuzeyi: "kritik"
    },
    {
        id: 22,
        kategori: "BES Mevzuatı",
        konuBasligi: "Aktarım İşlemleri ve Gecikme Sorumlulukları",
        soruMetni: "Emeklilik şirketleri arasındaki aktarımlarda, şirketin aktarım işlemini belirlenen süre içinde gereği gibi yerine getirmemesi durumundaki uygulamayla ilgili aşağıda yer alan ifadelerden hangisi doğrudur?",
        soruOzeti: "A şirketinden B şirketine paranı taşımak istedin. A şirketi işlemleri yavaşlattı ve borsa yükseldi. Senin zararın nasıl telafi edilir?",
        konuAnlatimi: `Şirketler müşteriyi elinden kaçırmamak için aktarım işlemlerini ağırdan alabilirler. Eğer şirket yasal süresi içinde paranı diğer tarafa taşımazsa ve paran boşta beklerse, borsadaki (fondaki) yükselişi kaçırmış olursun.

Kanun koyucu bu durumda şirketlere "ceza" kesmez, bunun yerine "hesaplaşma" yaptırır. Eğer şirket işlemi zamanında yapsaydı senin fonunun fiyatı ne olacaktı diye geriye dönük bir "Fon Birim Pay Fiyatı" hesaplaması yapılır. Aradaki parasal kayıp, işlemi geciktiren şirket tarafından senin hesabına telafi olarak yatırılır.

Komisyon burada "Ceza Hukuku" ile "Tazmin Hukuku"nu karıştırmanı bekler. "2 katı ceza" gibi uydurma şıklara kanma!`,
        dogruCevap: "Fon birim pay fiyatı değişiklikleri dikkate alınarak bu işlemden dolayı varsa katılımcının birikiminde oluşan parasal kayıp hesaplanır.",
        bilmenGerekenler: [
            "Şirket hata yaparsa veya gecikirse \"Ceza\" kelimesini unut. Sistem senin cebinden eksilen parayı ölçüp yerine koymak üzerine kuruludur.",
            "\"Gecikme cezası\" yazan tüm şıkları gözün kapalı ele."
        ],
        hafizaSifresi: "\"Zarar Telafisi\": Gecikme sorusunda cevap her zaman \"Parasal kayıp hesaplanır\" cümlesidir. Ceza yazan şıkları ele!",
        onemDuzeyi: "kritik"
    },
    {
        id: 23,
        kategori: "BES Mevzuatı",
        konuBasligi: "Otomatik Katılım Sistemi (OKS) Fon Türleri",
        soruMetni: "Otomatik katılım kapsamında işvereni aracılığıyla otomatik olarak bir emeklilik planına dahil edilen çalışanın ücretinden kesilecek katkı payı başlangıç dönemi içinde hangi fonda yatırıma yönlendirilir?",
        soruOzeti: "OKS'ye yeni girdin. Şirket senin ilk yatırdığın paraları zorunlu olarak hangi fona koyar?",
        konuAnlatimi: `Otomatik Katılıma giren insanların %90'ı finansal okuryazar değildir ve paralarını nerede değerlendireceklerini seçmezler. Devlet bu durumda herkesi ilk aylarında (Başlangıç dönemi) tamamen korunaklı ve nötr bir "Bekleme Odasına" alır.

İçinde sadece güvenceli araçlar olan bu ilk bekleme fonunun yasal adı "Başlangıç Fonu"dur.

Sıralama: OKS'ye girersin → Paran ilk aylarda Başlangıç Fonuna gider → Başlangıç dönemi bitince (eğer fon seçmezsen) paran otomatik olarak Standart Fona kaydırılır. Standart Fon ile Başlangıç Fonu sık karıştırılır!`,
        dogruCevap: "Başlangıç Fonu",
        bilmenGerekenler: [
            "Soru kökündeki \"Başlangıç dönemi\" kelimesi cevabı kendi içinde barındırır.",
            "OKS sıralaması: Giriş → Başlangıç Fonu → Standart Fon"
        ],
        hafizaSifresi: "OKS İlk Durak = Başlangıç Fonu. \"Başlangıç döneminde başlangıç fonuna\" - isim eşleştir.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 29,
        kategori: "BES Mevzuatı",
        konuBasligi: "Sözleşme Türleri / İşveren Grup vs OKS",
        soruMetni: "Bir istihdam ilişkisine dayalı olarak bir işveren ile şirket arasında imzalanan ve katılımcı adına işveren tarafından katkı payı ödenen emeklilik sözleşmesi türü aşağıdakilerden hangisidir?",
        soruOzeti: "Parayı cebinden çalışan değil, patron (işveren) ödüyor. Bu sözleşmenin yasal adı nedir?",
        konuAnlatimi: `Sistemde şirketler ve çalışanlar üzerinden yürüyen iki büyük grup sistemi vardır:

1. Otomatik Katılım Sistemi (OKS): Patron sadece aracıdır. Maaşı öderken parayı senin cebinden (maaşından) kesip sisteme atar.
2. İşveren Grup Emeklilik Sistemi: Senin maaşına dokunulmaz. Patron, sana ekstra bir yan hak olarak kendi şirket kasasından senin adına para öder.

Soruda "işveren tarafından katkı payı ödenen" dediği için bu doğrudan patronun parasıdır, yani İşveren Grup sözleşmesidir.`,
        dogruCevap: "İşveren grup emeklilik sözleşmesi",
        bilmenGerekenler: [
            "Parayı kimin ödediği sözleşmenin adını belirler.",
            "Çalışanın maaşından kesiliyorsa OKS, patronun cebinden çıkıyorsa İşveren Grup."
        ],
        hafizaSifresi: "\"Parayı Kim Veriyor?\" İşveren tarafından ödenen → cevap İşveren Grup.",
        onemDuzeyi: "yuksek"
    },
    {
        id: 30,
        kategori: "BES Mevzuatı",
        konuBasligi: "Operasyonel Süreler / Ayrılma Bilgi Formu",
        soruMetni: "Sistemden ayrılma amacıyla ayrılma bilgi formu talep eden katılımcıya, emeklilik şirketi tarafından ayrılma bilgi formu gönderimi için belirlenmiş azami süre aşağıdakilerden hangisidir?",
        soruOzeti: "\"Ben çıkıyorum, bana iptal formunu gönderin\" dedin. Şirket bu formu en fazla kaç gün oyalayabilir?",
        konuAnlatimi: `Şirketler müşterinin sistemden çıkmasını istemezler. Geçmişte şirketler iptal formlarını müşteriye haftalarca göndermeyip süreci uzatıyorlardı. Devlet bu suistimali engellemek için süre sınırı koydu.

Müşteri formu talep ettiği an, şirket formu hazırlayıp en geç 5 iş günü içinde göndermek zorundadır.

TUZAK: Şıklarda "5 gün" ve "5 iş günü" var. Operasyonel sürelerin %99'u iş günüdür çünkü hafta sonu işlem yapılmaz.

Not: Müşteri formu imzalayıp geri yolladıktan sonra paranın iade süresi 20 iş günüdür. İkisi farklıdır!`,
        dogruCevap: "5 iş günü",
        bilmenGerekenler: [
            "Ayrılma formu gönderim süresi = 5 İş günü (takvim günü DEĞİL).",
            "Form geri geldikten sonra para iadesi = 20 iş günü. İkisini karıştırma."
        ],
        hafizaSifresi: "\"Form İsteme 5'lik\": Ayrılma formu = 5 İş günü.",
        onemDuzeyi: "kritik"
    },
    {
        id: 31,
        kategori: "BES Mevzuatı",
        konuBasligi: "OKS / Ara Verme Hakkı",
        soruMetni: "Otomatik katılım kapsamında çalışanın işvereni aracılığıyla otomatik olarak bir emeklilik planına dahil edilmesi halinde ara verme durumuna ilişkin aşağıdakilerden hangisi yanlıştır?",
        soruOzeti: "OKS'de \"maaşımdan artık kesinti yapmayın, ara veriyorum\" deme hakkınla ilgili hangisi uydurmadır?",
        konuAnlatimi: `OKS'de "ara verme" hakkı tamamen senin inisiyatifindedir. Ancak bu çok "kişisel" bir haktır. Sen bu hakkı "Ben uğraşmayayım, patron benim yerime karar versin" diyerek işverene devredemezsin.

Kararı ancak sen verebilirsin ve şirkete talimatı bizzat sen iletmek zorundasın.

ÖNEMLİ: "Başlangıç döneminde ara verilemez" kuralı DOĞRUDUR. İlk 2 ay cayma süresidir, ara verme süresi değildir.`,
        dogruCevap: "Ara verme hakkı çalışan tarafından işverene devredilebilir. (Bu ifade YANLIŞTIR)",
        bilmenGerekenler: [
            "OKS'de çalışanın cüzdanını ilgilendiren kararlar (ara verme, cayma) sadece çalışana aittir, patrona devredilemez.",
            "\"Başlangıç döneminde ara verilemez\" doğrudur, tuzağa düşme."
        ],
        hafizaSifresi: "\"Cüzdan Devredilmez\": Maaşından ne kadar kesileceğinin kontrolünü patrona devredemezsin.",
        onemDuzeyi: "kritik"
    },
    {
        id: 32,
        kategori: "BES Mevzuatı",
        konuBasligi: "Cayma Hakkı / İade Kuralları",
        soruMetni: "Katılımcı tarafından bireysel emeklilik sözleşmesi kapsamında cayma hakkının kullanılması durumunda katılımcıya yapılacak ödemeler ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "İlk 2 ay içinde vazgeçtin (Cayma Hakkı). Şirket kestiği paraların hangisini geri verir, hangisinden yatar?",
        konuAnlatimi: `Cayma hakkı tüketiciyi koruyan mutlak bir haktır. 2 ay içinde "Vazgeçtim" dersen, sistem seni hiç girmemişsin gibi kabul eder. Giriş Aidatı, Yönetim Gider Kesintisi gibi tüm paralar iade edilir.

ANCAK BİR İSTİSNA VARDIR: O 2 aylık sürede senin paran borsada fon olarak değerlendi. Fonları yöneten borsacılar (PYŞ) bu hizmetin bedeli olarak "Fon Toplam Gider Kesintisi (FTGK)" aldılar. Bu para sisteme değil, piyasaya giden bir işletim bedelidir.

Devlet der ki: "Tüm aidatları iade alırsın ama FTGK iade edilmez, çünkü o hizmet kullanıldı."`,
        dogruCevap: "Birikim ile fon toplam gider kesintisi haricinde yapılan diğer tüm kesintiler ödeyene iade edilir.",
        bilmenGerekenler: [
            "Cayma anında her şey iade edilir, ancak fon işletim ücreti (FTGK) asla iade edilmez.",
            "Şıklarda \"FTGK Haricinde\" ifadesini ara."
        ],
        hafizaSifresi: "\"Borsacının Parası Geri Alınmaz\": Cayarsan giriş aidatını geri alırsın ama FTGK iade edilmez.",
        onemDuzeyi: "kritik"
    },
    {
        id: 33,
        kategori: "BES Mevzuatı",
        konuBasligi: "Yatırıma Yönlendirme Gecikmeleri",
        soruMetni: "Şirketin yatırıma yönlendirme yükümlülüğünü mevzuatta belirlenen süre içinde gereği gibi yerine getirmemesi durumundaki uygulama ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        soruOzeti: "Şirket paranı fona atması gerekirken unuttu, 5 gün bekletti ve borsa kârını kaçırdın. Ne olur?",
        konuAnlatimi: `Bu soru, Soru 22'deki aktarım gecikmesinin AYNISIDIR! Komisyon "Aktarımın gecikmesi" ile "Fona yönlendirmenin gecikmesini" farklı sorularda aynı şıklarla sorar.

Sistemde şirketin işi geciktirmesi durumunda sana "Ceza" adı altında bonuslar ödenmez. Sadece senin mağduriyetin hesaplanır (Parayı zamanında atsaydı fon fiyatı ne olacaktı?). Aradaki parasal kayıp şirketten tahsil edilip senin hesabına eklenir.

Komisyon B, C ve D şıklarına "2 katı ceza", "3 katı ceza" gibi havalı ama uydurma şeyler yazar. BES'te ceza ödenmez, sadece kaybı tazmin edilir.`,
        dogruCevap: "Fon birim pay fiyatı değişiklikleri dikkate alınarak bu işlemden dolayı varsa katılımcının birikiminde oluşan parasal kayıp hesaplanır.",
        bilmenGerekenler: [
            "Şirketin yaptığı her gecikme hatasında tek yaptırım \"Parasal Kaybın Hesaplanıp\" yerine koyulmasıdır.",
            "\"Ceza\" kelimesi geçen şıkları anında ele."
        ],
        hafizaSifresi: "\"Ceza Yok, Telafi Var\": İçinde \"Ceza\" geçen B, C, D şıklarını gözün kapalı ele.",
        onemDuzeyi: "kritik"
    },
    {
        id: 34, kategori: "BES Mevzuatı", konuBasligi: "Fon Pay Değeri Duyurusu",
        soruMetni: "Emeklilik Yatırım Fonlarının Kuruluş ve Faaliyetlerine İlişkin Esaslar Hakkında Yönetmelik'e göre hesaplanan emeklilik yatırım fonu pay değeri katılımcılara ne zaman duyurulur?",
        soruOzeti: "Fonların güncel fiyatı sana ne zaman duyurulur?",
        konuAnlatimi: `Fon fiyatı her akşam hesaplanır ancak müşteriye duyurusu her zaman 1 gün gecikmeli yapılır. Tıpkı gazetedeki borsa haberlerinin ertesi gün basılması gibi, fon fiyatı da bir sonraki mesai gününün sabahında yayınlanır.`,
        dogruCevap: "Fiyatın ait olduğu günü takip eden iş günü",
        bilmenGerekenler: ["Fon fiyatı günlük hesaplanır, ertesi iş günü duyurulur.", "Cuma fiyatı → Pazartesi duyurulur."],
        hafizaSifresi: "\"Dünün Fiyatı Bugün Belli Olur\"", onemDuzeyi: "yuksek"
    },
    {
        id: 35, kategori: "BES Mevzuatı", konuBasligi: "OKS'de Çalışan Hakları",
        soruMetni: "Aşağıdakilerden hangisi otomatik katılım kapsamında çalışanların kullanabileceği haklardan biridir?",
        soruOzeti: "OKS'de (Zorunlu BES) çalışan hangi hakka sahiptir?",
        konuAnlatimi: `OKS'de şirket seçme ve aktarım yapma hakkı patronun elindedir. Çalışan şirketi seçemez, aktarım yapamaz, başlangıç katkısı ödeyemez. Ancak maaştan kesintiyi durdurma (ara verme ve cayma) hakkı tamamen çalışanındır.`,
        dogruCevap: "Katkı payı ödemeye ara verme",
        bilmenGerekenler: ["OKS'de şirketi patron seçer, cüzdanı çalışan yönetir.", "Çalışan başlangıç KP ödeyemez, şirket aktarım yapamaz."],
        hafizaSifresi: "\"Şirketi Patron Seçer, Cüzdanı Sen Yönetirsin\"", onemDuzeyi: "kritik"
    },
    {
        id: 36, kategori: "BES Mevzuatı", konuBasligi: "Aracı Lisans İptali Cezası",
        soruMetni: "Lisansı iptal edilen bireysel emeklilik aracıları lisans iptal tarihinden itibaren kaç yıl içinde açılacak sınavlara giremezler?",
        soruOzeti: "Lisansı iptal edilen aracı kaç yıl sınava giremez?",
        konuAnlatimi: `Kural ihlali yapıp lisansı iptal edilen aracıya 3 yıl sektöre yaklaşma yasağı uygulanır. Eğitim kaçırma sebebiyle düşen lisanslar bu 3 yıllık cezadan muaftır.`,
        dogruCevap: "3 yıl",
        bilmenGerekenler: ["Suç işleyen aracı → 3 yıl men.", "Eğitim kaçırma → sadece satış yetkisi iptal (3 yıl ceza yok)."],
        hafizaSifresi: "\"Kırmızı Kart = 3 Yıl Men\"", onemDuzeyi: "yuksek"
    },
    {
        id: 37, kategori: "BES Mevzuatı", konuBasligi: "İşveren Grup Aktarım Aidatı",
        soruMetni: "İşveren grup emeklilik sözleşmelerinde ertelenmiş giriş aidatı bulunması durumunda aktarımda ne uygulanır?",
        soruOzeti: "İşveren grup BES'te aktarımda giriş aidatını kim öder?",
        konuAnlatimi: `Normal BES'te erken aktarımda aidat çalışanın birikiminden kesilir (Soru 17). Ancak İşveren Grup BES'te aktarım kararını patron verdiği için faturayı da patron öder. Çalışanın birikimine dokunulamaz!`,
        dogruCevap: "İşverenden tahsil edilir",
        bilmenGerekenler: ["Normal BES: aidat katılımcıdan kesilir.", "İşveren Grup BES: aidat İŞVERENDEN tahsil edilir."],
        hafizaSifresi: "\"Kararı Patron Verir, Faturayı Patron Öder\"", onemDuzeyi: "kritik"
    },
    {
        id: 38, kategori: "BES Mevzuatı", konuBasligi: "DK Fonu Portföy Sınırlamaları",
        soruMetni: "Devlet katkılarının yatırıma yönlendirilmesi amacıyla tanımlanan fonun portföy sınırlamaları hakkında hangisi yanlıştır?",
        soruOzeti: "Devlet Katkısı Fonunda hangi oran kuralı uydurmadır?",
        konuAnlatimi: `DK Fonunda: Tek bankaya max %6, tek hisseye max %1, tek banka borçlanma aracına max binde 15. Ancak "Ters repo %10" kuralı YANLIŞTIR. Komisyon yıllardır bu aynı tuzağı kullanır.`,
        dogruCevap: "Ters repo sözleşmeleri %10'u aşamaz ifadesi YANLIŞTIR",
        bilmenGerekenler: ["DK fonu çok sıkı sınırlandırılmıştır.", "Ters repo %10 kuralı her zaman yanlış şıktır."],
        hafizaSifresi: "\"Ters Repoda On (%10) Yoktur\"", onemDuzeyi: "kritik"
    },
    {
        id: 39, kategori: "BES Mevzuatı", konuBasligi: "Tanıtım Formu",
        soruMetni: "Katılımcılara fona katılımından önce verilen ve izahnamedeki bilgilerin özetinin yer aldığı belge nedir?",
        soruOzeti: "İzahnamenin tek sayfalık özeti olan belgenin adı nedir?",
        konuAnlatimi: `İzahname kalın bir yasal kitaptır. Tanıtım Formu ise bu kitabın müşteriye sunulan basit özetidir, vitrin belgesidir.`,
        dogruCevap: "Tanıtım Formu",
        bilmenGerekenler: ["Teklif formu → sözleşme detayları.", "Tanıtım Formu → fonun vitrini/özeti."],
        hafizaSifresi: "\"Özet = Tanıtım\"", onemDuzeyi: "orta"
    },
    {
        id: 40, kategori: "BES Mevzuatı", konuBasligi: "SPK'nın İmtina Hakkı",
        soruMetni: "Fon paylarının SPK kaydına alınmasına ilişkin hangisi doğrudur?",
        soruOzeti: "SPK fon başvurusunu otomatik onaylamak zorunda mı?",
        konuAnlatimi: `SPK noter değildir. İnceleme sonucunda gerekçe göstererek başvuruyu reddetme (imtina etme) hakkı vardır. "Otomatik alınır" diyen şıklara düşme.`,
        dogruCevap: "Gerekçe gösterilerek fon paylarının kaydına alınmasından imtina edilebilir",
        bilmenGerekenler: ["SPK başvuruyu reddedebilir (imtina).", "Otomatik onay diye bir şey yoktur."],
        hafizaSifresi: "\"SPK Reddedebilir\"", onemDuzeyi: "yuksek"
    },
    {
        id: 41, kategori: "BES Mevzuatı", konuBasligi: "Kuruluş İzni Süresi",
        soruMetni: "Emeklilik şirketi kuruluş izni, kaç yıl içinde faaliyet ruhsatına başvurulmazsa geçersiz olur?",
        soruOzeti: "Kuruluş izni aldıktan sonra ruhsata ne kadar sürede başvurulmalı?",
        konuAnlatimi: `Kuruluş izni alındıktan sonra 1 yıl içinde faaliyet ruhsatına başvurulmazsa izin iptal olur.`,
        dogruCevap: "1 yıl içinde",
        bilmenGerekenler: ["İzni aldıysan 1 yıl içinde dükkanı açmak zorundasın."],
        hafizaSifresi: "\"İzinden Ruhsata 1 Yıl\"", onemDuzeyi: "orta"
    },
    {
        id: 42, kategori: "BES Mevzuatı", konuBasligi: "5 Yıl Hapis Kuralı",
        soruMetni: "Kasten işlenen suçtan 5 yıl+ hapis cezası alanlar ne olamaz?",
        soruOzeti: "5 yıl hapis yatan adam BES şirketinde ne yapamaz?",
        konuAnlatimi: `Sabıkalı kişi müşteri olabilir, normal personel olabilir. Ancak 1. derecede imza yetkilisi (GM, YK üyesi) OLAMAZ. Karar mekanizmasına oturtulmaz.`,
        dogruCevap: "Hiçbir emeklilik şirketinde 1. derecede imza yetkisini haiz görevli olarak çalıştırılamazlar",
        bilmenGerekenler: ["Müşteri olabilir, çaycı olabilir, ama İMZA YETKİLİSİ olamaz."],
        hafizaSifresi: "\"Sabıkalıya İmza Attırılmaz\"", onemDuzeyi: "yuksek"
    },
    {
        id: 43, kategori: "BES Mevzuatı", konuBasligi: "Haciz Formülü",
        soruMetni: "BES hesabının haczedilmesi ile ilgili hangisi doğrudur?",
        soruOzeti: "BES hesabındaki paranın ne kadarı hacizden korunur?",
        konuAnlatimi: `Korunan tutar = Sistemdeki Ay Sayısı × Brüt Asgari Ücret. Örnek: 10 ay × 30.000 TL = 300.000 TL korunur. Üstü haczedilebilir.`,
        dogruCevap: "Ay sayısı × brüt asgari ücret çarpımına karşılık gelen tutar haczedilemez",
        bilmenGerekenler: ["Tüm birikim haczedilemez (sınır var).", "YGS maaşı ise HİÇ haczedilemez."],
        hafizaSifresi: "\"Aylık Asgari Ücret Kalkanı\": Ay × Asgari Ücret = Korunan Tutar", onemDuzeyi: "kritik"
    },
    {
        id: 44, kategori: "BES Mevzuatı", konuBasligi: "Aynı Şirkette İkinci Sözleşme Aidatı",
        soruMetni: "01.01.2016 sonrası giriş aidatı tahsilatı hakkında hangisi yanlıştır?",
        soruOzeti: "Giriş aidatı ile ilgili uydurma kural hangisi?",
        konuAnlatimi: `Aynı şirketteki TÜM sözleşmelerden giriş aidatı kesilir ifadesi YANLIŞTIR. Sadece ilk sözleşmeden kesilir.`,
        dogruCevap: "Aynı şirketteki tüm sözleşmeler için giriş aidatı tahsil edilebilir (YANLIŞ)",
        bilmenGerekenler: ["Şirket müşteriden sadece 1 kere giriş aidatı alabilir.", "'TÜM sözleşmeler' kelimesi yanlışı bağırır."],
        hafizaSifresi: "\"Aynı Şirkette İkinciye Aidat Yok\"", onemDuzeyi: "yuksek"
    },
    {
        id: 45, kategori: "BES Mevzuatı", konuBasligi: "Teklif Formunda Etkisiz Unsur",
        soruMetni: "Emeklilik planı teklifinde hangi unsur etkili olmaz?",
        soruOzeti: "BES teklifi hazırlarken müşterinin hangi özelliğine bakılmaz?",
        konuAnlatimi: `Yaş, gelir düzeyi ve beklentiler teklifi etkiler. Eğitim durumu ise BES hesaplamalarını etkilemez.`,
        dogruCevap: "Kişinin eğitim durumu",
        bilmenGerekenler: ["Finansal planlamada sayısal parametreler önemlidir.", "Sosyolojik özellikler (eğitim) dikkate alınmaz."],
        hafizaSifresi: "\"Paranın Diploması Olmaz\"", onemDuzeyi: "orta"
    },
    {
        id: 46, kategori: "BES Mevzuatı", konuBasligi: "Kredi Kartı Blokaj Tuzağı",
        soruMetni: "Aktarımda kredi kartı blokaj süresi dolmayan ödemelere ne olur?",
        soruOzeti: "KK ile ödeyip blokaj dolmadan aktarım yaparsan ne olur?",
        konuAnlatimi: `Blokajda bekleyen kredi kartı çekimi yeni şirkete devredilmez. Eski şirket provizyonu bankadan iptal eder, müşterinin KK limiti geri açılır.`,
        dogruCevap: "Provizyon iptal edilir",
        bilmenGerekenler: ["BES'te askıda kalan işlemler yeni şirkete devredilmez.", "Askıdaki işlem anında İPTAL edilir."],
        hafizaSifresi: "\"Havada Kalan Kart Çekimi İptal Olur\"", onemDuzeyi: "yuksek"
    },
    {
        id: 47, kategori: "BES Mevzuatı", konuBasligi: "Tamamlayıcı Eğitim Cezası",
        soruMetni: "Tamamlayıcı eğitime katılmayan aracıların ne olur?",
        soruOzeti: "Zorunlu eğitime gitmezsen sana ne yaparlar?",
        konuAnlatimi: `Suç işleyenin lisansı yırtılır ve 3 yıl ceza alır (Soru 36). Eğitim kaçıranın ise sadece satış yetkisi iptal edilir. Licansı silinmez, savunma alınmaz.`,
        dogruCevap: "Satış yetkisi iptal edilir",
        bilmenGerekenler: ["Eğitim kaçırma ≠ lisans iptali. Sadece satış yetkisi iptal."],
        hafizaSifresi: "\"Eğitim Yoksa Satış da Yok\"", onemDuzeyi: "yuksek"
    },
    {
        id: 48, kategori: "BES Mevzuatı", konuBasligi: "Endeks Fon Tek İhraççı Sınırı",
        soruMetni: "Endeks fonlar tek bir ihraççının araçlarına en fazla yüzde kaç yatırabilir?",
        soruOzeti: "Endeks fonda tek şirkete max ne kadar yatırılır?",
        konuAnlatimi: `Devlet tahvilleri hariç, tek bir şirketin kağıtlarına fonun max %20'si bağlanabilir. Topluluk (holding) ise max %30.`,
        dogruCevap: "%20",
        bilmenGerekenler: ["Tek şirket (ihraççı) = max %20.", "Topluluk (holding) = max %30.", "İkisini karıştırma!"],
        hafizaSifresi: "\"Tek Şirkete %20, Holdinge %30\"", onemDuzeyi: "kritik"
    },
    {
        id: 49, kategori: "BES Mevzuatı", konuBasligi: "Cayma Halinde Para İade Süresi",
        soruMetni: "Cayma halinde şirket kaç gün içinde iade yapmalıdır?",
        soruOzeti: "Cayınca paran ne kadar sürede geri gelir?",
        konuAnlatimi: `Cayma bildiriminin şirkete ulaşmasından itibaren 10 iş günü içinde para iade edilmelidir. Teklif reddi ise 5 iş günü (daha kısa).`,
        dogruCevap: "10 iş günü içinde",
        bilmenGerekenler: ["Cayma iadesi = 10 iş günü.", "Teklif reddi iadesi = 5 iş günü.", "Form gönderimi = 5 iş günü."],
        hafizaSifresi: "\"Para İadesi 10, Form 5, Red 5\"", onemDuzeyi: "kritik"
    },
    {
        id: 50, kategori: "BES Mevzuatı", konuBasligi: "PYŞ'nin Uymak Zorunda Olmadığı Belge",
        soruMetni: "PYŞ hangi düzenlemeye uymakla yükümlü değildir?",
        soruOzeti: "Borsacı (PYŞ) hangi belgeyi umursamaz?",
        konuAnlatimi: `PYŞ; İçtüzüğe, Emeklilik Sözleşmesine ve Portföy Yönetim Sözleşmesine uymak zorundadır. Esas Sözleşme ise şirketin kendi kuruluş belgesidir, PYŞ'yi bağlamaz.`,
        dogruCevap: "Emeklilik şirketi esas sözleşmesi",
        bilmenGerekenler: ["Esas sözleşme şirketin şahsi kimlik kartıdır.", "Fon yöneticisi şirketin kuruluş belgesine bakmaz."],
        hafizaSifresi: "\"Esas Sözleşme İç Meseledir\"", onemDuzeyi: "orta"
    },
    {
        id: 51, kategori: "BES Mevzuatı", konuBasligi: "Fon İç Kontrol Sistemi",
        soruMetni: "Fonun muhasebe ve belge düzeninin etkin işlemesini sağlayan yapıya ne ad verilir?",
        soruOzeti: "Fonların denetim mekanizmasının adı nedir?",
        konuAnlatimi: `Hataları önleyen ve riskleri kontrol eden bu sistemin mevzuattaki adı "Fon İç Kontrol Sistemi"dir. İş akışı veya otomasyon programı DEĞİLDİR.`,
        dogruCevap: "Fon iç kontrol sistemi",
        bilmenGerekenler: ["Denetimin adı her zaman 'İç Kontrol'dür.", "Otomasyon, iş akışı gibi havalı kelimelere kanma."],
        hafizaSifresi: "\"Doğruluğun Adı = İç Kontrol\"", onemDuzeyi: "orta"
    },
    {
        id: 52, kategori: "BES Mevzuatı", konuBasligi: "Bilgi Notu Gönderimi",
        soruMetni: "Plan ve mevzuat değişikliklerine ilişkin bilgi notu hangi belgeyle gönderilir?",
        soruOzeti: "Yasal değişiklik duyuruları hangi belgeye eklenerek yollanır?",
        konuAnlatimi: `Değişiklik bilgi notları, rutin olarak gönderilen Hesap Bildirim Cetveli (ekstre) içine eklenerek yollanır.`,
        dogruCevap: "Hesap bildirim cetveli",
        bilmenGerekenler: ["Bilgi notları ekstreyle birlikte gider.", "Ayrı posta/kurye yollanmaz."],
        hafizaSifresi: "\"Ekstrenin İçindeki Not\"", onemDuzeyi: "orta"
    },
    {
        id: 53, kategori: "BES Mevzuatı", konuBasligi: "Kuruluş Şartını Kaybeden Şirket",
        soruMetni: "Fon kuruluş başvurusu sırasında şirket kuruluş şartlarını kaybederse ne olur?",
        soruOzeti: "Şirket başvuru sırasında şartlarını kaybederse SPK ne yapar?",
        konuAnlatimi: `SPK askıya almaz, idare etmez. Şart kaybedildiyse fon kuruluş izni direkt VERİLMEZ.`,
        dogruCevap: "SPK fon kuruluş iznini vermez",
        bilmenGerekenler: ["Temeli bozuk binanın çatısına onay verilmez.", "Askıya alma gibi esnek şıklara düşme."],
        hafizaSifresi: "\"Şart Yoksa İzin de Yok\"", onemDuzeyi: "yuksek"
    },
    {
        id: 54, kategori: "BES Mevzuatı", konuBasligi: "Grup Emeklilik Yatırım Fonları",
        soruMetni: "Fon payları belirli katılımcı veya gruplara tahsis edilen fonlara ne denir?",
        soruOzeti: "Sadece belirli bir şirketin çalışanlarına özel kurulan fon nedir?",
        konuAnlatimi: `Herkese açık olmayan, sözleşmede tanımlanmış kapalı bir gruba özel kurulan fonlara "Grup emeklilik yatırım fonları" denir.`,
        dogruCevap: "Grup emeklilik yatırım fonları",
        bilmenGerekenler: ["Herkese açık değilse → Gruba ait.", "Soru kökünde 'tahsis edildiği' ifadesini ara."],
        hafizaSifresi: "\"Kapalı Devre = Grup Fonu\"", onemDuzeyi: "orta"
    },
    {
        id: 55, kategori: "BES Mevzuatı", konuBasligi: "Hisse Senedi Fonu Tanımı",
        soruMetni: "Portföyünün en az %80'i ihraççıların paylarından oluşan fona ne denir?",
        soruOzeti: "İçindeki paranın %80'i ile hisse alan fon nedir?",
        konuAnlatimi: `Sınavda "İhraççıların payları" dediğinde hisse senedi kastedilir. %80 pay = Hisse Senedi Fonu.`,
        dogruCevap: "Hisse senedi fonu",
        bilmenGerekenler: ["Pay = Hisse Senedi.", "İhraççı payı = ortaklık payı = hisse senedi."],
        hafizaSifresi: "\"Pay = Hisse Senedi\": %80 pay diyorsa Hisse Senedi Fonu", onemDuzeyi: "yuksek"
    },
    {
        id: 56, kategori: "BES Mevzuatı", konuBasligi: "OKS Sözleşme Asgari İçeriği",
        soruMetni: "OKS sözleşmesinin asgari içeriğinde hangisi yer almaz?",
        soruOzeti: "OKS sözleşmesine hangi madde yazılamaz?",
        konuAnlatimi: `Sözleşmede ücret ödeme günü, veri saklama usulü ve haklar/yükümlülükler yer alır. "Muhtemel birikim tutarları" ise tahminidir, yasal sözleşmeye yazılmaz.`,
        dogruCevap: "Çalışanların muhtemel birikim tutarları",
        bilmenGerekenler: ["Sözleşmeye FAL bakılmaz.", "Tahmini/muhtemel rakamlar hukuki sözleşmeye yazılmaz."],
        hafizaSifresi: "\"Sözleşmeye Fal Bakılmaz\"", onemDuzeyi: "orta"
    },
    {
        id: 57, kategori: "BES Mevzuatı", konuBasligi: "Eksik Evrak Kuralı",
        soruMetni: "Fon kuruluş müracaatında belgeler tam iletilmezse ne olur?",
        soruOzeti: "SPK'ya eksik evrakla başvurursan ne olur?",
        konuAnlatimi: `SPK tek evrak bile eksikse başvuruyu değerlendirmeye ALMAZ. Ek süre, sonra tamamla diye bir şey yoktur.`,
        dogruCevap: "Fon kuruluş başvurusu değerlendirmeye alınmaz",
        bilmenGerekenler: ["SPK kervan yolda düzülür demez.", "Eksik evrak = başvuru doğrudan iade."],
        hafizaSifresi: "\"Eksik Evrak Çöpe Gider\"", onemDuzeyi: "yuksek"
    },
    {
        id: 58, kategori: "BES Mevzuatı", konuBasligi: "Kesinti Tavanı %8.5",
        soruMetni: "İlk 5 yılda YGK + giriş aidatı toplamı her yıl için azami ne kadar?",
        soruOzeti: "Şirketin yıllık max kesinti limiti nedir?",
        konuAnlatimi: `Her yıl için brüt asgari ücretin %8.5'i tavanı aşılamaz. Birikimden veya DK'dan yüzde hesabı yapılmaz, referans her zaman asgari ücrettir.`,
        dogruCevap: "İlgili yılın brüt asgari ücretinin %8.5'i",
        bilmenGerekenler: ["Kesinti tavanı = asgari ücretin %8.5'i.", "Birikimden %2.5 gibi şıklar yalandır."],
        hafizaSifresi: "\"Kesinti Tavanı = %8.5\"", onemDuzeyi: "kritik"
    },
    {
        id: 59, kategori: "BES Mevzuatı", konuBasligi: "İzahname Nerede Bulundurulur",
        soruMetni: "İzahname katılımcıların incelemesi için nerede bulundurulmalıdır?",
        soruOzeti: "Fon izahnamesi nerede hazır olmalı?",
        konuAnlatimi: `Müşterinin tek muhatabı emeklilik şirketidir. İzahname şirketin merkezi, şubeleri ve internet sitesinde bulunmalıdır. SPK veya Takasbank'ta değil.`,
        dogruCevap: "Emeklilik şirketinin merkezi, şubeleri ve internet sitesinde",
        bilmenGerekenler: ["Müşteri şirkete gider, SPK'ya veya Takasbank'a değil."],
        hafizaSifresi: "\"Müşteri Şirkete Gider\"", onemDuzeyi: "orta"
    },
    {
        id: 60, kategori: "BES Mevzuatı", konuBasligi: "Fon İçtüzüğü Tanımı",
        soruMetni: "Fonun saklanması ve yönetilmesini içeren iltihaki sözleşmenin adı nedir?",
        soruOzeti: "Fonun anayasası olan belgenin adı nedir?",
        konuAnlatimi: `Fonun kurallarının yazıldığı değiştirilemeyen belgeye Fon İçtüzüğü denir. İltihaki = pazarlık yapılamaz, sadece katılırsın.`,
        dogruCevap: "Fon İçtüzüğü",
        bilmenGerekenler: ["Fonun anayasası = İçtüzük.", "Yönetim ve saklama kuralları burada yazar."],
        hafizaSifresi: "\"Fonun Anayasası = İçtüzük\"", onemDuzeyi: "yuksek"
    },
    {
        id: 61, kategori: "BES Mevzuatı", konuBasligi: "Sahipsiz Para İadesi",
        soruMetni: "Kime ait olduğu tespit edilemeyen ödemelerle ilgili hangisi doğrudur?",
        soruOzeti: "Kim olduğu belli olmayan kişiden gelen paraya ne yapılır?",
        konuAnlatimi: `Sahipsiz para üzerinden kesinti yapılamaz. 2 iş günü içinde kaynağına iade edilir.`,
        dogruCevap: "2 iş günü içinde kaynağına iade edilir",
        bilmenGerekenler: ["Sahipsiz paradan kesinti YOK.", "2 iş günü içinde geri yolla."],
        hafizaSifresi: "\"Sahipsiz Parayı 2 Günde Geri Yolla\"", onemDuzeyi: "yuksek"
    },
    {
        id: 62, kategori: "BES Mevzuatı", konuBasligi: "İrat ve Menkul Sermaye İradı",
        soruMetni: "Emeklilik hakkı kazanarak ayrılanlara yapılan ödemelerle ilgili hangisi doğrudur?",
        soruOzeti: "Emekli olunca ödemelerden hangi kısım vergilendirilir?",
        konuAnlatimi: `Devlet anaparadan vergi almaz. Sadece kâr (irat) kısmı menkul sermaye iradı sayılır ve stopaj kesilir.`,
        dogruCevap: "Ödemelerin içerdiği irat tutarı, menkul sermaye iradı sayılır",
        bilmenGerekenler: ["Tamamı veya tümü diyen şıklar yanlıştır.", "Sadece İRAT (getiri) kısmı vergilendirilir."],
        hafizaSifresi: "\"Kâr = İrat\": Sadece irat kısmı MSİ sayılır", onemDuzeyi: "kritik"
    },
    {
        id: 63, kategori: "BES Mevzuatı", konuBasligi: "Emeklilik Yaş Hesabı",
        soruMetni: "44 yaşında sisteme giren, şu an 54 yaşındaki katılımcı ne zaman emekli olur?",
        soruOzeti: "10 yılı dolmuş ama 56 yaşına gelmemiş kişi ne zaman emekli olur?",
        konuAnlatimi: `10 yıl dolmuş (44→54 = 10 yıl ✓). Ama yaş 56 olmalı: 56 - 54 = 2 yıl daha beklemeli. İKİ ŞART AYNI ANDA sağlanmalı.`,
        dogruCevap: "2 yıl sonra",
        bilmenGerekenler: ["10 yıl + 56 yaş = İKİSİ BİRDEN.", "Biri dolsa bile diğeri dolmadıysa emekli OLUNAMAZ."],
        hafizaSifresi: "\"10 + 56 Formülü\": İkisi de dolmadan çıkış yok", onemDuzeyi: "kritik"
    },
    {
        id: 64, kategori: "BES Mevzuatı", konuBasligi: "Kanun Boşluğu Kaynakları",
        soruMetni: "4632 sayılı Kanun'da belirtilmeyen konularda hangi kaynaklara başvurulur?",
        soruOzeti: "BES kanununda boşluk varsa hangi kanunlara bakılır?",
        konuAnlatimi: `BES melez bir sistemdir: bir bacağı sigortaya, diğeri borsaya dayanır. Kanun boşluğunda sermaye piyasası VE sigortacılık mevzuatına birlikte başvurulur. "Sadece" diyen şıklar yanlış.`,
        dogruCevap: "Sermaye piyasası ve sigortacılık mevzuatına ve genel hükümlere başvurulur",
        bilmenGerekenler: ["BES'in iki babası var: Sigorta + Borsa.", "'Sadece' diyen şıkları ele."],
        hafizaSifresi: "\"BES'in İki Babası: Sigorta + Borsa\"", onemDuzeyi: "yuksek"
    },
    {
        id: 65, kategori: "BES Mevzuatı", konuBasligi: "OKS Kapsam Dışı Kişiler",
        soruMetni: "OKS'ye kimler dahil edilmez?",
        soruOzeti: "Zorunlu BES'e (OKS) giremeyenler kimlerdir?",
        konuAnlatimi: `OKS; bordrolu çalışanları ve memurları kapsar. Kendi adına ve hesabına bağımsız çalışanlar (esnaf) OKS'ye dahil edilmez çünkü maaşlarından kesecek bir patron yoktur.`,
        dogruCevap: "Kendi adına ve hesabına bağımsız çalışanlar",
        bilmenGerekenler: ["OKS'ye girebilmek için patron veya kamu kurumu şart.", "Esnafın patronu kendisi, OKS'ye zorlanmaz."],
        hafizaSifresi: "\"Patronun Yoksa OKS de Yok\"", onemDuzeyi: "kritik"
    },
    {
        id: 66, kategori: "BES Mevzuatı", konuBasligi: "Maluliyet ve Vergi Kuralı",
        soruMetni: "Maluliyet nedeniyle ayrılanlara yapılan ödemelerle ilgili hangisi doğrudur?",
        soruOzeti: "Sakat olarak ayrılan adamdan vergi nasıl alınır?",
        konuAnlatimi: `Çıkış sebebi ne olursa olsun (emeklilik, vefat, maluliyet, cayma) vergi kuralı değişmez: Sadece İRAT kısmı MSİ sayılır. Maluliyet tümden istisna YAPMAZ.`,
        dogruCevap: "Ödemelerin içerdiği irat tutarı, menkul sermaye iradı sayılır",
        bilmenGerekenler: ["Sebep değişir, irat kuralı değişmez.", "Maluliyet stopaj ORANINI düşürür (%5) ama kuralı değiştirmez."],
        hafizaSifresi: "\"Sebep Değişir, İrat Değişmez\"", onemDuzeyi: "yuksek"
    },
    {
        id: 67, kategori: "BES Mevzuatı", konuBasligi: "OKS'de Cayma Süresi",
        soruMetni: "OKS'de çalışan cayma hakkını ne zaman kullanabilir?",
        soruOzeti: "Zorunlu BES'te cayma kronometresi nasıl işler?",
        konuAnlatimi: `OKS'de imza yok, bildirim var. Şirketin çalışana bildirim attığı tarihi takip eden başlangıç dönemi (2 ay) içinde cayılabilir.`,
        dogruCevap: "Şirketin bildirim tarihini takip eden başlangıç dönemi içinde",
        bilmenGerekenler: ["Normal BES: imza tarihinden 60 gün.", "OKS: bildirim tarihinden başlangıç dönemi (2 ay)."],
        hafizaSifresi: "\"OKS'de İmza Yok, Bildirim Var\"", onemDuzeyi: "kritik"
    },
    {
        id: 68, kategori: "BES Mevzuatı", konuBasligi: "Minimum Fon Sayısı",
        soruMetni: "Emeklilik şirketi en az kaç farklı stratejiye sahip fon kurmak zorundadır?",
        soruOzeti: "Şirketin vitrinine koymak zorunda olduğu min fon sayısı?",
        konuAnlatimi: `Grup fonları hariç en az 3 farklı portföy stratejisine sahip fon kurmak zorunlu. Düşük-Orta-Yüksek Risk gibi.`,
        dogruCevap: "3",
        bilmenGerekenler: ["Her müşteriye hitap eden en az 3 çeşit fon şart.", "Tek veya iki fonla faaliyete geçilemez."],
        hafizaSifresi: "\"Menüde 3 Çeşit Şart\"", onemDuzeyi: "yuksek"
    },
    {
        id: 69, kategori: "BES Mevzuatı", konuBasligi: "Yasal ve Uydurma Kesintiler",
        soruMetni: "BES'te şirket tarafından yapılabilecek kesintiler arasında hangisi sayılamaz?",
        soruOzeti: "Hangi kesinti türü BES kanununda yoktur?",
        konuAnlatimi: `BES'te 3 yasal kesinti var: 1) Giriş Aidatı, 2) YGK, 3) FTGK. "Özel hizmet gideri kesintisi" uydurma, kanunda yoktur.`,
        dogruCevap: "Özel hizmet gideri kesintisi",
        bilmenGerekenler: ["BES'te sadece 3 kesinti: Giriş Aidatı, YGK, FTGK.", "Bunların dışındaki her isim sahtedir."],
        hafizaSifresi: "\"BES'te Özel Hizmet Olmaz\"", onemDuzeyi: "yuksek"
    },
    {
        id: 70, kategori: "BES Mevzuatı", konuBasligi: "SPK Fon Devir Sebepleri",
        soruMetni: "Hangisi SPK'nın fon malvarlığını başka şirkete devretme sebebi değildir?",
        soruOzeti: "Hangi durumda SPK fona el koymaz?",
        konuAnlatimi: `SPK; mali zayıflama, şart kaybı veya fesih ihbarında fona el koyar. Ama katılımcı sayısının az olması SPK'yı ilgilendirmez.`,
        dogruCevap: "Şirketin katılımcı sayısının 100.000'in altında kalması",
        bilmenGerekenler: ["SPK müşteri sayısına karışmaz.", "100.000 tamamen uydurma bir barajdır."],
        hafizaSifresi: "\"Müşteri Sayısına SPK Karışmaz\"", onemDuzeyi: "yuksek"
    },
    {
        id: 71, kategori: "BES Mevzuatı", konuBasligi: "Yasal Bilgi Formları",
        soruMetni: "Hangisi BES'te düzenlenen bilgi formlarından biri değildir?",
        soruOzeti: "Hangi form BES mevzuatında yoktur?",
        konuAnlatimi: `Giriş, Aktarım ve Emeklilik bilgi formları zorunlu yasal belgelerdir. "Vergi avantajı bilgi formu" pazarlama argümanıdır, resmi form değildir.`,
        dogruCevap: "Vergi avantajı bilgi formu",
        bilmenGerekenler: ["Resmi formlar işlemlerle ilgili: Giriş, Çıkış, Aktarım, Emeklilik.", "Pazarlama terimleri form adı olamaz."],
        hafizaSifresi: "\"Vergi Avantajı Broşürdür, Form Değil\"", onemDuzeyi: "orta"
    },
    {
        id: 72, kategori: "BES Mevzuatı", konuBasligi: "Takasbank Para Piyasası Sınırı",
        soruMetni: "Fon portföyünün en fazla ne kadarı Takasbank Para Piyasasında değerlendirilebilir?",
        soruOzeti: "Fonun ne kadarı günlük para piyasasında park edilebilir?",
        konuAnlatimi: `Takasbank para piyasası kısa vadeli nakit park yeridir. Fonun max %10'u burada değerlendirilebilir.`,
        dogruCevap: "%10",
        bilmenGerekenler: ["Takasbank para piyasası = max %10.", "Ters repo limiti ile aynı rakam (%10)."],
        hafizaSifresi: "\"Takasbank'a Max %10\"", onemDuzeyi: "yuksek"
    },
    {
        id: 73, kategori: "BES Mevzuatı", konuBasligi: "Ara Verme ve Ek Kesinti",
        soruMetni: "Hangi durumda şirket katılımcıdan ek yönetim gideri kesintisi alabilir?",
        soruOzeti: "Ödeme yapmayı durursan şirket ne zaman ceza keser?",
        konuAnlatimi: `3 ay boyunca hiç ödeme yapılmazsa (0 TL) şirket ek YGK kesintisi yapma hakkı kazanır. 1 TL bile yatırsan kural bozulur.`,
        dogruCevap: "Ödeme tarihini müteakip 3 ay içinde herhangi bir ödeme yapılmaması",
        bilmenGerekenler: ["3 ay 0 TL ödeme = ek kesinti hakkı.", "Asgari ücret altı ödeme gibi şıklar uydurma."],
        hafizaSifresi: "\"3 Ay Ödemeyene Ceza\"", onemDuzeyi: "kritik"
    },
    {
        id: 74, kategori: "BES Mevzuatı", konuBasligi: "Maluliyet İspatı",
        soruMetni: "Maluliyet nedeniyle ayrılmak için ne gereklidir?",
        soruOzeti: "Maluliyet nasıl kanıtlanır?",
        konuAnlatimi: `Şirketin onayı, müşteri beyanı veya özel hastane raporu geçersizdir. Tek geçerli belge: Sosyal Güvenlik mevzuatına uygun RESMİ belgedir.`,
        dogruCevap: "SGK mevzuatına göre maluliyet belgesini şirkete iletmek",
        bilmenGerekenler: ["Maluliyete sadece SGK karar verir.", "İçinde 'Sosyal güvenlik mevzuatı' geçen uzun şık doğrudur."],
        hafizaSifresi: "\"Maluliyete Sadece SGK Karar Verir\"", onemDuzeyi: "yuksek"
    },
    {
        id: 75, kategori: "BES Mevzuatı", konuBasligi: "Fon Rapor Esasları",
        soruMetni: "Fon raporlarının hazırlanma esaslarını hangi kurum belirler?",
        soruOzeti: "Fon raporlarının formatını kim emreder?",
        konuAnlatimi: `Fonlarla ilgili her düzenlemeyi SPK belirler. EGM istatistik toplar, Hazine sistemi yönetir ama rapor standardı SPK'nındır.`,
        dogruCevap: "Sermaye Piyasası Kurulu",
        bilmenGerekenler: ["Fon demek SPK demek.", "Rapor, izahname, fon kuralı = her zaman SPK."],
        hafizaSifresi: "\"Fon Demek, SPK Demek\"", onemDuzeyi: "yuksek"
    },
    {
        id: 76, kategori: "BES Mevzuatı", konuBasligi: "Zorunlu Müşteri Belgeleri",
        soruMetni: "Katılımcının talep etmesi halinde verilmesi zorunlu belge hangisidir?",
        soruOzeti: "Müşterinin istediğinde alması gereken belge nedir?",
        konuAnlatimi: `Fon kurulu karar defteri, günlük raporlar veya günlük tablolar şirket içi belgelerdir. Müşteriye verilmesi zorunlu olan: İzahname ve Tanıtım Formudur.`,
        dogruCevap: "Fona ait izahname ve tanıtım formu",
        bilmenGerekenler: ["Müşteriye ürünün kullanma kılavuzu (izahname+tanıtım) verilir.", "Şirketin iç defteri veya günlük raporu verilmez."],
        hafizaSifresi: "\"Kullanma Kılavuzunu İstemek Haktır\"", onemDuzeyi: "orta"
    },
    {
        id: 77, kategori: "BES Mevzuatı", konuBasligi: "Emir Komuta Zinciri",
        soruMetni: "Aktarım ve ayrılma talepleri saklayıcıya nasıl iletilir?",
        soruOzeti: "Müşterinin talimatı Takasbank'a nasıl ulaşır?",
        konuAnlatimi: `Müşteri → Emeklilik Şirketi → Saklayıcı (Takasbank). PYŞ bu zincire karışmaz. Müşteri doğrudan Takasbank'ı aramaz.`,
        dogruCevap: "Katılımcının bildirimi üzerine emeklilik şirketi saklayıcıya talimat verir",
        bilmenGerekenler: ["Müşteri şirketine söyler, şirketi kasaya söyler.", "PYŞ'yi zincire bulaştırma."],
        hafizaSifresi: "\"Araya Aracı Sokma\": Müşteri→Şirket→Saklayıcı", onemDuzeyi: "yuksek"
    },
    {
        id: 78, kategori: "BES Mevzuatı", konuBasligi: "Birikim Tanımı",
        soruMetni: "DK hariç, katılımcının hesabındaki toplam tutara ne denir?",
        soruOzeti: "Anapara + getirinin toplamının yasal adı nedir?",
        konuAnlatimi: `Katkı payı (anapara) + fonlardan kazanılan getiri = Birikim. Devlet katkısı birikime DAHİL DEĞİLDİR.`,
        dogruCevap: "Birikim",
        bilmenGerekenler: ["Birikim = Anapara + Getiri (DK hariç).", "Devletin parası birikim sayılmaz."],
        hafizaSifresi: "\"Devletin Parası Birikimden Sayılmaz\"", onemDuzeyi: "orta"
    },
    {
        id: 79, kategori: "BES Mevzuatı", konuBasligi: "SPK Kayda Alma Kriterleri",
        soruMetni: "Fon paylarının kayda alınması için hangisi aranmaz?",
        soruOzeti: "SPK başvurusunda hangi evrak istenmez?",
        konuAnlatimi: `SPK; mekan, donanım, iç kontrol ve kuruluş şartlarına bakar. Beklenen yatırımcı sayısına ilişkin raporlar ARANMAZ.`,
        dogruCevap: "Beklenen yatırımcı sayısına ilişkin raporlar",
        bilmenGerekenler: ["SPK satış takamına bakmaz.", "Yatırımcı/katılımcı sayısı SPK sorularında her zaman uydurmadır."],
        hafizaSifresi: "\"SPK Satış Rakamına Bakmaz\"", onemDuzeyi: "yuksek"
    },
    {
        id: 80, kategori: "BES Mevzuatı", konuBasligi: "Topluluk Yatırım Sınırı",
        soruMetni: "Fonun en fazla ne kadarı bir topluluğun araçlarına yatırılabilir?",
        soruOzeti: "Bir holdinge (topluluğa) max ne kadar yatırılır?",
        konuAnlatimi: `Tek şirket (ihraççı) = max %20. Topluluk (Koç grubu gibi) = max %30. Soru kökündeki kelimeyi oku, oran farklıdır!`,
        dogruCevap: "%30",
        bilmenGerekenler: ["Tek şirket %20, topluluk %30.", "Soru kökünde 'topluluk' kelimesini okumadan oran yazma!"],
        hafizaSifresi: "\"Tek Şirket 20, Topluluk 30\"", onemDuzeyi: "kritik"
    },
    {
        id: 81, kategori: "BES Mevzuatı", konuBasligi: "Fon Birleştirme Kuralı",
        soruMetni: "Fonların birleştirilmesi ile ilgili hangisi doğrudur?",
        soruOzeti: "Hangi fonlar birleştirilebilir?",
        konuAnlatimi: `Sadece AYNI emeklilik şirketinin fonları birleştirilebilir. Farklı rakip şirketlerin fonları birleştirilmez.`,
        dogruCevap: "Aynı şirkete ait fonlar birleştirilebilir",
        bilmenGerekenler: ["Fon birleştirilmesi tek şirket içi operasyondur.", "Rakip şirketler arasında birleştirme OLMAZ."],
        hafizaSifresi: "\"Birleştirme Aile İçi Meseledir\"", onemDuzeyi: "yuksek"
    },
    {
        id: 82, kategori: "BES Mevzuatı", konuBasligi: "Olağanüstü Durum Fiyat Hesabı",
        soruMetni: "Fon birim pay fiyatının belirlenmesini imkansız kılan olağanüstü durumlarla ilgili hangisi doğrudur?",
        soruOzeti: "Borsa çöktü, fon fiyatı hesaplanamıyor. Ne olur?",
        konuAnlatimi: `Olağanüstü durumda fon fiyatı 3 işgünü hesaplanmayabilir. 3 gün dolunca SPK'ya bildirilir. "Olağanüstü durumda şirket iflası" DEĞİLDİR; savaş, doğal afet gibi piyasa kapanışlarıdır.`,
        dogruCevap: "3 iş gününe kadar fon fiyatı hesaplanmayabilir, sonra SPK'ya bildirilir",
        bilmenGerekenler: ["Olağanüstü = savaş, borsa kapanışı, pandemi.", "Şirket iflası olağanüstü durum DEĞİLDİR."],
        hafizaSifresi: "\"3 Gün Mola, Sonra SPK'ya Koş\"", onemDuzeyi: "yuksek"
    },
    {
        id: 83, kategori: "BES Mevzuatı", konuBasligi: "Fon Değerleme Döviz Kuru",
        soruMetni: "Fonun yabancı para cinsinden varlıkları hangi kur ile değerlenir?",
        soruOzeti: "Dolar bazlı fonlar hangi kurla TL'ye çevrilir?",
        konuAnlatimi: `TCMB'nin yayınladığı kur türlerinden sadece DÖVİZ ALIŞ kuru kullanılır. Satış kuru, efektif kur veya serbest piyasa kuru YANLIŞTIR.`,
        dogruCevap: "TCMB döviz alış kuru",
        bilmenGerekenler: ["DÖVİZ ALIŞ: Bankanın senden aldığı düşük kur.", "Satış, efektif, serbest piyasa diyen şıklar YANLIŞ."],
        hafizaSifresi: "\"Alış Kuru = Düşük Olan\"", onemDuzeyi: "kritik"
    },
    {
        id: 84, kategori: "BES Mevzuatı", konuBasligi: "Fon Dağılım Oranı",
        soruMetni: "Katılımcının katkı paylarının fonlara dağıtılma yüzdelerine ne denir?",
        soruOzeti: "Paranın fonlar arası yüzdelik paylaştırılmasının adı nedir?",
        konuAnlatimi: `Fon dağılım oranları = katkı payının hangi fona yüzde kaç gideceğini belirleyen yüzdeler. Yılda 12 kez değiştirilebilir.`,
        dogruCevap: "Fon dağılım oranları",
        bilmenGerekenler: ["Yılda max 12 değişiklik.", "Plan değişikliği (yılda 4) ile karıştırma!"],
        hafizaSifresi: "\"Dağılım 12, Plan 4\"", onemDuzeyi: "yuksek"
    },
    {
        id: 85, kategori: "BES Mevzuatı", konuBasligi: "Nakden İntikal Kuralı",
        soruMetni: "Katılımcının emeklilik hesabındaki fon payları ne zaman satın alınabilir?",
        soruOzeti: "Fon payı sahibi ne zaman olursun?",
        konuAnlatimi: `Katkı payı TAMAMEN ve NAKİT olarak hesaba düşmeden fon payı alınamaz. Veresiye, taksit veya kısmi ödeme ile pay satışı yapılmaz.`,
        dogruCevap: "Katkı payının nakden intikali ile",
        bilmenGerekenler: ["Para düşmeden pay satın alınamaz.", "Nakden intikal = paranın tam olarak hesaba düşmesi."],
        hafizaSifresi: "\"Parayı Gör, Payı Ver\"", onemDuzeyi: "kritik"
    },
    {
        id: 86, kategori: "BES Mevzuatı", konuBasligi: "Emekli Olduktan Sonra Katkı Payı",
        soruMetni: "Emeklilik hakkı kazanan katılımcı katkı payı yatırmaya devam edebilir mi?",
        soruOzeti: "Emekli olduktan sonra BES'e para yatırılabilir mi?",
        konuAnlatimi: `Emekli olan kişi artık katkı payı yatıramaz. Hesap kapanır ve maaş bağlanır veya toplu ödeme yapılır.`,
        dogruCevap: "Hayır, emeklilik hakkı kazanıldığında katkı payı yatırılamaz",
        bilmenGerekenler: ["Emeklilik = bitiş çizgisi. Artık yatırım yapılmaz.", "Emekli çıkış kapısından girmiştir."],
        hafizaSifresi: "\"Emekli Olan Artık Yatıramaz\"", onemDuzeyi: "yuksek"
    },
    {
        id: 87, kategori: "BES Mevzuatı", konuBasligi: "BEFAS İşlevi",
        soruMetni: "Bireysel Emeklilik Fon Alım Satım Platformu (BEFAS) ne işe yarar?",
        soruOzeti: "BEFAS platformunun görevi nedir?",
        konuAnlatimi: `BEFAS, birden fazla şirketin fonlarını tek çatı altında görmeni ve karşılaştırmanı sağlayan bir platformdur. Fonlar arası geçiş BEFAS üzerinden yapılabilir.`,
        dogruCevap: "Farklı şirketlerin fonlarını karşılaştırmak ve aralarında geçiş yapmak",
        bilmenGerekenler: ["BEFAS = Fon AVM'si (tüm şirketlerin fonları tek yerde).", "Fon geçişi şirket değişikliği DEĞİLDİR."],
        hafizaSifresi: "\"BEFAS = Fonların AVM'si\"", onemDuzeyi: "yuksek"
    },
    {
        id: 88, kategori: "BES Mevzuatı", konuBasligi: "Hesap Birleştirme Zamanı",
        soruMetni: "Katılımcının hesap birleştirme hakkı ne zaman doğar?",
        soruOzeti: "BES hesapları ne zaman birleştirilir?",
        konuAnlatimi: `Hesap birleştirme yolun ortasında yapılamaz. Sadece EMEKLİLİK talebinde bulunulduğunda yapılabilir.`,
        dogruCevap: "Sadece emeklilik talebinde bulunduğunda",
        bilmenGerekenler: ["Emeklilik isteyince birleştirme hakkın doğar.", "Aktarım sırasında veya yolun ortasında birleştirme OLMAZ."],
        hafizaSifresi: "\"Birleştirme = Sadece Emeklilik Kapısında\"", onemDuzeyi: "kritik"
    },
    {
        id: 89, kategori: "BES Mevzuatı", konuBasligi: "DK Fonu FTGK Oranı",
        soruMetni: "DK fonunun FTGK günlük üst sınırı nedir?",
        soruOzeti: "Devlet katkısı fonundan max ne kadar kesinti yapılır?",
        konuAnlatimi: `DK fonu en düşük kesintili fondur: günlük yüzbinde 1. Diğer fonlar 3, 5.25 veya 6.25 olabilir.`,
        dogruCevap: "Günlük yüzbinde 1",
        bilmenGerekenler: ["DK fonu = en ucuz fon = yüzbinde 1.", "Yüzbinde 3 likit fon, 5.25 orta, 6.25 yüksek risk."],
        hafizaSifresi: "\"DK = 1, Likit = 3, Orta = 5.25, Yüksek = 6.25\"", onemDuzeyi: "kritik"
    },
    {
        id: 90, kategori: "BES Mevzuatı", konuBasligi: "Stopaj Oranları Tablosu",
        soruMetni: "Emeklilik hakkı kazananların stopaj oranı nedir?",
        soruOzeti: "10 yıl+56 yaş ile emekli olunca stopaj ne kadar?",
        konuAnlatimi: `Emeklilik = %5 stopaj. 10 yıldan önce çıkış = %15. Vefat/Maluliyet = %5. 10 yıl+ ama emekli değil = %10.`,
        dogruCevap: "%5",
        bilmenGerekenler: ["Emeklilik/Vefat/Maluliyet = %5.", "10 yıl+ emekli değil = %10.", "10 yıldan az = %15."],
        hafizaSifresi: "\"5-10-15 Basamağı\": Emeklilik=%5, 10yıl+=%10, Erken=%15", onemDuzeyi: "kritik"
    },
    {
        id: 91, kategori: "BES Mevzuatı", konuBasligi: "Borçlanma Araçları Fonu",
        soruMetni: "Portföyünün en az %80'i borçlanma araçlarından oluşan fona ne denir?",
        soruOzeti: "%80'i tahvil ve bono olan fon nedir?",
        konuAnlatimi: `Fonun %80'i devlet/şirket borçlanma araçları (tahvil, bono) + ters repo ise Borçlanma Araçları Fonu. Soru 19 ile aynı mantık.`,
        dogruCevap: "Borçlanma araçları fonu",
        bilmenGerekenler: ["Tahvil + Bono + Ters Repo = Borçlanma.", "Hisse senedi fonu ile karıştırma!"],
        hafizaSifresi: "\"%80 Tahvil = Borçlanma Fonu\"", onemDuzeyi: "yuksek"
    },
    {
        id: 92, kategori: "BES Mevzuatı", konuBasligi: "YGS Maaşı Haciz Muafiyeti",
        soruMetni: "Yıllık gelir sigortası ödemesi haczedilebilir mi?",
        soruOzeti: "Emekli maaşın (YGS) haczedilebilir mi?",
        konuAnlatimi: `YGS (Yıllık Gelir Sigortası) ödemeleri SGK emekli maaşı gibi muamele görür ve HİÇ haczedilemez. BES birikimi kısmen haczedilebilir ama YGS maaşı dokunulmazdır.`,
        dogruCevap: "Hayır, YGS ödemeleri hiçbir şekilde haczedilemez",
        bilmenGerekenler: ["BES birikimi = kısmen haczedilebilir.", "YGS maaşı = ASLA haczedilemez."],
        hafizaSifresi: "\"YGS Maaşı Dokunulmaz\"", onemDuzeyi: "kritik"
    },
    {
        id: 93, kategori: "BES Mevzuatı", konuBasligi: "6 Aylık Faaliyet Raporu",
        soruMetni: "Fon faaliyet raporu ne sıklıkla hazırlanır?",
        soruOzeti: "Fonun performans raporu ne sıklıkla basılır?",
        konuAnlatimi: `6 aylık dönemle faaliyet raporu hazırlanır. Bağımsız dış denetim ise YILLIK yapılır. İkisini karıştırma!`,
        dogruCevap: "6 aylık dönemlerde",
        bilmenGerekenler: ["Faaliyet raporu = 6 aylık.", "Bağımsız denetim = yıllık.", "İkisi FARKLI şeyler."],
        hafizaSifresi: "\"Rapor 6 Ay, Denetim 1 Yıl\"", onemDuzeyi: "yuksek"
    },
    {
        id: 94, kategori: "BES Mevzuatı", konuBasligi: "Fon Dağılım Değişikliği Limiti",
        soruMetni: "Fon dağılım oranları yılda en fazla kaç kez değiştirilebilir?",
        soruOzeti: "Paranın fonlar arası yüzdelik payını yılda kaç kez değiştirebilirsin?",
        konuAnlatimi: `Fon dağılım oranı değişikliği yılda max 12 kez. Plan değişikliği ise yılda max 4 kez. Birbirine karıştırma!`,
        dogruCevap: "12",
        bilmenGerekenler: ["Dağılım değişikliği = 12/yıl.", "Plan değişikliği = 4/yıl."],
        hafizaSifresi: "\"Dağılım 12, Plan 4\"", onemDuzeyi: "kritik"
    },
    {
        id: 95, kategori: "BES Mevzuatı", konuBasligi: "Plan Değişikliği Limiti",
        soruMetni: "Katılımcının emeklilik planı yılda en fazla kaç kez değiştirilebilir?",
        soruOzeti: "Emeklilik planını yılda kaç kez değiştirebilirsin?",
        konuAnlatimi: `Plan değişikliği yılda max 4 kez. Bunun üstü için şirketin onayı dahi geçersizdir.`,
        dogruCevap: "4",
        bilmenGerekenler: ["Plan değişikliği = 4/yıl.", "Fon dağılım değişikliği = 12/yıl (farklı kavram)."],
        hafizaSifresi: "\"Plan 4, Dağılım 12\"", onemDuzeyi: "kritik"
    },
    {
        id: 96, kategori: "BES Mevzuatı", konuBasligi: "Doğal Afet İstisnası",
        soruMetni: "Doğal afet durumunda kısmi ödeme yapılması için hangi koşullar aranmaz?",
        soruOzeti: "Deprem oldu, paranı çekmen için hangi şartlar kalkar?",
        konuAnlatimi: `Normal kısmi çekim için 5 yıl + birikim şartı var. Doğal afet ise TEK İSTİSNA: bu şartlar ARANMAZ.`,
        dogruCevap: "5 yıl bekleme ve birikim koşulları aranmaz",
        bilmenGerekenler: ["Doğal afet = TÜM ŞARTLAR KALKAR.", "Başka hiçbir durumda bu istisna verilmez."],
        hafizaSifresi: "\"Deprem Tüm Kilitleri Kırar\"", onemDuzeyi: "kritik"
    },
    {
        id: 97, kategori: "BES Mevzuatı", konuBasligi: "Getiri Taahhüdü Yasağı",
        soruMetni: "BES pazarlamasında garanti getiri vaadi yapılabilir mi?",
        soruOzeti: "\"Kesin kazanırsınız\" denilebilir mi?",
        konuAnlatimi: `Garanti getiri VAAT EDİLEMEZ. Kanuna aykırıdır. Geçmiş performans gösterilebilir ama gelecek vaadi verilemez.`,
        dogruCevap: "Hayır, garanti getiri taahhüdü yapılamaz",
        bilmenGerekenler: ["Geçmiş gösterilebilir, gelecek VAAT EDİLEMEZ.", "\"Kesin kazanırsınız\" demek kanuna aykırıdır."],
        hafizaSifresi: "\"BES'te Garanti Yok\"", onemDuzeyi: "yuksek"
    },
    {
        id: 98, kategori: "BES Mevzuatı", konuBasligi: "Mesafeli Satış Kuralı",
        soruMetni: "Mesafeli satışta (online) matbu form zorunlu mudur?",
        soruOzeti: "Online satışta kağıt zorla imzalatılır mı?",
        konuAnlatimi: `Mesafeli (internet) satışta matbu form zorunlu DEĞİLDİR. Elektronik onay yeterlidir. Web üzerinden bilgi formu gösterilir ve dijital onay alınır.`,
        dogruCevap: "Hayır, elektronik ortamda onay yeterlidir",
        bilmenGerekenler: ["Online satışta kağıt zorlanamaz.", "Dijital imza/onay yeterli."],
        hafizaSifresi: "\"Online'da Kağıt Olmaz\"", onemDuzeyi: "orta"
    },
    {
        id: 99, kategori: "BES Mevzuatı", konuBasligi: "Sisteme Giriş ve En Eski Sözleşme",
        soruMetni: "Birden fazla sözleşmesi olan katılımcının sisteme giriş tarihi nasıl belirlenir?",
        soruOzeti: "Birden fazla sözleşmen varsa kaçıncı giriş tarihi geçerli?",
        konuAnlatimi: `OKS sözleşmeleri hariç, yürürlükteki EN ESKİ sözleşmenin giriş tarihi esas alınır. İptal edilmiş sözleşmeler SAYILMAZ.`,
        dogruCevap: "Yürürlükteki en eski sözleşmenin giriş tarihi esas alınır",
        bilmenGerekenler: ["İptal edilmiş sözleşme yok sayılır.", "OKS sözleşmeleri ayrı hesaplanır."],
        hafizaSifresi: "\"En Eski Sözleşme = Sisteme Giriş\"", onemDuzeyi: "yuksek"
    },
    {
        id: 100, kategori: "BES Mevzuatı", konuBasligi: "SEDDK'nın Görevi",
        soruMetni: "Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu (SEDDK) ne yapar?",
        soruOzeti: "SEDDK'nın BES'teki rolü nedir?",
        konuAnlatimi: `SEDDK (eski Hazine Müsteşarlığı) BES şirketlerini denetler, kuruluş izni ve ruhsat verir. SPK ise FON'ları denetler. İkisi farklıdır!`,
        dogruCevap: "BES şirketlerinin kuruluş iznini ve ruhsatını verir, denetler",
        bilmenGerekenler: ["SEDDK = Şirketi denetler.", "SPK = Fonu denetler.", "İkisini karıştırma!"],
        hafizaSifresi: "\"SEDDK = Şirket, SPK = Fon\"", onemDuzeyi: "kritik"
    },
    {
        id: 101, kategori: "BES Mevzuatı", konuBasligi: "EGM İşlevi",
        soruMetni: "Emeklilik Gözetim Merkezi (EGM) ne iş yapar?",
        soruOzeti: "EGM'nin BES'teki rolü nedir?",
        konuAnlatimi: `EGM, BES'teki tüm katılımcı bilgilerinin tutulduğu merkezi veri tabanıdır. İstatistik ve izleme yapar, denetim yapmaz. Denetim SEDDK'nın işidir.`,
        dogruCevap: "Katılımcı bilgilerini merkezi olarak takip eder ve istatistik üretir",
        bilmenGerekenler: ["EGM = Veri Tabanı + İstatistik.", "EGM DENETİM yapmaz."],
        hafizaSifresi: "\"EGM = BES'in Hafızası\"", onemDuzeyi: "yuksek"
    },
    {
        id: 102, kategori: "BES Mevzuatı", konuBasligi: "Emeklilik Planı Unsurları",
        soruMetni: "Aşağıdakilerden hangisi emeklilik planının unsurlarından biri değildir?",
        soruOzeti: "Emeklilik planında hangi bilgi yer almaz?",
        konuAnlatimi: `Planda: fon tercihleri, katkı payı tutarı, giriş aidatı bilgisi yer alır. Katılımcının mesleği plan unsuru DEĞİLDİR. Meslek sigortacılık terimi.`,
        dogruCevap: "Katılımcının meslek grubu",
        bilmenGerekenler: ["Plan finansal bilgileri içerir.", "Kişisel bilgiler (meslek) planda yer almaz."],
        hafizaSifresi: "\"Plana Meslek Yazılmaz\"", onemDuzeyi: "orta"
    },
    {
        id: 103, kategori: "BES Mevzuatı", konuBasligi: "Sermaye Artırımı Zamanlaması",
        soruMetni: "Emeklilik şirketi kuruluş sürecinde aşağıdakilerden hangisi yapılmaz?",
        soruOzeti: "Şirket kuruluşunda hangi adım yapılmaz?",
        konuAnlatimi: `Kuruluş sürecinde: Kuruluş İzni → Faaliyet Ruhsatı → Fon Kuruluş yapılır. Sermaye artırımı kuruluş sürecine ait DEĞİLDİR, sonraki ticari hayatta yapılır.`,
        dogruCevap: "Sermaye artırımı",
        bilmenGerekenler: ["Sermaye artırımı şirketin doğumundan SONRA yapılır.", "Kuruluş adımları: İzin → Ruhsat → Fon."],
        hafizaSifresi: "\"Kuruluşta Sermaye Artırımı Olmaz\"", onemDuzeyi: "yuksek"
    },
    {
        id: 104, kategori: "BES Mevzuatı", konuBasligi: "Katılımcının Vefatında Haklar",
        soruMetni: "BES katılımcısının vefatı halinde ne olur?",
        soruOzeti: "Katılımcı öldüğünde parası kime gider?",
        konuAnlatimi: `Vefat halinde birikim + DK'nın %100'ü lehdara ödenir. Lehdar yoksa yasal mirasçılara. Kesinti yapılmaz.`,
        dogruCevap: "Tüm birikim ve DK'nın tamamı lehdara/mirasçıya ödenir",
        bilmenGerekenler: ["Vefat = %100 DK hak ediş.", "Süre fark etmez, 1 gün bile olsa."],
        hafizaSifresi: "\"Ölüm = Tüm Kilitleri Açar\"", onemDuzeyi: "kritik"
    },
    {
        id: 105, kategori: "BES Mevzuatı", konuBasligi: "Risk Uyarısı Zamanlaması",
        soruMetni: "Emekliliğe kaç yıl kala risk azaltma uyarısı yapılır?",
        soruOzeti: "Emeklilik yakınken ne zaman uyarı gelir?",
        konuAnlatimi: `Emekliliğe 2 yıl kala şirket, katılımcıya düşük riskli fonlara geçmesi için uyarı yapar.`,
        dogruCevap: "2 yıl kala",
        bilmenGerekenler: ["2 yıl kala risk azaltma uyarısı.", "5 yıl veya 1 yıl diyen şıklar yanlış."],
        hafizaSifresi: "\"Emekliliğe 2 Yıl Kala Fren Yap\"", onemDuzeyi: "yuksek"
    },
    {
        id: 106, kategori: "BES Mevzuatı", konuBasligi: "Aktarımda Kesinti Limiti",
        soruMetni: "Aktarım yapılan yeni şirketteki kesinti kuralı nedir?",
        soruOzeti: "Aktarım sonrası yeni şirkette kesinti tavanı ne olur?",
        konuAnlatimi: `Eski şirkette yapılan kesintiler + yeni şirketteki kesintiler toplamı %8.5 tavanını AŞAMAZ. İki şirketin kesintisi birlikte hesaplanır.`,
        dogruCevap: "Eski ve yeni şirketin kesinti toplamı %8.5'i aşamaz",
        bilmenGerekenler: ["Kesinti tavanı ŞİRKET DEĞİL, KATILIMCIya aittir.", "Tavan ortak paylaşılır: eski+yeni toplamı max %8.5."],
        hafizaSifresi: "\"Tavan Ortaktır\"", onemDuzeyi: "kritik"
    },
    {
        id: 107, kategori: "BES Mevzuatı", konuBasligi: "OKS Katkı Payı Oranı",
        soruMetni: "OKS'de çalışanın brüt maaşından asgari yüzde kaç kesilir?",
        soruOzeti: "Zorunlu BES'te maaştan asgari kesinti yüzdesi nedir?",
        konuAnlatimi: `OKS'de brüt maaşın asgari %3'ü kesilir. İşveren veya çalışan bu oranı artırabilir ama %3'ün altına inemez.`,
        dogruCevap: "%3",
        bilmenGerekenler: ["OKS asgari kesinti = brüt maaşın %3'ü.", "Bu oran arttırılabilir ama azaltılamaz."],
        hafizaSifresi: "\"OKS'de Minimum %3\"", onemDuzeyi: "kritik"
    },
    {
        id: 108, kategori: "BES Mevzuatı", konuBasligi: "BES Kanunun Amacı",
        soruMetni: "4632 sayılı kanunun amacı nedir?",
        soruOzeti: "BES kanunu neyi amaçlar?",
        konuAnlatimi: `BES'in amacı ek gelir sağlayarak refah artırmaktır. SGK'yı ikame etmek, yatırım yapmak veya vergi avantajı sağlamak amaç maddesinde yoktur.`,
        dogruCevap: "Kamu sosyal güvenlik sistemini tamamlayıcı nitelikte, gönüllü katılıma dayalı ek gelir sağlamak",
        bilmenGerekenler: ["BES = TAMAMLAYICI (alternatif değil).", "Gönüllü katılım (OKS hariç)."],
        hafizaSifresi: "\"BES Tamamlayıcıdır, Alternatif Değil\"", onemDuzeyi: "yuksek"
    },
    {
        id: 109, kategori: "BES Mevzuatı", konuBasligi: "Fon Tasfiye Süreci",
        soruMetni: "Fonun tasfiye edilmesi sürecinde ne olur?",
        soruOzeti: "Fon kapatılırsa ne olur?",
        konuAnlatimi: `Tasfiye sürecinde fon varlıkları nakde çevrilir. Katılımcılara payları oranında dağıtılır. Tasfiye halinde fon YENİ PAY satamaz.`,
        dogruCevap: "Fon varlıkları nakde çevrilip katılımcılara dağıtılır, yeni pay satılamaz",
        bilmenGerekenler: ["Tasfiye = Fonun kapanışı.", "Katılımcıların payları nakde çevrilir, yeni pay üretilemez."],
        hafizaSifresi: "\"Tasfiye = Kapanış İndirimi\"", onemDuzeyi: "yuksek"
    },
    {
        id: 110, kategori: "BES Mevzuatı", konuBasligi: "Kısmi Çekim Formülü",
        soruMetni: "Kısmi ödeme talebinde en fazla ne kadar çekilebilir?",
        soruOzeti: "Paranın ne kadarını kısmi olarak çekebilirsin?",
        konuAnlatimi: `5 yıl dolduktan sonra toplam birikimin max %50'si kısmi olarak çekilebilir. Doğal afet istisnası hariç, 5 yıl dolmadan kısmi çekim yapılamaz.`,
        dogruCevap: "Toplam birikimin en fazla %50'si",
        bilmenGerekenler: ["5 yıl + max %50 formülü.", "Doğal afet istisnası: 5 yıl ARANMAZ."],
        hafizaSifresi: "\"5 Yıl Bekle, Yarısını Al\"", onemDuzeyi: "kritik"
    },
    {
        id: 111, kategori: "BES Mevzuatı", konuBasligi: "Emeklilik Sonrası Seçenekler",
        soruMetni: "Emeklilik hakkını kazanan katılımcının seçenekleri nelerdir?",
        soruOzeti: "Emekli olunca hangi seçenekler var?",
        konuAnlatimi: `Emekli olan 3 seçenek arasından seçer: 1) Toplu para al, 2) Maaş (YGS) bağlat, 3) İkisinin kombinasyonu. Paranı fondda tutmaya devam seçeneği YOKTUR.`,
        dogruCevap: "Toplu ödeme, yıllık gelir sigortası (maaş) veya ikisinin kombinasyonu",
        bilmenGerekenler: ["3 seçenek: Toplu + Maaş + Karma.", "Sistemde kalma/yatırıma devam seçeneği YOK."],
        hafizaSifresi: "\"Emekli Üçlüsü: Toplu, Maaş, Karma\"", onemDuzeyi: "yuksek"
    },
    {
        id: 112, kategori: "BES Mevzuatı", konuBasligi: "Sözleşme Fesih Hakları",
        soruMetni: "Emeklilik sözleşmesinin fesih koşulları hakkında hangisi doğrudur?",
        soruOzeti: "Sözleşmeyi kim, nasıl feshedebilir?",
        konuAnlatimi: `Katılımcı her zaman feshedebilir. Şirket ise ancak sınırlı durumlarda (hile, mevzuata aykırılık) feshedebilir. Sadece az ödeme yaptı diye fesih YAPILAMAZ.`,
        dogruCevap: "Katılımcı dilediği zaman, şirket ancak sınırlı koşullarda feshedebilir",
        bilmenGerekenler: ["Müşterinin çıkış kapısı her zaman açıktır.", "Şirket keyfi fesih yapamaz."],
        hafizaSifresi: "\"Müşteri İsterse Çıkar, Şirket İsterse Çıkarmaz\"", onemDuzeyi: "yuksek"
    },
    {
        id: 113, kategori: "BES Mevzuatı", konuBasligi: "Grup Emeklilik Sözleşme Türleri",
        soruMetni: "Aşağıdakilerden hangisi grup emeklilik sözleşmesi türlerinden biri değildir?",
        soruOzeti: "Hangi sözleşme türü grup BES'te yoktur?",
        konuAnlatimi: `İşveren grup ve gruba bağlı bireysel sözleşme vardır. "Bağımsız grup emeklilik sözleşmesi" diye bir tür kanunda YOKTUR.`,
        dogruCevap: "Bağımsız grup emeklilik sözleşmesi",
        bilmenGerekenler: ["İki tür: İşveren Grup + Gruba Bağlı Bireysel.", "Bağımsız grup uydurma bir terimdir."],
        hafizaSifresi: "\"Bağımsız Grup Diye Bir Şey Yok\"", onemDuzeyi: "orta"
    },
    {
        id: 114, kategori: "BES Mevzuatı", konuBasligi: "Lehdar Hakları ve Sınırları",
        soruMetni: "Lehdar hangi hakları kullanabilir?",
        soruOzeti: "Lehdar ne yapabilir, ne yapamaz?",
        konuAnlatimi: `Lehdar vefat sonrası birikimi alabilir ama aktarım, fon değişikliği, kısmi çekim gibi operasyonel hakları kullanAMAZ.`,
        dogruCevap: "Sadece vefat halinde ödeme alma hakkı vardır, operasyonel hakları yoktur",
        bilmenGerekenler: ["Lehdar = vefat sonrası alıcı.", "Lehdar AKTARIM talep edemez, FON değiştiremez."],
        hafizaSifresi: "\"Lehdar Sadece Vefatta Alır\"", onemDuzeyi: "yuksek"
    },
    {
        id: 115, kategori: "BES Mevzuatı", konuBasligi: "DK Başlangıç Dönemi",
        soruMetni: "Devlet katkısı başlangıcı hangi tarihten itibarendir?",
        soruOzeti: "Devlet katkısı ne zamandan itibaren yatırılır?",
        konuAnlatimi: `Devlet katkısı 01.01.2013 tarihinden itibaren yatırılmaktadır. Bu tarihten önceki birikimlere DK uygulanmaz.`,
        dogruCevap: "01.01.2013",
        bilmenGerekenler: ["DK başlangıcı = 2013.", "2013 öncesi birikime DK YOKTUR."],
        hafizaSifresi: "\"DK'nın Doğum Günü: 2013\"", onemDuzeyi: "yuksek"
    },
    {
        id: 116, kategori: "BES Mevzuatı", konuBasligi: "BES Denetim Kurumları",
        soruMetni: "BES sistemi üzerinde hangi kurumlar denetim yapar?",
        soruOzeti: "BES'i kim denetler?",
        konuAnlatimi: `SEDDK şirketleri, SPK fonları, EGM veri tabanını, bağımsız denetçiler mali tabloları denetler. Hepsinin rolü farklıdır.`,
        dogruCevap: "SEDDK (şirket), SPK (fon), bağımsız denetçiler (mali tablolar)",
        bilmenGerekenler: ["Her kurumun farklı denetim alanı var.", "EGM denetim YAPMAZ, sadece veri toplar."],
        hafizaSifresi: "\"Herkesin Sahası Farklı\"", onemDuzeyi: "kritik"
    },
    {
        id: 117, kategori: "BES Mevzuatı", konuBasligi: "Fon Performans Ölçümü",
        soruMetni: "Fon performansı neye göre ölçülür?",
        soruOzeti: "Fonun başarılı olup olmadığını nasıl anlarsın?",
        konuAnlatimi: `Fon performansı karşılaştırma ölçütüne (benchmark) göre ölçülür. İzahnamede belirlenen ölçütle karşılaştırılır.`,
        dogruCevap: "İzahnamede belirlenen karşılaştırma ölçütüne (benchmark) göre",
        bilmenGerekenler: ["Benchmark = fonun başarı çıtası.", "Her fonun kendi benchmarkı vardır."],
        hafizaSifresi: "\"Benchmark = Fonun Sınav Notu\"", onemDuzeyi: "orta"
    },
    {
        id: 118, kategori: "BES Mevzuatı", konuBasligi: "Katılımcı Bilgilendirme Yükümlülüğü",
        soruMetni: "Emeklilik şirketinin katılımcıyı bilgilendirme yükümlülüğü kapsamında hangisi yer almaz?",
        soruOzeti: "Şirketin sana bildirmesi zorunlu olmayan bilgi nedir?",
        konuAnlatimi: `Şirket; fon fiyatları, kesinti bilgileri ve plan değişikliklerini bildirmek zorundadır. Piyasa analizi veya yatırım tavsiyesi vermek zorunda DEĞİLDİR.`,
        dogruCevap: "Piyasa analizi ve yatırım tavsiyesi",
        bilmenGerekenler: ["Şirket danışman değil, bilgi veren kurumdur.", "Yatırım tavsiyesi = SPK lisanslı yatırım danışmanının işi."],
        hafizaSifresi: "\"Şirket Danışman Değil\"", onemDuzeyi: "orta"
    },
    {
        id: 119, kategori: "BES Mevzuatı", konuBasligi: "BES Reklam ve Tanıtım Kuralları",
        soruMetni: "BES reklamlarında nelere dikkat edilmelidir?",
        soruOzeti: "BES reklamında ne yapılamaz?",
        konuAnlatimi: `Reklamlarda yanıltıcı ifade kullanılamaz, garanti getiri vaadi verilemez ve rakip şirketlerle karşılaştırma yapılamaz. Geçmiş performans gösterirken gelecek garantisi verilemez.`,
        dogruCevap: "Yanıltıcı ifade, garanti getiri vaadi ve rakiple karşılaştırma yapılamaz",
        bilmenGerekenler: ["Reklam kuralı: dürüstlük + abartısızlık.", "Rakiple kıyas ve garanti vaadi YASAK."],
        hafizaSifresi: "\"Reklamda Yalan ve Garanti Yasak\"", onemDuzeyi: "yuksek"
    },
    {
        id: 155, kategori: "BES Mevzuatı", konuBasligi: "Fonun Çelik Zırhı (Dokunulmazlık)",
        soruMetni: "Emeklilik yatırım fonu ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
        soruOzeti: "Fon paralarına kimse dokunabilir mi?",
        konuAnlatimi: `Emeklilik fonları kanun tarafından "Çelik bir zırhla" korunur. Şirket iflas etse bile fondaki paraya dokunulamaz. Fon malvarlığı:
- Rehnedilemez (A doğru)
- Haczettirilemez (B doğru)
- İflas masasına dahil edilemez (C doğru)

Ancak "Her şekilde teminat olarak gösterilebilir" (D) ifadesi YANLIŞTIR. Devlet sana "Haczedilmeyen, kimsenin dokunamadığı bu kutsal parayı alıp, gidip kendi ticari kredilerin için bankalara teminat/ipotek olarak gösteremezsin" der. Bu ifade sistemi temelden çökertir.`,
        dogruCevap: "Fon malvarlığı her şekilde teminat olarak gösterilebilir",
        bilmenGerekenler: [
            "Fonlar haczedilemez, rehin verilemez, iflas masasına katılamaz.",
            "Fon malvarlığı teminat olarak GÖSTERİLEMEZ.",
            "Şirket batsa bile fona dokunulamaz."
        ],
        hafizaSifresi: "\"Fon Teminat Olamaz\": Kimse emeklilik parasını bankaya ipotek/teminat olarak sunamaz",
        onemDuzeyi: "kritik"
    },
    {
        id: 156, kategori: "BES Mevzuatı", konuBasligi: "Tüzel Kişilik Tuzağı",
        soruMetni: "Aşağıdakilerden hangisi emeklilik yatırım fonunun özelliklerinden değildir?",
        soruOzeti: "Emeklilik fonu bir şirket midir, yoksa sadece bir para havuzu mu?",
        konuAnlatimi: `Sınavın en baba hukuk sorularından biri! Emeklilik şirketi (Allianz, Anadolu vs.) bir şirkettir, yani Tüzel Kişidir. Ancak Emeklilik FONU bir şirket veya kurum değildir!

Fonun şoförü, patronu veya kendi kendine karar alma yetkisi yoktur. O sadece içi parayla dolu cansız bir "Malvarlığı Havuzu"dur. Bu yüzden fonların "Tüzel kişiliği (şirket kimliği) vardır" demek hukuken koca bir YALANDIR.

Fonlar tüzel kişiliği OLMADAN, süresiz olarak kurulurlar ve sermaye piyasası kurumu niteliğindedirler.`,
        dogruCevap: "Tüzel kişiliği vardır",
        bilmenGerekenler: [
            "Fonlar şirket DEĞİLDİR, tüzel kişiliği YOKTUR.",
            "Fon sadece bir hesap/para havuzudur.",
            "Süresiz kurulur + SPK kurumu niteliğindedir."
        ],
        hafizaSifresi: "\"Fonun Tüzel Kişiliği Yoktur\": Şıklarda 'tüzel kişilik' gördüğün an üstünü çiz",
        onemDuzeyi: "kritik"
    },
    {
        id: 157, kategori: "BES Mevzuatı", konuBasligi: "Banka Mevduatı Sınırı %25",
        soruMetni: "Emeklilik yatırım fonu portföyüne ilişkin sınırlamalardan hangisi doğrudur?",
        soruOzeti: "Fonun ne kadarı bankada faizde bekletilebilir?",
        konuAnlatimi: `SPK, fon yöneticisine "Parayı fona topladın ama gidip bunun hepsini risk almadan banka faizine (mevduata) yatıramazsın, o zaman o fon niye var?" der.

Fonların nakit parasını bankalarda "Mevduat (Faiz) veya Katılma Hesabında" tutma oranına tavan konmuştur: En fazla %25 (dörtte biri).

Yanlış şıklar: Takasbank para piyasası max %10'dur (%30 değil), topluluk yatırımı max %30'dur (%35 değil).`,
        dogruCevap: "En fazla %25'i mevduat/katılma hesaplarında değerlendirilebilir",
        bilmenGerekenler: [
            "Mevduat/Katılma Hesabı sınırı = max %25.",
            "Takasbank para piyasası = max %10.",
            "Topluluk yatırım sınırı = max %30.",
            "Tek ihraççı sınırı = max %20."
        ],
        hafizaSifresi: "\"Mevduat Sınırı = %25\": Banka faizinde max dörtte biri bekletilebilir",
        onemDuzeyi: "kritik"
    },
    {
        id: 158, kategori: "BES Mevzuatı", konuBasligi: "BES Mevzuat İsimleri",
        soruMetni: "Hangisi bireysel emeklilik sistemi ile ilgili yönetmeliklerden değildir?",
        soruOzeti: "Hangi yönetmelik BES şemsiyesi altında değildir?",
        konuAnlatimi: `Bedava bir puan sorusu! A, B, C şıklarına bak; hepsinin içinde "Emeklilik" kelimesi geçiyor. Bunlar bizim anayasalarımız.

"Sigorta ve Reasürans Şirketleri" kelimesi ise kasko, trafik sigortası, yangın sigortası yapan klasik sigorta acentelerinin kanunudur. Reasürans = sigortanın sigortası. BES bambaşka bir yatırım ve fon mevzuatıdır.`,
        dogruCevap: "Sigorta ve Reasürans Şirketleri Aracıları Hakkında Yönetmelik",
        bilmenGerekenler: [
            "BES mevzuatının içinde her zaman 'Emeklilik' kelimesi geçer.",
            "Reasürans kelimesi klasik (elementer) sigortacılığa aittir.",
            "Farklı olanı işaretle prensibi."
        ],
        hafizaSifresi: "\"BES, Reasürans Değildir\": İçinde 'Emeklilik' geçmeyen şık yanlıştır",
        onemDuzeyi: "orta"
    },
    {
        id: 159, kategori: "BES Mevzuatı", konuBasligi: "Zorunlu Giderler vs Komisyon",
        soruMetni: "Aşağıdakilerden hangisi fona ilişkin zorunlu giderlerden biri değildir?",
        soruOzeti: "Hangi gider devletin zorunlu kıldığı masraf değil, şirketin aldığı komisyondur?",
        konuAnlatimi: `Fonun kuruluşunda devlete ödenen "Tescil ve İlan giderleri" (A), paraları koruyan Takasbank'a ödenen "Saklama ücreti" (B) ve bağımsız denetimcilere ödenen faturalar (C) tamamen Zorunlu ve Resmi operasyon giderleridir.

Ancak "Fon İşletim Gideri" (veya FTGK), devletin zorunlu kıldığı bir vergi veya fatura değil; emeklilik şirketinin ve borsacının kâr etmek, maaşlarını çıkarmak için müşterinin parasından aldığı KOMİSYONDUR. Komisyon/Kesinti ile zorunlu resmi masraflar aynı şey değildir.`,
        dogruCevap: "Fon işletim gideri",
        bilmenGerekenler: [
            "Zorunlu giderler: Saklama, Denetim, Tescil/İlan.",
            "Fon işletim gideri (FTGK) = Komisyon, zorunlu masraf DEĞİL.",
            "Devletin emri ≠ Şirketin kâr payı."
        ],
        hafizaSifresi: "\"İşletim Gideri = Komisyon, Zorunlu Masraf Değil\"",
        onemDuzeyi: "yuksek"
    }
];
