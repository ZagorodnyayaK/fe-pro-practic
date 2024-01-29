import FiltersItem from "../filters-item/filters-item.js";
import Component from "../../lib/component/component.js";

export default class extends Component {
  constructor(filters) {
    super();

    const wrapper = document.querySelector('[data-module="filters"]');
    const instances = [];

    this.onItemChange = this.onItemChange.bind(this);

    for (const filter of filters) {
      const instance = new FiltersItem(filter);

      wrapper.appendChild(instance.domElement);
      instances.push(instance);
      instance.on('change', this.onItemChange);
    }

    this.inctances = instances;
  }

  onItemChanche() {
    const activeFilters = this.inctances.filter((i) => i.getState());
    const activeFiltersIds = activeFilters.map((i) => i.getId());
  };
}
