const button = document.querySelector('button');
const imageContainer = document.querySelector('.image-container');

button.addEventListener('click', () => {
  const img = document.createElement('img');

  // Use full-size random image URL
  img.src = `https://picsum.photos/id/237/200/300`
  console.log(img.src)
  img.alt = "Random Image";
  img.style.width = "12rem";
  img.style.height = "8rem";
  img.style.objectFit = "cover";
  img.style.borderRadius = "10px";

  imageContainer.appendChild(img);
});
