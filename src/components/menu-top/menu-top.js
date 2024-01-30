const menuItems = [
  {
    bgColor: '#1abc9c',
    text: 'home',
  },
  {
    bgColor: '#e74c3c',
    text: 'products',
  },
  {
    bgColor: '#3498db',
    text: 'about',
  },
  {
    bgColor: '#9b59b6',
    text: 'portfolio',
  },
  {
    bgColor: '#e67e22',
    text: 'contact us',
  },
];

export default class {
  constructor() {
    const wrapper = document.querySelector('[data-module="menu-top"]');
    const items = wrapper.getElementsByClassName('menu-top--item')
    wrapper.innerHTML = ''

    let activeItemIndex = 0;

    const effect = document.createElement('span');
    effect.classList.add('menu--effect');
    effect.style.width = `calc(100% / ${menuItems.length})`;
    wrapper.appendChild((effect));


    const fragment = new DocumentFragment();
    for (const {text} of menuItems) {
      const item = document.createElement('a');
      item.href = '#';
      item.classList.add('menu-top--item');
      item.innerHTML = text;
      fragment.appendChild(item);
    }
    wrapper.appendChild(fragment);

    const updateEffectByIndex = (index) => {
      effect.style.left = `calc(${index} * 100% / ${menuItems.length})`;
      effect.style.backgroundColor = menuItems[index].bgColor;
    };

    const onItemOver = (e) => {
      const {target} = e;
      const linkIndex = [...items].findIndex((i) => i === target);
      updateEffectByIndex(linkIndex);
    };

    const onItemLeave = () => {
      updateEffectByIndex(activeItemIndex);
    };

    const onClick = (e) => {
      e.preventDefault();
      activeItemIndex = [...items.findIndex((i) => i === e.target)];
    };

    updateEffectByIndex(0);
    wrapper.addEventListener('mouseover', onItemOver);
    wrapper.addEventListener('mouseleave', onItemLeave);
    wrapper.addEventListener('click', onClick);
  }
}
