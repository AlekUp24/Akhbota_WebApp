
// Cookies

  document.addEventListener('DOMContentLoaded', function () {
    var cookiesPopup = document.getElementById('cookies-popup');
    var acceptCookiesButton = document.getElementById('accept-cookies');

    // Show the cookies popup
    setTimeout(function () {
      cookiesPopup.classList.add('show');
    }, 1000); // Show after 1 second

    // Accept cookies and hide the popup
    acceptCookiesButton.addEventListener('click', function () {
      cookiesPopup.classList.remove('show');
      // Optionally, you can set a cookie or localStorage item here to remember the user's choice
      localStorage.setItem('cookiesAccepted', 'true');
    });

    // Check if the user has already accepted the cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      cookiesPopup.style.display = 'none';
    }
  });

  
// Gallery

  document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('gallery');
    const images = target.getElementsByTagName('img');

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    // Create zoomed image container
    const zoomedImage = document.createElement('img');
    zoomedImage.classList.add('zoomed-image');
    modalOverlay.appendChild(zoomedImage);

    // Append modal overlay to body
    document.body.appendChild(modalOverlay);

    // Add click event to each image in the gallery
    for (let img of images) {
      img.addEventListener('click', function () {
        // Set the source of the zoomed image to the clicked image's source
        zoomedImage.src = this.src;
        // Show the modal overlay
        modalOverlay.style.display = 'flex';
      });
    }

    // Add click event to the modal overlay to close it
    modalOverlay.addEventListener('click', function () {
      this.style.display = 'none';
    });
  });

// Blog

  document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('blog');
    const images = target.getElementsByTagName('img');

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modal-overlay');

    // Create zoomed image container
    const zoomedImage = document.createElement('img');
    zoomedImage.classList.add('zoomed-image');
    modalOverlay.appendChild(zoomedImage);

    // Append modal overlay to body
    document.body.appendChild(modalOverlay);

    // Add click event to each image in the gallery
    for (let img of images) {
      img.addEventListener('click', function () {
        // Set the source of the zoomed image to the clicked image's source
        zoomedImage.src = this.src;
        // Show the modal overlay
        modalOverlay.style.display = 'flex';
      });
    }

    // Add click event to the modal overlay to close it
    modalOverlay.addEventListener('click', function () {
      this.style.display = 'none';
    });
  });

// Kennel

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('kennel');
  const images = target.getElementsByTagName('img');

  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');

  // Create zoomed image container
  const zoomedImage = document.createElement('img');
  zoomedImage.classList.add('zoomed-image');
  modalOverlay.appendChild(zoomedImage);

  // Append modal overlay to body
  document.body.appendChild(modalOverlay);

  // Add click event to each image in the gallery
  for (let img of images) {
    img.addEventListener('click', function () {
      // Set the source of the zoomed image to the clicked image's source
      zoomedImage.src = this.src;
      // Show the modal overlay
      modalOverlay.style.display = 'flex';
    });
  }

  // Add click event to the modal overlay to close it
  modalOverlay.addEventListener('click', function () {
    this.style.display = 'none';
  });
});


