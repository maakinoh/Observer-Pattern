export class WetterDaten{
  private _temperatur : number;
  private _feuchtigkeit: number;
  private _luftdruck : number;

  constructor(temperatur : number, feuchtigkeit: number, luftdruck: number){
    this._temperatur = temperatur;
    this._feuchtigkeit = feuchtigkeit;
    this._luftdruck = luftdruck;
  }



  get temperatur(): number{
    return this._temperatur;
  }

  set temperatur(temperatur : number)  {
    this._temperatur = temperatur;
  }

  get feuchtigkeit(): number{
    return this._feuchtigkeit;
  }

  set feuchtigkeit(feuchtigkeit : number)  {
    this._feuchtigkeit = feuchtigkeit;
  }

  get luftdruck(): number{
    return this._luftdruck;
  }

  set luftdruck(luftdruck : number)  {
    this._luftdruck = luftdruck;
  }

}
