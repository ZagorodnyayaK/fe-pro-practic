export default class {
  constructor(props) {
    const {product} = props;
    const {picture} = props;
    const {description} = props;

    const productsItem = document.createElement('div');
    productsItem.classList.add('products-list--item');

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('products-list--title');
    itemTitle.innerHTML = product;

    const image = document.createElement('img');
    image.src = picture;
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

    this.itemDiv = productsItem;
  }

  update() {
    // will check later
  }

  destroy() {
    // clear interval/timers
    // remove dom
    // clear event listeners
    // abort all fetches
  }
}
