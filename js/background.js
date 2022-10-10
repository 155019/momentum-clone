const images = [
  "1d.jpeg",
  "1n.jpeg",
  "2d.jpeg",
  "2n.jpeg",
  "3d.jpeg",
  "3n.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background-image");

document.body.prepend(bgImage);
