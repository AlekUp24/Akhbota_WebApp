
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
      about_description: "HODOWLA PSÓW RASY BOLOŃCZYK I ROSYJSKA BOLONKA KOLOROWA ZAREJESTROWANA W ZWIĄZKU KYNOLOGICZNYM W POLSCE ORAZ W MIĘDZYNARODOWEJ ORGANIZACJI KYNOLOGICZNEJ (FCI).",
      about_description_2: "Nasze psy są członkami rodziny, towarzysząc nam w codziennym życiu.",
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
      hodowla_description_2: "Bolończyk to jedna z ras psów, należąca do grupy psów do towarzystwa, zaklasyfikowana do sekcji biszonów i ras pokrewnych. Typ lisowaty. Nie podlega próbom pracy.",
      hodowla_description_3: "Rosyjska Tsvetnaya Bolonka, znana również jako Bolonka Zwetna w Niemczech lub znana po prostu jako Bolonka, to rzadka rasa zabawek typu Bichon, opracowana w Moskwie i Sankt Petersburgu w Rosji, od przodków mniejszych psów, takich jak Bichon Frise , Pudel Toy, Shih Tzu, Pekińczyk i Francuski Bolognese.",
      
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
      additional_info: "Dodatkowe informacje:",
      date_of_birth_info: "Data urodzenia:",
      awards_info: "Nagrody:",
      health_info: "Zdrowie:",  

      // puppies
      puppies_title: "Nowy miot",
      puppies_article: "Oczekujemy szczeniąt rasy Bolończyk i Rosyjska Bolonka Kolorowa w okresie ",
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
      about_description: "Bolognese and Russkaya Tsvetnaya Bolonka dog breed registered in The Polish Kennel Club and The Federation Cynologique Internationale (FCI).",
      about_description_2: "Our dogs accompany us in daily life as part of our family.",
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
      hodowla_description_2: "The Bolognese is one of the dog breeds belonging to the group of companion dogs, classified into the bichon and related breeds section. Fox-like type. Not subject to work tests.",
      hodowla_description_3: "The Russian Tsvetnaya Bolonka, also known as Bolonka Zwetna in Germany or known simply as Bolonka, is a rare Bichon-type toy breed developed in Moscow and Saint Petersburg, Russia, from ancestors of smaller dogs such as the Bichon Frize, Toy Poodle, Shih Tzu, Pekingese and French Bolognese.",
            
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
      additional_info: "Additional information:",
      date_of_birth_info: "Date of birth:",
      awards_info: "Awards:",
      health_info: "Health:",

      // puppies
      puppies_title: "New litter",
      puppies_article: "We are expecting Bolognese and Russian Colored Bolonka puppies during the period of",
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
