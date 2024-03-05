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
      const instance = new FiltersItem(filter);

      docFragment.appendChild(instance.domElement);
      instance.on('change', this.onItemChange);
      instances.push(instance);
    }
    wrapper.appendChild(docFragment);

    this.inctances = instances;
  }

  onItemChange() {
    this.emit(
      'filter-change',
      this.inctances.filter((i) => i.getState()).map((i) => i.getId())
    )
  };



}
