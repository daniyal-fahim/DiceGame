
function randomdice(){
    document.getElementById("one").textContent="DICE GAME";
    var num1=(Math.floor((Math.random())*6)) +1;
    
    var imgnew1st="./images/dice"+num1+".png";
    var num2=(Math.floor((Math.random())*6)) +1;

    var imgnew2nd="./images/dice"+num2+".png";
    // document.querySelectorAll("img")[0].setAttribute("src","imgnew1st");
    // document.querySelectorAll("img")[1].setAttribute("src","imgnew2nd");

    var images = document.querySelectorAll("img");
    images[0].src = imgnew1st;
    images[1].src = imgnew2nd;

    if(num1===num2){
        document.getElementById("one").textContent="DRAWS";
       }
   else if(num1>num2){
    document.getElementById("one").textContent="Player One Wins";
   }
   else
   {
    document.getElementById("one").textContent="Player Two Wins";
   }
}

randomdice();