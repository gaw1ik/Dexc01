function updateParams_Song03() {

    // PARAMS = 
    // {
    //     master_gain:0.707,
    //     master_lpf: 1.000,
    //     time:0.314,
    //     tune:0.682,
    // }

    // updateParamsState();

    TUNE = 440;
    TIME = 105;

    device.parametersById.get("scaletype").value = 2;

    // MASTER
    device.parametersById.get("master_gain").value = 8;
    device.parametersById.get("master_lpf").value = 20000;
    device.parametersById.get("master_hpf").value = 80;
    device.parametersById.get("master_noising").value = 0.003;
    device.parametersById.get("crackle_gain").value = 0.0001;
    device.parametersById.get("pop_gain").value = 0.0010;
    device.parametersById.get("master_reverb_decay").value = 80;
    device.parametersById.get("master_reverb_hpf").value = 350;
    device.parametersById.get("master_reverb_gain").value = 0.5;

    // PINK NOISE
    device.parametersById.get("pink_gain").value = 0.0001;

    // b01
    device.parametersById.get("b01/gain").value = 0.04;
    device.parametersById.get("b01/lpf").value = 4000;
    device.parametersById.get("b01/hpf").value = 30;
    device.parametersById.get("b01/pan").value = 0.50;
    device.parametersById.get("b01/send").value = 0.1;
    device.parametersById.get("b01/drive").value = 4.0;
    device.parametersById.get("b01/attack").value = 10;
    device.parametersById.get("b01/decay").value = 800;
    device.parametersById.get("b01/pow").value = 4;
    device.parametersById.get("b01/fluxFreq").value = 0.5;
    device.parametersById.get("b01/fluxAmnt").value = 0.5;
    device.parametersById.get("b01/osc").value = 1;
    device.parametersById.get("b01/shape").value = 1.6;
    device.parametersById.get("b01/oct").value = 0.25;
    device.parametersById.get("ms01/glide").value = 0;
    device.parametersById.get("b01/tune").value = TUNE;

    // ms01 (kick)
    device.parametersById.get("ms01/gain").value = 0.8;
    device.parametersById.get("ms01/lpf").value = 20000;
    device.parametersById.get("ms01/hpf").value = 250;
    device.parametersById.get("ms01/pan").value = 0.5;
    device.parametersById.get("ms01/send").value = 0.1;
    device.parametersById.get("ms01/drive").value = 4.0;
    device.parametersById.get("ms01/attack").value = 10;
    device.parametersById.get("ms01/decay").value = 100;
    device.parametersById.get("ms01/pow").value = 4;
    device.parametersById.get("ms01/fluxFreq").value = 0.5;
    device.parametersById.get("ms01/fluxAmnt").value = 0.5;
    device.parametersById.get("ms01/osc").value = 1;
    device.parametersById.get("ms01/shape").value = 2;
    device.parametersById.get("ms01/oct").value = 0.125;
    device.parametersById.get("ms01/glide").value = 0;
    device.parametersById.get("ms01/tune").value = TUNE;
    
    // ms02 (snare)
    device.parametersById.get("ms02/gain").value = 0.60;
    device.parametersById.get("ms02/lpf").value = 8000;
    device.parametersById.get("ms02/hpf").value = 250;
    device.parametersById.get("ms02/pan").value = 0.5;
    device.parametersById.get("ms02/send").value = 0.2;
    device.parametersById.get("ms02/drive").value = 1;
    device.parametersById.get("ms02/attack").value = 10;
    device.parametersById.get("ms02/decay").value = 100;
    device.parametersById.get("ms02/pow").value = 4;
    device.parametersById.get("ms02/fluxFreq").value = 0;
    device.parametersById.get("ms02/fluxAmnt").value = 0;
    device.parametersById.get("ms02/osc").value = 4;
    device.parametersById.get("ms02/shape").value = 1;
    device.parametersById.get("ms02/oct").value = 1;
    device.parametersById.get("ms02/glide").value = 0;
    device.parametersById.get("ms02/tune").value = TUNE;
   
    // ms03 (hat)
    device.parametersById.get("ms03/gain").value = 0.60;
    device.parametersById.get("ms03/lpf").value =  6000;
    device.parametersById.get("ms03/hpf").value =  6000;
    device.parametersById.get("ms03/pan").value = 0.35;
    device.parametersById.get("ms03/send").value = 0.2;
    device.parametersById.get("ms03/drive").value = 1;
    device.parametersById.get("ms03/attack").value = 1;
    device.parametersById.get("ms03/decay").value = 100;
    device.parametersById.get("ms03/pow").value = 8;
    device.parametersById.get("ms03/fluxFreq").value = 0;
    device.parametersById.get("ms03/fluxAmnt").value = 0;
    device.parametersById.get("ms03/osc").value = 3;
    device.parametersById.get("ms03/shape").value = 1;
    device.parametersById.get("ms03/oct").value = 1;
    device.parametersById.get("ms03/glide").value = 0;
    device.parametersById.get("ms03/tune").value = TUNE;

    // ms04 (shaker)
    device.parametersById.get("ms04/gain").value = 0.20;
    device.parametersById.get("ms04/lpf").value =  9000;
    device.parametersById.get("ms04/hpf").value =  250;
    device.parametersById.get("ms04/pan").value = 0.35;
    device.parametersById.get("ms04/send").value = 0.2;
    device.parametersById.get("ms04/drive").value = 1;
    device.parametersById.get("ms04/attack").value = 100;
    device.parametersById.get("ms04/decay").value = 200;
    device.parametersById.get("ms04/pow").value = 2;
    device.parametersById.get("ms04/fluxFreq").value = 0;
    device.parametersById.get("ms04/fluxAmnt").value = 0;
    device.parametersById.get("ms04/osc").value = 4;
    device.parametersById.get("ms04/shape").value = 1;
    device.parametersById.get("ms04/oct").value = 1;
    device.parametersById.get("ms04/glide").value = 0;
    device.parametersById.get("ms04/tune").value = TUNE;
   
    // ms05 (gas)
    device.parametersById.get("ms05/gain").value = 0.020;
    device.parametersById.get("ms05/osc").value = 4;
    device.parametersById.get("ms05/attack").value = 2000;
    device.parametersById.get("ms05/decay").value = 6000;
    device.parametersById.get("ms05/pow").value = 1;
    device.parametersById.get("ms05/shape").value = 1;
    device.parametersById.get("ms05/oct").value = 1;
    device.parametersById.get("ms05/pan").value = 0.8;
    device.parametersById.get("ms05/drive").value = 1.0;
    device.parametersById.get("ms05/hpf").value = 250;
    device.parametersById.get("ms05/send").value = 0.7;
    playNote_ms05(0,0);

    // ms07 (bass2)
    device.parametersById.get("ms07/gain").value = 0.04;
    device.parametersById.get("ms07/osc").value = 1;
    device.parametersById.get("ms07/attack").value = 10;
    device.parametersById.get("ms07/decay").value = 600;
    device.parametersById.get("ms07/lpf").value = 4000;
    device.parametersById.get("ms07/hpf").value = 80;
    device.parametersById.get("ms07/pow").value = 2;
    device.parametersById.get("ms07/shape").value = 2;
    device.parametersById.get("ms07/oct").value = 0.25;
    device.parametersById.get("ms07/pan").value = 0.5;
    device.parametersById.get("ms07/drive").value = 4.0;
    device.parametersById.get("ms07/send").value = 0.05;
    device.parametersById.get("ms07/glide").value = 20;
    device.parametersById.get("ms07/fluxFreq").value = 0.5;
    device.parametersById.get("ms07/fluxAmnt").value = 0.5;
    device.parametersById.get("ms07/tune").value = TUNE;
    playNote_ms07(0,0);

    // ms08 (wobble)
    device.parametersById.get("ms08/gain").value = 0.20;
    device.parametersById.get("ms08/lpf").value = 20000;
    device.parametersById.get("ms08/hpf").value = 250;
    device.parametersById.get("ms08/pan").value = 0.55;
    device.parametersById.get("ms08/send").value = 1;
    device.parametersById.get("ms08/drive").value = 1;
    device.parametersById.get("ms08/attack").value = 40;
    device.parametersById.get("ms08/decay").value = 6000;
    device.parametersById.get("ms08/pow").value = 2;
    device.parametersById.get("ms08/fluxFreq").value = 0.002;
    device.parametersById.get("ms08/fluxAmnt").value = 0.5;
    device.parametersById.get("ms08/osc").value = 1;
    device.parametersById.get("ms08/shape").value = 1;
    device.parametersById.get("ms08/oct").value = 0.5;
    device.parametersById.get("ms08/glide").value = 10000;
    device.parametersById.get("ms08/tune").value = TUNE;

    // ps01
    device.parametersById.get("ps01/gain").value = 0.08;
    device.parametersById.get("ps01/oct").value = 0.5;
    device.parametersById.get("ps01/attack").value = 2;
    device.parametersById.get("ps01/decay").value = 8000;
    device.parametersById.get("ps01/shape").value = 1.0;
    device.parametersById.get("ps01/drive").value = 1.0;
    device.parametersById.get("ps01/pow").value = 4;
    device.parametersById.get("ps01/osc").value = 1;
    device.parametersById.get("ps01/pan").value = 0.35;
    device.parametersById.get("ps01/hpf").value = 250;
    device.parametersById.get("ps01/lpf").value = 800;
    device.parametersById.get("ps01/send").value = 0.7;
    device.parametersById.get("ps01/fluxFreq").value = 0.5;
    device.parametersById.get("ps01/fluxAmnt").value = 0.007;

    // ps02
    device.parametersById.get("ps02/gain").value = 0.20;
    device.parametersById.get("ps02/lpf").value = 20000;
    device.parametersById.get("ps02/hpf").value = 250;
    device.parametersById.get("ps02/pan").value = 0.55;
    device.parametersById.get("ps02/send").value = 1;
    device.parametersById.get("ps02/drive").value = 1;
    device.parametersById.get("ps02/attack").value = 40;
    device.parametersById.get("ps02/decay").value = 4000;
    device.parametersById.get("ps02/pow").value = 3;
    device.parametersById.get("ps02/fluxFreq").value = 0.006;
    device.parametersById.get("ps02/fluxAmnt").value = 0.010;
    device.parametersById.get("ps02/osc").value = 1;
    device.parametersById.get("ps02/shape").value = 1;
    device.parametersById.get("ps02/oct").value = 0.5;
    device.parametersById.get("ps02/glide").value = 60;
    device.parametersById.get("ps02/tune").value = TUNE;

    // ps02
    device.parametersById.get("ps02/gain").value = 0.070;
    device.parametersById.get("ps02/lpf").value = 20000;
    device.parametersById.get("ps02/hpf").value = 250;
    device.parametersById.get("ps02/pan").value = 0.55;
    device.parametersById.get("ps02/send").value = 0.3;
    device.parametersById.get("ps02/drive").value = 1;
    device.parametersById.get("ps02/attack").value = 30;
    device.parametersById.get("ps02/decay").value = 100;
    device.parametersById.get("ps02/pow").value = 0.5;
    device.parametersById.get("ps02/fluxFreq").value = 0.67;
    device.parametersById.get("ps02/fluxAmnt").value = 0.50;
    device.parametersById.get("ps02/osc").value = 1;
    device.parametersById.get("ps02/shape").value = 2;
    device.parametersById.get("ps02/oct").value = 2;
    device.parametersById.get("ps02/glide").value = 60;
    device.parametersById.get("ps02/tune").value = TUNE;

    // ps03
    device.parametersById.get("ps03/gain").value = 0.018;
    device.parametersById.get("ps03/oct").value = 2.0;
    device.parametersById.get("ps03/attack").value = 200;
    device.parametersById.get("ps03/decay").value = 6000;
    device.parametersById.get("ps03/shape").value = 1;
    device.parametersById.get("ps03/pow").value = 0.5;
    device.parametersById.get("ps03/osc").value = 1;
    device.parametersById.get("ps03/pan").value = 0.4;
    device.parametersById.get("ps03/drive").value = 1.0;
    device.parametersById.get("ps03/glide").value = 60;
    device.parametersById.get("ps03/hpf").value = 250;
    device.parametersById.get("ps03/lpf").value = 600;
    device.parametersById.get("ps03/send").value = 0.5;
    device.parametersById.get("ps02/glide").value = 0;
    device.parametersById.get("ps03/fluxFreq").value = 0.001;
    device.parametersById.get("ps03/fluxAmnt").value = 0.010;




    // b01_switch = 1;
    ms07_mode = 0;
    ps01_mode = 0;
    sh01_mode = 0;
    b01_vel = 0.4;
    b01_mode = 0;

    hat_gate = 1;


}





