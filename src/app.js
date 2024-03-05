import Menu from './components/menu/menu.js';
import Products from './components/products/products.js';
import Filters from "./components/filters/filters.js";

document.addEventListener('DOMContentLoaded', async () => {
  new Menu()
  new Products();
});
