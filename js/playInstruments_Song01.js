function updateParams_Song01() {

    // PARAMS = 
    // {
    //     master_gain:1.00,
    //     master_lpf: 1.000,
    //     time:0.068,//0.158
    //     tune:0.682,
    // }

    // updateParamsState();

    TUNE = 440;
    TIME = 85;

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
    device.parametersById.get("b01/gain").value = 0.10;
    device.parametersById.get("b01/lpf").value = 12000;
    device.parametersById.get("b01/hpf").value = 120;
    device.parametersById.get("b01/pan").value = 0.50;
    device.parametersById.get("b01/send").value = 0.1;
    device.parametersById.get("b01/drive").value = 4.0;
    device.parametersById.get("b01/attack").value = 6;
    device.parametersById.get("b01/decay").value = 400;
    device.parametersById.get("b01/pow").value = 2;
    device.parametersById.get("b01/fluxFreq").value = 0.5;
    device.parametersById.get("b01/fluxAmnt").value = 0.1;
    device.parametersById.get("b01/osc").value = 1;
    device.parametersById.get("b01/shape").value = 1.6;
    device.parametersById.get("b01/oct").value = 0.25;
    device.parametersById.get("b01/glide").value = 10;
    device.parametersById.get("b01/tune").value = TUNE;
    
    // b02
    device.parametersById.get("b02/gain").value = 0.08;
    device.parametersById.get("b02/lpf").value = 200;
    device.parametersById.get("b02/hpf").value = 80;
    device.parametersById.get("b02/pan").value = 0.50;
    device.parametersById.get("b02/send").value = 0.1;
    device.parametersById.get("b02/drive").value = 4.0;
    device.parametersById.get("b02/attack").value = 6;
    device.parametersById.get("b02/decay").value = 400;
    device.parametersById.get("b02/pow").value = 2;
    device.parametersById.get("b02/fluxFreq").value = 0.5;
    device.parametersById.get("b02/fluxAmnt").value = 0.5;
    device.parametersById.get("b02/osc").value = 2;
    device.parametersById.get("b02/shape").value = 1.6;
    device.parametersById.get("b02/oct").value = 0.5;
    device.parametersById.get("b02/glide").value = 10;
    device.parametersById.get("b02/tune").value = TUNE;

    // ms01 (kick)
    device.parametersById.get("ms01/gain").value = 0.40;/////////
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
    device.parametersById.get("ms02/gain").value = 0.32;
    device.parametersById.get("ms02/lpf").value = 8000;
    device.parametersById.get("ms02/hpf").value = 250;
    device.parametersById.get("ms02/pan").value = 0.5;
    device.parametersById.get("ms02/send").value = 0.2;
    device.parametersById.get("ms02/drive").value = 8;
    device.parametersById.get("ms02/attack").value = 1;
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
    device.parametersById.get("ms03/gain").value = 0.30;
    device.parametersById.get("ms03/lpf").value =  9000;
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
    device.parametersById.get("ms04/gain").value = 0.40;
    device.parametersById.get("ms04/lpf").value =  9000;
    device.parametersById.get("ms04/hpf").value =  250;
    device.parametersById.get("ms04/pan").value = 0.35;
    device.parametersById.get("ms04/send").value = 0.2;
    device.parametersById.get("ms04/drive").value = 1;
    device.parametersById.get("ms04/attack").value = 10;
    device.parametersById.get("ms04/decay").value = 200;
    device.parametersById.get("ms04/pow").value = 2;
    device.parametersById.get("ms04/fluxFreq").value = 0;
    device.parametersById.get("ms04/fluxAmnt").value = 0;
    device.parametersById.get("ms04/osc").value = 4;
    device.parametersById.get("ms04/shape").value = 1;
    device.parametersById.get("ms04/oct").value = 1;
    device.parametersById.get("ms04/glide").value = 0;
    device.parametersById.get("ms04/tune").value = TUNE;

    // ms06 (triangle)
    device.parametersById.get("ms06/gain").value = 0.016;
    device.parametersById.get("ms06/osc").value = 1;
    device.parametersById.get("ms06/attack").value = 1;
    device.parametersById.get("ms06/decay").value = 300;
    device.parametersById.get("ms06/pow").value = 3;
    device.parametersById.get("ms06/shape").value = 2;
    device.parametersById.get("ms06/oct").value = 16;
    device.parametersById.get("ms06/pan").value = 0.3;
    device.parametersById.get("ms06/drive").value = 4.0;
    device.parametersById.get("ms06/send").value = 0.30;
    device.parametersById.get("ms06/hpf").value = 2000;
    device.parametersById.get("ms06/tune").value = 500*4.1;
    device.parametersById.get("ms06/glide").value = 15;
    device.parametersById.get("ms06/fluxFreq").value = 0.7;
    device.parametersById.get("ms06/fluxAmnt").value = 1.0;

    // ms07 (riser)
    device.parametersById.get("ms07/gain").value = 0.16;
    device.parametersById.get("ms07/lpf").value = 350;
    device.parametersById.get("ms07/hpf").value = 250;
    device.parametersById.get("ms07/pan").value = 0.55;
    device.parametersById.get("ms07/send").value = 1;
    device.parametersById.get("ms07/drive").value = 1;
    device.parametersById.get("ms07/attack").value = 1000;
    device.parametersById.get("ms07/decay").value = 6000;
    device.parametersById.get("ms07/pow").value = 2;
    device.parametersById.get("ms07/fluxFreq").value = 0.020;
    device.parametersById.get("ms07/fluxAmnt").value = 0.001;
    device.parametersById.get("ms07/osc").value = 2;
    device.parametersById.get("ms07/shape").value = 1;
    device.parametersById.get("ms07/oct").value = 1;
    device.parametersById.get("ms07/glide").value = 4000;
    device.parametersById.get("ms07/tune").value = TUNE;
    
    // ms08 (wobble)
    device.parametersById.get("ms08/gain").value = 0.016;
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
    device.parametersById.get("ms08/oct").value = 2;
    device.parametersById.get("ms08/glide").value = 10000;
    device.parametersById.get("ms08/tune").value = TUNE;

    // ps01
    device.parametersById.get("ps01/gain").value = 0.016;
    device.parametersById.get("ps01/lpf").value = 20000;
    device.parametersById.get("ps01/hpf").value = 250;
    device.parametersById.get("ps01/pan").value = 0.55;
    device.parametersById.get("ps01/send").value = 1;
    device.parametersById.get("ps01/drive").value = 1;
    device.parametersById.get("ps01/attack").value = 40;
    device.parametersById.get("ps01/decay").value = 4000;
    device.parametersById.get("ps01/pow").value = 3;
    device.parametersById.get("ps01/fluxFreq").value = 0.001;
    device.parametersById.get("ps01/fluxAmnt").value = 0.001;
    device.parametersById.get("ps01/osc").value = 1;
    device.parametersById.get("ps01/shape").value = 1;
    device.parametersById.get("ps01/oct").value = 1;
    device.parametersById.get("ps01/glide").value = 0;
    device.parametersById.get("ps01/tune").value = TUNE;

    // ps02
    device.parametersById.get("ps02/gain").value = 0.096;
    device.parametersById.get("ps02/lpf").value = 20000;
    device.parametersById.get("ps02/hpf").value = 250;
    device.parametersById.get("ps02/pan").value = 0.55;
    device.parametersById.get("ps02/send").value = 0.3;
    device.parametersById.get("ps02/drive").value = 1;
    device.parametersById.get("ps02/attack").value = TIME*32;
    device.parametersById.get("ps02/decay").value = 40;
    device.parametersById.get("ps02/pow").value = 2;
    device.parametersById.get("ps02/fluxFreq").value = 0.67;
    device.parametersById.get("ps02/fluxAmnt").value = 0.50;
    device.parametersById.get("ps02/osc").value = 1;
    device.parametersById.get("ps02/shape").value = 1;
    device.parametersById.get("ps02/oct").value = 2;
    device.parametersById.get("ps02/glide").value = 60;
    device.parametersById.get("ps02/tune").value = TUNE;



    ms06_count = 0;
    ms06_gate = 0;
    ms06_mode = 0;
    ms03_count = 0;
    ms01_mode = 0;
    ps02_mode = 0;
    ps02_mode2 = 0;
    b01_mode = 0;
    ms04_gate = 0;
    ps01_mode = 0;



}






