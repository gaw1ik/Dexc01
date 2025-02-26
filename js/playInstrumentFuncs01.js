




// monosynth02_deg = 1;
// bass01_count = 0;
// monoSampler01_count = 0;
// polySampler01_count = 0;
// PERC = 60;
// TIME = 800;






// deg_ms01 = 1;

// function play_monoSynth01() {

//     monoSampler01_count = monoSampler01_count+1;
//     // console.log("monoSampler01_count",monoSampler01_count)

//     if(monoSampler01_count>4) {
//         device.parametersById.get("monoSampler01_oct").value = chooseFromArray([0.5,1]);
//         monoSampler01_count = 0;
//         // console.log("monoSampler01_oct",device.parametersById.get("monoSampler01_oct").value)

//     }

//     if(makeChoice(PROB)) {
//         let wait = getRandomInt(0,100);
//         deg_ms01 = chooseFromArray([-4, -2, -1, 1, 2, 3, 5]);
//         setTimeout(playNote_ms01,wait);

//         if(makeChoice(40)) {
//             setTimeout(decrement_monoSampler01, TIME*chooseFromArray([0.25,0.125]) );
//         }
//     }

//     setTimeout(play_monoSynth01, TIME);
// };


// function playNote_ms01() {
//     device.parametersById.get("monoSampler01_deg").value = deg_ms01;
// }


// function decrement_monoSampler01() {

//     // device.parametersById.get("monoSampler01_deg").value = device.parametersById.get("monoSampler01_deg").value + randomSign();

//     deg_ms01 = device.parametersById.get("monoSampler01_deg").value + randomSign();
//     let wait = getRandomInt(0,100);
//     setTimeout(playNote_ms01,wait);

//     if(makeChoice(PERC)) {
//         return;
//     }

//     setTimeout(decrement_monoSampler01,TIME*chooseFromArray([0.25,0.125]));
    
// }



// deg_ps01 = 1;

// function play_polySampler01() {

//     // console.log("[b01,ms01,ps01]",
//     //     device.parametersById.get("bass01_oct").value.toFixed(2),
//     //     device.parametersById.get("monoSampler01_oct").value.toFixed(2),
//     //     device.parametersById.get("polySampler01_oct").value.toFixed(2)
//     // );

//     polySampler01_count = polySampler01_count+1;

//     if(polySampler01_count>4) {
//         device.parametersById.get("polySampler01_oct").value = chooseFromArray([1,2]);
//         polySampler01_count = 0;

//     }

//     if(makeChoice(PROB)) {
//         let wait = getRandomInt(0,100);
//         deg_ps1 = chooseFromArray([-4, -2, -1, 1, 2, 3, 5]);
//         setTimeout(playNote_ps01,wait);

//         if(makeChoice(40)) {
//             setTimeout(decrement_polySampler01, TIME*chooseFromArray([0.25,0.125]) );
//         }
//     }

//     setTimeout(play_polySampler01, TIME);
// };


// function playNote_ps01() {
//     device.parametersById.get("polySampler01_deg").value = deg_ps01;
// }


// function decrement_polySampler01() {

//     // device.parametersById.get("monoSampler01_deg").value = device.parametersById.get("monoSampler01_deg").value + randomSign();

//     deg_ps01 = deg_ps01 + randomSign();
//     let wait = getRandomInt(0,100);
//     setTimeout(playNote_ps01,wait);

//     if(makeChoice(PERC)) {
//         return;
//     }

//     setTimeout(decrement_polySampler01,TIME*chooseFromArray([0.25,0.125]));
    
// }





// deg_b01 = 1;

// function play_bass01() {

//     // console.log("bass01_oct",device.parametersById.get("bass01_oct").value)


//     bass01_count = bass01_count+1;
//     if(bass01_count>4) {
//         device.parametersById.get("bass01_oct").value = chooseFromArray([0.25,0.5]);
//         bass01_count = 0;
//     }

//     // octave dependent gain
//     let oct = device.parametersById.get("bass01_oct").value;
//     if(oct==0.5) {
//         device.parametersById.get("bass01_gain").value = bass01_gain0/2;
//     } else {
//         device.parametersById.get("bass01_gain").value = bass01_gain0;
//     }

