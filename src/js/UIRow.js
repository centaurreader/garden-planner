import UIElement from './UIElement';

class UIRow extends UIElement {
  constructor(children, app) {
    super('div', children, app);
    this.el.setAttribute('class', 'garden__row');
  }
}

export default UIRow;
