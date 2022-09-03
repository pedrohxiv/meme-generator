const textInput = document.getElementById('text-input');
const memeImageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');

function elementText() {
  document.getElementById('meme-text').innerText = textInput.value;
}

function uploadImage(event) {
  const reader = new FileReader();
  reader.onload = () => {
    const output = memeImage;
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

function insertMeme1() {
  memeImage.src = './imgs/meme1.png';
}

function insertMeme2() {
  memeImage.src = './imgs/meme2.png';
}

function insertMeme3() {
  memeImage.src = './imgs/meme3.png';
}

function insertMeme4() {
  memeImage.src = './imgs/meme4.png';
}

textInput.addEventListener('keyup', elementText);
textInput.addEventListener('change', uploadImage);
document.getElementById('fire').addEventListener('click', fireBoard);
document.getElementById('water').addEventListener('click', waterBoard);
document.getElementById('earth').addEventListener('click', earthBoard);
document.getElementById('meme-1').addEventListener('click', insertMeme1);
document.getElementById('meme-2').addEventListener('click', insertMeme2);
document.getElementById('meme-3').addEventListener('click', insertMeme3);
document.getElementById('meme-4').addEventListener('click', insertMeme4);
