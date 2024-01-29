import TopMenu from './components/top-menu/top-menu.js';
import SimpleMenu from './components/simple-menu/simple-menu.js';
import ProductsList from './components/products-list/products-list.js';

document.addEventListener('DOMContentLoaded', async () => {
  new ProductsList();
  new TopMenu();
  new SimpleMenu();
  new ExampleModule();
});
