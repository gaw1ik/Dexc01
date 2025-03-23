
function setupParams() {




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
    device.parametersById.get("b01/lpf").value = 4000;
    device.parametersById.get("b01/send").value = 0.1;
    device.parametersById.get("b01/fluxFreq").value = 0.5;
    device.parametersById.get("b01/fluxAmnt").value = 0.1;
    playNote_b01(0,0);



    // ms01 (kick)
    device.parametersById.get("ms01/osc").value = 1;
    device.parametersById.get("ms01/attack").value = 3;
    device.parametersById.get("ms01/decay").value = 150;
    device.parametersById.get("ms01/pow").value = 8;
    device.parametersById.get("ms01/shape").value = 1;
    device.parametersById.get("ms01/oct").value = 0.125;
    device.parametersById.get("ms01/gain").value = 0.2;
    device.parametersById.get("ms01/pan").value = 0.5;
    device.parametersById.get("ms01/drive").value = 1.0;
    device.parametersById.get("ms01/hpf").value = 60;
    device.parametersById.get("ms01/lpf").value = 200;
    device.parametersById.get("ms01/send").value = 0.1;
    playNote_ms01(0,0);

    // ms01 (kick alt)
    // device.parametersById.get("ms01/osc").value = 4;
    // device.parametersById.get("ms01/attack").value = 3;
    // device.parametersById.get("ms01/decay").value = 70;
    // device.parametersById.get("ms01/pow").value = 4;
    // device.parametersById.get("ms01/shape").value = 2;
    // device.parametersById.get("ms01/oct").value = 0.125;
    // device.parametersById.get("ms01/gain").value = 0.12;
    // device.parametersById.get("ms01/pan").value = 0.5;
    // device.parametersById.get("ms01/drive").value = 4.0;
    // device.parametersById.get("ms01/hpf").value = 20;
    // device.parametersById.get("ms01/lpf").value = 100;
    // device.parametersById.get("ms01/send").value = 0.1;


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
    device.parametersById.get("ms04/gain").value = 0.08;
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
    device.parametersById.get("ms05/gain").value = 0.02;
    device.parametersById.get("ms05/pan").value = 0.8;
    device.parametersById.get("ms05/drive").value = 1.0;
    device.parametersById.get("ms05/hpf").value = 250;
    device.parametersById.get("ms05/send").value = 0.7;
    playNote_ms05(0,0);

    // ms06 (wa weh)
    device.parametersById.get("ms06/oct").value = 3;
    device.parametersById.get("ms06/attack").value = 20;
    device.parametersById.get("ms06/decay").value = 4000;
    device.parametersById.get("ms06/shape").value = 1;
    device.parametersById.get("ms06/drive").value = 1;
    device.parametersById.get("ms06/pow").value = 4;
    device.parametersById.get("ms06/gain").value = 0.015;
    device.parametersById.get("ms06/glide").value = 100;
    device.parametersById.get("ms06/osc").value = 1;
    device.parametersById.get("ms06/pan").value = 0.4;
    device.parametersById.get("ms06/hpf").value = 250;
    device.parametersById.get("ms06/lpf").value = 4000;
    device.parametersById.get("ms06/send").value = 0.1;
    device.parametersById.get("ms06/fluxFreq").value = 0.7;
    device.parametersById.get("ms06/fluxAmnt").value = 0.07;
    playNote_ms06(-17,0);

    // ms07
    device.parametersById.get("ms07/osc").value = 1;
    device.parametersById.get("ms07/attack").value = 10;
    device.parametersById.get("ms07/decay").value = 100;
    device.parametersById.get("ms07/pow").value = 4;
    device.parametersById.get("ms07/shape").value = 2;
    device.parametersById.get("ms07/oct").value = 0.25;
    device.parametersById.get("ms07/gain").value = 0.10;
    device.parametersById.get("ms07/pan").value = 0.5;
    device.parametersById.get("ms07/drive").value = 4.0;
    device.parametersById.get("ms07/send").value = 0.05;
    device.parametersById.get("ms07/hpf").value = 250;
    device.parametersById.get("ms07/fluxFreq").value = 0.5;
    device.parametersById.get("ms07/fluxAmnt").value = 0.5;
    playNote_ms07(0,0);

    // ms08 (bleep)
    device.parametersById.get("ms08/osc").value = 1;
    device.parametersById.get("ms08/attack").value = 10;
    device.parametersById.get("ms08/decay").value = 100;
    device.parametersById.get("ms08/pow").value = 1;
    device.parametersById.get("ms08/shape").value = 2;
    device.parametersById.get("ms08/oct").value = 16;
    device.parametersById.get("ms08/gain").value = 0.005;
    device.parametersById.get("ms08/pan").value = 0.6;
    device.parametersById.get("ms08/drive").value = 1.0;
    device.parametersById.get("ms08/hpf").value = 250;
    device.parametersById.get("ms08/send").value = 0.2;
    playNote_ms08(0,0);

    // ps01
    device.parametersById.get("ps01/oct").value = 0.5;
    device.parametersById.get("ps01/attack").value = 2000;
    device.parametersById.get("ps01/decay").value = 4000;
    device.parametersById.get("ps01/shape").value = 1.0;
    device.parametersById.get("ps01/drive").value = 1.0;
    device.parametersById.get("ps01/pow").value = 4;
    device.parametersById.get("ps01/gain").value = 0.04;
    device.parametersById.get("ps01/osc").value = 2;
    device.parametersById.get("ps01/pan").value = 0.35;
    device.parametersById.get("ps01/hpf").value = 250;
    device.parametersById.get("ps01/lpf").value = 800;
    device.parametersById.get("ps01/send").value = 0.7;
    device.parametersById.get("ps01/fluxFreq").value = 0.01;
    device.parametersById.get("ps01/fluxAmnt").value = 0.007;
    for(let i=0; i<8; i++) {
        playNote_ps01(0,0);
    }
    // ps02
    device.parametersById.get("ps02/oct").value = 0.5;
    device.parametersById.get("ps02/attack").value = 100;
    device.parametersById.get("ps02/decay").value = 100;
    device.parametersById.get("ps02/shape").value = 1.0;
    device.parametersById.get("ps02/pow").value = 0.5;
    device.parametersById.get("ps02/gain").value = 0.025;
    device.parametersById.get("ps02/osc").value = 2;
    device.parametersById.get("ps02/pan").value = 0.6;
    device.parametersById.get("ps02/drive").value = 0.7;
    device.parametersById.get("ps02/send").value = 0.7;
    device.parametersById.get("ps02/hpf").value = 250;
    device.parametersById.get("ps02/fluxFreq").value = 0.0;
    device.parametersById.get("ps02/fluxAmnt").value = 0.0;
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
    device.parametersById.get("ps03/fluxFreq").value = 0.99;
    device.parametersById.get("ps03/fluxAmnt").value = 0.7;
    for(let i=0; i<8; i++) {
        playNote_ps03(0,0);
    }

    // PINK NOISE
    device.parametersById.get("pink_gain").value = 0.0001;

    // MASTER
    device.parametersById.get("master_gain").value = 32;
    device.parametersById.get("master_hpf").value = 80;
    device.parametersById.get("master_lpf").value = 20000;
    device.parametersById.get("master_noising").value = 0.003;
    // device.parametersById.get("crackle_gain").value = 0.001;
    // device.parametersById.get("pop_gain").value = 0.005;
    device.parametersById.get("crackle_gain").value = 0;
    device.parametersById.get("pop_gain").value = 0;
    device.parametersById.get("master_reverb_decay").value = 90;
    device.parametersById.get("master_reverb_hpf").value = 350;
    device.parametersById.get("master_reverb_gain").value = 0.5;

    device.parametersById.get("scaletype").value = 2;






}






