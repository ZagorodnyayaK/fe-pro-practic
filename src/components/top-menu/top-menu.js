import LavalampMenu from "../lavalamp-menu/lavalamp-menu.js";
import SimpleMenu from "../simple-menu/simple-menu.js";

const menuItems = [
  {
    bgColor: '#1abc9c',
    text: 'home',
  },
  {
    bgColor: '#e74c3c',
    text: 'products',
  },
  {
    bgColor: '#3498db',
    text: 'about',
  },
  {
    bgColor: '#9b59b6',
    text: 'portfolio',
  },
  {
    bgColor: '#e67e22',
    text: 'contact us',
  },
];

export default class {
  constructor() {
    const wrapper = document.querySelector('[data-module="top-menu"]');
    new LavalampMenu(wrapper, menuItems);
    new SimpleMenu(wrapper, menuItems);

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
