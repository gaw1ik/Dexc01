function updateParams_Scanner() {

    device.parametersById.get("scaletype").value = 2;

    device.parametersById.get("b01/attack").value = 10;
    device.parametersById.get("b01/oct").value = 0.25;
    device.parametersById.get("b01/fluxAmnt").value = 0.1;

    device.parametersById.get("ps02/attack").value = 100;


    TIME2 = 120;


}





function playInstruments_Scanner() {


    b01_vel = 0.7;
    if(COUNT%32==7) {
        let deg = 0;
        let vel = b01_vel/4;
        let wait = getRandomFloat(0,30);
        setTimeout(playNote_b01,wait,deg,vel);
    }
    if(COUNT%32==8) {
        let deg = 1;
        let vel = b01_vel;
        let wait = getRandomFloat(0,30);
        setTimeout(playNote_b01,wait,deg,vel);
    }
    if(COUNT%32==10) {
        let deg = -3;
        let vel = b01_vel/2;
        let wait = getRandomFloat(0,30);
        setTimeout(playNote_b01,wait,deg,vel);
    }

    // kick (ms01)
    if(COUNT%16==1 ) {
        let wait = getRandomFloat(0,10);
        setTimeout(playNote_ms01,wait,1,0.1);
    }
    if(COUNT%16==10 ) {
        let wait = getRandomFloat(0,10);
        setTimeout(playNote_ms01,wait,1,0.7);
    }
    if(COUNT%16==12 ) {
        let wait = getRandomFloat(0,10);
        setTimeout(playNote_ms01,wait,1,0.2);
    }

    // snare (ms02)
    if(COUNT%8==0) {
        playNote_ms02(1,0.7);
    }

    // hat01 (ms03)
    if(COUNT%chooseFromArray([2,4,1])==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms03,wait,1,vel);
    }

    // sh01 (ms04)
    if(COUNT%4==0) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.1);
    }
    if(COUNT%4==1) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.03);
    }
    if(COUNT%4==3) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.07);
    }

    // ms05 (gas)
    if(COUNT%64==24) {
        let deg = 1;
        playNote_ms05(deg,0.10);
    }

    // ms06 (wu waa)
    // ps02
    if(COUNT%32==20 && BARMOD%2==0) {
        playNote_ms06(-10,0.7);
    }
    if(COUNT%32==22 && BARMOD%2==0) {
        playNote_ms06(-10-7,0.5);
    }

    // ms07
    let ms07_vel = 0.2;
    if(COUNT%64==32) {
        device.parametersById.get("ms07/decay").value = 100;
        playNote_ms07(3,ms07_vel);
    } 
    if (COUNT%64==33) {
        playNote_ms07(3,ms07_vel/2);
    }
    if(COUNT%64==35) {
        playNote_ms07(3,ms07_vel);
    }
    if (COUNT%64==36) {
        playNote_ms07(3,ms07_vel/2);
    }

    if (COUNT%64==48) {
        device.parametersById.get("ms07/decay").value = 100;
        playNote_ms07(-4,ms07_vel);
    }

    // ms08
    // if(COUNT%128==84) {

    //     let deg = -12;
    //     let wait = 0;
    //     let vel = 0.7;

    //     for(let i=0; i<5; i++) {
    //         setTimeout(playNote_ms08,wait,deg,vel);
    //         wait = wait + 100;
    //         vel = vel * 0.96;
    //     }
    // }





    // ps01
    if(COUNT%128==64) {
        playNote_ps01(1,0.7);
        playNote_ps01(2,0.5);
        playNote_ps01(-7,0.2);
    }

    // ps02
    if(COUNT%32==24 && BARMOD>2) {
        setTimeout(playNote_ps02,0,0,0.7);
        setTimeout(playNote_ps02,10,3,0.5);
        setTimeout(playNote_ps02,20,5,0.2);
    }
    if(COUNT%32==25 && BARMOD>2) {
        setTimeout(playNote_ps02,0,0,0.7);
        setTimeout(playNote_ps02,10,3,0.5);
        setTimeout(playNote_ps02,20,5,0.2);
    }

    // ps03
    if(COUNT%64==0) {

    }





}