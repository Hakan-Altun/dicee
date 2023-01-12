var count1=0;
var count2=0;
function myfunc(){
 var rnd=Math.floor(Math.random()*6)+1;
 var rnd2=Math.floor(Math.random()*6)+1;
 var imgName="";
 function getImgName(rnd){
 switch(rnd){
    case 1:
        imgName="one";
        break;
    case 2:
        imgName="two";
        break;
    case 3:
        imgName="three";
        break;
    case 4:
        imgName="four";
        break;
    case 5:
        imgName="five";
        break;
    case 6:
        imgName="six";
        break;
  }
  return imgName;
 }

 document.querySelector(".dice1").setAttribute("src","Images/"+getImgName(rnd)+".png");
 document.querySelector(".dice2").setAttribute("src","Images/"+getImgName(rnd2)+".png");
 if(rnd>rnd2){
    document.querySelector(".title").textContent="Player 1 wins!";
    count1++;
 }
 else if(rnd===rnd2){
    document.querySelector(".title").textContent="Draw!";
 }
 else{
    document.querySelector(".title").textContent="Player 2 wins!";
    count2++;
 }
 document.querySelector(".player1score").textContent=count1;
 document.querySelector(".player2score").textContent=count2;
 if(count1===10){
    document.querySelector(".title").textContent="Player 1 WINS in Total!🚩";
    document.querySelector("#refresh").classList.add("visibility");
    document.querySelector("h2").classList.toggle("visibility");
 }
 else if(count2===10){
    document.querySelector(".title").textContent="Player 2 WINS in Total!🚩";
    document.querySelector("#refresh").classList.add("visibility");
    document.querySelector("h2").classList.toggle("visibility");
 }
}
