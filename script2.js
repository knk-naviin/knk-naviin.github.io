const textToChange = document.getElementById('textToChange');
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  textToChange.style.color = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
