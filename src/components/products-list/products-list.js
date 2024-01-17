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


  for (const {id, title, description} of productsList) {
    const productsItemDiv = document.createElement('div');
    const button = document.createElement('button');
    const addTitle = document.createElement('h3');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');
    productsItemDiv.classList.add('products-list--item');
    productsItemDiv.id = id;
    addTitle.classList.add('products-list--title');
    addTitle.innerHTML = title;
    image.src = ('https://placehold.co/300x300');
    image.classList.add('products-list--image');
    image.alt = '';
    paragraph.innerHTML = description;
    button.classList.add('products-list--button-more');

    productsItemDiv.appendChild(title)
    productsItemDiv.appendChild(image)
    productsItemDiv.appendChild(paragraph)
    productsItemDiv.appendChild(button)

    docFragment.appendChild(productsItemDiv);
  }
  wrapper.innerHTML = '';

  wrapper.appendChild(docFragment);
};