// function updateRNBOPARAM_master_gain() {
//     // console.log("updateRNBOPARAM_background_gain")
//     let val = PARAMS.master_gain;
//     let adjustedValue = calcParamValue(val,0,4,2);
//     try{ device.parametersById.get("master_gain").value = adjustedValue } catch(error) {
//     }
//     let displayValue = adjustedValue*100;
//     // document.getElementById("canvasLabel_master_gain").textContent = "Volume (" + displayValue.toFixed(0) + ")";
// }

// function updateRNBOPARAM_master_lpf() {
//     // console.log("updateRNBOPARAM_background_gain")
//     let val = PARAMS.master_lpf;
//     let adjustedValue = calcParamValue(val,0,20000,6);
//     try{ device.parametersById.get("master_lpf").value = adjustedValue } catch(error) {}
//     // document.getElementById("canvasLabel_master_lpf").textContent = "Filter (" + adjustedValue.toFixed(0) + " Hz)";
// }


// function updateRNBOPARAM_chance() {
//     let adjustedValue = calcParamValue(PARAMS.chance,0,100,1);
//     PROB = adjustedValue;
//     // document.getElementById("canvasLabel_chance").textContent = "Prob (" + adjustedValue.toFixed(0) + "%)";
//     // console.log("prob",adjustedValue);
// }


// function updateRNBOPARAM_time() {
//     let adjustedValue = calcParamValue(PARAMS.time,100,4000,2);
//     TIME = adjustedValue;
//     // document.getElementById("canvasLabel_time").textContent = "Time (" + adjustedValue.toFixed(0) + "ms)";
//     // console.log("time",adjustedValue);
// }

// function updateRNBOPARAM_release() {
//     // console.log("updateRNBOPARAM_background_gain")
//     let val = PARAMS.release;
//     let adjustedValue = calcParamValue(1-val,-0.9,32,2);
//     try{ device.parametersById.get("curve").value = adjustedValue } catch(error) {}
//         let displayedValue = 1 + (val)*99;
//     // document.getElementById("canvasLabel_release").textContent = "Release (" + displayedValue.toFixed(0) + ")";
// }




// function calcParamValue(normalVal,min,max,pow) {

//     let adjustedValue = min + (max-min)*normalVal**pow;

//     return adjustedValue;

// }