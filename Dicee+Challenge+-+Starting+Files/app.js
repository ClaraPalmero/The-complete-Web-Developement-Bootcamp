let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = "dice" + randomNumber1 + ".png";
let randomDiceSource = "images/" + randomDiceImg;
const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1 === randomNumber2){
   document.querySelector("h1").textContent = "Draw";
};
if(randomNumber1 < randomNumber2){
     document.querySelector("h1").innerHTML = "🚩Player2 wins!";
};
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 wins!";
};