//     if(makeChoice(PROB)) {
//         deg_b01 = chooseFromArray([1, -1, -3]);
//         let wait = getRandomInt(0,100);
//         setTimeout(playNote_b01,wait);
//     }

//     setTimeout(play_bass01,TIME*3);
// }


// function playNote_b01() {
//     device.parametersById.get("bass01_deg").value = deg_b01;
// }


// function average(arr) {
//     const sum = arr.reduce((acc, val) => acc + val, 0);
//     return sum / arr.length;
//   }

function average(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}


CoinValue0 = 92000; // starting coin value when site is opened
CoinValueOld = CoinValue0;
CoinValue = CoinValueOld;
CoinDelta = 0;
Count = 0;
degnew = 1;
averageDelta = 0;
averagePercentDelta = 0;
deltaTrigger01 = 0.00005;
percentTrigger01 = deltaTrigger01*100;

tickerText = document.getElementById("tickerText");

deltaFrom0_MA = [0,0,0,0,0,0,0,0];

CoinValue_MA = [];
for(let i=0;i<32;i++) {
    CoinValue_MA.push(CoinValue0);
}
// CoinValue_MA = [CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0];
// CoinValue_MA = [CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0,CoinValue0];



function updateTicker() {

    

    if(Count%F==0) {
        CoinDelta = getRandomFloat(-20,20);
        CoinValue = CoinValue + CoinDelta; 
        tickerText.innerText = 'BTCUSD $' + CoinValue.toFixed(1);
    }

    // if(CoinDelta>0) {
    //     tickerText.style.color = 'hsl(130,50%,50%)';
    // } else if(CoinDelta<0) {
    //     tickerText.style.color = 'hsl(0,50%,50%)';
    // } else {
    //     tickerText.style.color = 'hsl(0,0%,50%)';
    // }



    deltaFrom0 = (CoinValue-CoinValue0)/CoinValue0;


    percentFrom0 = deltaFrom0*100;
    percentFrom0Abs = Math.abs(percentFrom0);

    // if ( deltaFrom0>deltaTrigger01 ) {
    //     tickerText.innerText = 'BTCUSD $' + CoinValue.toFixed(1) + " " + percentFrom0.toFixed(2) + "%";
    // } else if (deltaFrom0<-deltaTrigger01) {
    //     tickerText.innerText = 'BTCUSD $' + CoinValue.toFixed(1) + " " + percentFrom0.toFixed(2) + "%";
    // } else {
    //     //
    // }

    deltaFrom0_MA = deltaFrom0_MA.slice(1);
    deltaFrom0_MA.push(deltaFrom0);
    // console.log("deltaFrom0_MA",deltaFrom0_MA);
    averageDelta = average(deltaFrom0_MA);
    averagePercentDelta = averageDelta*100;
    averagePercentDeltaAbs = Math.abs(averagePercentDelta);

    CoinValue_MA = CoinValue_MA.slice(1);
    CoinValue_MA.push(CoinValue);
    // console.log("deltaFrom0_MA",deltaFrom0_MA);
    average_CoinValue = average(CoinValue_MA);


    // console.log("averageDelta",averageDelta);

    if(averagePercentDelta<-percentTrigger01) {
        tickerText.style.color = 'hsl(0,50%,50%)';
        tickerText.innerText = 'BTCUSD $' + CoinValue.toFixed(1) + " - " + averagePercentDeltaAbs.toFixed(3) + "%";
    } else if (averagePercentDelta>percentTrigger01) {
        tickerText.style.color = 'hsl(130,50%,50%)';
        tickerText.innerText = 'BTCUSD $' + CoinValue.toFixed(1) + " + " + averagePercentDeltaAbs.toFixed(3) + "%";
    } else {
        tickerText.style.color = 'hsl(130,0%,50%)';
        tickerText.innerText = 'BTCUSD $' + CoinValue.toFixed(1) + " + " + averagePercentDeltaAbs.toFixed(3) + "%";
    }



    // if ( deltaFrom0>deltaTrigger01 ) {
    //     CoinValue0 = CoinValue; // reset
    //     // degnew = degnew + 1;
    //     playUp(deltaFrom0);
    // } else if (deltaFrom0<-deltaTrigger01) {
    //     CoinValue0 = CoinValue; // reset
    //     // degnew = degnew - 1;
    //     playDown(deltaFrom0);
    // } else {
    //     //
    // }


    if(CoinDelta>0) {
        dir = 1;
    } else if(CoinDelta<0) {
        dir = -1;
    } else {
        dir = 0;
    }

    //// CLICKS
    if(Count%(F)==0) {
        // device.parametersById.get("monosynth02_gain").value = 0.50;

        let ms01osc = 3;
        if(dir=1) {
            ms01osc = 3;
        } else {
            ms01osc = 4;
        }
        device.parametersById.get("monosynth02_osc").value = ms01osc;

        play_monoSynth02();
    } else if (Count%(F)==2) {
        // device.parametersById.get("monosynth02_gain").value = 0.10;
        // play_monoSynth02();
    }



    if(Count%F==0) {
        let chord = [];
        // if(dir==1) {
            chord = [1, 3, 5];
        // } else {
        //     chord = [-3, -1, 1];
        // }

        let octish = 0;
        if(averagePercentDelta>percentTrigger01) {
            octish = 1; 
        } else if (averagePercentDelta<-percentTrigger01){
            octish = -1; 
        }
        // if(dir==1) {
        //     octish = 1;
        // } else if (dir==-1) {
        //     octish = -1;
        // } else {
        //     octish = 0;
        // }
        let deg = chooseFromArray(chord);

        deg = deg + octish*7;

        // device.parametersById.get("polysynth01_oct").value = chooseFromArray([0.5, 1.0]);

        if(averagePercentDeltaAbs>percentTrigger01){
            playNote_ps01(deg);

        }

    }

    if(Count%(F*4)==0) {
        let deg = 1;
        if(averagePercentDelta>percentTrigger01) {
            deg=4; 
        } else if (averagePercentDelta<-percentTrigger01){
            deg=-1; 
        }
        playNote_b01(deg);
    }





    // if(averagePercentDeltaAbs>0.005) {
        playUpDownPeriodic(averageDelta);

    // }


    if(Count%(F*8)==0) {

        // if(averageDelta>0) {
        //     playUpPeriodic(averageDelta);
        // } else if (averageDelta<0) {
        //     playDownPeriodic(averageDelta);
        // } else {
        //     //
        // }

        // setTimeout(playNote_ms01,0,3);
        // setTimeout(playNote_ms01,100,3+dir);
    }

    // if(Count%(F*4)==0) {
    //     // play_polySynth01();
        
    //     var deg_ps01 = 3 + dir;
    //     playNote_ps01(deg_ps01);
    //     playNote_ps02(deg_ps01);

    //     playNote_b01(deg_ps01);

    // }

    if(Count%(F)==0) {
        // play_polySynth02();
    }

    if(Count%(4*F)==0) {
        // play_bass01();
        // playNote_ps01(degnew);
    }

    Count = Count + 1;

    // if(Count%(F)==0) {
    //     drawVisualizer();
    // }

 

    CoinValue0 = average_CoinValue;

}




