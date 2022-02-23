var randomNumber1;
randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = "images/" + randomImage;

randomDice = document.querySelectorAll('img')[0];
randomDice.setAttribute('src', randomImageSrc);

var randomNumber2;
randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2 = "images/" + randomImage2;

randomDice2 = document.querySelectorAll('img')[1];
randomDice2.setAttribute('src', randomImageSrc2);


    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML ="Player 1 Won";
    }else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML ="Player 2 Won";
    }else{
        document.querySelector("h1").innerHTML ="Match Draw";
    }

    
