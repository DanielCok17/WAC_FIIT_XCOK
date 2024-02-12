import { newSpecPage } from '@stencil/core/testing';
import { XcokAmbulance } from '../xcok-ambulance';

describe('xcok-ambulance', () => {
  
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XcokAmbulance],
      html: `<xcok-ambulance></xcok-ambulance>`,
    });
    
    const wlList = page.rootInstance as XcokAmbulance;
    const expectedPatients = wlList?.waitingPatients?.length
    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
