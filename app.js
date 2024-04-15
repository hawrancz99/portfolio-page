// text for html in english and czech
const LanguageList = {
  "EN": "ENG",
  "CZ": "CZE"
};

const dynamicClosedBtnTextCZ = "Zobrazit více z mé práce";
const dynamicClosedBtnTextEN = "View more of my work";
const dynamicOpenedBtnTextCZ = "Méně";
const dynamicOpenedBtnTextEN = "Show less";

// languages Objects
const WORDS_EN = {
  "text1": "My work",
  "text2": "About me",
  "text3": "Contact",
  "text4": "Welcome to my portfolio page. My name is Lukáš Vávra and I build web applications and websites. If you are interested in working with me, please ",
  "text5": "contact me.",
  "text6": "Examples of my work",
  "text7": "Office Maps is an internal web application for interactive office maps 🗺️ and desk reservation system 🪑. I developed this application as my bachelor's thesis 🎓 for Siemens Ltd. offices in Czech Republic. It's proprietary software, but you can find more information about the app in the ",
  "text8": "thesis.",
  "text9": "If you want to know more about this project, please contact me. Thanks :)",
  "text10": "Visit website",
  "text11": "Personal website for teacher of German language.",
  "text12": "G-SHOP is e-shop with graphics cards. This e-shop was made as semestral project for Web applications university class. It uses for example Facebook OAuth for user login.",
  "text13": dynamicClosedBtnTextEN, /* POKUD ZMĚNÍŠ TENHLE TEXT, ZMĚN TO I V LOGICE TLAČÍTKA CO ROZBALUJE/SBALUJE DIV A V LOGICE PŘEKLADU, JE TO NA TEXT NAVÁZANÝ*/
  "text14": "Website for a personal fitness trainer. It's a Wordpress site with optimized SEO.",
  "text15": "Roztoky beer festival",
  "text16": "Website for a beer festival in Roztoky u Křivoklátu.",
  "text17": "Website for displaying player and match statistics from Dota 2 MOBA game. It uses OpenDota API to fetch data. It was created as semestral project for Web technologies class at university.",
  "text18": "Website for construction company in Germany. This is my first webiste that I've created :) ",
  "text19": "My resume ",
  "text20": "Hey there! 👋 I am a web developer with more experience and focus on the frontend, but I won't get lost in backend rivers as well 🛶. I kicked off my web development journey at 17 during high school, crafting my first website and getting hooked on the dynamic world of coding. Bringing ideas to life through lines of code is my jam, and the constant learning in this field keeps my passion alive. If you want to know more about me, please visit my LinkedIn profile or check out my resume.",
  "text25": "My main tech stack",
  "text26": "years",
  "text27": "Other technologies I can work with",
  "text28": "responsive design",
  "text29": "GitHub repository",
  "text30": "Fit.me is an React web application created at university class \"Agile development of web application\". It was a team project and I worked mostly on frontend and desings but also on backend, which uses Node.js, GraphQL and MySQL database. This application allows you to filter and search for sport grounds, trainers and sport events in your area thanks to Google Maps API. It's also a platform for sport grounds owners and trainers to present their services and offers. Users can sign up for sport events created by trainers and gyms.",
  "text31": "For my master's thesis project, I developed an IT compliance management system for Siemens. It guides application managers through the complex IT compliance landscape and processes, helping them make their applications IT compliant. It also provides management with clear and transparent oversight of the current state of IT compliance. As a result, this system addresses the company-wide challenge of managing IT compliance, saving time ⌛, costs 💵, and frustration 😡.",
  "text32": "Wedding website",
  "text33": "A wedding website with optimized loading of large high quality images for quicker loading times and better UX.",
  "text34": "A company page of the cable distribution protection supplier"
};

