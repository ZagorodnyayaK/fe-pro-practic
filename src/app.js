import TopMenu from './components/top-menu/top-menu';
import ProductsList from './components/products-list/products-list.js';

document.addEventListener('DOMContentLoaded', async () => {
  new ProductsList();
  new TopMenu();
});