function playInstruments_Song01() {

    // b01
    if(COUNT%128==1) {
        b01_mode = toggle(b01_mode);
        device.parametersById.get("b01/oct").value = [0.125,0.25][b01_mode];
        device.parametersById.get("b01/shape").value = [3.0,1.6][b01_mode];
    }
    // if(b01_mode==1) {

    // }
    b01_vel = 0.2;
    if(COUNT%16==1) {
        c=0;
        playNote_b01(1,b01_vel/2);
    }
    if(COUNT%16==3) {
        playNote_b01(1,b01_vel);
    }
    if(COUNT%16==13) {
        playNote_b01(3,b01_vel/2);
    }
    if(COUNT%16==15) {
        playNote_b01(3,b01_vel);
    }

    if(COUNT%64>52 && COUNT%2==1) {
        let arr = [3,4,3,2,1,0,1];
        playNote_b01(arr[c],b01_vel/2);
        c=c+1;
    }

    b02_vel = 0.2;
    if(COUNT%32==5) {
        playNote_b02(1,b01_vel/2);
    }
    if(COUNT%32==7) {
        playNote_b02(1,b01_vel);
    }
    if(COUNT%32==13) {
        playNote_b02(1,b01_vel/2);
    }
    if(COUNT%32==17) {
        playNote_b02(1,b01_vel);
    }


    // ms01 (kick)
    if(COUNT%128==1) {
        ms01_mode = toggle(ms01_mode);
    }
    if(ms01_mode==0) {
        if(COUNT%16==1) {
            playNote_ms01(1,0.4);
        }
        if(COUNT%16==5) {
            playNote_ms01(1,0.4);
        }
        if(COUNT%16==11) {
            playNote_ms01(1,0.4);
        }
        if(COUNT%16==13) {
            playNote_ms01(1,0.4);
        }
    } else {
        if(COUNT%16==7) {
            playNote_ms01(1,0.4);
        }
    }

    // if(COUNT%16==9) {
    //     playNote_ms02(1,0.1);
    // }
    if(COUNT%16==9) {
        playNote_ms02(1,0.1);
    }
    if(COUNT%16==15) {
        playNote_ms02(1,0.05);
    }


    // ms03 (hat)
    if(COUNT%2==1) {
        vel = 0.4 * 0.5**ms03_count;
        playNote_ms03(1,vel);
        ms03_count = stepper(ms03_count,3);
    }
    if(COUNT%2==0 && prob(10)) {
        playNote_ms03(1,0.12);
    }


    // ms04 (shaker)
    if(ms04_gate==1 && prob(5)) {
        ms04_gate = 0;
    }
    if(ms04_gate==0 && prob(25)) {
        ms04_gate = 1;
    }
    if(COUNT%8==1 && ms04_gate) {
        playNote_ms04(1,0.1);
    }
    if(COUNT%8==5 && ms04_gate) {
        playNote_ms04(1,0.05);
    }



    // ms06 (triangle)
    if(COUNT%192==1) {
        ms06_gate = toggle(ms06_gate);
    }
    if(ms06_mode==1 && prob(50)) {
        ms06_mode = 0;
        ms06_count = 0;
    }
    if(ms06_mode==0 && prob(5)) {
        ms06_mode = 1;
        ms06_count = 0;
    }
    if(ms06_gate) {
        if(COUNT%2==1 && ms06_mode==0) {
            vel = 0.25 * 0.5**ms06_count;
            playNote_ms06(1,vel);
            ms06_count = stepper(ms06_count,3);
        }
        if(ms06_mode==1) {
            vel = 0.25 * 0.6**ms06_count;
            playNote_ms06(1,vel);
            ms06_count = stepper(ms06_count,7);
        }
    }

    // ms07
    if(COUNT%256==1) { // set up for glide
        playNote_ms07(1,0);
    }
    if(COUNT%256==90) {
        vel = 0.5;
        playNote_ms07(10,vel);
    }

    // ms08
    if(COUNT%256==164) {
        vel = 0.5;
        playNote_ms08(1,vel);
    }


        // ps01
        if(COUNT%128==1) {
            ps01_mode = toggle(ps01_mode);
        }
        if(ps01_mode==1) {
    
            // if(COUNT%64==54) {
            //     playNote_ps01(1,0.6);
            //     setTimeout(playNote_ps01,TIME,4,0.3);
            // }
            // if(COUNT%64==56) {
            //     playNote_ps01(3,0.4);
            //     setTimeout(playNote_ps01,TIME,2,0.2);
            // }
            // if(COUNT%64==0) {
            //     playNote_ps01(1,0.7);
            //     setTimeout(playNote_ps01,TIME,6,0.3);
            // }
            if(COUNT%128==65) {
                playNote_ps01(1,0.7);
                setTimeout(playNote_ps01,TIME,3,0.3);
                setTimeout(playNote_ps01,TIME,6,0.3);
            }
            if(COUNT%128==80) {
                playNote_ps01(1,0.6);
                setTimeout(playNote_ps01,TIME,7,0.3);
            }
    
        } else {
    
        }



    // ps02
    if(COUNT%128==1) {
        ps02_mode = toggle(ps02_mode);
        device.parametersById.get("ps02/fluxFreq").value = [0.67,0.50][ps02_mode];
        // device.parametersById.get("ps02/fluxAmnt").value = 0.50;
        // if(ps02_mode2==0 && ps02_mode==0 && prob(100)) {
        //     console.log("hi")
        //     ps02_mode2=0;
        //     ps02_mode=0;
        // }
    }
    
    if(COUNT%256==1) {
        ps02_mode2 = toggle(ps02_mode2);
        ps02_vel = [0.3,0.1][ps02_mode2];
        device.parametersById.get("ps02/oct").value = [0.5,2][ps02_mode2];
    }
    // if(ps02_mode2==1) {
        if(COUNT%64==1) {
            playNote_ps02(1,ps02_vel);
            playNote_ps02(4,ps02_vel/2);
            playNote_ps02(6,ps02_vel/3);
        }
    // }



    

}