document.addEventListener('DOMContentLoaded',function() {

  let buttons = document.querySelectorAll('.button');
  let input = document.querySelector('.result input');
  console.log(input);

for(let i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log(buttons[i].innerText);
    input.value = buttons[i].innerText;
  })
}

})
