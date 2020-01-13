import { Point } from './point';

/**
 * Get the mouse cursor position inside an element
 */
export function getMousePosition(evt: MouseEvent, el: Element): Point {
  const box = el.getBoundingClientRect();

  return { x: evt.clientX - box.left, y: evt.clientY - box.top };
}
