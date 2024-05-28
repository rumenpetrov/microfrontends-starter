// @ts-ignore
import { $counter, counterAdd } from 'http://localhost:30300/counter.js';

export function setupCounter(element: HTMLButtonElement) {
  const render = () => {
    element.innerHTML = `global counter is ${$counter.get()}`
  }

  element.addEventListener('click', counterAdd)

  $counter.subscribe(render)

  render()
}
