
const submitButton = document.getElementById('submit-button');
const requiredMessage = document.getElementById('required-message')

//Display a message that the forms are required
function showMessage (message) {
  requiredMessage.textContent = message;
};

//Clicking the submit button will save user input and redirect to the blog.html
submitButton.addEventListener('click', function (event) {

  var usernameInput = document.getElementById('username-input').value;
  var titleInput = document.getElementById('title-input').value;
  var contentInput = document.getElementById('content-input').value;

  const post = {
    username: usernameInput,
    title: titleInput,
    content: contentInput.trim(),
  };

  localStorage.setItem('post', JSON.stringify(post));

  if (post.username === '' || post.title === '' || post.content === '') {
    showMessage('Username, Title, and Content are required.') 
  } else {
    window.location.href = './blog.html';
  };

  event.preventDefault();

  // post.push(userData);

});