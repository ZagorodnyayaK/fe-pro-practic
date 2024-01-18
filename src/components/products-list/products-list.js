const productsList = [
  {
    id: '1',
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '2',
    title: 'Product 2',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: '3',
    title: 'Product 3',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    id: '4',
    title: 'Product 4',
    description:
      'Hisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  },
  {
    id: '5',
    title: 'Product 5',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default () => {
  const wrapper = document.querySelector('[data-module="products-list"]');
  const docFragment = new DocumentFragment();


  for (const {title, description} of productsList) {
    const productsItem = document.createElement('div');
    productsItem.classList.add('products-list--item');

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('products-list--title');
    itemTitle.innerHTML = title;

    const image = document.createElement('img');
    image.src = ('https://placehold.co/300x300');
    image.classList.add('products-list--image');
    image.alt = '';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = description;

    const button = document.createElement('button');
    button.classList.add('products-list--button-more');
    button.innerHTML = 'read more'

    productsItem.appendChild(itemTitle);
    productsItem.appendChild(image);
    productsItem.appendChild(paragraph);
    productsItem.appendChild(button);

    docFragment.appendChild(productsItem);
  }
  wrapper.innerHTML = '';

  wrapper.appendChild(docFragment);
};