const WORDS_CZ = {
  "text1": "Moje práce",
  "text2": "O mně",
  "text3": "Kontakt",
  "text4": "Vítejte na mé portfolio stránce. Jmenuji se Lukáš Vávra a tvořím webové aplikace a stránky. Pokud máte zájem o tvorbu webových stránek, aplikace, či pro mě máte pracovní nabídku, prosím",
  "text5": "kontaktuje mě.",
  "text6": "Příklady mé práce",
  "text7": "Office Maps je interní webová aplikace pro interaktivní kancelářské mapy 🗺️  a rezervační systém pracovních míst 🪑. Tuto aplikaci jsem vyvinul jako součást své bakalářské práce 🎓 pro kanceláře společnosti Siemens, s.r.o. v České republice. Jedná se o proprietární software, avšak další informace o aplikaci najdete v mé  ",
  "text8": " bakalářské práci.",
  "text9": "Pokud byste chtěli vědět více o tomto projektu, prosím kontaktujte mě. Děkuji :)",
  "text10": "Navštívit stránku",
  "text11": "Osobní stránky pro lektorku německého jazyka.",
  "text12": "G-SHOP je e-shop s grafickými kartami. Tento e-shop byl vytvořen jako semestrální projekt pro vysokoškolský předmět webové aplikace. Pro přihlášení uživatele používá Facebook OAuth.",
  "text13": dynamicClosedBtnTextCZ, /* POKUD ZMĚNÍŠ TENHLE TEXT, ZMĚN TO I V LOGICE TLAČÍTKA CO ROZBALUJE/SBALUJE DIV A V LOGICE PŘEKLADU, JE TO NA TEXT NAVÁZANÝ*/
  "text14": "Webové stránky pro soukromého fitness trenéra. Jedná se o Wordpress web s optimalizovaným SEO.",
  "text15": "Roztocké pivní slavnosti",
  "text16": "Informativní webovky pro pivní festival v Roztokách u Křivoklátu.",
  "text17": "Webová aplikace pro zobrazení statistik hráčů a zápasů z počítačové MOBA hry Dota 2. K načítání dat používá OpenDota API. Byla vytvořena jako semestrální projekt pro vysokoškolský předmět webové technologie.",
  "text18": "Stránky pro německou stavební firmu. Toto jsou mé úplně první webovky, které jsem kdy vytvořil :).",
  "text19": "Můj životopis ",
  "text20": "Ahoj! 👋 Jsem webový vývojář s většími zkušenostmi a zaměřením na frontend, ale neztratím se ani v backendových vodách 🛶. Svou cestu webového vývojáře jsem odstartoval v 17 letech během střední školy, kdy jsem vytvořil svůj první web a propadl dynamickému světu kódování. Přivádění nápadů k životu prostřednictvím řádků kódu je moje záliba a neustálé učení se v tomto oboru udržuje moji vášeň naživu. Pokud se o mně chcete dozvědět více, navštivte můj profil na Linkedin nebo se podívejte na můj životopis.",
  "text25": "Nejvíce zkušeností mám s",
  "text26": "roky",
  "text27": "Pracoval jsem také s",
  "text28": "responzivní design",
  "text29": "GitHub repozitář",
  "text30": "Fit.me je webová React aplikace vytvořená v rámci předmětu \"Agilní projekt vývoje webové aplikace\" na vysoké škole. Na aplikaci jsme pracovali v týmu a já jsem pracoval především na frontendu, designu ale také na backendu, který je napsán v Node.js a používá GraphQL a MySQL databázi. V aplikaci můžete hledat a filtrovat sportoviště, trenéry a sportovní události ve vašem okolí díky Google Maps API. Aplikace slouží také jako platforma, kde můžou sportoviště a trenéři prezentovat svoje služby. Uživatelé se pak můžou přihlásit na události vytvořené sportovišti nebo trenéry.",
  "text31": "V rámci mé diplpmové práce jsem vyvinul systém pro správu IT compliance vyvíjených aplikací ve společnosti Siemens. Pomáhá správcům aplikací jednodušeji naplňovat složité požadavky plynoucí z IT compliance nařízení a procesů. Zároveň poskytuje manažerům transapretní přehled o aktuálním stavu IT compliance. Výsledkem je, že tento systém řeší celofiremní problém s IT compliance, šetří čas ⌛, náklady 💵 a frustraci 😡.",
  "text32": "Svatební stránka",
  "text33": "Svatební stránka s optimalizací načítání velkých obrázků pro rychlejší načítání a lepší UX.",
  "text34": "Web dodavatele komplexního systému ochrany kabelových rozvodů."
};

const userLang = navigator.language || navigator.userLanguage;
let currentlySelectedUserLang;

function initialize() {
  var $dropdown = $("#country_select");
  $.each(LanguageList, function (key, value) {
    $dropdown.
      append($("<option/>").
        val(key).
        text(value));
  });

  if (userLang == 'cs') {
    loadsLanguage('CZ', 'initialLoad');
    $("#country_select").val("CZ");
  } else {
    loadsLanguage('EN', 'initialLoad');
    $("#country_select").val("EN");
  }
}
function loadsLanguage(lang, type) {
  currentlySelectedUserLang = lang;
  /*fills all the span tags with class=lang pattern*/
  $('span[class^="lang"]').each(function () {
    const langVar = (this.className).replace('lang-', '');
    let langType = {};
    if (lang == 'EN') {
      langType = WORDS_EN;
    } else if (lang == 'CZ') {
      langType = WORDS_CZ;
    }
    const text = langType[langVar];
    $(this).text(text);
  });
  if (lang == 'EN') {
    $('.landing-text').text(optionsEN.strings[0]);
  } else if (lang == 'CZ') {
    $('.landing-text').text(optionsCZ.strings[0]);
  }
  type != 'initialLoad' ? translateDynamicText() : null;
}

