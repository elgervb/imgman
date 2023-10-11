import { Brush } from './brushes/brush';
import { getMousePosition } from './utils';

export function enableDrawing(canvas: HTMLCanvasElement, brush: Brush, isDrawingEnabled: () => boolean) {
  let isDrawing = false;
  canvas.onmousedown = (evt: MouseEvent) => {
    if (isDrawingEnabled()) {
      isDrawing = true;

      brush.down(getMousePosition(evt, canvas));
    }
  };

  canvas.onmousemove = (evt: MouseEvent) => {
    if (isDrawingEnabled() && isDrawing) {
      brush.move(getMousePosition(evt, canvas));
    }
  };

  canvas.onmouseup = (evt: MouseEvent) => {
    if (isDrawingEnabled()) {
      isDrawing = false;
      brush.up(getMousePosition(evt, canvas));
    }
  };
}

export function disableDrawing(canvas: HTMLCanvasElement) {
  canvas.onmousedown = null;
  canvas.onmousemove = null;
  canvas.onmouseup = null;
}
