function updateParams_Lounge() {

    device.parametersById.get("scaletype").value = 2;

    TIME = 102;

    
    // b01
    device.parametersById.get("b01/osc").value = 1;
    device.parametersById.get("b01/attack").value = 10;
    device.parametersById.get("b01/decay").value = 400;
    device.parametersById.get("b01/pow").value = 0.7;
    device.parametersById.get("b01/shape").value = 1.6;
    device.parametersById.get("b01/oct").value = 0.25;
    device.parametersById.get("b01/gain").value = 0.01;
    device.parametersById.get("b01/pan").value = 0.50;
    device.parametersById.get("b01/drive").value = 4.0;
    device.parametersById.get("b01/hpf").value = 80;
    device.parametersById.get("b01/lpf").value = 2000;
    device.parametersById.get("b01/send").value = 0.1;
    device.parametersById.get("b01/fluxFreq").value = 0.5;
    device.parametersById.get("b01/fluxAmnt").value = 0.1;
    playNote_b01(0,0);

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
    device.parametersById.get("ms07/attack").value = 20;
    device.parametersById.get("ms07/decay").value = 6000;
    device.parametersById.get("ms07/pow").value = 6;
    device.parametersById.get("ms07/shape").value = 2;
    device.parametersById.get("ms07/oct").value = 1;
    device.parametersById.get("ms07/gain").value = 0.003;
    device.parametersById.get("ms07/pan").value = 0.6;
    device.parametersById.get("ms07/drive").value = 4.0;
    device.parametersById.get("ms07/send").value = 0.30;
    device.parametersById.get("ms07/hpf").value = 250;
    device.parametersById.get("ms07/glide").value = 200;
    device.parametersById.get("ms07/fluxFreq").value = 0.7;
    device.parametersById.get("ms07/fluxAmnt").value = 0.5;
    playNote_ms07(0,0);

    // ms08 (bleep)
    device.parametersById.get("ms08/osc").value = 1;
    device.parametersById.get("ms08/attack").value = 15;
    device.parametersById.get("ms08/decay").value = 600;
    device.parametersById.get("ms08/pow").value = 2;
    device.parametersById.get("ms08/shape").value = 2;
    device.parametersById.get("ms08/oct").value = 2;
    device.parametersById.get("ms08/gain").value = 0.003;
    device.parametersById.get("ms08/pan").value = 0.7;
    device.parametersById.get("ms08/drive").value = 4.0;
    device.parametersById.get("ms08/send").value = 0.30;
    device.parametersById.get("ms08/tune").value = 443;
    device.parametersById.get("ms08/hpf").value = 2250;
    device.parametersById.get("ms08/glide").value = 20;
    device.parametersById.get("ms08/fluxFreq").value = 0.5;
    device.parametersById.get("ms08/fluxAmnt").value = 1.0;
    playNote_ms08(0,0);

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

    // ps02
    device.parametersById.get("ps02/oct").value = 0.5;
    device.parametersById.get("ps02/attack").value = 10;
    device.parametersById.get("ps02/decay").value = 400;
    device.parametersById.get("ps02/pow").value = 4;
    device.parametersById.get("ps02/shape").value = 4.0;
    device.parametersById.get("ps02/gain").value = 0.015;
    device.parametersById.get("ps02/osc").value = 2;
    device.parametersById.get("ps02/pan").value = 0.4;
    device.parametersById.get("ps02/drive").value = 1.0;
    device.parametersById.get("ps02/send").value = 0.6;
    device.parametersById.get("ps02/hpf").value = 250;
    device.parametersById.get("ps02/lpf").value = 2500;
    device.parametersById.get("ps02/glide").value = 0;
    device.parametersById.get("ps02/fluxFreq").value = 1;
    device.parametersById.get("ps02/fluxAmnt").value = 0.01;
    for(let i=0; i<8; i++) {
        playNote_ps02(0,0);
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

    var x = 'x';

    if(COUNT%64<48){
        var deg_arr = [0  ,x,x,x,x,x,1  ,x,x,x,x,x,x,x,x,x];
        var att_arr = [450,x,x,x,x,x,300,x,x,x,x,x,x,x,x,x];
        var deg = deg_arr[COUNT%16];
        var att = att_arr[COUNT%16];
        if(deg!='x') {
            // device.parametersById.get("b01/attack").value = att;
            device.parametersById.get("b01/decay").value = att;
            let wait = getRandomFloat(0,20);
            let vel = 0.2;
            setTimeout(playNote_b01,wait,deg,vel);
        }
    }

    if(COUNT%64>47){
        var deg_arr = [3  ,x,x,x,x,x,2  ,x,x,x,x,x,0  ,x,x,x,x,x,x,x,x,x,x,x];
        var att_arr = [450,x,x,x,x,x,300,x,x,x,x,x,200,x,x,x,x,x,x,x,x,x,x,x];
        var deg = deg_arr[(COUNT-48)%16];
        var att = att_arr[(COUNT-48)%16];
        if(deg!='x') {
            // console.log(deg)
            // device.parametersById.get("b01/attack").value = att;
            device.parametersById.get("b01/decay").value = att*2;
            let wait = getRandomFloat(0,20);
            let vel = 0.1;
            setTimeout(playNote_b01,wait,deg,vel);
        }
    }


    // kick (ms01)
    if(COUNT%4==0) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }
    if(COUNT%8==6) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }
    // if(COUNT%16==9) {
    //     let vel = getRandomFloat(0.1,0.4);
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms01,wait,1,vel);
    // }


    // snare (ms02)
    if(COUNT%16==8) {
        device.parametersById.get("ms02/attack").value = 5;
        device.parametersById.get("ms02/decay").value = 20;
        playNote_ms02(1,0.7);
        var wait = getRandomFloat(30,40);
        setTimeout(playNote_ms02,wait,1,0.03);
    }

    // snare (ms02)
    if(COUNT%1==0 && makeChoice(50) && COUNT%16!=8) {
        device.parametersById.get("ms02/attack").value = getRandomFloat(1,5);
        device.parametersById.get("ms02/decay").value = getRandomFloat(1,20);

        let vel = getRandomFloat(0.1,0.3)*0.3;
        let wait = getRandomFloat(0,20);
        playNote_ms02(1,vel);
    }


    // hat01 (ms03)
    if(COUNT%2==0) {
        var vel = getRandomFloat(0.1,0.4)*0.2;
        var wait = getRandomFloat(0,20);
        setTimeout(playNote_ms03,wait,1,vel);
        var vel = getRandomFloat(0.1,0.4)*0.1;
        var wait = getRandomFloat(60,70);
        setTimeout(playNote_ms03,wait,1,vel);
    }


    // // hat01 (ms03)
    // if(COUNT%2==1) {

    // }



    // sh01 (ms04)
    if(COUNT%8==3) {
        let wait = getRandomFloat(0,0);
        setTimeout(playNote_ms04,wait,1,0.1);
    }
    // if(COUNT%8==4) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms04,wait,1,0.03);
    // }
    // if(COUNT%4==0) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms04,wait,1,0.01);
    // }


    // ms05 (gas)
    if(COUNT%64==20) {
        let deg = 1;
        playNote_ms05(deg,0.10);
    }

    // ms06
    if(COUNT%4==2) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms06,wait,1,0.1);
    }
    if(COUNT%4==3) {
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms06,wait,1,0.05);
    }





    // ms07
    if(COUNT%64==40) {
        playNote_ms07(-5,0.01);
        let wait = getRandomFloat(1,20);
        setTimeout(playNote_ms07,wait,1,0.1);
    }

    // if(COUNT%2==0) {
    //     var x = 'x';
    //     var deg_arr = [8,8,x,x,x,x,x,x,7,7,x,8,x,5,6,7];
    //     var dec_arr = [450,100,x,x,x,x,x,x,450,100,x,300,x,400,410,80];
    //     var deg = deg_arr[COUNT16%16];
    //     var dec = dec_arr[COUNT16%16];
    //     if(deg!='x') {
    //         device.parametersById.get("ms06/decay").value = dec*1.5;
    //         device.parametersById.get("ms07/decay").value = dec*1.5;
    //         device.parametersById.get("ms08/decay").value = dec*1.5;

    //         let wait = getRandomFloat(0,30);
    //         let vel = getRandomFloat(0.1,0.3);
    //         // setTimeout(playNote_ms06,wait,deg,vel);
    //         wait = getRandomFloat(0,30);
    //         vel = getRandomFloat(0.1,0.3);
    //         setTimeout(playNote_ms07,wait,deg+2,vel);
    //         wait = getRandomFloat(0,30);
    //         vel = getRandomFloat(0.1,0.3);
    //         setTimeout(playNote_ms08,wait,deg,vel);
    //     }
    // }

    // let ms06_vel = 0.2;
    // let ms07_vel = 0.2;
    // let ms08_vel = 0.2;


    // if(COUNT%64==32) {
    //     let dec = 1200;

    //     device.parametersById.get("ms06/decay").value = dec;
    //     device.parametersById.get("ms07/decay").value = dec;
    //     device.parametersById.get("ms08/decay").value = dec;

    //     let N1 = 5;
    //     let N2 = 5;
    //     var wait = 0;
    //     // var deg = 0;

    //     for(let i=0; i<N1; i++) {
    //         let deg0 = 0 + i;
    //         for(let j=0; j<N2; j++) {
    //             deg = deg0 + j;
    //             setTimeout(playNote_ms06,wait,deg,ms06_vel*0.8**j);
    //             setTimeout(playNote_ms08,wait,deg,ms08_vel*0.8**j);
    //             setTimeout(playNote_ms07,wait,deg,ms08_vel*0.8**j);
    //             wait = wait + 100;
    //         }
    //         deg0 = deg0 + i;
    //     }
    // }

    // if(COUNT%64==32) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms07,wait,3,ms07_vel);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,3,ms08_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms06,wait,3,ms06_vel/2);
    // } 
    // if (COUNT%64==33) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms07,wait,3,ms07_vel/2);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,3,ms08_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms06,wait,3,ms06_vel/2);
    // }
    // if(COUNT%64==35) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms07,wait,3,ms07_vel);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,3,ms08_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms06,wait,3,ms06_vel/2);
    // }
    // if (COUNT%64==36) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms07,wait,3,ms07_vel/2);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,3,ms08_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms06,wait,3,ms06_vel/2);
    // }
    // if(COUNT%64==40) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms07,wait,4,ms07_vel);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,4,ms08_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms06,wait,3,ms06_vel/2);
    // } 
    // if (COUNT%64==43) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms07,wait,4,ms07_vel/2);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,4,ms08_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms06,wait,3,ms06_vel/2);
    // }

    // if (COUNT%64==49) {
    //     let dec = 4000;
    //     device.parametersById.get("ms06/decay").value = dec;
    //     device.parametersById.get("ms07/decay").value = dec;
    //     device.parametersById.get("ms08/decay").value = dec;
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms07,wait,8,ms07_vel);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,8,ms08_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms06,wait,3,ms06_vel/2);
    // }
    // if (COUNT%64==51) {
    //     let wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,8,ms07_vel/2);
    //     wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,8,ms07_vel/2);
    //             wait = getRandomFloat(0,20);
    //     setTimeout(playNote_ms08,wait,3,ms06_vel/2);
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



    // if(COUNT%4==0) {
    //     var x = 'x';
    //     var deg_arr = [8,8,x,x,x,x,x,x,7,7,x,8,x,5,6,7];
    //     var dec_arr = [450,100,x,x,x,x,x,x,450,100,x,300,x,400,410,80];
    //     var deg = deg_arr[COUNT16%16];
    //     var dec = dec_arr[COUNT16%16];
    //     if(deg!='x') {
    //         device.parametersById.get("ps02/decay").value = dec*4;

    //         let wait = getRandomFloat(0,30);
    //         let vel = getRandomFloat(0.1,0.3);
    //         // setTimeout(playNote_ms06,wait,deg,vel);
    //         wait = getRandomFloat(0,30);
    //         vel = getRandomFloat(0.1,0.3);
    //         setTimeout(playNote_ps02,wait,deg+2,vel);
    //         wait = getRandomFloat(0,30);
    //         vel = getRandomFloat(0.1,0.3);
    //         setTimeout(playNote_ps02,wait,deg,vel);
    //     }
    // }

    if(COUNT%128==96) {
        // let dec = 1200;

        let N1 = 3;
        let N2 = 5;
        var wait0 = 0;
        var vel = 0.4;
        let deg0 = 0;
        // var deg = 0;

        let dec_arr = [10,20,1000];

        for(let i=0; i<N1; i++) {
            // let deg0 = 0 + i;
            deg0 = deg0 + i;
            wait0 = wait0 + i*TIME*4;

            // device.parametersById.get("ps02/decay").value = dec_arr[i];

            for(let j=0; j<N2; j++) {
                deg = deg0 + j*2;
                wait = wait0 + 10*j;
                setTimeout(playNote_ps02,wait,deg,vel*0.8**j);
            }

        }
    }

    // if(COUNT%64<48){
    //     // var x = 'x';
    //     var deg_arr = [0  ,x,x,x,x,x,1  ,x,x,x,x,x,x,x,x,x];
    //     var att_arr = [450,x,x,x,x,x,100,x,x,x,x,x,x,x,x,x];
    //     var deg = deg_arr[COUNT%16];
    //     var att = att_arr[COUNT%16];
    //     if(deg!='x') {
    //         // device.parametersById.get("ps02/attack").value = att;
    //         device.parametersById.get("ps02/decay").value = att;
    //         let wait = getRandomFloat(0,20);
    //         let vel = getRandomFloat(0.1,0.6);
    //         setTimeout(playNote_ps02,wait,deg,vel);
    //     }
    // }

    // if(COUNT%64>47){
    //     var deg_arr = [3  ,x,x,x,x,x,2  ,x,x,x,x,x,0  ,x,x,x,x,x,x,x,x,x,x,x];
    //     var att_arr = [450,x,x,x,x,x,300,x,x,x,x,x,200,x,x,x,x,x,x,x,x,x,x,x];
    //     var deg = deg_arr[(COUNT-48)%16];
    //     var att = att_arr[(COUNT-48)%16];
    //     if(deg!='x') {
    //         // console.log(deg)
    //         // device.parametersById.get("b01/attack").value = att;
    //         device.parametersById.get("ps02/decay").value = att*2;
    //         let wait = getRandomFloat(0,20);
    //         let vel = 0.1;
    //         setTimeout(playNote_ps02,wait,deg,vel);
    //     }
    // }



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