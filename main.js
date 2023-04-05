import { SNAKE_SPEED, updateSnake, drawSnake } from "./snake.js";
let gameboard = document.getElementById("game-board");
let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  console.log("render");

  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  updateSnake(gameboard);
}
function draw() {
  gameboard.innerHTML = "";
  drawSnake(gameboard);
}
