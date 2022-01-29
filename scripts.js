const robot = document.querySelector('.robot');
document.onkeydown = checkKey;

let x = 0;
let y= 0

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        y -= 50;
    console.log(y);
    robot.style.top = y + 'px';
    }
    else if (e.keyCode == '40') {
        y += 50;
    console.log(y);
    robot.style.top = y + 'px';
    }
    else if (e.keyCode == '37') {
        x -= 50;
        console.log(x);
        robot.style.left = x + 'px';
    }
    else if (e.keyCode == '39') {
       
        x += 50;
        console.log(x);
        robot.style.left = x + 'px';
    }

}