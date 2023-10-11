import { createCanvas } from "./create-canvas";

export function cloneCanvas(oldCanvas: HTMLCanvasElement) {
    const clone = createCanvas(oldCanvas.height, oldCanvas.width);
    clone.getContext('2d')!.drawImage(oldCanvas, 0, 0);
    
    return clone;
}