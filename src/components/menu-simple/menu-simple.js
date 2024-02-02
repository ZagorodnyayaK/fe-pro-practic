export default class {
  constructor(menuItems) {
    this.wrapper = document.querySelector('[data-module="menu-simple"]');
    const docFragment = new DocumentFragment();

    for (const item of menuItems) {

      const link = document.createElement('a');
      const {text, bgColor} = item;

      link.classList.add('menu-simple--item');
      link.style.backgroundColor = bgColor;
      link.innerHTML = text;
      link.href = '#';

      docFragment.appendChild(link);
    }
    this.wrapper.appendChild(docFragment);
  }

  destroy() {
    this.wrapper.innerHTML = '';

  }

}
