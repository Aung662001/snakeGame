export function outsideGrid(head) {
  return head.x < 1 || head.y < 1 || head.x > 21 || head.y > 21;
}
