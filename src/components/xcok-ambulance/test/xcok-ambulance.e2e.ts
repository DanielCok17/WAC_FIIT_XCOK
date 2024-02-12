import { newE2EPage } from '@stencil/core/testing';

describe('xcok-ambulance', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xcok-ambulance></xcok-ambulance>');

    const element = await page.find('xcok-ambulance');
    expect(element).toHaveClass('hydrated');
  });
});
