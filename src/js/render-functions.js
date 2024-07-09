import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.getElementById('gallery');
  const markup = images
    .map(
      image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <div class="info">
                <p>Likes: <br /><span>${image.likes}</span></p>
                <p>Views: <br /><span>${image.views}</span></p>
                <p>Comments: <br /><span>${image.comments}</span></p>
                <p>Downloads: <br /><span>${image.downloads}</span></p>
            </div>
        </li>
    `
    )
    .join('');

  gallery.innerHTML = markup;
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
}

export function hideLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
}
