const form = document.querySelector('form');
const commentList = document.querySelector('#comment-list');
const addButton = document.querySelector('#submit-btn');
const commentField = document.querySelector('#comment');

let comments = JSON.parse(localStorage.getItem('comments')) || [];

comments.forEach((commentText) => {
  const newComment = createCommentElement(commentText);
  commentList.appendChild(newComment);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const commentInput = document.querySelector('#comment');
  const commentText = commentInput.value.trim();

  if (commentText) {
    const newComment = createCommentElement(commentText);
    commentList.appendChild(newComment);

    comments.push(commentText);
    localStorage.setItem('comments', JSON.stringify(comments));
    commentInput.value = '';

    const flashMessage = document.createElement('div');
    flashMessage.textContent = 'Comment added successfully';
    flashMessage.classList.add('flash-message', 'success');
    form.insertBefore(flashMessage, addButton);

    setTimeout(() => {
      flashMessage.remove();
    }, 2000);

  } else {
    const flashMessage = document.createElement('div');
    flashMessage.textContent = 'Comment is empty';
    flashMessage.classList.add('flash-message', 'error');
    form.insertBefore(flashMessage, commentField);

    setTimeout(() => {
      flashMessage.remove();
    }, 2000);
  }
});

function createCommentElement(commentText) {
  const commentElement = document.createElement('div');
  commentElement.textContent = commentText;
  const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  commentElement.style.backgroundColor = randomColor;
  return commentElement;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}