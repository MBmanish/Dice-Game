
window.onclick = choosePic;
var myPic = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");


    function choosePic()
    {
        var randomNumber1 = Math.floor(Math.random()* myPic.length);
         console.log(randomNumber1);
     document.getElementById("myPicture").src = myPic[randomNumber1];

     var randomNumber2 = Math.floor(Math.random()* myPic.length);
         console.log(randomNumber2);
     document.getElementById("myPicture1").src = myPic[randomNumber2];

     if(randomNumber1>randomNumber2)
     {
         document.getElementById("heading").innerHTML="Player2 Wins";
     }
     else if (randomNumber1<randomNumber2)
     {
        document.getElementById("heading").innerHTML="Player1 Wins";
     }
     else{
        document.getElementById("heading").innerHTML="Draw";
     }
    }
    