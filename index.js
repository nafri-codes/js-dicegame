  




document.querySelector(".btn").addEventListener("click", play);

function play(){

const randomNumber1 = Math.floor(Math.random()*6+1);
const randomNumber2 = Math.floor(Math.random()*6+1);

 var randomImg  = 'dice'+randomNumber1+'.png';
 var fullImg = 'images/'+randomImg;

  var left = document.querySelector('.img1').setAttribute('src',fullImg);

  var randomImg2  = 'dice'+randomNumber2+'.png';
  var fullImg2 = 'images/'+randomImg2;
 



  var right = document.querySelector('.img2').setAttribute('src',fullImg2);

  if (randomNumber1 > randomNumber2){

    document.querySelector('h1').innerHTML = 'player 1 wins !!!!'
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML= 'player 2 wins !!!!'

  }
  else {
    document.querySelector('h1').innerHTML = 'draw'
  }
}






