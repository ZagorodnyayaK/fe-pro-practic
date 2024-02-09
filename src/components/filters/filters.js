import FiltersItem from "../filters-item/filters-item.js";
import Component from "../../lib/component/component.js";

export default class extends Component {
  constructor(filters) {
    super();

    const wrapper = document.querySelector('[data-module="filters"]');
    const docFragment = new DocumentFragment();
    const instances = [];

    this.onItemChange = this.onItemChange.bind(this);

    for (const filter of filters) {
      console.log(filters)
      const instance = new FiltersItem(filter);

      docFragment.appendChild(instance.domElement);
      instances.push(instance);
    }
    wrapper.addEventListener('change', this.onItemChange);
    wrapper.appendChild(docFragment);

    this.inctances = instances;
  }

  onItemChange() {
    this.emit(
      'change',
      this.inctances.filter((i) => i.getState()).map((i) => i.getId())
    )
  };
}
