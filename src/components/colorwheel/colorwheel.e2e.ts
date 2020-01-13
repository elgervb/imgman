import { newE2EPage } from '@stencil/core/testing';

describe('evb-colorwheel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<evb-colorwheel></evb-colorwheel>');

    const element = await page.find('evb-colorwheel');
    expect(element).toHaveClass('hydrated');
  });
});
