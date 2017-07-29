document.addEventListener('DOMContentLoaded',function() {

  let numbers = document.querySelectorAll('.numbers');
  let input = document.querySelector('.result input');
  console.log(input);

for(let i=0; i<numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    console.log(numbers[i].innerText);
    input.value += numbers[i].innerText;
  })
}

})
