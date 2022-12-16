//Image 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

//Image2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

//Player 1 Wins
if(randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "🚩Player1 Wins!"
//Player 2 Wins
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player2 Wins!🚩"
//Same
else
    document.querySelector("h1").textContent = "Draw!🎌"