// Polish - English


  const translations = {
    pl: {
      toggleButton: "EN",

      about_title: "O Nas",
      about_description: "AKHBOTA (FCI) to hodowla psów rasy bolończyk i rosyjska bolonka kolorowa, zarejestrowana w Związku Kynologicznym w Polsce oraz w Międzynarodowej Organizacji Kynologicznej (FCI).",
      about_description_2: "\"Nikt nie zrozumie w pełni znaczenia miłości jeśli nie miał psa. Pies okaże ci więcej uczucia jednym machnięciem ogona niż możesz zebrać przez całe życie w uściskach rąk.\" (Gene Hill)",
      about_fb_link: "Zapraszamy do śledzenia nas na:",
      contact_title: "Zapraszamy do kontaktu:",
      gallery_title: "Galeria",
      wyroznienie_title: "Co Nas Wyróżnia",
      certificates_title: "Nagrody i Certyfikaty",

      nav_about: "O nas",
      nav_hodowla: "Nasze Psy",
      nav_hodowla_1: "Szczenięta",
      nav_hodowla_2: "Bolończyk",
      nav_hodowla_3: "Rosyjska Bolonka Kolorowa",
      nav_nasze_psy: "Wszyscy Podopieczni",
      nav_puppies: "Szczenięta",
      nav_gallery: "Galeria",
      nav_blog: "Blog",
      nav_contact: "Kontakt",

      hodowla_description_1: "Szczeniak to młody pies. Niektóre szczenięta mogą ważyć 1–1,5 kg, podczas gdy większe mogą ważyć do 7–11 kg. Wszystkie szczenięta wykazują pierwotną zmienność, a zdrowe szczenięta szybko rosną po urodzeniu.",
      hodowla_description_2: "Bolończyk to piesek niewielkich rozmiarów o białej szacie należący do ras towarzyszących. Jest łatwy w ułożeniu, szybko się uczy i obdarza swojego człowieka czułością oraz przywiązaniem. Istotną informacją jest to, że rasa ta nie zrzuca włosa. Bolończyk odpowiedni jest dla rodzin z dziećmi.",
      
      hodowla_description_3: "Rosyjska bolonka kolorowa to wciąż mało znana rasa w Polsce, ale w krajach Skandynawskich, w Niemczech, Czechach bije rekordy popularności. Zalety rasy:",
      hodowla_description_3_1:"małe pieski 3-4 kg, wysokość w kłębie do 26 cm, więc mogą podróżować w kabinie samolotowej",
      hodowla_description_3_2:"aksamitna szata, nie linieją, nie mają obfitego podszerstka (do wyczesania w fazie zmiany włosa szczenięcego)",
      hodowla_description_3_3:"wesołe, radosne, otwarte do ludzi, akceptują inne zwierzęta",
      hodowla_description_3_4:"cieszą się dobrym zdrowiem",
      hodowla_description_3_5:"odpowiednie zarówno dla domatorów jak i ludzi aktywnych – dopasowują się do trybu życia swojego opiekuna",
      hodowla_description_3_6:"długowieczne, żyją nawet do 15-17 lat",
      hodowla_description_3_7:"inteligentne, sprytne, empatyczne, czułe.",

      badge_description_1: "Psy wystawowe",
      badge_description_2: "Certyfikowana Hodowla",
      badge_description_3: "Nasze psy zdobyły wiele wyróżnień",
      badge_description_4: "Dbamy o regularną kontrolę zdrowia naszych psów",
      
      // navbar
      Bolończyk: "Bolończyk",
      "Rosyjska Bolonka Kolorowa": "Rosyjska Bolonka Kolorowa",

      // gallery
      all: "Wszystkie",
      wystawy: "Wystawy",
      codzienne: "Życie Codzienne",
      szczenieta: "Szczenięta",

      // kennel
      sex_info: "Płeć:",
      sex_female: "Suka",
      sex_male: "Pies",
      additional_info: "Dodatkowe informacje:",
      date_of_birth_info: "Data urodzenia:",
      awards_info: "Nagrody:",
      health_info: "Zdrowie:",  

      // puppies
      puppies_title: "Nowy miot",
      puppies_article_1: "Oczekujemy szczeniąt rasy ",
      puppies_article_2: " w okresie ",
      puppies_question:"Czego oczekujemy od Ciebie, jeśli kupisz od nas szczeniaczka?",
      puppies_text:"Oczekujemy, że kupisz towarzysza życia, którego pokochasz bezwarunkowo. To, że lubimy wystawiać nasze psy, nie oznacza, że oczekujemy, iż podzielasz nasze zainteresowania. Najważniejsze dla nas jest to, żeby nasze szczenięta miały wspaniałe życie domowe! Wystawy psów nie są dla każdego właściciela, ani dla każdego psa. Ale jeśli jesteś zainteresowany wystawami, daj nam znać, a my postaramy się znaleźć dla Ciebie najlepsze szczenię do tego celu. Czy wiesz, co łączy wszystkie nasze szczenięta? Uwielbiają spędzać z Tobą czas, zarówno w ogrodzie, jak i na kanapie przed telewizorem.",

      // year periods
      autumn: " jesień ",
      winter: " zima ",
      spring: " wiosna ",
      summer: " lato ",

      cookies: "Ta strona używa plików cookies w celu zapewnienia lepszej jakości usług. Korzystając ze strony, zgadzasz się na użycie plików cookies.",
    
    },
    
    en: {
      toggleButton: "PL",

      about_title: "About Us",
      about_description: "AKHBOTA (FCI) is a kennel specializing in Bolognese dogs and Russian Colored Bolonka, registered with the Polish Kennel Club and The Fédération Cynologique (FCI).",
      about_description_2: "\"No one can fully understand the meaning of love unless he's owned a dog. A dog can show you more honest affection with a flick of his tail than a man can gather through a lifetime of handshakes.\" (Gene Hill)",
      about_fb_link: "Make sure to follow us:",
      contact_title: "Contact us:",
      gallery_title: "Gallery",
      wyroznienie_title: "Why Us",
      certificates_title: "Awards and Certificates",
      
      nav_about: "About Us",
      nav_hodowla: "Kennel",
      nav_hodowla_1: "Puppies",
      nav_hodowla_2: "Bolognese",
      nav_hodowla_3: "Russian Colorful Bolognese",
      nav_nasze_psy: "Our Dogs",
      nav_puppies: "Puppies",
      nav_gallery: "Gallery",
      nav_blog: "Blog",
      nav_contact: "Contact",

      hodowla_description_1: "A puppy is a young dog. Some puppies can weigh 1-1.5 kg, while larger ones can weigh up to 7-11 kg. All puppies show primary variability, and healthy puppies grow rapidly after birth.",
      hodowla_description_2: "The Bolognese is a small-sized dog with a white coat, belonging to companion breeds. It is easy to train, learns quickly, and shows affection and loyalty to its owner. An important fact is that this breed does not shed its hair. The Bolognese is well-suited for families with children.",
      
      hodowla_description_3: "The Russian Colored Bolonka is still a relatively unknown breed in Poland, but in Scandinavian countries, Germany, and the Czech Republic, it is breaking popularity records. Advantages of the breed:",
      hodowla_description_3_1:"small dogs, 3-4 kg, height at the withers up to 26 cm, so they can travel in the airplane cabin",
      hodowla_description_3_2:"velvety coat, they do not shed, do not have a thick undercoat (only need brushing during the puppy coat change phase)",
      hodowla_description_3_3:"cheerful, happy, open to people, accepting of other animals",
      hodowla_description_3_4:"enjoy good health",
      hodowla_description_3_5:"suitable for both homebodies and active people – they adapt to their owner’s lifestyle",
      hodowla_description_3_6:"long-lived, can live up to 15-17 years",
      hodowla_description_3_7:"intelligent, clever, empathetic, affectionate",
      
      
      badge_description_1: "Show dogs",
      badge_description_2: "Certified Kennel",
      badge_description_3: "Our dogs have won many awards",
      badge_description_4: "We ensure regular health checks for our dogs",
      
      // navbar
      Bolończyk: "Bolognese",
      "Rosyjska Bolonka Kolorowa": "Russian Colorful Bolognese",

      // gallery
      all: "All",
      wystawy: "Shows",
      codzienne: "Everyday Life",
      szczenieta: "Puppies",

      // kennel
      sex_info: "Sex:",
      sex_female: "Female",
      sex_male: "Male",
      additional_info: "Additional information:",
      date_of_birth_info: "Date of birth:",
      awards_info: "Awards:",
      health_info: "Health:",

      // puppies
      puppies_title: "New litter",
      puppies_article_1: "We are expecting ",
      puppies_article_2: " puppies during the period of ",
      puppies_question:"What do we expect from you if you buy a puppy from us?",
      puppies_text:"We expect you to find a lifelong companion whom you'll love unconditionally. Just because we enjoy showing our dogs doesn’t mean we expect you to share the same interest. What matters most to us is that our puppies have wonderful homes! Dog shows aren’t for every owner, nor for every dog. But if you are interested in them, let us know, and we’ll do our best to find the perfect puppy for you. Do you know what all our puppies have in common? They love spending time with you, whether it's in the garden or on the couch in front of the TV.",

      // year periods
      autumn: " autumn ",
      winter: " winter ",
      spring: " spring ",
      summer: " summer ",

      
      cookies: "This site uses cookies to provide better quality services. By using the site, you agree to the use of cookies.",

    },

  };



let currentLanguage = localStorage.getItem('language') || 'pl'; // Pobierz język z localStorage lub ustaw domyślnie 'pl'

function applyLanguage(language) {
  const elements = document.querySelectorAll('[data-lang-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    element.textContent = translations[language][key];
  });

  // Aktualizuj tekst przycisku
  document.querySelector('.toggle-button-translate').textContent = translations[language].toggleButton;

  // Ukryj przycisk bloga, jeśli język to 'en'
  const blogButton = document.getElementById('blog_button');
  if (language === 'en') {
    blogButton.style.display = 'none'; // Ukryj przycisk w EN
  } else {
    blogButton.style.display = 'block'; // Pokaż przycisk w PL
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl'; // Przełącz na drugi język
  localStorage.setItem('language', currentLanguage); // Zapisz aktualny język w localStorage
  applyLanguage(currentLanguage); // Zastosuj tłumaczenie do strony
}

// Uruchom funkcję po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLanguage); // Zastosuj język na podstawie zapisanego w localStorage
});

// Obsługa zdarzenia kliknięcia przycisku zmiany języka
document.querySelector('.toggle-button-translate').addEventListener('click', toggleLanguage);
