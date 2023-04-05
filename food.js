import { onSnake, expandSnake } from "./snake.js";
const min = 1;
const max = 21;

let food = { x: 10, y: 1 };
let EXPAND_RATE_OF_SNAKE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPAND_RATE_OF_SNAKE);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    food = { x: randomNum, y: randomNum };
  }
}

export function draw(gameboard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameboard.appendChild(foodElement);
}
