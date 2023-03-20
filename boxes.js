const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('click', () => {
    const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    square.style.backgroundColor = randomColor;
  });
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}