canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

car1_width= 140;
car1_height= 90;
car1_image= "car1.png";
car1_x = 10;
car1_y = 10;

car2_width= 140;
car2_height= 90;
car2_image= "car2.png";
car2x = 10;
car2y = 100;

background= "racing.jpeg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBg;
    background_imgTag.src = background;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBg() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2x, car2y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37')
    {
        car1_left();
        console.log("Left arrow key is pressed");

    }
    if(keyPressed == '38')
    {
        car1_up();
        console.log("Up arrow key is pressed");

    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("Right arrow key is pressed");

    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("Down arrow key is pressed");

    }
    if(keyPressed == '87')
    {
        car2_up();
        console.log("W key is pressed");

    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log("S key is pressed");

    }
    if(keyPressed == '65')
    {
        car2_left();
        console.log("A key is pressed");

    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("D key is pressed");

    }

}