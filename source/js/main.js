import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.page-body');
  const headerWrapper = document.querySelector('.header__wrapper');
  const navigationContainer = document.querySelector('.header__nav');
  const navigationList = document.querySelector('.header__navigation-list');
  const navigationOverlay = document.querySelector('.header__menu-bg');
  const burger = document.querySelector('.burger');
  const logoWhite = document.querySelector('.header__logo--white');
  const logoBlue = document.querySelector('.header__logo--blue');
  const cruiseDescription = document.querySelector('.cruises__description')
  const cruisesList = document.querySelector('.cruises__list');


  navigationContainer.classList.remove('header__nav--white-bg');
  navigationList.classList.add('header__navigation-list--hidden');
  burger.classList.add('burger--visible');
  logoBlue.classList.add('header__logo--hidden');
  logoWhite.classList.add('header__logo--visible');

  function toggleMenu() {
    burger.classList.toggle('burger--open');
    logoBlue.classList.toggle('header__logo--hidden');
    logoWhite.classList.toggle('header__logo--visible');
    navigationContainer.classList.toggle('header__nav--white-bg');
    navigationList.classList.toggle('header__navigation-list--visible');
    headerWrapper.classList.toggle('header__wrapper--open');
    navigationOverlay.classList.toggle('header__menu-bg--open');
    body.classList.toggle('page-body--no-scroll');
  }

  burger.addEventListener('click', () => {
    toggleMenu();
  });

  navigationOverlay.addEventListener('click', () => {
    toggleMenu();
  });

  navigationList.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'A') {
      toggleMenu();
    }
  });


  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
