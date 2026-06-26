
const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Jab image pe click karo to lightbox khul jaye
gallery.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// Close button
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % gallery.length;
  lightboxImg.src = gallery[currentIndex].src;
});

// Prev button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  lightboxImg.src = gallery[currentIndex].src;
});

// Lightbox ke background pe click karo to band ho jaye
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