deg_ms01 = 1;

// function play_monoSynth01() {

//     let roundedCoinDelta = Math.round(CoinDelta/8);

//     var deg; 

//     if (CoinValue>92200 && CoinValue<92300) {
//         deg = 3;
//     } else if (CoinValue>92100 && CoinValue<92200) {
//         deg = 2;
//     } else if (CoinValue>92000 && CoinValue<92100) {
//         deg = 1;
//     } else if (CoinValue>91900 && CoinValue<92000) {
//         deg = 0;
//     } else if (CoinValue>91800 && CoinValue<91900) {
//         deg = -1;
//     }

//     deg_ms01 =  deg;

//     // console.log("roundedCoinDelta",roundedCoinDelta);

//     // deg_ms01 = deg_ms01 + roundedCoinDelta;

//     playNote_ms01();

// };

function play_monoSynth01() {

    deg_ms01 =  getRandomInt(-2,2);

    if(makeChoice(75)) {
        playNote_ms01(deg_ms01);
    }

};

function playNote_ms01(deg) {
    var v;
    if(deg<0) {
        v = -0.1;
    } else {
        v = 0.1;
    }
    device.parametersById.get("monosynth01_deg").value = deg + getRandomFloat(0,v);

}


function play_monoSynth02() {

    deg_ms01 =  1;

    playNote_ms02(deg_ms01);
    
};

