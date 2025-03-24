function updateParams_Wallet() {
    device.parametersById.get("scaletype").value = 2;

    device.parametersById.get("b01/attack").value = 10;

    device.parametersById.get("ps02/attack").value = 100;


    TIME2 = 120;


    device.parametersById.get("ms07/decay").value = 1000;
    device.parametersById.get("ms07/gain").value = 0.05;
    device.parametersById.get("ms07/oct").value = 0.125;



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

    // ps02
    device.parametersById.get("ps02/oct").value = 0.5;
    device.parametersById.get("ps02/attack").value = 10;
    device.parametersById.get("ps02/decay").value = 100;
    device.parametersById.get("ps02/shape").value = 1.0;
    device.parametersById.get("ps02/pow").value = 0.5;
    device.parametersById.get("ps02/gain").value = 0.015;
    device.parametersById.get("ps02/osc").value = 1;
    device.parametersById.get("ps02/pan").value = 0.6;
    device.parametersById.get("ps02/drive").value = 0.7;
    device.parametersById.get("ps02/send").value = 0.2;
    device.parametersById.get("ps02/hpf").value = 250;
    device.parametersById.get("ps02/lpf").value = 2500;
    device.parametersById.get("ps02/fluxFreq").value = 0.5;
    device.parametersById.get("ps02/fluxAmnt").value = 0.1;
    for(let i=0; i<8; i++) {
        playNote_ps02(0,0);
    }

    // ps03
    device.parametersById.get("ps03/oct").value = 2.0;
    device.parametersById.get("ps03/attack").value = 200;
    device.parametersById.get("ps03/decay").value = 6000;
    device.parametersById.get("ps03/shape").value = 1;
    device.parametersById.get("ps03/pow").value = 0.5;
    device.parametersById.get("ps03/gain").value = 0.006;
    device.parametersById.get("ps03/osc").value = 1;
    device.parametersById.get("ps03/pan").value = 0.4;
    device.parametersById.get("ps03/drive").value = 1.0;
    device.parametersById.get("ps03/glide").value = 60;
    device.parametersById.get("ps03/hpf").value = 250;
    device.parametersById.get("ps03/lpf").value = 600;
    device.parametersById.get("ps03/send").value = 0.1;
    device.parametersById.get("ps03/fluxFreq").value = 0.0005;
    device.parametersById.get("ps03/fluxAmnt").value = 0.01;
    for(let i=0; i<8; i++) {
        playNote_ps03(0,0);
    }


    // ms07
    device.parametersById.get("ms07/osc").value = 1;
    device.parametersById.get("ms07/attack").value = 10;
    device.parametersById.get("ms07/decay").value = 400;
    device.parametersById.get("ms07/pow").value = 4;
    device.parametersById.get("ms07/shape").value = 1;
    device.parametersById.get("ms07/oct").value = 0.125;
    device.parametersById.get("ms07/gain").value = 0.05;
    device.parametersById.get("ms07/pan").value = 0.5;
    device.parametersById.get("ms07/drive").value = 4.0;
    device.parametersById.get("ms07/send").value = 0.05;
    device.parametersById.get("ms07/hpf").value = 50;
    device.parametersById.get("ms07/fluxFreq").value = 0.01;
    device.parametersById.get("ms07/fluxAmnt").value = 0.01;
    playNote_ms07(0,0);


}





function playInstruments_Wallet() {

    // kick (ms01)
    if(COUNT%16==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }
    // if(COUNT%16==3) {
    //     let vel = getRandomFloat(0.1,0.4);
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms01,wait,1,vel);
    // }
    if(COUNT%16==7) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }
    if(COUNT%16==8) {
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
    if(COUNT%8==4) {
        playNote_ms02(1,0.7);
    }
    // if(COUNT%16==16) {
    //     playNote_ms02(1,0.3);
    // }

    // hat01 (ms03)
    if(COUNT%2==0) {
        let vel = getRandomFloat(0.1,0.4)/4;
        let wait = getRandomFloat(0,10);
        setTimeout(playNote_ms03,wait,1,vel);
    }
    // hat01 (ms03)
    if(COUNT%3==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,10);
        setTimeout(playNote_ms03,wait,1,vel);
    }

    // sh01 (ms04)
    if(COUNT%8==3) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.1);
    }
    if(COUNT%8==4) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms04,wait,1,0.03);
    }


    // ms07
    if(makeChoice(25)) {
        device.parametersById.get("ms07/attack").value = 400;
    } else {
        device.parametersById.get("ms07/attack").value = 10;
    }
    var x = 'x';
    var deg_arr = [8,8,x,x,x,x,x,x,7,7,x,8,x,5,6,7];
    var deg = deg_arr[COUNT%16];
    if(deg!='x') {
        let wait = getRandomFloat(0,20);
        let vel = getRandomFloat(0.1,0.6);
        setTimeout(playNote_ms07,wait,deg,vel);
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


    // ps02
    device.parametersById.get("ps02/attack").value = 10;

    if(COUNT%128==64) {
        playNote_ps02(6,0.7);
        playNote_ps02(6+9,0.7);
    }
    if(COUNT%128==65) {
        playNote_ps02(5,0.3);
        playNote_ps02(5+9,0.3);
    }
    if(COUNT%128==67) {
        playNote_ps02(6,0.5);
        playNote_ps02(6+9,0.5);
    }


    
    if(COUNT%256>224) {
    // if(makeChoice(25)) {
        device.parametersById.get("ps02/attack").value = 40;
        var x = 'x';
        var deg_arr = [8,8,x,x,x,x,x,x,7,7,x,8,x,5,6,7];
        var deg = deg_arr[COUNT%16];
        if(deg!='x') {
            let wait = getRandomFloat(0,20);
            let vel = getRandomFloat(0.3,0.6);
            setTimeout(playNote_ps02,wait,deg,vel);
            setTimeout(playNote_ps02,wait,deg+9,vel);
        }
    }


    // ps03
    if(COUNT%128==64) {
        playNote_ps03(6,0.7);
        playNote_ps03(6-9,0.2);
    }
    if(COUNT%128==80) {
        playNote_ps03(4,0.7);
    }
    if(COUNT%128==98) {
        playNote_ps03(7,0.7);
    }


}