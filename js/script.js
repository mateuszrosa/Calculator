document.addEventListener('DOMContentLoaded',function() {

  let numbers = document.querySelectorAll('.numbers');
  let input = document.querySelector('.screen input');
  let clear = document.querySelector('.clear');
  let sum = document.querySelector('.sum');
  let result = document.querySelector('.result');
  console.log(result);

for(let i=0; i<numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    var a = input.value += numbers[i].innerText;
    console.log(a);
  })
}
clear.addEventListener('click', function() {
  input.value = input.value.slice(0, -1);
})

sum.addEventListener('click', function() {
  input.value += '+';
})

result.addEventListener('click', function() {
  console.log(a);
  input.value = a;
})

})
