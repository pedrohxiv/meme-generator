const textInput = document.getElementById('text-input');

function elementText() {
  document.getElementById('meme-text').innerText = textInput.value;
}

function uploadImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('meme-image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

textInput.addEventListener('keyup', elementText);
textInput.addEventListener('change', uploadImage);
