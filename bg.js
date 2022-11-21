


// Just a tiny bit of JavaScript to add classnames to the HTML-element on toggle
var html = document.getElementsByTagName('html');
var radios = document.getElementsByName('themes'); 


for (i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    html[0].classList.remove(html[0].classList.item(0));
    html[0].classList.add(this.id);
  });
}

// Random gradient button

document.querySelector("#submit").addEventListener("click", () =>

{
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexcode1 = '';
    var hexcode2 = '';
    var random_index = 0;

    for(let i=0; i<6; i++){
        random_index = Math.floor(Math.random() * hex_numbers.length);
            hexcode1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
            hexcode2 += hex_numbers[random_index];
    }
    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;

});



// on input, get value and save it as 'storedValue'

function changeColor() { 
  var userColor = document.getElementById('colorID').value;
  localStorage.setItem('storedValue', document.body.style.backgroundColor = userColor);
}

// if there is a value stored, update color picker and background color
if(localStorage.storedValue) {
  document.getElementById('colorID').value = localStorage.storedValue;
  document.body.style.backgroundColor      = localStorage.storedValue;
}
