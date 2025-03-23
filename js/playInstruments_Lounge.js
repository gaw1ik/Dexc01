function updateParams_Lounge() {

    device.parametersById.get("scaletype").value = 1;

    device.parametersById.get("b01/attack").value = 100;


    device.parametersById.get("ps02/attack").value = 100;


    TIME2 = 105;


}



b01_attacksTick = 1;

function playInstruments_Lounge() {

    // bass (b01)
    // b01_attacks = [100,1000];
    // if(BAR%3==0) {
    //     b01_attacksTick+=1;
    //     device.parametersById.get("b01/attack").value = b01_attacks[b01_attacksTick%2];
    // }

    if(COUNT%128<64) {
        // device.parametersById.get("b01/fluxFreq").value = 0.5;
        device.parametersById.get("b01/oct").value = 0.125;
        b01_vel = 0.7;
        b01_deg2 = 1;
    } else {
        // device.parametersById.get("b01/fluxFreq").value = 0.4;
        device.parametersById.get("b01/oct").value = 0.25;
        b01_vel = 0.1;
        b01_deg2 = -5;
    }
    if(COUNT%32==1) {
        let deg = 0;
        playNote_b01(deg,b01_vel);
    }
    // if(COUNT%32==7) {
    //     let deg = 0;
    //     playNote_b01(deg,b01_vel/3);
    // }
    if(COUNT%32==8) {
        let deg = b01_deg2
        playNote_b01(deg,b01_vel/2);
    }
    if(COUNT%32==16) {
        let deg = 0;
        playNote_b01(deg,b01_vel);
    }
    // if(COUNT%32==19) {
    //     let deg = 0;
    //     playNote_b01(deg,b01_vel/3);
    // }
    if(COUNT%32==20) {
        let deg = b01_deg2;
        playNote_b01(deg,b01_vel/2);
    }

    // // kick (ms01)
    // if(COUNT%16==8 ) {
    //     playNote_ms01(1,0.3);
    // }

    // snare (ms02)
    if(COUNT%16==10) {
        playNote_ms02(1,0.7);
    }

    // hat01 (ms03)
    if(COUNT%chooseFromArray([2,4,1])==0) {
        playNote_ms03(1,getRandomFloat(0.1,0.4));
    }

    // sh01 (ms04)
    if(COUNT%32==16) {
        playNote_ms04(1,0.7);
    }

    // ms05 (gas)
    if(COUNT%64==24) {

        let deg = 1;
        playNote_ms05(deg,0.05);
    }

    // ms06 (wu waa)
    if(COUNT%64==16) {

        // let deg = -20;
        // setTimeout(playNote_ms06,0,deg,0.03);

    }

    // ms07
    if(COUNT%128==64) {

    }

    // ms08
    if(COUNT%128==84) {

        let deg = -12;
        let wait = 0;
        let vel = 0.7;

        for(let i=0; i<5; i++) {
            setTimeout(playNote_ms08,wait,deg,vel);
            wait = wait + 100;
            vel = vel * 0.96;
        }
    }





    // ps01
    if(COUNT%128==64) {
        playNote_ps01(1,0.7);
        playNote_ps01(2,0.5);
        playNote_ps01(-7,0.2);
    }

    // ps02
    if(COUNT%32==25 && BARMOD>2) {
        playNote_ps02(0,0.7);
        playNote_ps02(1,0.5);
        playNote_ps02(2,0.2);
    }
    if(COUNT%32==26 && BARMOD>2) {
        playNote_ps02(0,0.7);
        playNote_ps02(1,0.5);
        playNote_ps02(2,0.2);
    }

    // ps03
    if(COUNT%64==0) {

    }





}