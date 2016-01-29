var myCircle;
var circles = [];

function getRandom(min, max) {
    //find random number between min and max
    return (Math.random() * (max - min)) + min;
}
var keyData = {

    a: {
        sound: new Howl({
            urls: ['sounds/bubbles.mp3']
        })
    },
    b: {
        sound: new Howl({
            urls: ['sounds/clay.mp3']
        })
    },
    c: {
        sound: new Howl({
            urls: ['sounds/confetti.mp3']
        })
    },
    d: {
        sound: new Howl({
            urls: ['sounds/corona.mp3']
        })
    },
    e: {
        sound: new Howl({
            urls: ['sounds/dotted-spiral.mp3']
        })
    },
    f: {
        sound: new Howl({
            urls: ['sounds/flash-1.mp3']
        })
    },
    g: {
        sound: new Howl({
            urls: ['sounds/flash-2.mp3']
        })
    },
    h: {
        sound: new Howl({
            urls: ['sounds/flash-3.mp3']
        })
    },
    i: {
        sound: new Howl({
            urls: ['sounds/glimmer.mp3']
        })
    },
    j: {
        sound: new Howl({
            urls: ['sounds/moon.mp3']
        })
    },
    k: {
        sound: new Howl({
            urls: ['sounds/pinwheel.mp3']
        })
    },
    l: {
        sound: new Howl({
            urls: ['sounds/piston-1.mp3']
        })
    },
    m: {
        sound: new Howl({
            urls: ['sounds/piston-2.mp3']
        })
    },
    n: {
        sound: new Howl({
            urls: ['sounds/piston-3.mp3']
        })
    },
    o: {
        sound: new Howl({
            urls: ['sounds/prism-1.mp3']
        })
    },
    p: {
        sound: new Howl({
            urls: ['sounds/prism-2.mp3']
        })
    },
    q: {
        sound: new Howl({
            urls: ['sounds/prism-3.mp3']
        })
    },
    r: {
        sound: new Howl({
            urls: ['sounds/splits.mp3']
        })
    },
    s: {
        sound: new Howl({
            urls: ['sounds/squiggle.mp3']
        })
    },
    t: {
        sound: new Howl({
            urls: ['sounds/strike.mp3']
        })
    },
    u: {
        sound: new Howl({
            urls: ['sounds/suspension.mp3']
        })
    },
    v: {
        sound: new Howl({
            urls: ['sounds/timer.mp3']
        })
    },
    w: {
        sound: new Howl({
            urls: ['sounds/ufo.mp3']
        })
    },
    x: {
        sound: new Howl({
            urls: ['sounds/veil.mp3']
        })
    },
    y: {
        sound: new Howl({
            urls: ['sounds/wipe.mp3']
        })
    },
    z: {
        sound: new Howl({
            urls: ['sounds/zig-zag.mp3']
        })
    }


};
setTimeout(function () {
    $('h1').fadeIn(1000)
}, 500);
setTimeout(function () {
    $('h1').fadeOut(1000)
}, 3500);
setTimeout(function () {
    $('h2').fadeIn(1000)
}, 4500);
setTimeout(function () {
    $('h2').fadeOut(1000)
}, 7500);
setTimeout(function () {
    $('h3').fadeIn(1000)
}, 8500);
setTimeout(function () {
    $('h3').fadeOut(1000)
}, 11500);


function onKeyDown(e) {
    //set your maximum point based off of the view size
    var maxPoint = new Point(view.size.width, view.size.height),
        randomPoint = Point.random(),
        point = maxPoint * randomPoint;
    myCircle = new Path.Circle(point, 500);
    myCircle.fillColor = new Color(getRandom(0, 1), getRandom(0, 1), getRandom(0, 1), 1);
    circles.push(myCircle);
    if (keyData[e.key] != undefined) {
        keyData[e.key].sound.play();
    }
}

function onFrame(e) {
    for (i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(.90);
        if (circles[i].bounds.height < .0001) {
            circles.splice(i, 1);
        }
    }
}
