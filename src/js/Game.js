import UIMaterial from './UIMaterial';
import UIGarden from './UIGarden';
import UIRow from './UIRow';
import UIPlot from './UIPlot';
import UIMaterial from './UIMaterial';
import UIMaterialBox from './UIMaterialBox';
import GameState from './GameState';

class Game {
  constructor(config, appElement) {
    this.el = appElement;
    this.state = new GameState(
      this.#generatePlots(config.plotSize),
      this.#generateMaterials(config.materials),
    );
  }

  start() {
    console.log(`
      ##################
      # Garden Planner #
      #      by        #
      # centaur reader #
      ##################
    `);
    this.#initUi();
  }

  #generatePlots(plotSize) {
    return new Array(plotSize[0]).fill(undefined)
      .map(() => new Array(plotSize[1]).fill(undefined).map(() => new UIPlot(undefined, this)));
  }

  #generateMaterials(materials) {
    return materials.map((material) => new UIMaterial(undefined, this, material.type, material.quantity));
  }

  #initUi() {
    const garden = new UIGarden(this.state.plots.map((row) => new UIRow(row.map((plot) => plot.el)).el));
    const materialBox = new UIMaterialBox(this.state.materials.map((material) => material.el))
    this.el.innerHTML = '';
    this.el.appendChild(garden.el);
    this.el.appendChild(materialBox.el);
  }

  #didWin() {
    return this.state.materials.every((material) => material.used === material.quantity);
  }

  #displayVictory() {
    const message = document.createElement('p');
    message.innerText = 'You won';
    this.el.appendChild(message);
  }

  selectMaterial(type) {
    this.state.selectedMaterial = type;
  }

  placeMaterialInPlot(plot) {
    // decrement material quantity
    this.state.materials.forEach((material) => {
      if (plot.content === material.type) {
        material.increment();
      } else if (material.type === this.state.selectedMaterial) {
        material.decrement();
      }
    })
    // set material in plot
    if (plot.content === this.state.selectedMaterial) {
      plot.setContent(null);
    } else {
      plot.setContent(this.state.selectedMaterial);
    }
    // evaluate win condition
    if (this.#didWin()) {
      this.#displayVictory();
    }
  }
}

export default Game;
