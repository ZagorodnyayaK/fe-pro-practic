import EventEmitter from '../event-emitter/event-emitter.js';
import ResponsiveHelper from '../responsive-helper/responsive-helper.js';

export default class extends EventEmitter {
  static ResponsiveHelper = ResponsiveHelper;
  constructor() {
    super();
  }
  update() {}

  destroy() {}
}
