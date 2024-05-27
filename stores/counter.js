import { atom } from 'https://esm.sh/nanostores@0.10.3';
// import { atom } from 'nanostores';
import { persistentAtom } from 'https://esm.sh/@nanostores/persistent';

export const $counter = atom(0);
// export const $counter = persistentAtom('counter', 0);

export const counterAdd = () => {
  $counter.set($counter.get() + 1);
  // $counter.set(parseInt($counter.get(), 10) + 1);
};