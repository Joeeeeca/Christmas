const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const imageSources = Array.from(thumbnails).map(img => img.src);

// Open lightbox
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentIndex = index;
    lightboxImg.src = imageSources[currentIndex];
    lightbox.classList.remove('hidden');
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Next/prev
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageSources.length;
  lightboxImg.src = imageSources[currentIndex];
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  lightboxImg.src = imageSources[currentIndex];
});

// ESC key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.add('hidden');
});
