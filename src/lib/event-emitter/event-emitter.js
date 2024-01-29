export default class {
  events = {};

  on(eventName, cb) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(cb);
  }

  off(eventName, cb) {
    const offIndex = this.events[eventName].findIndex((item) => item === cb);

    if (offIndex > -1) {
      this.events[eventName].splice(offIndex, 1);
    }
  }

  emit(eventName, data) {
    const callbacks = this.events[eventName];
    for (const cb of callbacks) {
      cb(data);
    }
  }
}
