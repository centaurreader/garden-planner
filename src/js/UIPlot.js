import UIElement from './UIElement';

class UIPlot extends UIElement {
  constructor(children, app) {
    super('button', children, app);
    this.el.classList.add('garden__plot');

    this.coords = [];
    this.content = null;

    this.#init();
  }

  #init() {
    this.el.addEventListener('click', () => {
      this.app.placeMaterialInPlot(this);
    });
    this.#update();
  }

  #resetContentClasse() {
    if (this.el.classList.contains('garden__plot--pumpkin')) {
      this.el.classList.remove('garden__plot--pumpkin');
    }
    if (this.el.classList.contains('garden__plot--lettuce')) {
      this.el.classList.remove('garden__plot--lettuce');
    }
    if (this.el.classList.contains('garden__plot--corn')) {
      this.el.classList.remove('garden__plot--corn');
    }
    if (this.el.classList.contains('garden__plot--unknown')) {
      this.el.classList.remove('garden__plot--unknown');
    }
  }

  #update() {
    this.#resetContentClasse();
    switch (this.content) {
      case 'PUMPKIN':
        this.el.classList.add('garden__plot--pumpkin');
        break;
      case 'LETTUCE':
        this.el.classList.add('garden__plot--lettuce');
        break;
      case 'CORN':
        this.el.classList.add('garden__plot--corn');
        break;
      default:
        this.el.classList.add('garden__plot--unknown');
        break;
    }

    
  }

  setContent(content) {
    this.content = content;
    this.#update();
  }
}

export default UIPlot;