function playNote_ms02(deg) {
    // device.parametersById.get("monosynth01_decCurve").value = getRandomFloat(1,6);
    var v;
    if(deg<0) {
        v = -0.1;
    } else {
        v = 0.1;
    }
    device.parametersById.get("monosynth02_deg").value = deg + getRandomFloat(0,v);
}






deg_ps01 = 1;
degold = deg_ps01;

function play_polySynth01() {

    let deg = getRandomInt(-4, 4);

    playNote_ps01(deg);

};

function playNote_ps01(deg) {

    var v;
    if(deg<0) {
        v = -0.1;
    } else {
        v = 0.1;
    }
    device.parametersById.get("polysynth01_deg").value = deg + getRandomFloat(0,v);

}



function play_polySynth02() {

    let deg = getRandomInt(-4, 4);

    playNote_ps02(deg);

};


function playNote_ps02(deg) {
    var v;
    if(deg<0) {
        v = -0.1;
    } else {
        v = 0.1;
    }
    device.parametersById.get("polysynth02_deg").value = deg + getRandomFloat(0,v);
}




function playUp(delta) {

    let delay = 0;
    let delayTime = 150;
    let N = Math.ceil( r2n(delta,0.005,0.050) * 16 ) + 4;
    deg = 3;

    setTimeout( playNote_ps02, delay, deg); // first one

    for(let i=0;i<N-1;i++) {

        deg = deg+1;
        
        setTimeout( playNote_ps02, delay, deg);

        delay = delay + delayTime;
    }

}

function playDown(delta) {

    let delay = 0;   
    let delayTime = 150;
    let N = Math.ceil( r2n(delta,0.005,0.050) * 16 ) + 4;
    deg = 3;

    setTimeout( playNote_ps02, delay, deg); // first one

    for(let i=0;i<N-1;i++) {

        deg = deg-1;
        
        setTimeout( playNote_ps02, delay, deg);

        delay = delay + delayTime;
    }

}




function playUpDownPeriodic(delta) {

    let delay = 0;
    let delayTime = 150;
    let deltaAbs = Math.abs(delta);
    let N = Math.ceil( r2n(deltaAbs,0.0001,0.0010) * 20 );
    deg = 3;

    let inc = 0;
    if(delta<0) {
        inc = -1;
    } else if (delta>0) {
        inc = 1;
    }

    // console.log("inc",inc);

    setTimeout( playNote_ps02, delay, deg); // first one

    for(let i=0;i<N-1;i++) {

        deg = deg+inc;
        
        setTimeout( playNote_ps02, delay, deg);

        delay = delay + delayTime;
    }

}

// function playDownPeriodic(delta) {

//     let delay = 0;
//     let delayTime = 150;
//     let N = Math.ceil( r2n(delta,0.005,0.050) * 16 ) + 4;
//     deg = 3;

//     setTimeout( playNote_ms01, delay, deg); // first one

//     for(let i=0;i<N-1;i++) {

//         deg = deg-1;
        
//         setTimeout( playNote_ms01, delay, deg);

//         delay = delay + delayTime;
//     }

// }






deg_b01 = 1;

function play_bass01() {

    // let roundedCoinDelta = Math.round(CoinDelta/16);
    // deg_b01 = deg_b01 + roundedCoinDelta;

    let deg = degnew;

    playNote_b01(deg);

}


function playNote_b01(deg) {
    var v;
    if(deg<0) {
        v = -0.1;
    } else {
        v = 0.1;
    }
    device.parametersById.get("bass01_deg").value = deg + getRandomFloat(0,v);
}