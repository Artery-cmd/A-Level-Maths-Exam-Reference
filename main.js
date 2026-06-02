/**
 * show — switch active panel and highlight the clicked nav button
 * @param {string} id      - panel element id
 * @param {HTMLElement} btn - the nav button that was clicked
 * @param {string} cssVar  - CSS custom property name e.g. '--p'
 */
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

/**
 * tick — mark a checklist item as done and refresh the progress bar
 * @param {HTMLInputElement} el - the checkbox that changed
 */
function tick(el) {
  el.closest('li').classList.toggle('done', el.checked);
  updateProg();
}

/**
 * updateProg — recalculate and render the checklist progress bar
 */
function updateProg() {
  const all  = document.querySelectorAll('#checklist input[type="checkbox"]');
  const done = document.querySelectorAll('#checklist input[type="checkbox"]:checked');
  const pct  = all.length ? Math.round(done.length / all.length * 100) : 0;

  document.getElementById('pbar').style.width = pct + '%';
  document.getElementById('plabel').textContent =
    done.length + ' / ' + all.length + ' checked (' + pct + '%)';
}

// Initialise progress bar on page load
updateProg();
