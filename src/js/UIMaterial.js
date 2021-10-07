import UIElement from './UIElement';

class UIMaterial extends UIElement {
  constructor(children, app, type, quantity) {
    super('label', children, app);
    this.el.setAttribute('class', 'material_box__material');
    this.inputEl = document.createElement('input');
    this.inputEl.setAttribute('name', 'material');
    this.inputEl.setAttribute('type', 'radio');
    this.el.appendChild(this.inputEl);
    this.labelEl = document.createElement('span');
    this.el.appendChild(this.labelEl)

    this.type = type;
    this.quantity = quantity;
    this.used = 0;

    this.#init();
  }

  #init() {
    this.el.addEventListener('click', () => {
      this.app.selectMaterial(this.type);
    });
    this.#update();
  }

  #update() {
    switch (this.type) {
      case 'PUMPKIN':
        this.el.classList.add('material_box__material--pumpkin');
        break;
      case 'LETTUCE':
        this.el.classList.add('material_box__material--lettuce');
        break;
      case 'CORN':
        this.el.classList.add('material_box__material--corn');
        break;
      default:
        this.el.classList.add('material_box__material--unknown');
        break;
    }

    this.labelEl.innerText = `${this.type} (${this.quantity - this.used})`;
  }

  increment() {
    this.used = this.used - 1;
    this.#update();
  }

  decrement() {
    if (this.used === this.quantity) {
      return;
    }
    this.used = this.used + 1;
    this.#update();
  }
}

export default UIMaterial;