const translateDynamicText = () => {
  // for translating text that is not defined in WORDS_EN/CZ,
  const text = $('.collapsible').text();
  if (currentlySelectedUserLang === 'EN') {
    switch (text) {
      case dynamicOpenedBtnTextEN:
        $('.collapsible').text(dynamicOpenedBtnTextEN);
        break;
      case dynamicOpenedBtnTextCZ:
        $('.collapsible').text(dynamicOpenedBtnTextEN);
        break;
      case dynamicClosedBtnTextCZ:
        $('.collapsible').text(dynamicClosedBtnTextEN);
        break;
      case dynamicClosedBtnTextEN:
        $('.collapsible').text(dynamicClosedBtnTextEN);
        break;
    }
  } else if (currentlySelectedUserLang === 'CZ') {
    switch (text) {
      case dynamicOpenedBtnTextEN:
        $('.collapsible').text(dynamicOpenedBtnTextCZ);
        break;
      case dynamicOpenedBtnTextCZ:
        $('.collapsible').text(dynamicOpenedBtnTextCZ);
        break;
      case dynamicClosedBtnTextCZ:
        $('.collapsible').text(dynamicClosedBtnTextCZ);
        break;
      case dynamicClosedBtnTextEN:
        $('.collapsible').text(dynamicClosedBtnTextCZ);
        break;
    }
  }
}

// typed.js writing animation
const optionsEN = {
  strings: ['Hi, I am Lukas, a web developer.'],
  typeSpeed: 90,
  loop: false,
  showCursor: true,
  onBegin: function () {
    /* disable language change when typing animation is active, otherwise user can change language
      in the middle of animation and it doesn't work*/
    $("#country_select").prop('disabled', true);
  },
  onComplete: function () {
    $("#country_select").prop('disabled', false);
  }
};
const optionsCZ = {
  strings: ['Ahoj, jsem Lukáš, webový vývojář.'],
  typeSpeed: 55,
  loop: false,
  showCursor: true,
  onBegin: function () {
    $("#country_select").prop('disabled', true);
  },
  onComplete: function () {
    $("#country_select").prop('disabled', false);
  }
};
const getLang = () => {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang == 'cs') {
    return optionsCZ;
  } else {
    return optionsEN;
  }
}
const typed = new Typed('.landing-text', getLang());

/** DISABLE SCROLL **/
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

$(document).ready(function () {
  disableScroll();
  initialize();
  // particlesJS load
  particlesJS.load('particles-js', 'particles.json', function () {
    // loading animation end
    $(".loader-wrapper").fadeOut("slow");
    enableScroll();
  });

  // custom select box
  $('.js-example-basic-single').select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: 'custom-dropdown'
  });

  // animation lib for animating elements
  AOS.init();

  // element fade out on scroll
  let elements = document.querySelectorAll('.scroll');

  function fadeOutOnScroll(element) {
    if ($(window).width() > 505) {
      if (!element) {
        return;
      }

      var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
      var elementHeight = element.offsetHeight;
      var scrollTop = document.documentElement.scrollTop;

      var opacity = 1;

      if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
      }

      if (opacity >= 0) {
        element.style.opacity = opacity;
      }
    }
  }

  function scrollHandler() {
    elements.forEach((el) => {
      fadeOutOnScroll(el);
    })

  }

  window.addEventListener('scroll', scrollHandler);

  // collapsible elements
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  $('#collapsible').on('click', function () {
    const text = $('#collapsible').text();
    if (currentlySelectedUserLang == 'CZ') {
      if (text === dynamicClosedBtnTextCZ) {
        $(this).text(dynamicOpenedBtnTextCZ);
      } else {
        $(this).text(dynamicClosedBtnTextCZ);
      }
    } else if (currentlySelectedUserLang == 'EN') {
      if (text === dynamicClosedBtnTextEN) {
        $(this).text(dynamicOpenedBtnTextEN);
      } else {
        $(this).text(dynamicClosedBtnTextEN);
      }
    }
  });

  // Scroll to Top Arrow 
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 50);
  });

  // navbar
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const items = document.querySelectorAll(".item");

  /* Toggle mobile menu */
  function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-bars fa-lg'></i>";
    } else {
      menu.classList.add("active");
      toggle.querySelector("a").innerHTML = "<i class='fas fa-times fa-lg'></i>";
    }
  }

  /* Activate Submenu */
  function toggleItem() {
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }

  /* Close Submenu From Anywhere */
  function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
  /* Event Listeners */
  toggle.addEventListener("click", toggleMenu, false);
  for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
  }
  document.addEventListener("click", closeSubmenu, false);

  /*const calculateYears = (date) =>{  // birthday is a date
    let ageDifMs = Date.now() - date;
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }*/

  /*document.getElementById("html-years").textContent += calculateYears(new Date(2018,10,1))
  document.getElementById("css-years").textContent += calculateYears(new Date(2018,10,1))
  document.getElementById("js-years").textContent += calculateYears(new Date(2018,10,1))
  document.getElementById("angular-years").textContent += calculateYears(new Date(2019,10,1))
  document.getElementById("ts-years").textContent += calculateYears(new Date(2019,10,1))*/

  
  

});

