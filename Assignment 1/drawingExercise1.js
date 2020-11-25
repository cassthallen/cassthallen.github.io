/*
Class Number: F1
Class Name: Intro to Programming
Semester: Fall Semester 2020
Instructor Name: Echo Theohar
Student Name: Cass Allen
Student Contact info: cass.allen@woodbury.edu
*/

function setup()
{
    createCanvas(400,400);
    background(200);
}

function draw(){
    if (mouseIsPressed && mouseX < width && mouseY < height)
    {
        fill(60,120,80);
        triangle(mouseX, mouseY, 40, 40, 60, 20);
    }
}