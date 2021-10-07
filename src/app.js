import Game from './js/Game';

const CONFIG = {
  plotSize: [4, 4],
  materials: [
    { type: 'PUMPKIN', quantity: 1, },
    { type: 'CORN', quantity: 2, },
    { type: 'LETTUCE', quantity: 3, },
  ]
};

const game = new Game(
  CONFIG,
  document.getElementById('app'),
);
game.start();
window.game = game;