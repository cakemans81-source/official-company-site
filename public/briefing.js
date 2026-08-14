const scenes = [...document.querySelectorAll('.scene')];
const deck = document.getElementById('deck');
const cur = document.getElementById('cur');
const bar = document.getElementById('bar');
const nameEl = document.getElementById('sceneName');
const hint = document.getElementById('hint');
const fsBtn = document.getElementById('fsBtn');

let index = 0;
let hintTimer;

function pad(n) {
  return String(n + 1).padStart(2, '0');
}

function setIndex(next) {
  index = Math.max(0, Math.min(scenes.length - 1, next));
  scenes.forEach((el, i) => {
    el.classList.toggle('is-on', i === index);
    el.classList.toggle('is-past', i < index);
  });
  cur.textContent = pad(index);
  bar.style.width = `${((index + 1) / scenes.length) * 100}%`;
  nameEl.textContent = scenes[index].dataset.name || '';
}

function go(next) {
  setIndex(next);
  scenes[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const io = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((e) => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const i = scenes.indexOf(visible.target);
  if (i >= 0) setIndex(i);
}, { root: deck, threshold: 0.55 });

scenes.forEach((el) => io.observe(el));
setIndex(0);

window.addEventListener('keydown', (e) => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault();
    go(index + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    go(index - 1);
  } else if (e.key === 'Home') {
    e.preventDefault();
    go(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    go(scenes.length - 1);
  } else if (e.key === 'f' || e.key === 'F') {
    e.preventDefault();
    toggleFs();
  }
});

function toggleFs() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

fsBtn.addEventListener('click', toggleFs);

document.addEventListener('fullscreenchange', () => {
  fsBtn.textContent = document.fullscreenElement ? '나가기' : '전체화면';
});

let idle;
function bumpIdle() {
  document.body.classList.remove('idle');
  clearTimeout(idle);
  idle = setTimeout(() => document.body.classList.add('idle'), 2500);
}
['mousemove', 'keydown', 'touchstart'].forEach((ev) => window.addEventListener(ev, bumpIdle, { passive: true }));
bumpIdle();

clearTimeout(hintTimer);
hintTimer = setTimeout(() => hint.classList.add('gone'), 4200);
