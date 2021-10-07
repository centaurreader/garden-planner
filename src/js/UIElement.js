class UIElement {
  constructor(elementType = 'div', children = [], app) {
    this.el = document.createElement(elementType);
    children.forEach((child) => {
      this.el.appendChild(child);
    });

    this.app = app;
  }
}

export default UIElement;
