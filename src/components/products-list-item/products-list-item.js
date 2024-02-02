export default class {
  constructor({product, description, picture}) {
    const item = document.createElement('div');
    item.classList.add('products-list--item');

    const itemTitle = document.createElement('h3')
    itemTitle.classList.add('products-list--title');
    itemTitle.innerHTML = product;
    item.appendChild(itemTitle);

    const itemImage = document.createElement('img');
    itemImage.classList.add('products-list--image');
    itemImage.src = picture;
    item.appendChild(itemImage);

    const itemText = document.createElement('p');
    itemText.classList.add('products-list--description');
    itemText.innerHTML = description;
    item.appendChild(itemText);

    const itemButton = document.createElement('button');
    itemButton.classList.add('products-list--button-more');
    itemButton.innerHTML = 'read more';
    item.appendChild(itemButton);

    this.domElement = item;
  }
  update() {}

  destroy() {};
}
