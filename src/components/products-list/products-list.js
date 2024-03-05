import ProductListItem from "../products-list-item/products-list-item.js";

export default class {
  constructor(productsList) {
    this.wrapper = document.querySelector('[data-module="products-list"]');
    this.updateList(productsList);
  }

  updateList(productsList) {
    const fragment = new DocumentFragment();

    for (const productProps of productsList) {
      const productInstance = new ProductListItem(productProps);
      fragment.appendChild(productInstance.domElement);
    }

    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(fragment);
  }
}
