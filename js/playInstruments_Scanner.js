function updateParams_Scanner() {

    device.parametersById.get("scaletype").value = 2;

    device.parametersById.get("b01/attack").value = 10;

    device.parametersById.get("ps02/attack").value = 100;


    TIME = 105;


    device.parametersById.get("ms07/decay").value = 1000;
    device.parametersById.get("ms07/gain").value = 0.05;
    device.parametersById.get("ms07/oct").value = 0.125;


    // b01
    device.parametersById.get("b01/osc").value = 1;
    device.parametersById.get("b01/attack").value = 10;
    device.parametersById.get("b01/decay").value = 800;
    device.parametersById.get("b01/pow").value = 4;
    device.parametersById.get("b01/shape").value = 1.6;
    device.parametersById.get("b01/oct").value = 0.25;
    device.parametersById.get("b01/gain").value = 0.01;
    device.parametersById.get("b01/pan").value = 0.50;
    device.parametersById.get("b01/drive").value = 4.0;
    device.parametersById.get("b01/hpf").value = 80;
    device.parametersById.get("b01/lpf").value = 4000;
    device.parametersById.get("b01/send").value = 0.1;
    device.parametersById.get("b01/fluxFreq").value = 0.5;
    device.parametersById.get("b01/fluxAmnt").value = 0.5;
    playNote_b01(0,0);

       // ms02 (snare)
       device.parametersById.get("ms02/osc").value = 4;
       device.parametersById.get("ms02/attack").value = 5;
       device.parametersById.get("ms02/decay").value = 20;
       device.parametersById.get("ms02/pow").value = 0.5;
       device.parametersById.get("ms02/shape").value = 2;
       device.parametersById.get("ms02/oct").value = 1;
       device.parametersById.get("ms02/gain").value = 0.01;
       device.parametersById.get("ms02/pan").value = 0.6;
       device.parametersById.get("ms02/drive").value = 4;
       device.parametersById.get("ms02/hpf").value = 250;
       device.parametersById.get("ms02/send").value = 0.4;
       playNote_ms02(0,0);
   
       // ms03 (hat)
       device.parametersById.get("ms03/osc").value = 3;
       device.parametersById.get("ms03/attack").value = 5;
       device.parametersById.get("ms03/decay").value = 150;
       device.parametersById.get("ms03/pow").value = 8;
       device.parametersById.get("ms03/shape").value = 1;
       device.parametersById.get("ms03/oct").value = 1;
       device.parametersById.get("ms03/gain").value = 0.1;
       device.parametersById.get("ms03/pan").value = 0.3;
       device.parametersById.get("ms03/drive").value = 1.0;
       device.parametersById.get("ms03/send").value = 0.7;
       device.parametersById.get("ms03/hpf").value = 8000;
       device.parametersById.get("ms03/lpf").value = 20000;
       playNote_ms03(0,0);
   
       // ms04 (shaker)
       device.parametersById.get("ms04/osc").value = 4;
       device.parametersById.get("ms04/attack").value = 30;
       device.parametersById.get("ms04/decay").value = 30;
       device.parametersById.get("ms04/pow").value = 0.5;
       device.parametersById.get("ms04/shape").value = 1;
       device.parametersById.get("ms04/oct").value = 1;
       device.parametersById.get("ms04/gain").value = 0.04;
       device.parametersById.get("ms04/pan").value = 0.4;
       device.parametersById.get("ms04/drive").value = 1.0;
       device.parametersById.get("ms04/hpf").value = 250;
       device.parametersById.get("ms04/send").value = 0.1;
       device.parametersById.get("ms04/lpf").value = 20000;
       playNote_ms04(0,0);
   
       // ms05 (gas)
       device.parametersById.get("ms05/osc").value = 4;
       device.parametersById.get("ms05/attack").value = 2000;
       device.parametersById.get("ms05/decay").value = 6000;
       device.parametersById.get("ms05/pow").value = 1;
       device.parametersById.get("ms05/shape").value = 1;
       device.parametersById.get("ms05/oct").value = 1;
       device.parametersById.get("ms05/gain").value = 0.005;
       device.parametersById.get("ms05/pan").value = 0.8;
       device.parametersById.get("ms05/drive").value = 1.0;
       device.parametersById.get("ms05/hpf").value = 250;
       device.parametersById.get("ms05/send").value = 0.7;
       playNote_ms05(0,0);



    // ms07
    device.parametersById.get("ms07/osc").value = 1;
    device.parametersById.get("ms07/attack").value = 10;
    device.parametersById.get("ms07/decay").value = 600;
    device.parametersById.get("ms07/pow").value = 2;
    device.parametersById.get("ms07/shape").value = 2;
    device.parametersById.get("ms07/oct").value = 0.25;
    device.parametersById.get("ms07/gain").value = 0.03;
    device.parametersById.get("ms07/pan").value = 0.5;
    device.parametersById.get("ms07/drive").value = 4.0;
    device.parametersById.get("ms07/send").value = 0.05;
    device.parametersById.get("ms07/hpf").value = 250;
    device.parametersById.get("ms07/glide").value = 20;
    device.parametersById.get("ms07/fluxFreq").value = 0.5;
    device.parametersById.get("ms07/fluxAmnt").value = 0.5;
    playNote_ms07(0,0);

    // ms08 (bleep)
    device.parametersById.get("ms08/osc").value = 1;
    device.parametersById.get("ms08/attack").value = 10;
    device.parametersById.get("ms08/decay").value = 600;
    device.parametersById.get("ms08/pow").value = 2;
    device.parametersById.get("ms08/shape").value = 2;
    device.parametersById.get("ms08/oct").value = 0.25;
    device.parametersById.get("ms08/gain").value = 0.01;
    device.parametersById.get("ms08/pan").value = 0.5;
    device.parametersById.get("ms08/drive").value = 4.0;
    device.parametersById.get("ms08/send").value = 0.05;
    device.parametersById.get("ms08/hpf").value = 250;
    device.parametersById.get("ms08/glide").value = 20;
    device.parametersById.get("ms08/fluxFreq").value = 0.5;
    device.parametersById.get("ms08/fluxAmnt").value = 0.5;
    playNote_ms08(0,0);



    // ps01
    device.parametersById.get("ps01/oct").value = 0.5;
    device.parametersById.get("ps01/attack").value = 2;
    device.parametersById.get("ps01/decay").value = 8000;
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
    device.parametersById.get("ps03/attack").value = 200;
    device.parametersById.get("ps03/decay").value = 6000;
    device.parametersById.get("ps03/shape").value = 1;
    device.parametersById.get("ps03/pow").value = 0.5;
    device.parametersById.get("ps03/gain").value = 0.003;
    device.parametersById.get("ps03/osc").value = 1;
    device.parametersById.get("ps03/pan").value = 0.4;
    device.parametersById.get("ps03/drive").value = 1.0;
    device.parametersById.get("ps03/glide").value = 60;
    device.parametersById.get("ps03/hpf").value = 250;
    device.parametersById.get("ps03/lpf").value = 600;
    device.parametersById.get("ps03/send").value = 0.5;
    device.parametersById.get("ps02/glide").value = 0;
    device.parametersById.get("ps03/fluxFreq").value = 0.0005;
    device.parametersById.get("ps03/fluxAmnt").value = 0.01;
    for(let i=0; i<8; i++) {
        playNote_ps03(0,0);
    }


}