// b01_tog01 = 0;
// ms04_tog = 0;

function playInstruments_Song03() {

    // b01 (bass)
    if(COUNT%128==1) {
        b01_mode = toggle(b01_mode);
        device.parametersById.get("b01/decay").value = [4000,800][b01_mode];
    }
    if(b01_mode==1) {
        if(COUNT%32==13) {
            let deg = 2;
            let vel = b01_vel;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_b01,wait,deg,vel);
        }
        if(COUNT%32==15) {
            let deg = 2;
            let vel = b01_vel/2;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_b01,wait,deg,vel);
        }
        if(COUNT%32==17) {
            let deg = 1;
            let vel = b01_vel/3;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_b01,wait,deg,vel);
        }
        if(COUNT%32==21) {
            let deg = -3;
            let vel = b01_vel/4;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_b01,wait,deg,vel);
        }
    } else {
        if(COUNT%128==17 || COUNT%128==49 || COUNT%128==81) {
            let deg = 0;
            let vel = b01_vel/2;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_b01,wait,deg,vel);
        }
        if(COUNT%128==97) {
            let deg = 1;
            let vel = b01_vel/3;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_b01,wait,deg,vel);
        }
    }

    // ms07 (bass 2)
    if(COUNT%128==65) {
        ms07_mode = toggle(ms07_mode);
    }
    if(ms07_mode==0) {
        let ms07_vel = 0.2;
        if(COUNT%64==33) {
            playNote_ms07(3,ms07_vel);
        } 
        if (COUNT%64==34) {
            playNote_ms07(3,ms07_vel/2);
        }
        if(COUNT%64==36) {
            playNote_ms07(3,ms07_vel);
        }
        if (COUNT%64==37) {
            playNote_ms07(3,ms07_vel/2);
        }
        if(COUNT%64==41) {
            playNote_ms07(2,ms07_vel);
        } 
        if (COUNT%64==44) {
            playNote_ms07(2,ms07_vel/2);
        }
    } else {
        // nothing?
    }


    // kick (ms01)
    if(COUNT%8==3) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }
    if(COUNT%16==13) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms01,wait,1,vel);
    }


    // snare (ms02)
    if(COUNT%16==11) {
        playNote_ms02(1,0.7);
    }
    if(COUNT%32==17) {
        playNote_ms02(1,0.3);
    }

    // hat01 (ms03)
    if(hat_gate==1 && prob(5)) {
        hat_gate = 0;
    }
    if(hat_gate==0 && prob(25)) {
        hat_gate = 1;
        device.parametersById.get("ms03/pow").value = getRandomFloat(5,8);
    }
    if(COUNT%2==1 && hat_gate) {
        let vel = getRandomFloat(0.1,0.4);
        let wait = getRandomFloat(0,20);
        setTimeout(playNote_ms03,wait,1,vel);
    }



    // sh01 (ms04)
    if(COUNT%128==1) {
        sh01_mode = toggle(sh01_mode);
        device.parametersById.get("ms04/lpf").value =  [3000,9000][sh01_mode];
    }
    if(sh01_mode==1) {
        if(COUNT%4==3) {
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_ms04,wait,1,0.1);
        }
        if(COUNT%8==5) {
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_ms04,wait,1,0.03);
        }
    } else {
        if(COUNT%8==3) {
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_ms04,wait,1,0.1);
        }
    }



    // ms05 (gas)
    if(COUNT%64==21) {
        let deg = 1;
        playNote_ms05(deg,0.10);
    }



    // ms08 (glider) {
    if(COUNT%256==1) {
        device.parametersById.get("ms08/glide").value = 0;
        playNote_ms08(20,0);
    }
    if(COUNT%256==162) {
        device.parametersById.get("ms08/glide").value = 8000;
        playNote_ms08(1,0.01);
    }

    // ps01
    if(COUNT%128==1) {
        ps01_mode = toggle(ps01_mode);
        device.parametersById.get("ps01/fluxAmnt").value = [0.100,0.010][ps01_mode];

    }
    if(ps01_mode==1) {

        if(COUNT%64==55) {
            playNote_ps01(1,0.6);
            setTimeout(playNote_ps01,TIME,4,0.3);
        }
        if(COUNT%64==57) {
            playNote_ps01(3,0.4);
            setTimeout(playNote_ps01,TIME,2,0.2);
        }
        if(COUNT%64==1) {
            playNote_ps01(1,0.7);
            setTimeout(playNote_ps01,TIME,6,0.3);
        }
        if(COUNT%128==66) {
            playNote_ps01(1,0.7);
            setTimeout(playNote_ps01,TIME,  3,0.3);
            setTimeout(playNote_ps01,TIME*2,6,0.3);
        }
        if(COUNT%128==81) {
            playNote_ps01(1,0.6);
            setTimeout(playNote_ps01,TIME,7,0.3);
        }

    } else {

        let vel = 0.3;

        if(COUNT%64==2) {
            playNote_ps01(0,vel);
            setTimeout(playNote_ps01,TIME,3,vel/2);
            setTimeout(playNote_ps01,TIME*3,6,vel);
        }
        if(COUNT%64==47) {
            playNote_ps01(1,vel);
            setTimeout(playNote_ps01,TIME,3,vel/2);
            setTimeout(playNote_ps01,TIME*3,9,vel);
        }

    }


    // ps02 (chime)
    if(COUNT%16==0 && prob(10)) {
        let vel0 = 0.1;
        for(let i=0; i<2; i++) {
            let wait1 = 200*i;
            let vel = vel0*1.0**i;
            setTimeout(playNote_ps02,wait1,0,vel/3);
            let wait2 = wait1 + 100;
            setTimeout(playNote_ps02,wait2,6,vel);
        }
    }
    // // ps02 (chime)
    // if(COUNT%256==101) {
    //     let vel0 = 0.1;
    //     for(let i=0; i<4; i++) {
    //         let wait1 = 100*i;
    //         let vel = vel0*0.80**i;
    //         setTimeout(playNote_ps02,wait1,7,vel/3);
    //         let wait2 = wait1 + 50;
    //         setTimeout(playNote_ps02,wait2,10,vel/2);
    //         let wait3 = wait1 + 100;
    //         setTimeout(playNote_ps02,wait3,13,vel);
    //     }
    // }



    // ps03 (wobbly siren)
    // count0 = 12;
    if(COUNT%128==97) {
        let vel = 0.3;
        // let wait = 0;
        playNote_ps03(0,vel);
        playNote_ps03(3,vel);
        playNote_ps03(6,vel);
        // let deg = -14;
        // let deg_arr = [-14,-12,-10,-8,-4,-3,-4,-5,-6];

    }








}