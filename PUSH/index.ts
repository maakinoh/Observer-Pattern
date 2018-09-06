import {WetterStation} from "./WetterStation";
import {IWetterUpdateable} from "./WetterUpdateable";
import {WetterDaten} from "./WetterDaten";

var st : WetterStation = new WetterStation();


var update1 : IWetterUpdateable = new class implements IWetterUpdateable {
    onUpdate(wetterDaten: WetterDaten) {
        console.log("Update in 1");
        console.log(JSON.stringify(wetterDaten));
    }
};

var update2 : IWetterUpdateable = new class implements IWetterUpdateable {
    onUpdate(wetterDaten: WetterDaten) {
        console.log("Update in 2");
        console.log(JSON.stringify(wetterDaten));

    }
};


var update3 : IWetterUpdateable = new class implements IWetterUpdateable {
    onUpdate(wetterDaten: WetterDaten) {
        console.log("Update in 3");
        console.log(JSON.stringify(wetterDaten));

    }
};


var update4 : IWetterUpdateable = new class implements IWetterUpdateable {
    onUpdate(wetterDaten: WetterDaten) {
        console.log("Update in 4");
        console.log(JSON.stringify(wetterDaten));

    }
};

st.register(update1);
st.register(update2);
st.register(update3);
st.register(update4);


function getRandomWeather() : WetterDaten{
    var ranWeather: WetterDaten = new WetterDaten(0,0,0);

    var temp : number = Math.random() * (35.0 - -12.0) + -12.0;

    var feuchtgkeit: number = Math.random() * (100.0 - 0.0) + 0.0;

    var luftdruck : number = Math.random() * (3.0 - 0.0) + 3.0;

    ranWeather.temperatur = temp;
    ranWeather.feuchtigkeit = feuchtgkeit;
    ranWeather.luftdruck = luftdruck;

    return ranWeather
}

async function update() : Promise<WetterDaten> {
    return new Promise<WetterDaten>(
        resolve => {
            st.onWetterUpdate(getRandomWeather());
            console.log("Update Weather");
            resolve();
        }
    )
    
}


function start(){

    setTimeout(
        () =>{
            update().then(
                () => {
                    start();
                }
            )
        }
        , 2000);

}


start();