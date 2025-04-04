function updateParams_Wallet() {
    device.parametersById.get("scaletype").value = 2;




    TIME = 120;


    device.parametersById.get("ms07/decay").value = 1000;
    device.parametersById.get("ms07/gain").value = 0.05;
    device.parametersById.get("ms07/oct").value = 0.125;

    // b01
    device.parametersById.get("b01/osc").value = 1;
    device.parametersById.get("b01/attack").value = 10;
    device.parametersById.get("b01/decay").value = 400;
    device.parametersById.get("b01/pow").value = 0.7;
    device.parametersById.get("b01/shape").value = 1.6;
    device.parametersById.get("b01/oct").value = 0.125;
    device.parametersById.get("b01/gain").value = 0.01;
    device.parametersById.get("b01/pan").value = 0.50;
    device.parametersById.get("b01/drive").value = 4.0;
    device.parametersById.get("b01/hpf").value = 80;
    device.parametersById.get("b01/lpf").value = 4000;
    device.parametersById.get("b01/send").value = 0.1;
    device.parametersById.get("b01/fluxFreq").value = 0.5;
    device.parametersById.get("b01/fluxAmnt").value = 0.1;
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

           // ms06
    device.parametersById.get("ms06/osc").value = 1;
    device.parametersById.get("ms06/attack").value = 1;
    device.parametersById.get("ms06/decay").value = 600;
    device.parametersById.get("ms06/pow").value = 3;
    device.parametersById.get("ms06/shape").value = 2;
    device.parametersById.get("ms06/oct").value = 16;
    device.parametersById.get("ms06/gain").value = 0.003;
    device.parametersById.get("ms06/pan").value = 0.3;
    device.parametersById.get("ms06/drive").value = 4.0;
    device.parametersById.get("ms06/send").value = 0.30;
    device.parametersById.get("ms06/hpf").value = 2000;
    device.parametersById.get("ms06/tune").value = 500*4.1;
    device.parametersById.get("ms06/glide").value = 15;
    device.parametersById.get("ms06/fluxFreq").value = 0.7;
    device.parametersById.get("ms06/fluxAmnt").value = 1.0;
    playNote_ms06(0,0);


        // ms07
        device.parametersById.get("ms07/osc").value = 1;
        device.parametersById.get("ms07/attack").value = 10;
        device.parametersById.get("ms07/decay").value = 100;
        device.parametersById.get("ms07/pow").value = 2;
        device.parametersById.get("ms07/shape").value = 2;
        device.parametersById.get("ms07/oct").value = 0.25;
        device.parametersById.get("ms07/gain").value = 0.10;
        device.parametersById.get("ms07/pan").value = 0.5;
        device.parametersById.get("ms07/drive").value = 4.0;
        device.parametersById.get("ms07/send").value = 0.05;
        device.parametersById.get("ms07/hpf").value = 250;
        device.parametersById.get("ms07/glide").value = 0;
        device.parametersById.get("ms07/tune").value = 440;
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
        device.parametersById.get("ms08/tune").value = 440;
        device.parametersById.get("ms08/glide").value = 0;
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

    // ps02
    device.parametersById.get("ps02/oct").value = 0.5;
    device.parametersById.get("ps02/attack").value = 10;
    device.parametersById.get("ps02/decay").value = 100;
    device.parametersById.get("ps02/shape").value = 1.0;
    device.parametersById.get("ps02/pow").value = 0.5;
    device.parametersById.get("ps02/gain").value = 0.010;
    device.parametersById.get("ps02/osc").value = 1;
    device.parametersById.get("ps02/pan").value = 0.6;
    device.parametersById.get("ps02/drive").value = 0.7;
    device.parametersById.get("ps02/send").value = 0.4;
    device.parametersById.get("ps02/hpf").value = 250;
    device.parametersById.get("ps02/lpf").value = 2500;
    device.parametersById.get("ps02/fluxFreq").value = 0.5;
    device.parametersById.get("ps02/fluxAmnt").value = 0.9;
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

    // b01
    if(makeChoice(25)) {
        device.parametersById.get("b01/attack").value = 400;
    } else {
        device.parametersById.get("b01/attack").value = 10;
    }
    var x = 'x';
    var deg_arr = [8,8,x,x,x,x,x,x,7,7,x,8,x,5,6,7];
    var att_arr = [450,100,x,x,x,x,x,x,450,100,x,300,x,400,410,80];
    var deg = deg_arr[COUNT%16];
    var att = att_arr[COUNT%16];
    if(deg!='x') {
        device.parametersById.get("b01/decay").value = att;
        let wait = getRandomFloat(0,20);
        let vel = getRandomFloat(0.1,0.6);
        setTimeout(playNote_b01,wait,deg,vel);
    }

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


    // ms06
    if(COUNT%4==0) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms06,wait,1,0.05);
    }
    if(COUNT%4==2) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms06,wait,1,0.01);
    }


    // // ms07
    // if(makeChoice(25)) {
    //     device.parametersById.get("ms07/attack").value = 400;
    // } else {
    //     device.parametersById.get("ms07/attack").value = 10;
    // }
    // var x = 'x';
    // var deg_arr = [8,8,x,x,x,x,x,x,7,7,x,8,x,5,6,7];
    // var att_arr = [450,100,x,x,x,x,x,x,450,100,x,300,x,400,410,80];
    // var deg = deg_arr[COUNT%16];
    // var att = att_arr[COUNT%16];
    // if(deg!='x') {
    //     device.parametersById.get("ms07/decay").value = att;
    //     let wait = getRandomFloat(0,20);
    //     let vel = getRandomFloat(0.1,0.6);
    //     setTimeout(playNote_ms07,wait,deg,vel);
    // }

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
    var vel = 0.6;
    if(COUNT%128==64) {
        device.parametersById.get("ps02/attack").value = 10;
        device.parametersById.get("ps02/decay").value = 150;
        device.parametersById.get("ps02/fluxAmnt").value = 0.7;
        playNote_ps02(6,vel);
        playNote_ps02(6+9,vel);
    }
    if(COUNT%128==65) {
        device.parametersById.get("ps02/attack").value = 5;
        device.parametersById.get("ps02/decay").value = 80;
        device.parametersById.get("ps02/fluxAmnt").value = 0.1;
        playNote_ps02(5,vel/3);
        playNote_ps02(5+9,vel/3);
    }
    if(COUNT%128==67) {
        device.parametersById.get("ps02/attack").value = 10;
        device.parametersById.get("ps02/decay").value = 150;
        device.parametersById.get("ps02/fluxAmnt").value = 0.9;
        playNote_ps02(6,vel/2);
        playNote_ps02(6+9,vel/2);
    }


    
    if(COUNT%256>224) {
        var x = 'x';
        var deg_arr = [8,8,x,x,x,x,x,x,7,7,x,8,x,5,6,7];
        var att_arr = [100,80,x,x,x,x,x,x,100,80,x,80,x,100,80,120];
        var dec_arr = [150,80,x,x,x,x,x,x,150,80,x,80,x,100,80,120];
        var fla_arr = [0.9,0.5,x,x,x,x,x,x,0.9,0.5,x,0.9,x,0.5,0.6,0.8];
        var deg = deg_arr[COUNT%16];
        var att = att_arr[COUNT%16];
        var dec = dec_arr[COUNT%16];
        var fla = fla_arr[COUNT%16];
        if(deg!='x') {
            device.parametersById.get("ps02/attack").value = att/10;
            device.parametersById.get("ps02/decay").value = dec*1.5;
            device.parametersById.get("ps02/fluxAmnt").value = fla;
            let wait = getRandomFloat(0,20);
            let vel = getRandomFloat(0.4,0.6);
            setTimeout(playNote_ps02,wait,deg,vel);
            setTimeout(playNote_ps02,wait,deg+9,vel/2);
            setTimeout(playNote_ps02,wait,deg+13,vel/30);
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