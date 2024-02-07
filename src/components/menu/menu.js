import menuTop from "../menu-top/menu-top.js";
import menuSimple from "../menu-simple/menu-simple.js";
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
    this.useMobile = this.useMobile.bind(this);
    this.useDesktop = this.useDesktop.bind(this);
    this.responsiveHelper = new Component.ResponsiveHelper(
      '(max-width: 1023px)',
      this.useMobile,
      this.useDesktop
    );
  }

  useMobile() {
    if (this.menuTop) {
      this.menuTop.destroy();
      this.menuTop = null;
    }
    if (!this.menuSimple) {
      this.menuSimple = new menuSimple(menuItems);
    }
  }

  useDesktop() {
    if (this.menuSimple) {
      this.menuSimple.destroy();
      this.menuSimple = null;
    }
    if (!this.menuTop) {
      this.menuTop = new menuTop(menuItems);
      this.menuTop.update();
    }
  }
}


