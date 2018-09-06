import {WetterDaten} from './WetterDaten';
import {IWetterUpdateable} from "./WetterUpdateable";

export class WetterStation {
    private _aktuellesWetter: WetterDaten;
    private _wetterStatistik: Set<WetterDaten>;
    private _wetterVorhersage: boolean;
    private _handler: Set<IWetterUpdateable>;

    constructor(){
        this._wetterStatistik = new Set<WetterDaten>();
        this._handler = new Set<IWetterUpdateable>();
        this._aktuellesWetter = new WetterDaten(0,0,0);
    }

    register(intance: IWetterUpdateable) {
        if (!this._handler.has(intance)) {
            this._handler.add(intance);
        }
    }

    unregister(intance: IWetterUpdateable) {
        if (this._handler.has(intance)) {
            this._handler.delete(intance);
        }
    }

    /**
     * Is Called
     */
    onWetterUpdate(newWetter: WetterDaten): void {
        // Add old weather to Statistics
        this._wetterStatistik.add(newWetter);

        if (this._aktuellesWetter.luftdruck > newWetter.luftdruck) {
            this._wetterVorhersage = true;
        } else {
            this._wetterVorhersage = false;
        }

        //Set the new Weather as the present weather.
        this._aktuellesWetter = newWetter;

        this._handler.forEach(
            async (data: IWetterUpdateable) => {
                data.onUpdate();
            });
    }

    get aktuellesWetter(): WetterDaten {
        return this._aktuellesWetter;
    }

    set aktuellesWetter(value: WetterDaten) {
        this._aktuellesWetter = value;
    }


    get wetterStatistik(): Set<WetterDaten> {
        return this._wetterStatistik;
    }

    set wetterStatistik(value: Set<WetterDaten>) {
        this._wetterStatistik = value;
    }

    get wetterVorhersage(): boolean {
        return this._wetterVorhersage;
    }

    set wetterVorhersage(value: boolean) {
        this._wetterVorhersage = value;
    }

    get handler(): Set<IWetterUpdateable> {
        return this._handler;
    }

    set handler(value: Set<IWetterUpdateable>) {
        this._handler = value;
    }
}
