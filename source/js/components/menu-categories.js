document
  .querySelector('.menu-categories__item--has-dropdown')
  .addEventListener('click', () => {
    document
      .querySelector('.menu-categories__sublist')
      .classList.toggle('menu-categories__sublist--active');
  });
