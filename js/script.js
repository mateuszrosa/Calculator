document.addEventListener('DOMContentLoaded',function() {

  let numbers = document.querySelectorAll('.numbers input');
  let score = document.querySelector('.screen input');
  let clear = document.querySelector('.clear input');
  let sum = document.querySelector('.sum input');
  let minus = document.querySelector('.minus input');
  let multiply = document.querySelector('.multiply input');
  let divide = document.querySelector('.divide input');
  let percent = document.querySelector('.percent input');
  let dot = document.querySelector('.dot input');
  let result = document.querySelector('.result input');

for(let i=0; i<numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    score.value += numbers[i].value;
  })
}
clear.addEventListener('click', function() {
  console.log(score.value);
  score.value = '';
})

dot.addEventListener('click', function() {
  score.value += '.';
})

sum.addEventListener('click', function() {
  score.value += '+';
})

minus.addEventListener('click', function() {
  score.value += '-';
})

multiply.addEventListener('click', function() {
  score.value += '*';
})

divide.addEventListener('click', function() {
  score.value += '/';
})

result.addEventListener('click', function() {
    score.value = eval(score.value);
})

})
