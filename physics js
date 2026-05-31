function show(id, btn, cssVar) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.nb').forEach(b => {
    b.classList.remove('on');
    b.style.background = 'transparent';
    b.style.color = '';
  });
  document.getElementById(id).classList.add('on');
  btn.classList.add('on');
  const col = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  btn.style.background = col;
  btn.style.color = '#fff';
}

function tick(el) {
  el.closest('li').classList.toggle('done', el.checked);
  updateProg();
}

function updateProg() {
  const all  = document.querySelectorAll('#checklist input[type="checkbox"]');
  const done = document.querySelectorAll('#checklist input[type="checkbox"]:checked');
  const pct  = all.length ? Math.round(done.length / all.length * 100) : 0;
  document.getElementById('pbar').style.width = pct + '%';
  document.getElementById('plabel').textContent =
    done.length + ' / ' + all.length + ' checked (' + pct + '%)';
}

updateProg();
