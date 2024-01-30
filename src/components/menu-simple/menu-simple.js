

export default class {
  constructor(menuWrapper, menuItems) {
    const docFragment = new DocumentFragment();
    const wrapper = document.createElement('div');
    wrapper.classList.add('menu-simple');
    menuWrapper.appendChild(wrapper);

    for (const item of menuItems) {

      const link = document.createElement('a');
      const {text, bgColor} = item;

      link.classList.add('menu-simple--item');
      link.style.backgroundColor = bgColor;
      link.innerHTML = text;
      link.href = '#';

      wrapper.appendChild(link);
    }
    docFragment.appendChild(docFragment);
  }
}
