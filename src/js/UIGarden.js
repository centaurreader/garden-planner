import UIElement from './UIElement';

class UIGarden extends UIElement {
  constructor(children, app) {
    super('div', children, app);
    this.el.setAttribute('class', 'garden');
  }
}

export default UIGarden;
