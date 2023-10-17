
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
  console.log('tite');
  document.querySelector('.screen').innerHTML = screen;
})

//Delete last number button
document.querySelector('.clear').addEventListener('click',()=>{
  screen  = '';
  console.log('tite');
  document.querySelector('.screen').innerHTML = screen;
})




//Negative or Possitive Button
document.querySelector('.intiger').addEventListener('click',()=>{
  if((Number(screen)) > 0){
    screen = Number(screen)*-1;
    document.querySelector('.screen').innerHTML = screen;
    console.log(Number(screen));
  }else if((Number(screen)) < 0){
    screen = Number(screen)*-1;
    document.querySelector('.screen').innerHTML = screen;
    console.log(Number(screen));
  }
})



let opperator ='';

document.querySelectorAll('.opperators').forEach(opperator=>{
  opperator.addEventListener('click',()=>{
      screen = screen + opperator.innerHTML;
      document.querySelector('.screen').innerHTML = screen;
    
  })
})

document.getElementById("equal").addEventListener('click',()=>{
  screen = eval(screen);
  document.querySelector('.screen').innerHTML = screen;
})


document.getElementById("perCent").addEventListener('click',()=>{
  const toPercent = (screen.slice(screen.indexOf('*') + 1))/100;
  screen  = screen.toString().slice(0,screen.indexOf('*')) * toPercent;
  document.querySelector('.screen').innerHTML = screen;
})

