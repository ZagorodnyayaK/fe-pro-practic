export default class {
  constructor({product, description, picture}) {
    const item = document.createElement('div');
    item.classList.add('product-list--item');

    const itemTitle = document.createElement('h3')
    itemTitle.classList.add('product-list--title');
    itemTitle.innerHTML = product;
    item.appendChild(itemTitle);

    const itemImage = document.createElement('img');
    itemImage.classList.add('product-list--image');
    itemImage.src = picture;
    item.appendChild(itemImage);

    const itemText = document.createElement('p');
    itemText.classList.add('product-list--description');
    itemText.innerHTML = description;
    item.appendChild(itemText);

    const itemButton = document.createElement('button');
    itemButton.classList.add('product-list--button-more');
    itemButton.innerHTML = 'read more';
    item.appendChild(itemButton);

    this.domElement = item;
  }
  update() {}

  destroy() {};
}
