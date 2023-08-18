const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
})

const swiperOne = new Swiper(".feedback__slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: "3",
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});

const accordion = document.querySelector('.accordion');
const accordionTitles = document.querySelectorAll('.accordion__title');

accordionTitles.forEach.call(accordionTitles, function (accordionTitle) {
  accordionTitle.addEventListener('click', function () {
    
    const currentText = accordionTitle.parentElement.querySelector('.accordion__text');

    accordionTitle.classList.toggle('accordion__title--active');
    currentText.classList.toggle('accordion__text--visible')

    if (currentText.classList.contains("accordion__text--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentText.style.maxHeight = null
    }

  })
})

//Переключение языков
function changeLanguage(lang, translations) {
  const elements = document.querySelectorAll("[data-translate-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate-key");
    element.innerHTML = translations[key];
  });
}


let translations = {};
const lngBtnUk = document.querySelector(".header__lang-btn-uk");
const lngBtnRu = document.querySelector(".header__lang-btn-ru");
const nameInput = document.querySelector('.form__input-name');

function loadTranslations(lang) {
  fetch(`locales/${lang}.json`)
    .then((response) => response.json())
    .then((data) => {
      changeLanguage(lang, data); // Переключите язык после загрузки переводов
    })
    .catch((error) => console.error("Ошибка загрузки переводов:", error));
    if (lang === 'ru') {
      lngBtnRu.classList.add("header__lang-btn--active");
      lngBtnUk.classList.remove("header__lang-btn--active");
      nameInput.placeholder = `Имя`;
    } else {
      lngBtnUk.classList.add("header__lang-btn--active");
      lngBtnRu.classList.remove("header__lang-btn--active");
      nameInput.placeholder = `Iм'я`;
    }
}

loadTranslations("ru");