const DEFAULT_LANG = "en";
const SUPPORTED_LANGS = ["en", "mk", "sr", "el"];

const translations = {
  en: {
    zoe_apartments: "Zoe Apartments",
    contact_us: "Contact Us",
    find_your_perfect_stay: "Find Your Perfect Stay",
    comfortable_apartments_in_the_heart_of_the_city: "Comfortable apartments",
    book_now: "Book Now",
    luxury_living: "Luxury Living",
    experience_premium_comfort_and_style: "Experience premium comfort and style",
    modern_amenities: "Modern Amenities",
    everything_you_need_for_a_perfect_vacation:
      "Everything you need for a perfect vacation",
    apartment_name_polychrono: "Polychrono Apartment",
    apartment_name_flogita: "Flogita Apartment",
    apartment_name_ohrid: "Ohrid Apartment",
    apartment_description_polychrono:
      "Modern apartment, Prime beach location and private parking.",
    apartment_description_flogita:
      "Modern apartment in the heart of the city and 50m from the beach.",
    apartment_description_ohrid: "Apartment in the heart of the city",
    view_details: "View Details",
    contact_intro: "Get in touch with us!",
    your_name: "Your Name",
    email_address: "Email Address",
    phone: "Phone Number (Optional)",
    subject: "Subject",
    message_placeholder: "Your message here...",
    send_message: "Send Message",
    message_success_alert: "Message sent! We will get back to you soon.",
    description: "Description",
    description_polychrono:
      "Welcome to Zoe Apartment Polychrono. Located just 50 meters from the sea, in the very center of Polychrono, this brand new apartment (built in 2025) offers modern comfort and elegant style. The apartment is very modernly furnished and features a living room with a sofa bed, a fully equipped kitchen with a counter, a separate bedroom, a modern bathroom, a terrace, a TV with all channels, and fast internet. Private parking is also provided, which is a great advantage during the summer season. An ideal choice for guests who want a comfortable, stylish, and carefree vacation, just steps from the beach and all city amenities.",
    description_polychrono_second:
      "With its modern interior and excellent location, Zoe Apartment offers a pleasant and carefree stay in the heart of Polychrono.",
    description_flogita:
      "Welcome to Zoe Apartment Flogita. Situated just 50 meters from the sea, in the heart of Flogita, this brand new apartment (built in 2025) provides contemporary comfort and sophisticated style. The apartment is elegantly furnished and includes a living room with a sofa bed, a fully equipped kitchen with a counter, a separate bedroom, a modern bathroom, a terrace, a TV with all channels, and ultra-fast Starlink internet. A perfect choice for guests seeking a comfortable, elegant, and relaxed vacation, just steps from the beach and all city amenities.",
    description_flogita_second:
      "Enjoy your morning coffee on the private balcony, or unwind in the evening with a glass of wine. Zoe Apartment is the ideal spot for couples or small families looking to experience the best of summer.",
    description_ohrid:
      "Enjoy a comfortable and relaxing stay in this fully equipped 50 m² apartment, perfectly located in the center of Ohrid. Everything you need is just steps away—restaurants, cafés, shops, and the beautiful lake. The apartment features a modern living room with a fully equipped kitchen, a cozy bedroom, a clean and functional bathroom, and a private terrace where you can unwind and enjoy your coffee. Private parking is included, making your stay stress-free.",
    description_ohrid_second:
      "Equipped with all essentials for a perfect vacation, this apartment offers comfort, convenience, and a prime location—ideal for couples, families, or solo travelers looking to experience the best of Ohrid.",
    amenities: "Amenities",
    amenity_beds:
      "1 Large Double Bed, 2 Sofa Beds (that can be joined together)",
    amenity_beds_flogita:
      "1 Large Double Bed, 1 Sofa Bed (that can be made as a double bed)",
    amenity_kitchen: "Kitchen",
    amenity_bathroom: "Private Bathroom",
    amenity_air_conditioning: "Air Conditioning",
    amenity_tv: "Flat-Screen TV",
    amenity_wifi: "Free WiFi",
    amenity_parking: "Private Parking",
    amenity_balcony: "Balcony",
    starlink: "Starlink",
    apartment: "Apartment",
    apartment_price_polychrono: "From 70€",
    apartment_price_flogita: "From 70€",
    apartment_price_ohrid: "From 50€",
    minimum_stay: "Minimum stay 7 nights",
    go_to_contact_me: "Go to Contact Us",
    map: "Map",
    check_polychrono: "Check Polychrono Apartment",
    check_flogita: "Check Flogita Apartment",
    check_ohrid: "Check Ohrid Apartment",
    photo_gallery: "Photo Gallery",
    photos_coming_soon: "Photos coming soon",
    guest_info_title: "Guest Information",
    guest_info_subtitle: "Helpful details for a smooth stay at Zoe Apartments.",
    info_no_smoking_title: "No smoking",
    info_no_smoking_body:
      "Smoking is not allowed inside. Please use outdoor areas and be mindful of fire safety.",
    info_pet_friendly_title: "Pet friendly",
    info_pet_friendly_body:
      "Pets are welcome. Let us know in advance so we can prepare the apartment.",
    info_prices_title: "Prices",
    info_prices_body:
      "Rates are in EUR and confirmed after booking and deposit.",
    info_minors_title: "Unaccompanied minors",
    info_minors_body: "Guests under 18 must be accompanied by an adult.",
    info_booking_title: "How to book",
    info_booking_body:
      "Book online, call +389 76 542 465, or email zoeapartments.booking@gmail.com.",
    info_booking_times: "Check-in: 14:00 · Check-out: until 10:00",
    info_cancellation_title: "Cancellation policy",
    info_cancellation_body:
      "Free cancellation up to 24 hours before arrival. After that, a 10% fee of the deposit applies.",
    info_included_title: "Included in price",
    info_included_body:
      "Wi-Fi, parking, towels, and bed linen.",
    info_liability_title: "Liability",
    info_liability_body:
      "We are not liable for delays or disruptions caused by events beyond our control.",
    info_deposit_title: "Deposits",
    info_deposit_body:
      "A deposit is required to confirm your booking. The remaining balance is paid before check-in.",
    map_section_title: "Apartment Locations",
    map_section_subtitle: "See all Zoe Apartments on the map.",
    map_open: "Open in Google Maps",
  },
  mk: {
    zoe_apartments: "Зое Апартмани",
    contact_us: "Контакт",
    find_your_perfect_stay: "Пронајдете го вашиот совршен престој",
    comfortable_apartments_in_the_heart_of_the_city: "Комфортни апартмани",
    book_now: "Резервирајте сега",
    luxury_living: "Луксузен живот",
    experience_premium_comfort_and_style:
      "Искусете ја премиум комфортот и стилот",
    modern_amenities: "Модерни погодности",
    everything_you_need_for_a_perfect_vacation:
      "Она што ви треба за совршен летен престој",
    apartment_name_polychrono: "Апартман Полихроно",
    apartment_name_flogita: "Апартман Флогита",
    apartment_name_ohrid: "Апартман Охрид",
    apartment_description_polychrono:
      "Модерен апартман, одлична локација на плажа и приватен паркинг.",
    apartment_description_flogita:
      "Модерен апартман во срцето на градот на само 50м од плажата.",
    apartment_description_ohrid: "Апартман во срцето на градот.",
    view_details: "Види детали",
    contact_intro: "Стапете во контакт со нас!",
    your_name: "Ваше име",
    email_address: "Е-пошта",
    phone: "Телефон (Опционално)",
    subject: "Наслов",
    message_placeholder: "Вашата порака овде...",
    send_message: "Испрати порака",
    message_success_alert: "Пораката е испратена! Ќе ви одговориме наскоро.",
    description: "Опис",
    description_polychrono:
      "Добредојдовте во Зое Апартман Полихроно, Сместен на само 50 метри од морето, во самиот центар на Полихроно, овој целосно нов апартман (градба 2025) нуди модерен комфор и елегантен стил. Апартманот е најсовремено уреден и располага со дневна соба со софа-кревет, комплетно опремена кујна со шанк, одвоена спална соба, модерна бања, тераса, телевизор со сите канали и брз интернет. Обезбедено е и приватно паркинг место, што е голема предност во летната сезона. Идеален избор за гости кои сакаат удобен, стилски и безгрижен одмор, на чекор од плажа и сите градски содржини.",
    description_polychrono_second:
      "Со својот модерен ентериер и одлична позиција, Зое Апартман нуди пријатен и безгрижен престој во срцето на Полихроно.",
    description_flogita:
      "Добредојдовте во Зое Апартман Флогита. Сместен на само 50 метри од морето, во самиот центар на Флогита, овој целосно нов апартман (градба 2025) пружа модерен комфор и софистициран стил. Апартманот е современо опремен и содржи дневна соба со софа-кревет, комплетно опремена кујна со шанк, одвоена спална соба, модерна бања, тераса, телевизор со сите канали и ултра брз Starlink интернет. Совршен избор за гости кои бараат удобен, елегантен и опуштен одмор, на чекор од плажа и сите градски содржини.",
    description_flogita_second:
      "Уживајте во вашето утринско кафе на приватниот балкон или опуштете се во вечерните часови со чаша вино. Zoe Apartment е идеално место за парови или мали семејства кои сакаат да го доживеат најдоброто од летото.",
    description_ohrid:
      "Уживајте во удобен и релаксирачки престој во овој целосно опремен апартман од 50 м², совршено лоциран во центарот на Охрид. Се што ви треба е на неколку чекори — ресторани, кафулиња, продавници и прекрасното езеро. Апартманот располага со модерен дневен престој со целосно опремена кујна, удобна спална соба, функционална бања и приватна тераса каде можете да се опуштите со кафе. Приватниот паркинг е вклучен, што го прави престојот безгрижен.",
    description_ohrid_second:
      "Опремен со сите неопходности за совршен одмор, овој апартман нуди удобност, практичност и одлична локација — идеално за парови, семејства или соло патници кои сакаат да го доживеат најдоброто од Охрид.",
    amenities: "Погодности",
    amenity_beds:
      "1 голем брачен кревет, 2 софи (кои можат да се спојат)",
    amenity_beds_flogita:
      "1 голем брачен кревет, 1 софа (која може да се направи како брачен кревет)",
    amenity_kitchen: "Кујна",
    amenity_bathroom: "Приватна бања",
    amenity_air_conditioning: "Клима уред",
    amenity_tv: "Flat-screen TV",
    amenity_wifi: "Бесплатен WiFi",
    amenity_parking: "Приватен паркинг",
    amenity_balcony: "Балкон",
    starlink: "Starlink",
    apartment: "Апартман",
    apartment_price_polychrono: "Од 70€",
    apartment_price_flogita: "Од 70€",
    apartment_price_ohrid: "Од 50€",
    minimum_stay: "Минимум 7 ноќи",
    go_to_contact_me: "Контактирајте нè",
    map: "Мапа",
    check_polychrono: "Погледни го апартманот во Полихроно",
    check_flogita: "Погледни го апартманот во Флогита",
    check_ohrid: "Погледни го апартманот во Охрид",
    photo_gallery: "Галерија",
    photos_coming_soon: "Слики ќе бидат додадени наскоро",
    guest_info_title: "Информации за гости",
    guest_info_subtitle: "Корисни детали за пријатен престој во Zoe Apartments.",
    info_no_smoking_title: "Забрането пушење",
    info_no_smoking_body:
      "Пушење не е дозволено внатре. Ве молиме користете надворешни простори.",
    info_pet_friendly_title: "Pet friendly",
    info_pet_friendly_body:
      "Домашните миленици се добредојдени. Ве молиме најавете однапред.",
    info_prices_title: "Цени",
    info_prices_body: "Цените се во EUR и се потврдуваат по резервација.",
    info_minors_title: "Непридружени малолетници",
    info_minors_body: "Гостите под 18 години мора да бидат со возрасен.",
    info_booking_title: "Како да резервирате",
    info_booking_body:
      "Резервирајте онлајн, јавете се на +389 76 542 465, или пишете на zoeapartments.booking@gmail.com.",
    info_booking_times: "Влез: 14:00 · Излез: до 10:00",
    info_cancellation_title: "Политика за откажување",
    info_cancellation_body:
      "Бесплатно откажување до 24 часа пред пристигнување. Потоа се наплаќа 10% од депозитот.",
    info_included_title: "Вклучено во цената",
    info_included_body:
      "Wi-Fi, паркинг, пешкири и постелнина.",
    info_liability_title: "Одговорност",
    info_liability_body:
      "Не одговараме за доцнења или прекини предизвикани од настани надвор од наша контрола.",
    info_deposit_title: "Депозит",
    info_deposit_body:
      "Потребен е депозит за потврда. Остатокот се плаќа пред check-in.",
    map_section_title: "Локации на апартманите",
    map_section_subtitle: "Погледнете ги сите Zoe Apartments на мапата.",
    map_open: "Отвори на Google Maps",
  },
  sr: {
    zoe_apartments: "Zoe Apartmani",
    contact_us: "Kontakt",
    find_your_perfect_stay: "Pronađite vaš savršen boravak",
    comfortable_apartments_in_the_heart_of_the_city: "Komforne apartmane",
    book_now: "Rezervišite sada",
    luxury_living: "Luksuzan život",
    experience_premium_comfort_and_style: "Iskusite premium komfor i stil",
    modern_amenities: "Moderne pogodnosti",
    everything_you_need_for_a_perfect_vacation:
      "Sve što vi trebate za savršen letnji boravak",
    apartment_name_polychrono: "Apartman Polihrono",
    apartment_name_flogita: "Apartman Flogita",
    apartment_name_ohrid: "Apartman Ohrid",
    apartment_description_polychrono:
      "Moderan apartman, odlična lokacija na plaži i privatni parking.",
    apartment_description_flogita:
      "Moderan apartman u srcu grada, na 50m od plaže.",
    apartment_description_ohrid: "Apartman u srcu grada.",
    view_details: "Vidi detalje",
    contact_intro: "Stupite u kontakt sa nama!",
    your_name: "Vaše ime",
    email_address: "E-mail adresa",
    phone: "Telefon (Opciono)",
    subject: "Naslov",
    message_placeholder: "Vaša poruka ovde...",
    send_message: "Pošalji poruku",
    message_success_alert: "Poruka je poslata! Odgovorićemo vam uskoro.",
    description: "Opis",
    description_polychrono:
      "Dobrodošli u Zoe Apartman Polihrono. Smješten na samo 50 metara od mora, u samom centru Polihrona, ovaj potpuno novi apartman (izgrađen 2025) nudi moderan komfor i elegantan stil. Apartman je najsavremenije uređen i raspolaže dnevnim boravkom sa sofom-krevetom, potpuno opremljenom kuhinjom sa šankom, odvojenom spavaćom sobom, modernim kupatilom, terasom, televizorom sa svim kanalima i brzim internetom. Obezbeđeno je i privatno parking mesto, što je velika prednost tokom letnje sezone. Idealan izbor za goste koji žele udoban, stilski i bezbrižan odmor, na korak od plaže i svih gradskih sadržaja.",
    description_polychrono_second:
      "Sa svojim modernim enterijerom i odličnom pozicijom, Zoe Apartman nudi prijatan i bezbrižan boravak u srcu Polihrona.",
    description_flogita:
      "Dobrodošli u Zoe Apartman Flogita. Smješten na samo 50 metara od mora, u samom centru Flogite, ovaj potpuno novi apartman (izgrađen 2025) pruža moderan komfor i sofisticiran stil. Apartman je savremeno opremljen i sadrži dnevni boravak sa sofom-krevetom, potpuno opremljenu kuhinju sa šankom, odvojenu spavaću sobu, moderno kupatilo, terasu, televizor sa svim kanalima i ultra brzi Starlink internet. Savršen izbor za goste koji traže udoban, elegantan i opušten odmor, na korak od plaže i svih gradskih sadržaja.",
    description_flogita_second:
      "Uživajte u jutarnjoj kafi na privatnom balkonu, ili se opustite uveče uz čašu vina. Zoe Apartment je idealno mesto za parove ili male porodice koje žele da dožive najbolje od leta.",
    description_ohrid:
      "Uživajte u udobnom i opuštajućem boravku u potpuno opremljenom apartmanu od 50 m², savršeno smeštenom u centru Ohrida. Sve što vam je potrebno nalazi se na nekoliko koraka — restorani, kafići, prodavnice i prelepo jezero. Apartman ima moderan dnevni boravak sa potpuno opremljenom kuhinjom, udobnu spavaću sobu, funkcionalno kupatilo i privatnu terasu gde možete da se opustite uz kafu. Privatni parking je uključen, što boravak čini bezbrižnim.",
    description_ohrid_second:
      "Opremljen svim neophodnim za savršen odmor, ovaj apartman nudi udobnost, praktičnost i odličnu lokaciju — idealno za parove, porodice ili solo putnike koji žele da dožive najbolje od Ohrida.",
    amenities: "Sadržaji",
    amenity_beds:
      "1 veliki bračni krevet, 2 sofe (koje se mogu spojiti)",
    amenity_beds_flogita:
      "1 veliki bračni krevet, 1 sofa (koja se može napraviti kao bračni krevet)",
    amenity_kitchen: "Kuhinja",
    amenity_bathroom: "Privatno kupatilo",
    amenity_air_conditioning: "Klima uređaj",
    amenity_tv: "Flat-screen TV",
    amenity_wifi: "Besplatan WiFi",
    amenity_parking: "Privatni parking",
    amenity_balcony: "Balkon",
    starlink: "Starlink",
    apartment: "Apartman",
    apartment_price_polychrono: "Od 70€",
    apartment_price_flogita: "Od 70€",
    apartment_price_ohrid: "Od 50€",
    minimum_stay: "Minimum 7 noći",
    go_to_contact_me: "Kontaktirajte nas",
    map: "Mapa",
    check_polychrono: "Pogledaj apartman u Polihronu",
    check_flogita: "Pogledaj apartman u Flogiti",
    check_ohrid: "Pogledaj apartman u Ohridu",
    photo_gallery: "Galerija fotografija",
    photos_coming_soon: "Fotografije uskoro",
    guest_info_title: "Informacije za goste",
    guest_info_subtitle: "Korisni detalji za prijatan boravak u Zoe Apartments.",
    info_no_smoking_title: "Zabranjeno pušenje",
    info_no_smoking_body:
      "Pušenje nije dozvoljeno unutra. Koristite spoljne prostore.",
    info_pet_friendly_title: "Pet friendly",
    info_pet_friendly_body:
      "Kućni ljubimci su dobrodošli. Najavite dolazak unapred.",
    info_prices_title: "Cene",
    info_prices_body:
      "Cene su u EUR i potvrđuju se nakon rezervacije i depozita.",
    info_minors_title: "Maloletnici bez pratnje",
    info_minors_body: "Gosti mlađi od 18 godina moraju biti sa odraslom osobom.",
    info_booking_title: "Kako rezervisati",
    info_booking_body:
      "Rezervišite online, pozovite +389 76 542 465, ili pišite na zoeapartments.booking@gmail.com.",
    info_booking_times: "Ulaz: 14:00 · Izlaz: do 10:00",
    info_cancellation_title: "Politika otkazivanja",
    info_cancellation_body:
      "Besplatno otkazivanje do 24 sata pre dolaska. Nakon toga, naplaćuje se 10% depozita.",
    info_included_title: "Uključeno u cenu",
    info_included_body:
      "Wi-Fi, parking, peškiri i posteljina.",
    info_liability_title: "Odgovornost",
    info_liability_body:
      "Ne snosimo odgovornost za kašnjenja ili prekide izazvane događajima van naše kontrole.",
    info_deposit_title: "Depozit",
    info_deposit_body:
      "Depozit je potreban za potvrdu. Preostali iznos se plaća pre check-in-a.",
    map_section_title: "Lokacije apartmana",
    map_section_subtitle: "Pogledajte sve Zoe Apartments na mapi.",
    map_open: "Otvori u Google Maps",
  },
  el: {
    zoe_apartments: "Ζοε Αποταμιευτήρια",
    contact_us: "Επικοινωνία",
    find_your_perfect_stay: "Βρείτε το τέλειο διαμέρισμα για εσάς",
    comfortable_apartments_in_the_heart_of_the_city:
      "Ομορφα μοντέρνα διαμερίσματα",
    book_now: "Κάντε κράτηση",
    luxury_living: "Ζωντανή ζωή",
    experience_premium_comfort_and_style:
      "Ζήστε την καλύτερη εμπειρία σε ένα μοντέρνο διαμέρισμα",
    modern_amenities: "Μοντέρνες παροχές",
    everything_you_need_for_a_perfect_vacation:
      "Οτιδήποτε χρειάζεστε για μια τέλεια διακοπή",
    apartment_name_polychrono: "Διαμέρισμα Πολύχρονο",
    apartment_name_flogita: "Διαμέρισμα Φλογητά",
    apartment_name_ohrid: "Διαμέρισμα Οχρίδα",
    apartment_description_polychrono:
      "Μοντέρνο διαμέρισμα, εξαιρετική τοποθεσία δίπλα στην παραλία και ιδιωτικό πάρκινγκ.",
    apartment_description_flogita:
      "Μοντέρνο διαμέρισμα στην καρδιά της πόλης και 50μ από την παραλία.",
    apartment_description_ohrid: "Διαμέρισμα στην καρδιά της πόλης.",
    view_details: "Προβολή λεπτομερειών",
    contact_intro: "Ελάτε σε επαφή μαζί μας!",
    your_name: "Το όνομά σας",
    email_address: "Διεύθυνση Email",
    phone: "Τηλέφωνο (Προαιρετικό)",
    subject: "Θέμα",
    message_placeholder: "Το μήνυμά σας εδώ...",
    send_message: "Αποστολή μηνύματος",
    message_success_alert: "Το μήνυμα στάλθηκε! Θα επικοινωνήσουμε μαζί σας σύντομα.",
    description: "Περιγραφή",
    description_polychrono:
      "Καλώς ήρθατε στο Zoe Διαμέρισμα Πολύχρονο. Βρίσκεται σε απόσταση μόλις 50 μέτρων από τη θάλασσα, στο ίδιο το κέντρο του Πολύχρονου, αυτό το εντελώς νέο διαμέρισμα (κατασκευή 2025) προσφέρει μοντέρνη άνεση και κομψό στυλ. Το διαμέρισμα είναι πολύ μοντέρνα διακοσμημένο και διαθέτει σαλόνι με καναπέ-κρεβάτι, πλήρως εξοπλισμένη κουζίνα με πάγκο, ξεχωριστό υπνοδωμάτιο, μοντέρνο μπάνιο, βεράντα, τηλεόραση με όλα τα κανάλια και γρήγορο internet. Παρέχεται επίσης ιδιωτικό χώρο στάθμευσης, που είναι μεγάλο πλεονέκτημα κατά τη θερινή περίοδο. Ιδανική επιλογή για επισκέπτες που θέλουν άνετες, κομψές και ανέμελες διακοπές, βήματα από την παραλία και όλες τις αστικές ανέσεις.",
    description_polychrono_second:
      "Με το μοντέρνο εσωτερικό του και την εξαιρετική τοποθεσία του, το Zoe Διαμέρισμα προσφέρει μια ευχάριστη και ανέμελη διαμονή στην καρδιά του Πολύχρονου.",
    description_flogita:
      "Καλώς ήρθατε στο Zoe Διαμέρισμα Φλογητά. Βρίσκεται σε απόσταση μόλις 50 μέτρων από τη θάλασσα, στην καρδιά των Φλογητών, αυτό το εντελώς νέο διαμέρισμα (κατασκευή 2025) παρέχει σύγχρονη άνεση και εκλεπτυσμένο στυλ. Το διαμέρισμα είναι κομψά διακοσμημένο και περιλαμβάνει σαλόνι με καναπέ-κρεβάτι, πλήρως εξοπλισμένη κουζίνα με πάγκο, ξεχωριστό υπνοδωμάτιο, μοντέρνο μπάνιο, βεράντα, τηλεόραση με όλα τα κανάλια και υπερ-γρήγορο Starlink internet. Τέλεια επιλογή για επισκέπτες που αναζητούν άνετες, κομψές και χαλαρές διακοπές, βήματα από την παραλία και όλες τις αστικές ανέσεις.",
    description_flogita_second:
      "Απολαύστε τον πρωινό σας καφέ στο ιδιωτικό μπαλκόνι ή χαλαρώστε το βράδυ με ένα ποτήρι κρασί. Το Zoe Διαμέρισμα είναι το ιδανικό σημείο για ζευγάρια ή μικρές οικογένειες.",
    description_ohrid:
      "Απολαύστε μια άνετη και χαλαρωτική διαμονή σε αυτό το πλήρως εξοπλισμένο διαμέρισμα 50 m², που βρίσκεται στο κέντρο της Οχρίδας. Ό,τι χρειάζεστε είναι λίγα βήματα μακριά — εστιατόρια, καφέ, καταστήματα και η όμορφη λίμνη. Το διαμέρισμα διαθέτει μοντέρνο σαλόνι με πλήρως εξοπλισμένη κουζίνα, άνετο υπνοδωμάτιο, λειτουργικό μπάνιο και ιδιωτική βεράντα για να απολαύσετε τον καφέ σας. Περιλαμβάνεται ιδιωτικό πάρκινγκ, για μια ξέγνοιαστη διαμονή.",
    description_ohrid_second:
      "Εξοπλισμένο με όλα τα απαραίτητα για τέλειες διακοπές, αυτό το διαμέρισμα προσφέρει άνεση, πρακτικότητα και κορυφαία τοποθεσία — ιδανικό για ζευγάρια, οικογένειες ή solo ταξιδιώτες που θέλουν να ανακαλύψουν την Οχρίδα.",
    amenities: "Παροχές",
    amenity_beds:
      "1 μεγάλο διπλό κρεβάτι, 2 καναπέδες-κρεβάτια (που μπορούν να ενωθούν)",
    amenity_beds_flogita:
      "1 μεγάλο διπλό κρεβάτι, 1 καναπές-κρεβάτι (που μπορεί να γίνει διπλό)",
    amenity_kitchen: "Κουζίνα",
    amenity_bathroom: "Ιδιωτικό μπάνιο",
    amenity_air_conditioning: "Κλιματισμός",
    amenity_tv: "Τηλεόραση επίπεδης οθόνης",
    amenity_wifi: "Δωρεάν WiFi",
    amenity_parking: "Ιδιωτικό πάρκινγκ",
    amenity_balcony: "Μπαλκόνι",
    starlink: "Starlink",
    apartment: "Διαμέρισμα",
    apartment_price_polychrono: "Από 70€",
    apartment_price_flogita: "Από 70€",
    apartment_price_ohrid: "Από 50€",
    minimum_stay: "Ελάχιστη διαμονή 7 νυκτών",
    go_to_contact_me: "Επικοινωνήστε μαζί μας",
    map: "Χάρτης",
    check_polychrono: "Δείτε το διαμέρισμα στο Πολύχρονο",
    check_flogita: "Δείτε το διαμέρισμα στα Φλογητά",
    check_ohrid: "Δείτε το διαμέρισμα στην Οχρίδα",
    photo_gallery: "Γκαλερί φωτογραφιών",
    photos_coming_soon: "Οι φωτογραφίες θα προστεθούν σύντομα",
    guest_info_title: "Πληροφορίες για επισκέπτες",
    guest_info_subtitle:
      "Χρήσιμες λεπτομέρειες για μια άνετη διαμονή στο Zoe Apartments.",
    info_no_smoking_title: "Απαγορεύεται το κάπνισμα",
    info_no_smoking_body:
      "Το κάπνισμα δεν επιτρέπεται μέσα. Χρησιμοποιήστε τους εξωτερικούς χώρους.",
    info_pet_friendly_title: "Pet friendly",
    info_pet_friendly_body:
      "Τα κατοικίδια είναι ευπρόσδεκτα. Ενημερώστε μας εκ των προτέρων.",
    info_prices_title: "Τιμές",
    info_prices_body:
      "Οι τιμές είναι σε EUR και επιβεβαιώνονται μετά την κράτηση και την προκαταβολή.",
    info_minors_title: "Ασυνόδευτοι ανήλικοι",
    info_minors_body: "Επισκέπτες κάτω των 18 πρέπει να συνοδεύονται από ενήλικα.",
    info_booking_title: "Πώς να κάνετε κράτηση",
    info_booking_body:
      "Κάντε κράτηση online, καλέστε +389 76 542 465, ή στείλτε email στο zoeapartments.booking@gmail.com.",
    info_booking_times: "Check-in: 14:00 · Check-out: έως 10:00",
    info_cancellation_title: "Πολιτική ακύρωσης",
    info_cancellation_body:
      "Δωρεάν ακύρωση έως 24 ώρες πριν την άφιξη. Μετά, χρεώνεται 10% της προκαταβολής.",
    info_included_title: "Περιλαμβάνεται στην τιμή",
    info_included_body:
      "Wi-Fi, πάρκινγκ, πετσέτες και λευκά είδη.",
    info_liability_title: "Ευθύνη",
    info_liability_body:
      "Δεν φέρουμε ευθύνη για καθυστερήσεις ή διακοπές λόγω γεγονότων εκτός ελέγχου μας.",
    info_deposit_title: "Προκαταβολή",
    info_deposit_body:
      "Απαιτείται προκαταβολή για επιβεβαίωση. Το υπόλοιπο πληρώνεται πριν το check-in.",
    map_section_title: "Τοποθεσίες διαμερισμάτων",
    map_section_subtitle: "Δείτε όλα τα Zoe Apartments στον χάρτη.",
    map_open: "Άνοιγμα στο Google Maps",
  },
};

