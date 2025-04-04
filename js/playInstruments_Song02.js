function updateParams_Song02() {

    // PARAMS = 
    // {
    //     master_gain:0.707,
    //     master_lpf: 1.000,
    //     time:0.119,//0.158
    //     tune:0.682,
    // }

    // updateParamsState();

    TUNE = 440;
    TIME = 90;

    device.parametersById.get("scaletype").value = 1;

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
    device.parametersById.get("b01/lpf").value = 4000;
    device.parametersById.get("b01/hpf").value = 80;
    device.parametersById.get("b01/pan").value = 0.50;
    device.parametersById.get("b01/send").value = 0.1;
    device.parametersById.get("b01/drive").value = 6.0;
    device.parametersById.get("b01/attack").value = 20;
    device.parametersById.get("b01/decay").value = 800;
    device.parametersById.get("b01/pow").value = 2;
    device.parametersById.get("b01/fluxFreq").value = 0.5;
    device.parametersById.get("b01/fluxAmnt").value = 0.1;
    device.parametersById.get("b01/osc").value = 1;
    device.parametersById.get("b01/shape").value = 1.7;
    device.parametersById.get("b01/oct").value = 0.125;
    device.parametersById.get("ms01/glide").value = 0;
    device.parametersById.get("b01/tune").value = TUNE;

    // ms01 (kick)
    device.parametersById.get("ms01/gain").value = 0.60;
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
    device.parametersById.get("ms02/gain").value = 0.45;
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
    device.parametersById.get("ms03/gain").value = 0.45;
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
    device.parametersById.get("ms04/gain").value = 0.15;
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

    // ms07 (riser)
    device.parametersById.get("ms07/gain").value = 0.30;
    device.parametersById.get("ms07/lpf").value = 350;
    device.parametersById.get("ms07/hpf").value = 250;
    device.parametersById.get("ms07/pan").value = 0.55;
    device.parametersById.get("ms07/send").value = 1;
    device.parametersById.get("ms07/drive").value = 1;
    device.parametersById.get("ms07/attack").value = 40;
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
    device.parametersById.get("ms08/gain").value = 0.15;
    device.parametersById.get("ms08/lpf").value = 20000;
    device.parametersById.get("ms08/hpf").value = 250;
    device.parametersById.get("ms08/pan").value = 0.55;
    device.parametersById.get("ms08/send").value = 1;
    device.parametersById.get("ms08/drive").value = 1;
    device.parametersById.get("ms08/attack").value = 40;
    device.parametersById.get("ms08/decay").value = 6000;
    device.parametersById.get("ms08/pow").value = 2;
    device.parametersById.get("ms08/fluxFreq").value = 0.02;
    device.parametersById.get("ms08/fluxAmnt").value = 0.5;
    device.parametersById.get("ms08/osc").value = 1;
    device.parametersById.get("ms08/shape").value = 1;
    device.parametersById.get("ms08/oct").value = 0.5;
    device.parametersById.get("ms08/glide").value = 10000;
    device.parametersById.get("ms08/tune").value = TUNE;

    // ps01
    device.parametersById.get("ps01/gain").value = 0.12;
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
    device.parametersById.get("ps01/oct").value = 0.5;
    device.parametersById.get("ps01/glide").value = 0;
    device.parametersById.get("ps01/tune").value = TUNE;

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
        device.parametersById.get("ps02/shape").value = 1;
        device.parametersById.get("ps02/oct").value = 2;
        device.parametersById.get("ps02/glide").value = 60;
        device.parametersById.get("ps02/tune").value = TUNE;

    // ps03
    device.parametersById.get("ps03/gain").value = 0.040;
    device.parametersById.get("ps03/oct").value = 1.0;
    device.parametersById.get("ps03/attack").value = TIME*8;
    device.parametersById.get("ps03/decay").value = TIME*48;
    device.parametersById.get("ps03/shape").value = 1;
    device.parametersById.get("ps03/pow").value = 1;
    device.parametersById.get("ps03/osc").value = 1;
    device.parametersById.get("ps03/pan").value = 0.4;
    device.parametersById.get("ps03/drive").value = 1.0;
    device.parametersById.get("ps03/glide").value = 60;
    device.parametersById.get("ps03/hpf").value = 250;
    device.parametersById.get("ps03/lpf").value = 600;
    device.parametersById.get("ps03/send").value = 0.5;
    device.parametersById.get("ps02/glide").value = 0;
    device.parametersById.get("ps03/fluxFreq").value = 0.100;
    device.parametersById.get("ps03/fluxAmnt").value = 0.100;




    ps01_tog = 0;
    ps01_vel = 0.5;
    ms03_mode = -1;
    KS_switch = 0;
    b01_switch = 0;
    b01_mode = -1;
    b01_tog01 = 0;
    ms04_tog = 0;



}





