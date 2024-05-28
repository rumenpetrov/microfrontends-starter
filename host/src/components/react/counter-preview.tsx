import { useStore } from '@nanostores/react';
// @ts-ignore
import { $counter } from 'http://localhost:30300/counter.js';

export const CounterPreview = () => {
  const counter = useStore($counter);

  return (
    <div>
      <p>Counter preview: {counter}</p>
    </div>
  );
};

export default CounterPreview;