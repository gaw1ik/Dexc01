
PATH = [];


function drawVisualizer() {

    let canvas = canvasViz01;
    let canvasW = canvas.width;
    let canvasH = canvas.height;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasW, canvasH);

    artboardH = canvas.height;
    artboardW = canvas.width;
    artboardAR = artboardH/artboardW;
    artboardWo2 = (1/artboardAR)/2;
    xCenterOffset = artboardWo2;
    yCenterOffset = 0.0;
    
    // for(let i=0; i<SHAPES.length; i++) {

        let yNew = r2n(CoinValue,91500,92500)*0.5 + 0.5;
        let lw = 0.002;

        PATH.push([0.1,yNew]);


        for(let i=0; i<PATH.length; i++) {

            let [x,y] = PATH[i];



            if(x>-artboardWo2) {
                xShifted = x-0.001;
                PATH[i] = [xShifted,y];
            } else {
                // console.log("removed")
                PATH = PATH.slice(1); // remove that element
            }

        }

        // console.log("PATH.length",PATH.length)


        let [hue,sat,lit,alpha] = [0,0,50,255];

        if(averagePercentDelta<-percentTrigger01) {
            [hue,sat,lit] = [0,50,50,255];
        } else if (averagePercentDelta>percentTrigger01) {
            [hue,sat,lit] = [130,50,50,255];
        }


        drawPath(ctx, PATH, lw, hue, sat, lit, alpha, 1, 0);

 



    // }





}