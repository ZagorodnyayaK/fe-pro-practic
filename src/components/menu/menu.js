import MenuTop from "../menu-top/menu-top.js";
import MenuSimple from "../menu-simple/menu-simple.js";
import Component from "../../lib/component/component.js";

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

export default class CommonMenu extends Component {
  constructor() {
    super();
    this.domElement = document.querySelector('[data-module="examples-module"]');
    this.MenuTop = new MenuTop(menuItems);
    this.MenuSimple = new MenuSimple(menuItems);
    this.useMobile = this.useMobile.bind(this);
    this.useDesktop = this.useDesktop.bind(this);
    this.responsiveHelper = new Component.ResponsiveHelper(
      '(max-width: 1023px)',
      this.useMobile,
      this.useDesktop
    );
  }

  useMobile() {
    if (this.MenuTop) {
      this.MenuTop.destroy();
      this.MenuTop = null;

    }
    if (!this.MenuSimple) {
      this.MenuSimple = new MenuSimple(menuItems);
    }
  }

  useDesktop() {
    if (this.MenuSimple) {
      this.MenuSimple.destroy();
      this.MenuSimple = null;
    }
    if (!this.MenuTop) {
      this.MenuTop = new MenuTop(menuItems);
    }
  }

  update() {
  }

  destroy() {

  }
}


