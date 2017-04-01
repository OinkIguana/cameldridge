'use strict';
import Prism from 'prismjs';

function zip(a, b) {
  return Array.prototype.map.call(a, (e, i) => [e, b[i]]);
}

zip(document.querySelectorAll('.summary'), document.querySelectorAll('.content')).forEach(([s, c]) => {
  const show = s.querySelector('.details');
  const hide = c.querySelector('.details');
  show.classList.add('down');
  hide.classList.add('up');
  show.addEventListener('click', () => (s.classList.add('open'), c.classList.add('open')));
  hide.addEventListener('click', () => (s.classList.remove('open'), c.classList.remove('open')));
});

const cats = document.querySelector('#cats');
const show = document.querySelector('.details.cats');
function face() {
  const opt = [
    'n_n', 'o_o', '-_-', 'u_u', '^w^',
    '^_^', '>.<', '>w<', '>o<', '^ᴥ^',
    '>_o', '>v>'
  ];
  return opt[Math.floor(Math.random() * opt.length)]
}
function addCats() {
  const node = document.importNode(cats.content, true);
  node.children[0].children[0].textContent = node.children[0].children[0].textContent.replace(/###/g, face);
  show.parentNode.insertBefore(node, show);
  Prism.highlightAll();
}
show.addEventListener('click', addCats);
addCats(); // add the initial cats
