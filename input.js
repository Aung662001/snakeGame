let inputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      inputDirection = { x: 1, y: 0 };
      break;
    default:
      console.log(e.key);
  }
});

export default function getInputDirection() {
  return inputDirection;
}