const APARTMENTS = {
  1: {
    nameKey: "apartment_name_polychrono",
    descriptionKey: "description_polychrono",
    descriptionSecondKey: "description_polychrono_second",
    priceKey: "apartment_price_polychrono",
    bedKey: "amenity_beds",
    wifiStarlink: false,
    heroImage: "images/polychrono/cover_polychronoo.jpg",
    galleryImages: [
      "images/polychrono/polychrono1.jpg",
      "images/polychrono/polychrono2.jpg",
      "images/polychrono/polychrono3.jpg",
      "images/polychrono/polychrono4.jpg",
      "images/polychrono/polychrono5.jpg",
      "images/polychrono/polychrono6.jpg",
      "images/polychrono/polychrono7.jpg",
      "images/polychrono/polychrono8.jpg",
      "images/polychrono/polychrono9.jpg",
      "images/polychrono/polychrono10.jpg",
      "images/polychrono/polychrono11.jpg",
      "images/polychrono/polychrono12.jpg",
      "images/polychrono/polychrono13.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/dir//40.0184516,23.5252944/@40.0185029,23.5259834,187m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  2: {
    nameKey: "apartment_name_flogita",
    descriptionKey: "description_flogita",
    descriptionSecondKey: "description_flogita_second",
    priceKey: "apartment_price_flogita",
    bedKey: "amenity_beds_flogita",
    wifiStarlink: true,
    heroImage: "images/flogita/flogita_landscape.jpg",
    galleryImages: [
      "images/flogita/flogita1.jpg",
      "images/flogita/flogita2.jpg",
      "images/flogita/flogita3.jpg",
      "images/flogita/flogita4.jpg",
      "images/flogita/flogita5.jpg",
      "images/flogita/flogita6.jpg",
      "images/flogita/flogita7.jpg",
      "images/flogita/flogita8.jpg",
    ],
    mapUrl:
      "https://www.google.com/maps/dir//40.2579665,23.2157239/@40.2579528,23.215694,200m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  3: {
    nameKey: "apartment_name_ohrid",
    descriptionKey: "description_ohrid",
    descriptionSecondKey: "description_ohrid_second",
    priceKey: "apartment_price_ohrid",
    bedKey: "amenity_beds_flogita",
    wifiStarlink: false,
    heroImage: "images/ohrid/ohrid.jpg",
    galleryImages: [],
    mapUrl:
      "https://www.google.com/maps/dir//41.1177006,20.803087/@41.1170882,20.8024202,201m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
  },
};

const MAP_LOCATIONS = [
  {
    id: 1,
    nameKey: "apartment_name_polychrono",
    lat: 40.0184516,
    lng: 23.5252944,
    mapUrl:
      "https://www.google.com/maps/dir//40.0184516,23.5252944/@40.0185029,23.5259834,187m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    nameKey: "apartment_name_flogita",
    lat: 40.2579665,
    lng: 23.2157239,
    mapUrl:
      "https://www.google.com/maps/dir//40.2579665,23.2157239/@40.2579528,23.215694,200m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    nameKey: "apartment_name_ohrid",
    lat: 41.1177006,
    lng: 20.803087,
    mapUrl:
      "https://www.google.com/maps/dir//41.1177006,20.803087/@41.1170882,20.8024202,201m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%221200%22%20height%3D%22800%22%20viewBox%3D%220%200%201200%20800%22%3E%3Crect%20width%3D%221200%22%20height%3D%22800%22%20fill%3D%22%23111827%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239CA3AF%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2236%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EImage%20coming%20soon%3C/text%3E%3C/svg%3E";

const lang = getLang();
document.documentElement.lang = lang;

applyI18n();
wireLanguageSwitcher();
wireNavLinks();
wireApartmentLinks();
wireMapLinks();
applyFallbackImages();
initPage();

function getLang() {
  const params = new URLSearchParams(window.location.search);
  const candidate = params.get("lang");
  return SUPPORTED_LANGS.includes(candidate) ? candidate : DEFAULT_LANG;
}

function t(key) {
  return (
    (translations[lang] && translations[lang][key]) ||
    (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key]) ||
    key
  );
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
}

function wireLanguageSwitcher() {
  const label = document.getElementById("language-label");
  if (label) {
    label.textContent = lang.toUpperCase();
  }

  document.querySelectorAll("[data-lang-option]").forEach((el) => {
    const optionLang = el.dataset.langOption;
    const nextUrl = updateUrlLang(optionLang);
    el.setAttribute("href", nextUrl);
    if (optionLang === lang) {
      el.classList.add("bg-blue-50", "font-bold", "text-blue-600");
    }
  });
}

function wireNavLinks() {
  document.querySelectorAll("[data-nav-link]").forEach((el) => {
    const target = el.dataset.navLink;
    el.setAttribute("href", buildUrl(target, { lang }));
  });
}

function wireApartmentLinks() {
  document.querySelectorAll("[data-apt-link]").forEach((el) => {
    const id = el.dataset.aptLink;
    el.setAttribute("href", buildUrl("apartment.html", { lang, id }));
  });
}

function buildUrl(path, params) {
  const url = new URL(path, window.location.href);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url.pathname + url.search;
}

function updateUrlLang(nextLang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", nextLang);
  return url.pathname + url.search;
}

function applyFallbackImages() {
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      img.src = PLACEHOLDER_IMAGE;
    });
  });
}

