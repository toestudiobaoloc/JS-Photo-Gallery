function upDate(previewPic) {
  // Check if the event is triggering correctly
  console.log('Event triggered!');

  // Log information about the previewPic variable
  console.log('Image source: ', previewPic.src);
  console.log('Alt text: ', previewPic.alt);

  // Update the background image of the element with the ID "image"
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;

  // Update the text of the element with the ID "image"
  imageDiv.textContent = previewPic.alt;
}

function undo() {
  // Reset the background image of the element with the ID "image"
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = '';

  // Reset the text of the element with the ID "image"
  imageDiv.textContent = 'Hover over an image below to display here.';
}
