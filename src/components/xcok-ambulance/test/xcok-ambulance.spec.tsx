import { newSpecPage } from '@stencil/core/testing';
import { XcokAmbulance } from '../xcok-ambulance';

describe('xcok-ambulance', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XcokAmbulance],
      html: `<xcok-ambulance></xcok-ambulance>`,
    });
    expect(page.root).toEqualHtml(`
      <xcok-ambulance>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xcok-ambulance>
    `);
  });
});
