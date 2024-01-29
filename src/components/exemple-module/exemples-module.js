import Component from '../../lib/component/component.js';

export default class extends Component {
  constructor() {
    super();

    this.domElement = document.querySelector('[data-module="example-module"]');
    this.useMobile = this.useMobile.bind(this);
    this.useDesktop = this.useDesktop.bind(this);

    this.rh = new Component.ResponsiveHelper(
      '(max-width: 1023px)',
      this.useMobile,
      this.useDesktop
    );

    // setTimeout(() => {
    //   this.destroy();
    // }, 5000);
  }

  useMobile() {
    this.domElement.innerHTML = '<h1>mobile</h1>';
  }

  useDesktop() {
    this.domElement.innerHTML = '<h1>desktop</h1>';
  }

  update() {}

  destroy() {
    // this.rh.clearCase('(max-width: 1023px)', this.useMobile, this.useDesktop);
  }
}
