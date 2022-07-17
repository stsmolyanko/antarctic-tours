import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const headerWrapper = document.querySelector('.header__wrapper');
  const navigationContainer = document.querySelector('.header__nav');
  const navigationList = document.querySelector('.header__navigation-list');
  const burger = document.querySelector('.burger');
  const logoWhite = document.querySelector('.header__logo--white');
  const logoBlue = document.querySelector('.header__logo--blue');

  navigationContainer.classList.remove('header__nav--white-bg');
  navigationList.classList.add('header__navigation-list--hidden');
  burger.classList.add('burger--visible');
  logoBlue.classList.add('header__logo--hidden');
  logoWhite.classList.add('header__logo--visible');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--open');
    logoBlue.classList.toggle('header__logo--hidden');
    logoWhite.classList.toggle('header__logo--visible');
    navigationContainer.classList.toggle('header__nav--white-bg');
    navigationList.classList.toggle('header__navigation-list--visible');
    headerWrapper.classList.toggle('header__wrapper--open');
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
