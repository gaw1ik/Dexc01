function updateParams_Wallet() {

    device.parametersById.get("scaletype").value = 2;

    device.parametersById.get("b01/attack").value = 10;
    device.parametersById.get("b01/oct").value = 0.25;
    device.parametersById.get("b01/fluxAmnt").value = 1;

    device.parametersById.get("ps02/attack").value = 10;


    TIME2 = 120;


}





function playInstruments_Wallet() {


    b01_vel = 0.7;
    if(COUNT%32==8) {
        let deg = 0;
        let vel = b01_vel/4;
        let wait = getRandomFloat(0,30);
        setTimeout(playNote_b01,wait,deg,vel);
    }
    if(COUNT%32==10) {
        let deg = -5;
        let vel = b01_vel;
        let wait = getRandomFloat(0,30);
        setTimeout(playNote_b01,wait,deg,vel);
    }
    if((COUNT%8==2 || COUNT%8==4) && BARMOD<3) {
        let deg = -5;
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
    // if(COUNT%16==12 ) {
    //     let wait = getRandomFloat(0,10);
    //     setTimeout(playNote_ms01,wait,1,0.2);
    // }

    // snare (ms02)
    if(COUNT%8==2) {
        playNote_ms02(1,0.7);
    }

    // hat01 (ms03)
    if(COUNT%chooseFromArray([3,4])==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms03,wait,1,vel);
    }

    // sh01 (ms04)
    if(COUNT%4==2) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.1);
    }
    if(COUNT%4==3) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.03);
    }
    if(COUNT%4==0) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.01);
    }

    // ms05 (gas)
    if(COUNT%64==0) {
        let deg = 1;
        playNote_ms05(deg,0.10);
    }

    // // ms06 (wu waa)
    // if(COUNT%32==20 && BARMOD%2==0) {
    //     playNote_ms06(-10,0.7);
    // }
    // if(COUNT%32==22 && BARMOD%2==0) {
    //     playNote_ms06(-10-7,0.5);
    // }

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
    if(COUNT%128==0) {
        let deg_arr = [-2,0,1];
        let wait = 0;
        let vel = 0.5;
        for(let i=0; i<3; i++) {
            setTimeout(playNote_ps01,wait,deg_arr[i],vel);
            // deg = deg + 1;
            wait = wait + 100;
        }
    }
    if(COUNT%128==120) {
        playNote_ps01(2,0.6);
    }

    // ps02
    if(COUNT%16==12 && BARMOD<2) {
        playNote_ps02(0,0.7);
        playNote_ps02(3,0.5);
        playNote_ps02(5,0.2);
    }
    if(COUNT%16==13 && BARMOD<2) {
        playNote_ps02(0,0.7);
        playNote_ps02(3,0.5);
        playNote_ps02(5,0.2);
    }

    // ps03
    count0 = 12;
    if(COUNT%64==count0) {
        let vel = 0.5;
        playNote_ps03(0,vel);
    }
    if(COUNT%64==count0+6) {
        let vel = 0.4;
        playNote_ps03(-2,vel);
    }
    if(COUNT%64==count0+6*2) {
        let vel = 0.3;
        playNote_ps03(-3,vel);
    }
    if(COUNT%64==34) {
        let vel = 0.3;
        playNote_ps03(-4,vel);
    }
    if(COUNT%64==42) {
        let vel = 0.3;
        playNote_ps03(-3,vel);
    }
    





}