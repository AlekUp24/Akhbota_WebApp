
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
    const gallery = document.getElementById('galeria');
    const images = gallery.getElementsByTagName('img');

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

// Hodowla - change opacity

  document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('hodowla');
    const images = gallery.getElementsByTagName('img');
  
    // Add click event to each image in the gallery
    for (let img of images) {
      img.addEventListener('click', function () {
        // Toggle the 'toggled-opacity' class on click
        this.classList.toggle('toggled-opacity');
      });
    }
  });


// Polish - English


  const translations = {
    pl: {
      toggleButton: "EN",

      about_title: "O Nas",
      about_description: "Witamy na stronie hodowli psów rasy maltańczyk i bolończyk- Akhbota zarejestrowanej w Związku Kynologicznym w Polsce i Międzynarodowej Organizacji Kynologicznej FCI.",
      about_fb_link: "Po więcej aktualności zapraszamy do śledzenia naszego profilu ",
      contact_title: "Zapraszamy do kontaktu:",
      gallery_title: "Galeria",
      wyroznienie_title: "Co Nas Wyróżnia",
      certificates_title: "Nagrody i Certyfikaty",

      nav_about: "O nas",
      nav_hodowla: "Hodowla",
      nav_hodowla_1: "Szczenięta",
      nav_hodowla_2: "Bolończyk",
      nav_hodowla_3: "Rosyjska Bolonka Kolorowa",
      nav_gallery: "Galeria",
      nav_contact: "Kontakt",

      hodowla_description_1: "Szczeniak to młody pies. Niektóre szczenięta mogą ważyć 1–1,5 kg, podczas gdy większe mogą ważyć do 7–11 kg. Wszystkie szczenięta wykazują pierwotną zmienność, a zdrowe szczenięta szybko rosną po urodzeniu.",
      hodowla_description_2: "Bolończyk to jedna z ras psów, należąca do grupy psów do towarzystwa, zaklasyfikowana do sekcji biszonów i ras pokrewnych. Typ lisowaty. Nie podlega próbom pracy.",
      hodowla_description_3: "Rosyjska Tsvetnaya Bolonka, znana również jako Bolonka Zwetna w Niemczech lub znana po prostu jako Bolonka, to rzadka rasa zabawek typu Bichon, opracowana w Moskwie i Sankt Petersburgu w Rosji, od przodków mniejszych psów, takich jak Bichon Frise , Pudel Toy, Shih Tzu, Pekińczyk i Francuski Bolognese.",
      
      badge_description_1: "Psy wystawowe",
      badge_description_2: "Certyfikowana Hodowla",
      badge_description_3: "Nasze psy zdobyły wiele wyróżnień",
      badge_description_4: "Dbamy o regularną kontrolę zdrowia naszych psów",
    
    },
    
    en: {
      toggleButton: "PL",

      about_title: "About Us",
      about_description: "Welcome to the website of the breeding of Maltese and Bolognese dogs - Akhbota registered to the Cynological Association in Poland and the International Cynological Organization FCI.",
      about_fb_link: "For more news, please follow our ",
      contact_title: "Contact us:",
      gallery_title: "Gallery",
      wyroznienie_title: "Why Us",
      certificates_title: "Awards and Certificates",
      
      nav_about: "About Us",
      nav_hodowla: "Kennel",
      nav_hodowla_1: "Pups",
      nav_hodowla_2: "Bolognese",
      nav_hodowla_3: "Russian Colorful Bolognese",
      nav_gallery: "Gallery",
      nav_contact: "Contact",

      hodowla_description_1: "A puppy is a young dog. Some puppies can weigh 1-1.5 kg, while larger ones can weigh up to 7-11 kg. All puppies show primary variability, and healthy puppies grow rapidly after birth.",
      hodowla_description_2: "The Bolognese is one of the dog breeds belonging to the group of companion dogs, classified into the bichon and related breeds section. Fox-like type. Not subject to work tests.",
      hodowla_description_3: "The Russian Tsvetnaya Bolonka, also known as Bolonka Zwetna in Germany or known simply as Bolonka, is a rare Bichon-type toy breed developed in Moscow and Saint Petersburg, Russia, from ancestors of smaller dogs such as the Bichon Frize, Toy Poodle, Shih Tzu, Pekingese and French Bolognese.",
      
      badge_description_1: "Show dogs",
      badge_description_2: "Certified Kennel",
      badge_description_3: "Our dogs have won many awards",
      badge_description_4: "We ensure regular health checks for our dogs",

    },

  };



  let currentLanguage = 'pl';

  function toggleLanguage() {
    currentLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-lang-key');
      element.textContent = translations[currentLanguage][key];
    });

    // Update the button text
    document.querySelector('.toggle-button-translate').textContent = translations[currentLanguage].toggleButton;
  }

  // Run a function on start
  document.addEventListener('DOMContentLoaded', () => {
    toggleLanguage('en');
    toggleLanguage('pl'); // Optional: Call toggleLanguage if you want to switch language on load
  });