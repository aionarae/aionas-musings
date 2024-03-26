// Retrieve and display all blog posts

let blogPost = document.getElementById('postList');
let backButton = document.getElementById('backButton');
let lastPostData = localStorage.getItem('posts');

if (lastPostData) {
  var lastPost = JSON.parse(lastPostData);

  lastPost.forEach(function(post) {

      var listItem = document.createElement("li");

      var blogTitle = document.createElement("h2");
      blogTitle.textContent = post.title;
      blogTitle.className = "blogTitle"

      var content = document.createElement("p");
      content.textContent = post.content;
      content.className = "content";

      var author = document.createElement("p");
      author.textContent = `Author: ${post.username}`;
      author.className = "author";

      listItem.appendChild(blogTitle);
      listItem.appendChild(content);
      listItem.appendChild(author);

    //Append the new list to the ul
      blogPost.appendChild(listItem);
  });
}

backButton.addEventListener("click", function() {
  window.location.href = "/Users/aiona/bootcamp/challenges/week-4/aionas-musings/index.html";
});