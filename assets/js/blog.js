// when a user views the blog page, 
// -- I see a list of blog posts 
// -- i see the last post as a list
// -- i can click back and add another post
// if i submit, i see both posts

let blogPost = document.getElementById('postList');
let backButton = document.getElementById('backButton');
let lastPostData = localStorage.getItem('post');

if (lastPostData) {
  var lastPost = JSON.parse(lastPostData);

  var listItem = document.createElement("li");

  var blogTitle = document.createElement("h2");
  blogTitle.textContent = lastPost.title;
  blogTitle.className = "blogTitle"

  var content = document.createElement("p");
  content.textContent = lastPost.content;
  content.className = "content";

  var author = document.createElement("p");
  author.textContent = `Author: ${lastPost.username}`;
  author.className = "author";


  listItem.appendChild(blogTitle);
  listItem.appendChild(content);
  listItem.appendChild(author);

//Append the new list to the ul
blogPost.appendChild(listItem);


}

backButton.addEventListener("click", function() {
  window.location.href = "/Users/aiona/bootcamp/challenges/week-4/aionas-musings/index.html";
});

