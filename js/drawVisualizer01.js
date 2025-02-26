



function drawVisualizer() {

    let canvas = canvasViz01;
    let canvasW = canvas.width;
    let canvasH = canvas.height;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasW, canvasH);

    var rms;
    try{
        rms = device.parametersById.get("master_rms").value;
    } catch(error) {
        rms = 0.01;
    }


    let val = Math.tanh((rms+0.4)*4.0);


    let rMax = 0.8;
    
    let rmsScaled = rms*0.3;
    
    for(let i=0; i<SHAPES.length; i++) {

        let shape = SHAPES[i];
        let on = shape.on;

        if(on==0) {
            shape.on = makeChoice(10);
            SHAPES[i] = shape; // update shape
            return;
        }

        let speed = shape.speed * 0.3;
        let xC = shape.xC - 0.0001 + getRandomFloat(0.0007,0.001)*speed*rmsScaled*2.0;
        let yC = shape.yC + getRandomFloat(0.0007,0.001)*speed*0.50;
        let rad = shape.rad + 0.00001 + getRandomFloat(0.001,0.01)*rmsScaled*1.0;
        // let aspect = shape.aspect + randomSign() * val*getRandomFloat(0.005,0.01);
        let age = shape.age + 0.001;
        let aspect = 1.0 + rmsScaled*0.1;
        let alpha = shape.alpha * 0.97;

        let xCPix = xC*canvasW;
        let yCPix = yC*canvasH;

        //// when the radius exceeds this value reset the shape
        if(age>1.0 || rad>0.14) {
            age = 0.0;
            rad = 0.0;
            alpha = 1.0;
            xC = getRandomFloat(-0.2,1.0);
            yC = getRandomFloat(-0.2,1.0);
            aspect = 1.0;
        }

        let rPixX = val*canvasW*rad*rMax;

        let rPixY = rPixX*aspect;

        // console.log("rPix",rPix)

        //// draw circle
        ctx.fillStyle =   "hsl(200, 50%, 60%, " + alpha + ")";
        ctx.strokeStyle = "hsl(200, 50%, 60%, " + alpha + ")";
        ctx.lineWidth = getRandomFloat(1.0,4.0);

        ctx.beginPath();
        ctx.ellipse(xCPix, yCPix, rPixX, rPixY, 0, 0, twoPI);
        // ctx.stroke();
        ctx.fill();

        shape.rad = rad;
        shape.age = age;
        shape.alpha = alpha;
        shape.xC = xC;
        shape.yC = yC;
        SHAPES[i] = shape; // update shape

    }





}