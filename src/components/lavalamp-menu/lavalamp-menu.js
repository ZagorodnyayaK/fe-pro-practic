// export default () => {
//   const wrapper = document.querySelector('[data-module="lavalamp-menu"]');
//   const docFragment = new DocumentFragment();
//   const activeClassName = 'lavalamp-menu--item--active';
//
//   for (const {text, bgColor} of menuItems) {
//     const link = document.createElement('a');
//     link.classList.add('lavalamp-menu--item');
//     link.style.backgroundColor = bgColor;
//     link.innerHTML = text;
//     link.href = '#';
//     docFragment.appendChild(link);
//   }
//
//   wrapper.innerHTML = '';
//
//   wrapper.appendChild(docFragment);
//
//   const onClickHandler = (e) => {
//     e.preventDefault();
//
//     const nextLink = e.target;
//     const activeLink = wrapper.querySelector('.' + activeClassName);
//
//     if (activeLink) {
//       activeLink.classList.remove(activeClassName);
//     }
//
//     if (activeLink !== nextLink) {
//       nextLink.classList.add(activeClassName);
//     }
//   }
//
//   wrapper.addEventListener('click', onClickHandler)
// };



export default class {
  constructor(menuItems) {
    const wrapper = document.querySelector('[data-module="lavalamp-menu"]');
    wrapper.innerHTML = '';
    const docFragment = new DocumentFragment();

    for (const item of menuItems) {

      const link = document.createElement('a');
      const {text, bgColor} = item;

      link.classList.add('lavalamp-menu--item');
      link.style.backgroundColor = bgColor;
      link.innerHTML = text;
      link.href = '#';

      docFragment.appendChild(link);
    }
    wrapper.appendChild(docFragment);

  }

  update() {
    // will check later
  }

  destroy() {
    // clear interval/timers
    // remove dom
    // clear event listeners
    // abort all fetches
  }
}
