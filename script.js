const textInput = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');

function elementText() {
  document.getElementById('meme-text').innerText = textInput.value;
}

function uploadImage(event) {
  const reader = new FileReader();
  reader.onload = () => {
    const output = document.getElementById('meme-image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function fireBoard() {
  memeImageContainer.style.border = '3px dashed rgb(255, 0, 0)';
}

function waterBoard() {
  memeImageContainer.style.border = '5px double rgb(0, 0, 255)';
}

function earthBoard() {
  memeImageContainer.style.border = '6px groove rgb(0, 128, 0)';
}

textInput.addEventListener('keyup', elementText);
textInput.addEventListener('change', uploadImage);
document.getElementById('fire').addEventListener('click', fireBoard);
document.getElementById('water').addEventListener('click', waterBoard);
document.getElementById('earth').addEventListener('click', earthBoard);
