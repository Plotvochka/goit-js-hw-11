import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

hideLoader();

const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const query = searchForm.elements.query.value.trim();
  console.log(query);
  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  clearGallery();
  showLoader();

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      renderGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