b01_attacksTick = 1;

function playInstruments_Scanner() {



    b01_vel = 0.4;
    if(COUNT%32==12) {
        let deg = 2;
        let vel = b01_vel;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b01,wait,deg,vel);
    }
    if(COUNT%32==14) {
        let deg = 2;
        let vel = b01_vel/2;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b01,wait,deg,vel);
    }
    if(COUNT%32==16) {
        let deg = 1;
        let vel = b01_vel/3;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b01,wait,deg,vel);
    }
    if(COUNT%32==20) {
        let deg = -3;
        let vel = b01_vel/4;
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_b01,wait,deg,vel);
    }


    // kick (ms01)
    if(COUNT%8==2) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }
    if(COUNT%16==12) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }


    // snare (ms02)
    if(COUNT%16==10) {
        playNote_ms02(1,0.7);
    }
    if(COUNT%16==16) {
        playNote_ms02(1,0.3);
    }

    // hat01 (ms03)
    if(COUNT%2==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms03,wait,1,vel);
    }



    // sh01 (ms04)
    if(COUNT%4==2) {
        let wait = getRandomFloat(0,20);
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

    // ms08
    let ms08_vel = 0.2;
    if(COUNT%64==32) {
        playNote_ms08(3,ms08_vel);
    } 
    if (COUNT%64==35) {
        playNote_ms08(3,ms08_vel/2);
    }
    if(COUNT%64==40) {
        playNote_ms08(2,ms08_vel);
    } 
    if (COUNT%64==43) {
        playNote_ms08(2,ms08_vel/2);
    }
    if(COUNT%64==48) {
        playNote_ms08(1,ms08_vel);
    } 
    if (COUNT%64==51) {
        playNote_ms08(1,ms08_vel/2);
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
    // count0 = 12;
    if(COUNT%128==96) {
        let vel = 0.3;
        // let wait = 0;
        playNote_ps03(0,vel);
        playNote_ps03(3,vel);
        playNote_ps03(6,vel);
        // let deg = -14;
        // let deg_arr = [-14,-12,-10,-8,-4,-3,-4,-5,-6];

    }








}