const moonButton = document.getElementById('moon-btn');
const sunButton = document.getElementById('sun-btn');
const body = window.document.body

// Dark Mode Logic
moonButton.addEventListener('click', function (){
  body.setAttribute('class', 'dark');
  moonButton.style.display = "none";
  sunButton.style.display = "inline-block";
});

// Light Mode Logic
sunButton.addEventListener('click', function (){
  body.setAttribute('class', 'light');
  sunButton.style.display = "none";
  moonButton.style.display = "inline-block";
});
