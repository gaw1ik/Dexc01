function updateParams_Lounge() {

    device.parametersById.get("scaletype").value = 2;

    device.parametersById.get("b01/attack").value = 10;


    device.parametersById.get("ps02/attack").value = 100;


    TIME2 = 105;

    // // ms04 (shaker)
    // device.parametersById.get("ms04/osc").value = 4;
    // device.parametersById.get("ms04/attack").value = 30;
    // device.parametersById.get("ms04/decay").value = 30;
    // device.parametersById.get("ms04/pow").value = 0.5;
    // device.parametersById.get("ms04/shape").value = 1;
    // device.parametersById.get("ms04/oct").value = 1;
    // device.parametersById.get("ms04/gain").value = 0.04;
    // device.parametersById.get("ms04/pan").value = 0.4;
    // device.parametersById.get("ms04/drive").value = 1.0;
    // device.parametersById.get("ms04/hpf").value = 250;
    // device.parametersById.get("ms04/send").value = 0.1;
    // device.parametersById.get("ms04/lpf").value = 20000;
    // playNote_ms04(0,0);


    device.parametersById.get("ms07/decay").value = 1000;
    device.parametersById.get("ms07/gain").value = 0.05;
    device.parametersById.get("ms07/oct").value = 0.125;



    // ps01
    device.parametersById.get("ps01/oct").value = 0.5;
    device.parametersById.get("ps01/attack").value = 2;
    device.parametersById.get("ps01/decay").value = 4000;
    device.parametersById.get("ps01/shape").value = 1.0;
    device.parametersById.get("ps01/drive").value = 1.0;
    device.parametersById.get("ps01/pow").value = 4;
    device.parametersById.get("ps01/gain").value = 0.02;
    device.parametersById.get("ps01/osc").value = 1;
    device.parametersById.get("ps01/pan").value = 0.35;
    device.parametersById.get("ps01/hpf").value = 250;
    device.parametersById.get("ps01/lpf").value = 800;
    device.parametersById.get("ps01/send").value = 0.7;
    device.parametersById.get("ps01/fluxFreq").value = 0.5;
    device.parametersById.get("ps01/fluxAmnt").value = 0.007;
    for(let i=0; i<8; i++) {
        playNote_ps01(0,0);
    }

    // ps03
    device.parametersById.get("ps03/oct").value = 2.0;
    device.parametersById.get("ps03/attack").value = 20;
    device.parametersById.get("ps03/decay").value = 4000;
    device.parametersById.get("ps03/shape").value = 2;
    device.parametersById.get("ps03/pow").value = 6;
    device.parametersById.get("ps03/gain").value = 0.013;
    device.parametersById.get("ps03/osc").value = 1;
    device.parametersById.get("ps03/pan").value = 0.6;
    device.parametersById.get("ps03/drive").value = 1.0;
    device.parametersById.get("ps03/glide").value = 60;
    device.parametersById.get("ps03/hpf").value = 250;
    device.parametersById.get("ps03/lpf").value = 2500;
    device.parametersById.get("ps03/send").value = 0.5;
    device.parametersById.get("ps03/fluxFreq").value = 0.0005;
    device.parametersById.get("ps03/fluxAmnt").value = 0.01;
    for(let i=0; i<8; i++) {
        playNote_ps03(-14,0);
    }


}



b01_attacksTick = 1;

function playInstruments_Lounge() {



    b02_vel = 0.4;
    if(COUNT%32==12) {
        let deg = 2;
        let vel = b02_vel;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b02,wait,deg,vel);
    }
    if(COUNT%32==14) {
        let deg = 2;
        let vel = b02_vel/2;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b02,wait,deg,vel);
    }
    if(COUNT%32==16) {
        let deg = 1;
        let vel = b02_vel/3;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b02,wait,deg,vel);
    }
    if(COUNT%32==20) {
        let deg = -3;
        let vel = b02_vel/4;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b02,wait,deg,vel);
    }


    // kick (ms01)
    if(COUNT%8==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }
    if(COUNT%16==10) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }


    // snare (ms02)
    if(COUNT%16==10) {
        playNote_ms02(1,0.7);
    }


    // hat01 (ms03)
    if(COUNT%2==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms03,wait,1,vel);
    }



    // sh01 (ms04)
    if(COUNT%8==3) {
        let wait = getRandomFloat(0,0);
        setTimeout(playNote_ms04,wait,1,0.1);
    }
    if(COUNT%8==4) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.03);
    }
    // if(COUNT%4==0) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms04,wait,1,0.01);
    // }


    // ms05 (gas)
    if(COUNT%64==20) {
        let deg = 1;
        playNote_ms05(deg,0.10);
    }

    // ms07
    let ms07_vel = 0.2;
    if(COUNT%64==32) {
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
        playNote_ms07(-4,ms07_vel);
    }


    // ps01
    if(COUNT%64==54) {
        playNote_ps01(1,0.6);
        setTimeout(playNote_ps01,100,4,0.3);
    }
    if(COUNT%64==56) {
        playNote_ps01(3,0.4);
        setTimeout(playNote_ps01,100,2,0.2);
    }
    if(COUNT%64==0) {
        playNote_ps01(1,0.7);
        setTimeout(playNote_ps01,100,6,0.3);
    }



    // ps03
    count0 = 12;
    if(COUNT%128==count0) {
        let vel = 0.3;
        let wait = 0;
        // playNote_ps03(0,vel);
        let deg = -14;
        let deg_arr = [-14,-12,-10,-8,-4,-3,-4,-5,-6];
        for(let i=0; i<9; i++) {
            deg = deg_arr[i];
            setTimeout(playNote_ps03,wait,deg,vel);
            wait = wait + 100;
            vel = vel * 0.96;
            deg = deg + 2;

        }
    }

    // // ps03
    // count0 = 12;
    // if(COUNT%64==count0) {
    //     let vel = getRandomFloat(0.3,0.6);
    //     let wait = getRandomFloat(0,30);
    //     let deg = -10;
    //     setTimeout(playNote_ps03,wait,deg,vel);
    // }

    // if(COUNT%64==count0+6) {
    //     let vel = 0.4;
    //     playNote_ps03(-2,vel);
    // }
    // if(COUNT%64==count0+6*2) {
    //     let vel = 0.3;
    //     playNote_ps03(-3,vel);
    // }
    // if(COUNT%64==34) {
    //     let vel = 0.3;
    //     playNote_ps03(-4,vel);
    // }
    // if(COUNT%64==42) {
    //     let vel = 0.3;
    //     playNote_ps03(-3,vel);
    // }








}