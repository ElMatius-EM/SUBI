const slides = [...document.querySelectorAll('.slide')];
const N = slides.length;
let cur = 0;

// Build dots
const dotsEl = document.getElementById('dots');
slides.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' on' : '');
  d.onclick = () => jump(i);
  dotsEl.appendChild(d);
});

function jump(n) {
  cur = Math.max(0, Math.min(N - 1, n));
  slides.forEach((s, i) => s.classList.toggle('on', i === cur));
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === cur));
  document.getElementById('ctr').textContent = `${cur + 1} / ${N}`;
  document.getElementById('pb').style.width = `${(cur + 1) / N * 100}%`;
}

function go(d) { jump(cur + d); }

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(-1);
});

jump(0);
