import MenuTop from './components/menu-top/menu-top.js';
import MenuSimple from './components/menu-simple/menu-simple.js';
import Products from './components/products/products.js';
import ExampleModule from "./components/example-module/examples-module.js";

document.addEventListener('DOMContentLoaded', async () => {
  new MenuTop();
  new MenuSimple();
  new Products();
  new ExampleModule();
});
