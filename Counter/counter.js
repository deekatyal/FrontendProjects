const num = document.getElementById('number');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const reset = document.getElementById('reset')
let no = 0;

inc.addEventListener('click', function(){
  // let no = num.textContent;
  no += 1;
  if(no>0){
    num.style.color = 'green';
  }
  else if(no === 0){
    num.style.color = 'black';
  }
  num.textContent = no;
})

dec.addEventListener('click', function(){
  no-=1;
  if(no<0){
    num.style.color = 'red';
  }
  else if(no === 0){
    num.style.color = 'black';
  }
  num.textContent = no;
})

reset.addEventListener('click', function(){
  no = 0;
  num.style.color = 'black';
  num.textContent = no;
})

console.log(num.textContent);

