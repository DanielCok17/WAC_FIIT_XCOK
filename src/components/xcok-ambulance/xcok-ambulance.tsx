import { Component, Host, h } from '@stencil/core';
// import '@material/web/list/list'
// import '@material/web/list/list-item'
// import '@material/web/icon/icon'

@Component({
  tag: 'xcok-ambulance',
  styleUrl: 'xcok-ambulance.css',
  shadow: true,
})
export class XcokAmbulance {

  waitingPatients: any[];

  private async getWaitingPatientsAsync(){
    return await Promise.resolve(
      [{
          name: 'Jožkaa Púčik',
          patientId: '10001',
          since: new Date(Date.now() - 10 * 60).toISOString(),
          estimatedStart: new Date(Date.now() + 65 * 60).toISOString(),
          estimatedDurationMinutes: 15,
          condition: 'Kontrola'
      }, {
          name: 'Bc. August Cézar',
          patientId: '10096',
          since: new Date(Date.now() - 30 * 60).toISOString(),
          estimatedStart: new Date(Date.now() + 30 * 60).toISOString(),
          estimatedDurationMinutes: 20,
          condition: 'Teploty'
      }, {
          name: 'Ing. Ferdinand Trety',
          patientId: '10028',
          since: new Date(Date.now() - 72 * 60).toISOString(),
          estimatedStart: new Date(Date.now() + 5 * 60).toISOString(),
          estimatedDurationMinutes: 15,
          condition: 'Bolesti hrdla'
      }]
    );
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  private isoDateToLocale(iso:string) {
    if(!iso) return '';
    return new Date(Date.parse(iso)).toLocaleTimeString()
  }

  render() {
    return (
      <Host>
        {/* <slot></slot> */}
        <md-list>
          {this.waitingPatients.map(patient =>
            <md-list-item>
              <div slot="headline">{patient.name}</div>
              <div slot="supporting-text">{"Predpokladaný vstup: " + this.isoDateToLocale(patient.estimatedStart)}</div>
                <md-icon slot="start">person</md-icon>
            </md-list-item>
          )}
        </md-list>
      </Host>
    );
  }

}
