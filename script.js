var r = -1;
var imgresult="your selected result";
var yousel = document.getElementById("yousel");
var compsel = document.getElementById("compsel");
var finalres = document.getElementById("finalres");
var log = console.log

function rock() {
  r = 0;
  yousel.innerHTML = "Rock";
}
function paper() {
  r = 1;
  yousel.innerHTML = "paper";
}
function scissors() {
  r = 2;
  yousel.innerHTML = "scissors";
}



function call(){
    
    
   let t=Math.floor(Math.random()*3);
   
   if(r==-1){
    
    alert("you haven't choose any option.choose please!");
   }
    if(t==0){
        compsel.innerHTML = "Rock";
        if(r==0){
            finalres.innerHTML = "The mathch is draw! play again...";
            // alert("The mathch is draw! play again...");
        }
        else if(r==1){
            finalres.innerHTML = "congratulation! you win.play again..";
            // alert("congratulation! you win.play again..");
        }
        else if(r==2){
            finalres.innerHTML = "oops! you loose. play again..";
            // alert("oops! you loose. play again..")
        }
    }
    else if(t==1){
        compsel.innerHTML = "Paper";
        if(r==0){
            finalres.innerHTML = "oops! you loose. play again..";
            // alert("oops! you loose. play again..")

        }
        else if(r==1){
            finalres.innerHTML = "The mathch is draw! play again...";
            // alert("The mathch is draw! play again...");

        }
        else if(r==2){
            finalres.innerHTML = "congratulation! you win.play again..";
            // alert("congratulation! you win.play again..");
        }
    }
    else{
        compsel.innerHTML = "scissors";
        if(r==0){
            finalres.innerHTML = "congratulation! you win.play again..";
            // alert("congratulation! you win.play again..");


        }
        else if(r==1){
            finalres.innerHTML = "oops! you loose. play again..";
            // alert("oops! you loose. play again..")

        }
        else if(r==2){
            finalres.innerHTML = "The mathch is draw! play again...";
            // alert("The mathch is draw! play again...");

        }
    }
   // alert(t);
}