function initPage() {
  const page = document.body.dataset.page;
  if (page === "home") {
    initHomeSlider();
    initHomeMap();
  }
  if (page === "apartment") {
    renderApartment();
  }
  if (page === "contact") {
    wireContactForm();
  }
}

function wireMapLinks() {
  document.querySelectorAll("[data-map-link]").forEach((el) => {
    const id = Number(el.dataset.mapLink);
    const entry = MAP_LOCATIONS.find((item) => item.id === id);
    if (entry) {
      el.setAttribute("href", entry.mapUrl);
    }
  });
}

function initHomeSlider() {
  if (typeof Swiper === "undefined") {
    return;
  }
  const slider = document.querySelector(".mySwiper");
  if (!slider) {
    return;
  }
  // eslint-disable-next-line no-undef
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function initHomeMap() {
  if (typeof L === "undefined") {
    return;
  }
  const container = document.getElementById("apartments-map");
  if (!container) {
    return;
  }

  const map = L.map(container, { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const bounds = [];
  MAP_LOCATIONS.forEach((location) => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(t(location.nameKey));
    bounds.push([location.lat, location.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [40, 40] });
  }
}

function renderApartment() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id")) || 1;
  const data = APARTMENTS[id] || APARTMENTS[1];

  const titleEl = document.getElementById("apartment-title");
  const priceEl = document.getElementById("apartment-price");
  const descEl = document.getElementById("apartment-description");
  const descSecondEl = document.getElementById("apartment-description-second");
  const heroEl = document.getElementById("apartment-hero");
  const mapEl = document.getElementById("apartment-map");
  const bedEl = document.getElementById("amenity-beds");
  const wifiEl = document.getElementById("amenity-wifi");
  const parkingEl = document.getElementById("amenity-parking");
  const galleryContainer = document.getElementById("apartment-gallery");
  const galleryFallback = document.getElementById("gallery-fallback");

  if (titleEl) titleEl.textContent = t(data.nameKey);
  if (priceEl) priceEl.textContent = t(data.priceKey);
  if (descEl) descEl.textContent = t(data.descriptionKey);
  if (descSecondEl) descSecondEl.textContent = t(data.descriptionSecondKey);

  if (heroEl) {
    heroEl.src = data.heroImage;
    heroEl.addEventListener("error", () => {
      heroEl.src = PLACEHOLDER_IMAGE;
    });
  }

  if (mapEl) {
    mapEl.setAttribute("href", data.mapUrl);
  }

  if (bedEl) {
    bedEl.textContent = t(data.bedKey);
  }

  if (wifiEl) {
    const wifiText = data.wifiStarlink
      ? `${t("amenity_wifi")} (${t("starlink")})`
      : t("amenity_wifi");
    wifiEl.textContent = wifiText;
  }

  if (parkingEl) {
    if (id === 2) {
      parkingEl.closest("[data-amenity-row]").classList.add("hidden");
    } else {
      parkingEl.textContent = t("amenity_parking");
    }
  }

  updateApartmentNavLinks(id);
  updateHeadMeta(t(data.nameKey));
  renderGallery(data.galleryImages, galleryContainer, galleryFallback);

  if (typeof Swiper !== "undefined" && data.galleryImages.length) {
    // eslint-disable-next-line no-undef
    new Swiper(".interiorSwiper", {
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

function updateApartmentNavLinks(activeId) {
  document.querySelectorAll("[data-apt-nav]").forEach((el) => {
    const id = Number(el.dataset.aptNav);
    el.setAttribute("href", buildUrl("apartment.html", { lang, id }));
    if (id === activeId) {
      el.classList.add("hidden");
    }
  });
}

function updateHeadMeta(title) {
  const titleEl = document.querySelector("title");
  if (titleEl) {
    titleEl.textContent = `${title} - Zoe Apartments`;
  }
  const metaDescription = document.querySelector(
    'meta[name="description"]'
  );
  if (metaDescription) {
    metaDescription.setAttribute("content", title);
  }
}

function renderGallery(images, container, fallback) {
  if (!container || !fallback) {
    return;
  }
  if (!images.length) {
    container.classList.add("hidden");
    fallback.classList.remove("hidden");
    fallback.textContent = t("photos_coming_soon");
    return;
  }
  images.forEach((src) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Apartment photo";
    img.addEventListener("error", () => {
      img.src = PLACEHOLDER_IMAGE;
    });
    img.className = "w-full h-full object-contain";
    slide.appendChild(img);
    container.appendChild(slide);
  });
}

function wireContactForm() {
  const nextInput = document.getElementById("form-next");
  const langInput = document.getElementById("form-lang");
  if (langInput) {
    langInput.value = lang;
  }
  if (nextInput) {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", lang);
    params.set("submitted", "1");
    const base = window.location.origin === "null" ? "" : window.location.origin;
    nextInput.value = `${base}${window.location.pathname}?${params.toString()}`;
  }

  const success = document.getElementById("form-success");
  const submitted = new URLSearchParams(window.location.search).get("submitted");
  if (success && submitted === "1") {
    success.classList.remove("hidden");
  }
}
