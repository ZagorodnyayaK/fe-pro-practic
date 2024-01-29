export default class {
  constructor(menuWrapper, menuItems) {
    const docFragment = new DocumentFragment();
    const wrapper = document.createElement('div');
    wrapper.classList.add('simple-menu');
    menuWrapper.appendChild(wrapper);
    for (const item of menuItems) {

      const link = document.createElement('a');
      const {text, bgColor} = item;

      link.classList.add('simple-menu--item');
      link.style.backgroundColor = bgColor;
      link.innerHTML = text;
      link.href = '#';

      docFragment.appendChild(link);
    }
    wrapper.appendChild(docFragment);
  }
}
