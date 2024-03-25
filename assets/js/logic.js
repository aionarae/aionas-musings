const moonButton = document.getElementById('moonButton');
const sunButton = document.getElementById('sunButton');
const body = window.document.body

// Dark Mode Logic
moonButton.addEventListener('click', function (){
  body.setAttribute('class', 'dark');
  moonButton.style.display = "none";
  sunButton.style.display = "inline-block";
  backButton.style.color = "#ffffff";
});

// Light Mode Logic
sunButton.addEventListener('click', function (){
  body.setAttribute('class', 'light');
  sunButton.style.display = "none";
  moonButton.style.display = "inline-block";
  backButton.style.color = "#191E28";
});
