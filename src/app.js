import TopMenu from './components/top-menu/top-menu.js';
import ProductsList from './components/products-list/products-list.js';

document.addEventListener('DOMContentLoaded', async () => {
  new ProductsList();
  new TopMenu();
});
