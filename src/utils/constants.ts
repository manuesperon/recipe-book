export const apiUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://recipe-book-six-sepia.vercel.app/api';

export const MAX_FILE_SIZE = 2000000;
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
