function updateParams_Positions() {


}



function playInstruments_Position() {







    let this_percentFrom0 = percentFrom0[activeCoinInd];

    if(this_percentFrom0>percentTrigger01*3.5) {
        LEVEL = 8;
    }
    if(this_percentFrom0>percentTrigger01*2.5 && this_percentFrom0<percentTrigger01*3.5) {
        LEVEL = 7;
    }
    if(this_percentFrom0>percentTrigger01*1.5 && this_percentFrom0<percentTrigger01*2.5) {
        LEVEL = 6;
    }
    if(this_percentFrom0>percentTrigger01*0.5 && this_percentFrom0<percentTrigger01*1.5) {
        LEVEL = 5;
    }
    if(this_percentFrom0>percentTrigger01*-0.5 && this_percentFrom0<percentTrigger01*0.5) {
        LEVEL = 4;
    }
    if(this_percentFrom0>percentTrigger01*-1.5 && this_percentFrom0<percentTrigger01*-0.5) {
        LEVEL = 3;
    }
    if(this_percentFrom0>percentTrigger01*-2.5 && this_percentFrom0<percentTrigger01*-1.5) {
        LEVEL = 2;
    }
    if(this_percentFrom0>percentTrigger01*-3.5 && this_percentFrom0<percentTrigger01*-2.5) {
        LEVEL = 1;
    }
    if(this_percentFrom0<percentTrigger01*-3.5) {
        LEVEL = 0;
    }
    if(LEVEL>LEVELPREV) {
        updateSongForLevel(LEVEL);
        ps02_inc = 2;
        ps02_inc2 = 1;
        delayTime = 50;
        deg0 = 4;
        N = 2;
        delayTimeExp = 1.1;
        play_chime(ps02_inc, ps02_inc2, delayTime, deg0, N, delayTimeExp);
    }
    if(LEVEL<LEVELPREV) {
        ps02_inc = -3.4;
        ps02_inc2 = -1;
        delayTime = 100;
        deg0 = 8;
        N = 6;
        delayTimeExp = 1.1;
        play_chime(ps02_inc, ps02_inc2, delayTime, deg0, N, delayTimeExp);
    }
    LEVELPREV = LEVEL;




}








function play_chime(ps02_inc, ps02_inc2, delayTime, deg0, N, delayTimeExp) {

    let delay0 = 0;
    let delay = delay0;
    // let deg0 = deg0;

    for(let i=0;i<N;i++) {

        let deg = deg0 + LEVEL + ps02_inc*(i)+ps02_inc2*i;
        delay = delay0 + (delayTime*i)**delayTimeExp;

        // console.log("ps02/inc",ps02_inc);

        // setTimeout( playNote_ps02, delay, deg+4, 0.2);
        // setTimeout( playNote_ms07, delay, deg, 0.1);


    }



// for(let i=0;i<N-1;i++) {

//     deg = deg0+ps02_inc*i - 7;
    
//     setTimeout( playNote_ps02, delay, deg);

//     delay = delay0 + delayTime2*i + 600;
// }
}







