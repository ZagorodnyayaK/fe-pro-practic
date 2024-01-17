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

export default () => {
  const wrapper = document.querySelector('[data-module="menu"]');
  const docFragment = new DocumentFragment();
  const activeClassName = 'menu--item--active';

  for (const {text, bgColor} of menuItems) {
    const link = document.createElement('a');
    link.classList.add('menu--item');
    link.style.backgroundColor = bgColor;
    link.innerHTML = text;
    link.href = '#';
    docFragment.appendChild(link);
  }

  wrapper.innerHTML = '';

  wrapper.appendChild(docFragment);

  const onClickHandler = (e) => {
    e.preventDefault();

    const nextLink = e.target;
    const activeLink = wrapper.querySelector('.' + activeClassName);

    if (activeLink) {
      activeLink.classList.remove(activeClassName);
    }

    if (activeLink !== nextLink) {
      nextLink.classList.add(activeClassName);
    }
  }

  wrapper.addEventListener('click', onClickHandler)
};




