import hamburguerMenu from './hamburguer-menu.js';

const d = document;

document.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('.panel-btn', '.panel', '.navigation a');
});
