import { DateTime } from './luxon/src/luxon.js';

const showCurrentTime = document.querySelector('.current-time');

export default function date() {
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  showCurrentTime.textContent = time;
}