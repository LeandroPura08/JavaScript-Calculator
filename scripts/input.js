let screen = [];


document.querySelectorAll('.num').forEach((num)=>{
  num.addEventListener('click',()=>{
    screen.push(num.innerHTML);
    document.querySelector('.screen').innerHTML = screen;
    
    console.log(screen);
  }) 
})

document.querySelector('.delete').addEventListener('click',()=>{
  screen.pop();
  console.log('tite');
})