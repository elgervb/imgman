import { createCanvasFromImage } from '../create/canvas-from-image';

import { average } from './average';

// jest.mock('../create/canvas-from-image', () => jest.fn(() => ({
//   height: 200,
//   width: 200,
//   // tslint:disable-next-line:no-magic-numbers
//   getContext: () => [].fill({ r: 0, g: 0, b: 0 }, 0, 200 * 200)
// })));

jest.mock('../create/canvas-from-image');

const expectedRbg = { r: 127, g: 127, b: 127 };

// @ts-ignore
createCanvasFromImage.mockImplementation(() => ({
  height: 10,
  width: 10,
  getContext: () => ({
    getImageData: () => ({
      // tslint:disable-next-line:no-magic-numbers
      data: Array(10 * 10 * 3).fill(127, 0, 10 * 10 * 3)
    })
  })
}));

describe('average', () => {

  it('calculates the average color of an image', () => {
    const avg = average({} as HTMLImageElement);

    expect(avg).toBeTruthy();
    expect(avg).toEqual(expectedRbg);
  });
});
