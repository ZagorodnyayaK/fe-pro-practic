import SimpleMenu from "../simple-menu/simple-menu";
import LavalampMenu from "../lavalamp-menu/lavalamp-menu";

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
new SimpleMenu();
new LavalampMenu();

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
