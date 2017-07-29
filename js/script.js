document.addEventListener('DOMContentLoaded',function() {

  let numbers = document.querySelectorAll('.numbers input');
  let score = document.querySelector('.screen input');
  let clear = document.querySelector('.clear input');
  let sum = document.querySelector('.sum');
  let result = document.querySelector('.result input');

for(let i=0; i<numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    score.value += numbers[i].value;
  })
}
clear.addEventListener('click', function() {
  console.log(score.value);
  score.value = score.value.slice(0, -1);
})

sum.addEventListener('click', function() {
  input.value += '+';
})

result.addEventListener('click', function() {
  console.log(a);
  input.value = a;
})

})
