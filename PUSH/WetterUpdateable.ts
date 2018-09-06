import {WetterDaten} from './WetterDaten';

export interface IWetterUpdateable {
  onUpdate(wetterDaten  : WetterDaten)

}