function playInstruments_Song02() {

    // b01
    if(COUNT%128==0) {

        b01_mode = stepper(b01_mode,2);

        if(prob(100)) {
            b01_switch = toggle(b01_switch);
        }

        if(b01_switch==0) {
            b01_c2 =  6;
            b01_c4 = 22;
        } else {
            b01_c2 = 12;
            b01_c4 = 28;
        }
    }
    if(b01_mode==0) {
        if(COUNT%32==0) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,3,0.5);		
        }
        if(COUNT%32==b01_c2) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,5,0.5);		
        }
        if(COUNT%32==16) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,3,0.5);		
        }
        if(COUNT%32==b01_c4) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,0,0.5);		
        }
    } else if (b01_mode==1){
        if(COUNT%32==0) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,1,0.5);		
        }
        if(COUNT%32==b01_c2) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,2,0.5);		
        }
        if(COUNT%32==16) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,1,0.5);		
        }
        if(COUNT%32==b01_c4) {
            wait = randFromArray([0,30]);
            setTimeout(playNote_b01,wait,2,0.5);		
        }
    } else if (b01_mode==2) {
        // no bass
    }





    // ms01 (kick)
    if(KS_switch==0) {
        if(COUNT%16==0) {
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_ms01,wait,1,0.5);
        }
    } else {
        if(COUNT%8==0) {
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_ms01,wait,1,0.5);
        }
    }
    // kick+snare switch
    if(COUNT%32==0 && prob(35)) {
        KS_switch = toggle(KS_switch);
    }



    // ms02 (snare)
    if(KS_switch==1) {
        if(COUNT%16==8) {
            device.parametersById.get("ms02/pow").value = 4;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_ms02,wait,1,0.5);
        }
    } else {
        if(COUNT%16==4) {
            device.parametersById.get("ms02/pow").value = 4;
            let wait = getRandomFloat(0,20);
            setTimeout(playNote_ms02,wait,1,0.5);
        }
    }
    if(COUNT%128==64) { // roll
        device.parametersById.get("ms02/pow").value = 6;
        let deg0 = 0;
        let N = 4;
        let vel0 = 0.4;
        for(let i=0; i<N; i++) {
            let vel = vel0*0.8**i;
            let deg = deg0;
            let wait = TIME+120*1.4**i;
            setTimeout(playNote_ms02,wait,deg,vel);
        }
    }


    // ms03 (hat)
    if(COUNT%32==0 && prob(50)) {
        ms03_mode = stepper(ms03_mode,2);
    }
    if(ms03_mode==0) {
        if(COUNT%4==2 && prob(90)) {
            wait = randFromArray([0,20]);
            setTimeout(playNote_ms03,wait,1,0.5);
        }
    } else if (ms03_mode==1) {
        if(COUNT%8==4 && prob(90)) {
            wait = randFromArray([0,20]);
            setTimeout(playNote_ms03,wait,1,0.5);
        }
    } else {
        // no hat
    }

    if(COUNT%8==7 && prob(50)) { // lil upbeat thing
        wait = randFromArray([0,20]);
        setTimeout(playNote_ms03,wait,1,0.05);
	}

    // ms04 (shaker)
    if(COUNT%64==0 && prob(100)) {
        // device.parametersById.get("ms04/attack").value = [100,100][ms04_tog];
        device.parametersById.get("ms04/lpf").value = [9000,900][ms04_tog];
        ms04_tog = toggle(ms04_tog);
    }

    if(COUNT%8==4 && prob(100)) {
        wait = randFromArray([0,20]);
        setTimeout(playNote_ms04,wait,1,0.13);
    }


    // ms07 (riser)
    if(COUNT%256==0) { // set up for the glide
        device.parametersById.get("ms07/glide").value = 0;
        playNote_ms07(6,0.0);
    }
	if(COUNT%256==32) {
        device.parametersById.get("ms07/glide").value =  getRandomFloat(300,600);
        setTimeout(playNote_ms07,20,7,0.5);
    }

    // ms08 (wobble)
    if(COUNT%128==0) { // set up for the glide
        device.parametersById.get("ms08/glide").value = 0;
        playNote_ms08(-3,0.0);
    }
	if(COUNT%128==96) {

        let q = getRandomInt(0,1);
        let vel;
        device.parametersById.get("ms08/glide").value = 600;
        device.parametersById.get("ms08/fluxFreq").value = getRandomFloat(0.02,0.04);

        if(q==0) {
            device.parametersById.get("ms08/lpf").value = 800;
            device.parametersById.get("ms08/osc").value = 2;
            vel = 0.1;
        } else {
            device.parametersById.get("ms08/lpf").value = 8000;
            device.parametersById.get("ms08/osc").value = 1;
            vel = 0.1;
        }
        playNote_ms08(3,vel);
    }





    // ps01 (rhodes)
    if(COUNT%64==0 && prob(50)) {
        ps01_tog = toggle(ps01_tog);
        device.parametersById.get("ps01/oct").value = [0.5,1][ps01_tog];
        ps01_vel = [0.3,0.05][ps01_tog];
    }

	if(COUNT%16==0 && prob(50)) {
        // deg = randFromArray([-3,-1,1,3,5]);
        deg = randFromArray([1,3,5]);
        let wait = getRandomFloat(0,60);
        setTimeout(playNote_ps01,wait,deg,ps01_vel);
	}


    // ps02 (chime)
    if(COUNT%256==200) {
        let vel0 = 0.3;
        for(let i=0; i<8; i++) {
            let wait1 = 400*i;
            let vel = vel0*0.67**i;
            setTimeout(playNote_ps02,wait1,0,vel/3);
            let wait2 = wait1 + 100;
            setTimeout(playNote_ps02,wait2,6,vel);
        }
    }
    // ps02 (chime)
    if(COUNT%256==100) {
        let vel0 = 0.1;
        for(let i=0; i<16; i++) {
            let wait1 = 200*i;
            let vel = vel0*0.80**i;
            setTimeout(playNote_ps02,wait1,7,vel/3);
            let wait2 = wait1 + 50;
            setTimeout(playNote_ps02,wait2,10,vel/2);
            let wait3 = wait1 + 100;
            setTimeout(playNote_ps02,wait3,13,vel);
        }
    }


    // ps03 (wobbly siren)
    // count0 = 12;
    if(COUNT%128==97) {
        let vel = 0.3;
        // let wait = 0;
        // device.parametersById.get("ps03/fluxFreq").value = 0.100;
        device.parametersById.get("ps03/fluxAmnt").value = 0.050;
        playNote_ps03(0,vel);
        device.parametersById.get("ps03/fluxAmnt").value = 0.075;
        playNote_ps03(3,vel);
        device.parametersById.get("ps03/fluxAmnt").value = 0.100;
        playNote_ps03(7,vel);
        // let deg = -14;
        // let deg_arr = [-14,-12,-10,-8,-4,-3,-4,-5,-6];

    }




	
	
	// pink
	gain = Math.sin(COUNT%128/128*twoPI+PIo4)*0.0008;
	device.parametersById.get("pink_gain").value = gain;
	





    

}