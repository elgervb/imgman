import { createCanvas } from './canvas';

describe('createCanvas', () => {

  it('creates a new canvas', () => {
    const canvas = createCanvas();
    expect(canvas).toBeTruthy();
    expect(canvas instanceof HTMLCanvasElement);
  });

  it('creates a new canvas element with 2d context', () => {
    const canvas = createCanvas();
    expect(canvas).toBeTruthy();
    const context = canvas.getContext('2d');

    expect(context).toBeTruthy();
  });
});
