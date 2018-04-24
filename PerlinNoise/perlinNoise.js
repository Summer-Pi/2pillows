var inc = 0.1;

var scl = 10;
var rows,cols;

var zoff= 0;

var fr;

var particles = [];
var flowfield  =[];

function setup(){
    createCanvas(200,200);
    cols = floor(width/scl);
    rows = floor(height/scl);
    fr = createP('');
    flowfield = new Array(cols * rows);

    for(var i = 0; i < 500; i++){
        particles[i] = new Particle();
    }
    background(255);
}

function draw(){
    var xoff = 0;
    for( x = 0; x < cols; x++){
        var yoff = 0;
        for( y = 0; y < rows;y++){
            var index = x + y * cols ;
            var angle = noise(xoff,yoff,zoff) * TWO_PI *4;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            yoff += inc;
            stroke(0,50);
            // push();
            // translate(x*scl, y*scl);
            // rotate(v.heading());
            // strokeWeight(1);
            // line(0, 0, scl, 0);
            // pop();
        }  
        xoff += inc;  
        zoff +=0.0003; 

    }
    for (var i = 0; i < particles.length;i++){
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();

    }

 fr.html(floor(frameRate()));
}


// var inc = 0.1;

// function setup(){
//     createCanvas(200, 200);
// }

// function draw(){
//     loadPixels();
//     for(x = 0; x< width; x++){
//         for(y = 0; y < height; y++){
//             var index = (x+ y*width)*4;
//             var r = random(255);
//             pixels[index + 0] = r;
//             pixels[index + 1] = r;
//             pixels[index + 2] = r;
//             pixels[index + 3] = 255;
           
//         }    
//     }
//      updatePixels();
// }




// var inc = 0.1;
// var start = 0.0;
// function setup(){
//     createCanvas(400,400);
// }

// function draw(){
//     background(51);
//     stroke(255);
//     noFill();
//     beginShape();
//     var xoff = start;
//     for( x = 0; x < width; x++){
//         stroke(255);
//         var y = noise(xoff)*height;
//         xoff +=inc;
//         vertex(x, y);
//     }
//     endShape();
//     start+=inc;
// }


// var x = 0;
// var timer1;
// var timer2;

// function setup() {
//   createCanvas(200, 200);
//   timer1 = createP('timer 1');
//   timer2 = createP('timer 2');
//   button
//   makeTimer(timer1, 500);
//   makeTimer(timer2, 312);

// }

// function makeTimer(elt, wait) {
//   var counter = 0;
//   setInterval(timeIt, wait);
//   function timeIt() {
//     elt.html(counter);
//     counter++;
//   }
// }

// function draw() {
//   background(51);
//   stroke(255);
//   line(x, 0, x, height);

//   x = x + 3;
//   if (x > width) {
//     x = 0;
//   }
// }

// function doTimer(time) {

//   if (!interval) {
//     interval = setInterval(makeTimer(), time);
//     button1.html('stop timer');
//   } else {
//     clearInterval(interval);
//     interval = false;
//     this.html('start timer');
//   }
// }

