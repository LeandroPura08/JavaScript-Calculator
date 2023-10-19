
let screen = '';

document.querySelectorAll('.num').forEach((num)=>{
  num.addEventListener('click',()=>{
  screen = screen + num.innerHTML;
  document.querySelector('.screen').innerHTML= screen;
  }) 
})

//Delete last number button
document.querySelector('.delete').addEventListener('click',()=>{
  screen  = screen.toString().slice(0,-1);
  document.querySelector('.screen').innerHTML = screen;
})

//Delete last number button
document.querySelector('.clear').addEventListener('click',()=>{
  screen  = '';
  document.querySelector('.screen').innerHTML = screen;
})




//Negative or Possitive Button
document.querySelector('.intiger').addEventListener('click',()=>{
  if((Number(screen)) > 0){
    screen = (Number(screen)*-1).toString();
    document.querySelector('.screen').innerHTML = screen;
  }else if((Number(screen)) < 0){
    screen = (Number(screen)*-1).toString();
    document.querySelector('.screen').innerHTML = screen;
  }
})



let opperator ='';

document.querySelectorAll('.opperators').forEach(opperator=>{
  opperator.addEventListener('click',()=>{
    if(screen.endsWith('*') || screen.endsWith('/') || screen.endsWith('+') || screen.endsWith('-')){
      screen  = screen.toString().slice(0,-1);
      screen = screen + opperator.innerHTML;
      document.querySelector('.screen').innerHTML = screen;
    }else{
      screen = screen + opperator.innerHTML;
      document.querySelector('.screen').innerHTML = screen;
    }
    console.log(typeof(screen));
    opperator = opperator.innerHTML;
    console.log(opperator);
  })
})

document.getElementById("equal").addEventListener('click',()=>{
    screen = eval(screen).toString();
    document.querySelector('.screen').innerHTML = screen; 
})


document.getElementById("perCent").addEventListener('click',()=>{
  //const toPercent = ((screen.slice(screen.lastIndexOf('*')+1))/100) || ((screen.slice(screen.lastIndexOf('/')+1))/100) || ((screen.slice(screen.lastIndexOf('-') +1))/100) || ((screen.slice(screen.lastIndexOf('+') +1))/100);
  
  if(opperator == '*'){
    const toPercent = (screen.slice(screen.lastIndexOf('*')+1))/100;
    screen = screen.slice(0,(screen.lastIndexOf('*')+1)) + toPercent.toString();
    document.querySelector('.screen').innerHTML = screen;
  }else if(opperator == '/'){
    toPercent = (screen.slice(screen.lastIndexOf('/')+1))/100;
    screen = screen.slice(0,(screen.lastIndexOf("*")+1)) + toPercent.toString();
  }else if(opperator == '-'){
    toPercent = (screen.slice(screen.lastIndexOf('-') +1))/100;
    screen = screen.slice(0,(screen.lastIndexOf('-')+1)) + toPercent.toString();
  }else if(opperator == '+' ){
    toPercent = (screen.slice(screen.lastIndexOf('+') +1))/100;
    screen = screen.slice(0,(screen.lastIndexOf('+')+1)) + toPercent.toString();
  }
  document.querySelector('.screen').innerHTML = screen;
  console.log(screen);

  console.log(toPercent.toFixed(2));

})

//screen  = screen.toString().slice(0,screen.indexOf('*')) * toPercent;
//document.querySelector('.screen').innerHTML = screen;

//screen.slice(screen.lastIndexOf('*')-1) + toPercent.toString();

