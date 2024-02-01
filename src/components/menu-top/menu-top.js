export default class {
  constructor(menuItems) {
    this.wrapper = document.querySelector('[data-module="menu-top"]');
    const items = this.wrapper.getElementsByClassName('menu-top--item')
    this.wrapper.innerHTML = '';

    let activeItemIndex = 0;

    const effect = document.createElement('span');
    effect.classList.add('menu--effect');
    effect.style.width = `calc(100% / ${menuItems.length})`;
    this.wrapper.appendChild((effect));


    const fragment = new DocumentFragment();
    for (const {text} of menuItems) {
      const item = document.createElement('a');
      item.href = '#';
      item.classList.add('menu-top--item');
      item.innerHTML = text;
      fragment.appendChild(item);
    }
    this.wrapper.appendChild(fragment);

    const updateEffectByIndex = (index) => {
      effect.style.left = `calc(${index} * 100% / ${menuItems.length})`;
      effect.style.backgroundColor = menuItems[index].bgColor;
    };

    this.onItemOver = (e) => {
      const {target} = e;
      const linkIndex = [...items].findIndex((i) => i === target);
      updateEffectByIndex(linkIndex);
    };

    this.onItemLeave = () => {
      updateEffectByIndex(activeItemIndex);
    };

    this.onClick = (e) => {
      e.preventDefault();
      activeItemIndex = [...items.findIndex((i) => i === e.target)];
    };

    updateEffectByIndex(0);
    this.wrapper.addEventListener('mouseover', this.onItemOver);
    this.wrapper.addEventListener('mouseleave', this.onItemLeave);
    this.wrapper.addEventListener('click', this.onClick);
  }

  destroy() {
    this.wrapper.removeEventListener('mouseover', this.onItemOver);
    this.wrapper.removeEventListener('mouseleave', this.onItemLeave);
    this.wrapper.removeEventListener('click', this.onClick);
    this.wrapper.innerHTML = '';
  }


}
