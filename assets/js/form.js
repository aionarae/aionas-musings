const usernameInput = document.getElementById('username-input');
const titleInput = document.getElementById('title-input');
const contentInput = document.getElementById('content-input');
const submitButton = document.getElementById('submit-button');
const requiredMessage = document.getElementById('required-message')

//Display a message that the forms are required
function showMessage (message) {
  requiredMessage.textContent = message;
};

//Clicking the submit button will save user input and redirect to the blog.html
submitButton.addEventListener('click', function (event) {

  const post = {
    username: usernameInput.value,
    title: titleInput.value,
    content: contentInput.value
  };

  localStorage.setItem('post', JSON.stringify(post));

  if (post.username === '' || post.title === '' || post.content === '') {
    showMessage('Username, Title, and Content are required.') 
  } else {
    window.location.href = './blog.html';
  }

  event.preventDefault();

});