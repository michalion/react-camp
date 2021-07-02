export default class Observable {
  constructor() {
    this.subscribers = [];

    this.addSubscriber = this.addSubscriber.bind(this);
    this.removeSubscriber = this.removeSubscriber.bind(this);
    this.notifySubscribers = this.notifySubscribers.bind(this);
  }

  addSubscriber(sub) {
    this.subscribers.push(sub);
  }

  removeSubscriber(sub) {
    this.subscribers = this.subscribers.filter((s) => s !== sub);
  }

  notifySubscribers(data) {
    this.subscribers.forEach((sub) => sub(data));
  }
}
