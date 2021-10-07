import UIElement from './UIElement';

class UIMaterialBox extends UIElement {
  constructor(children, app) {
    super('div', children, app);
    this.el.setAttribute('class', 'material_box');
  }
}

export default UIMaterialBox;
