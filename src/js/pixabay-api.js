const API_KEY = '44853483-1a0be7ea41176b8922a4359bd';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return response.json();
  });
}
