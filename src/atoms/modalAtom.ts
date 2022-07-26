import { atom } from 'recoil';
import { Movie } from '../types';

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const movieState = atom<Movie  | null>({
  key: 'movieState',
  default: null,
});


export const byCategoryModalState = atom({
  key: 'byCategoryModalState',
  default: false,
});

export const categoryState = atom({
  key: 'categoryState',
  default: null,
});