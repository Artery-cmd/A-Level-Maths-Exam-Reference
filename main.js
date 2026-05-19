@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');

:root {
  --bg: #0c0e14;
  --s1: #13161f;
  --s2: #1a1e2a;
  --s3: #1f2333;
  --bd: rgba(255, 255, 255, 0.07);
  --b2: rgba(255, 255, 255, 0.13);
  --tx: #e8eaf0;
  --mu: #6a7090;
  --p:  #7b6ef6;
  --g:  #4fd1a5;
  --a:  #f0a04b;
  --r:  #e0636c;
  --b:  #5bb8f5;
  --pk: #d975c4;
  --ye: #e8d44d;
  --mono:  'DM Mono', monospace;
  --serif: 'DM Serif Display', serif;
  --sans:  'Outfit', sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg);
  color: var(--tx);
  font-family: var(--sans);
  font-weight: 300;
  min-height: 100vh;
  overflow-x: hidden;
  font-size: 14px;
  line-height: 1.5;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(123, 110, 246, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(123, 110, 246, 0.025) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

/* ── LAYOUT ── */
.wrap {
  max-width: 920px;
  margin: 0 auto;
  padding: 2rem 1.25rem 5rem;
  position: relative;
  z-index: 1;
}

/* ── HEADER ── */
.hdr { margin-bottom: 1.8rem; animation: up .5s ease both; }

.eye {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--p);
  margin-bottom: .4rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.eye::after {
  content: '';
  width: 36px;
  height: 1px;
  background: var(--p);
  opacity: .4;
}

h1 {
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -.02em;
}
h1 em { font-style: italic; color: var(--p); }

.sub { font-size: 12px; color: var(--mu); margin-top: .3rem; }

/* ── NAV ── */
.nav {
  display: flex;
  gap: 3px;
  margin-bottom: 1.5rem;
  background: var(--s1);
  border: 1px solid var(--bd);
  border-radius: 12px;
  padding: 4px;
  animation: up .45s .06s ease both;
  flex-wrap: wrap;
}

.nb {
  flex: 1;
  min-width: 90px;
  padding: 7px 9px;
  font-family: var(--sans);
  font-size: 11.5px;
  font-weight: 400;
  color: var(--mu);
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all .18s;
  text-align: center;
  white-space: nowrap;
}
.nb:hover { color: var(--tx); background: var(--s2); }
.nb.on    { color: #fff; font-weight: 500; }

/* ── PANELS ── */
.panel     { display: none; animation: up .28s ease both; }
.panel.on  { display: block; }

@keyframes up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── SECTION LABEL ── */
.sl {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: .13em;
  color: var(--mu);
  margin: 1.3rem 0 .55rem;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--bd);
}

/* ── PILL GRID ── */
.pg {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 7px;
  margin-bottom: 7px;
}

.pl {
  background: var(--s1);
  border: 1px solid var(--bd);
  border-radius: 10px;
  padding: 9px 12px;
  transition: border-color .15s;
}
.pl:hover { border-color: var(--b2); }

.pl-l {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: .09em;
  margin-bottom: 3px;
  font-weight: 500;
}
.pl-f { font-family: var(--mono); font-size: 12.5px; color: #c0bcff; line-height: 1.5; }
.pl-n { font-size: 11px; color: var(--mu); margin-top: 2px; line-height: 1.4; }

/* ── CARDS ── */
.card {
  background: var(--s1);
  border: 1px solid var(--bd);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  margin-bottom: .7rem;
  transition: border-color .15s;
}
.card:hover { border-color: var(--b2); }

.card-h { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }
.dot    { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.card-t { font-family: var(--serif); font-size: 1.05rem; font-weight: 400; }

.tag {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: .07em;
  padding: 2px 7px;
  border-radius: 20px;
  margin-left: auto;
  flex-shrink: 0;
}

/* ── STEPS ── */
.steps { margin-top: 7px; display: flex; flex-direction: column; gap: 5px; }
.step  { display: flex; gap: 8px; align-items: flex-start; font-size: 12px; line-height: 1.5; }
.sn {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
  font-family: var(--mono);
}

/* ── INLINE ELEMENTS ── */
code {
  font-family: var(--mono);
  font-size: 11.5px;
  background: rgba(123, 110, 246, 0.11);
  color: #b5b0ff;
  border: 1px solid rgba(123, 110, 246, 0.18);
  padding: 1px 5px;
  border-radius: 4px;
}

.mb {
  font-family: var(--mono);
  font-size: 12px;
  background: var(--s2);
  border: 1px solid var(--bd);
  border-radius: 8px;
  padding: 9px 12px;
  margin: 6px 0;
  color: #b5b0ff;
  line-height: 1.7;
}

.tip {
  font-size: 11.5px;
  color: var(--mu);
  margin-top: 6px;
  padding: 6px 10px;
  border-left: 2px solid var(--b2);
  font-style: italic;
  line-height: 1.5;
}
.tip b { font-style: normal; }

/* ── CALLOUTS ── */
.callout {
  background: linear-gradient(135deg, rgba(123, 110, 246, .07), rgba(79, 209, 165, .04));
  border: 1px solid rgba(123, 110, 246, .2);
  border-radius: 12px;
  padding: .9rem 1.2rem;
  margin-top: .7rem;
  font-size: 12px;
  line-height: 1.7;
}
.c-title {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--p);
  margin-bottom: 6px;
  font-weight: 500;
}

.warn {
  background: linear-gradient(135deg, rgba(240, 160, 75, .07), rgba(224, 99, 108, .04));
  border: 1px solid rgba(240, 160, 75, .22);
  border-radius: 12px;
  padding: .9rem 1.2rem;
  margin-top: .7rem;
  font-size: 12px;
  line-height: 1.8;
}
.w-title {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--a);
  margin-bottom: 6px;
  font-weight: 500;
}

/* ── CONDITION ROWS ── */
.cond {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: var(--s2);
  border: 1px solid var(--bd);
  border-radius: 8px;
  padding: 8px 11px;
  margin-bottom: 5px;
  font-size: 12px;
  line-height: 1.5;
}
.ct {
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── GRID LAYOUTS ── */
.two   { display: grid; grid-template-columns: 1fr 1fr; gap: .7rem; }
.three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: .7rem; }

@media (max-width: 620px) {
  .two, .three { grid-template-columns: 1fr; }
}

/* ── CHECKLIST ── */
.check-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .6rem;
  margin-bottom: .7rem;
}
@media (max-width: 580px) {
  .check-grid { grid-template-columns: 1fr; }
}

.check-card {
  background: var(--s1);
  border: 1px solid var(--bd);
  border-radius: 12px;
  padding: .9rem 1rem;
}
.check-card h3 {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: .6rem;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--bd);
}

.cl { list-style: none; display: flex; flex-direction: column; gap: 5px; }
.cl li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  line-height: 1.4;
  cursor: pointer;
  user-select: none;
}
.cl li input[type="checkbox"] {
  margin-top: 1px;
  accent-color: var(--p);
  flex-shrink: 0;
  width: 13px;
  height: 13px;
  cursor: pointer;
}
.cl li.done span { text-decoration: line-through; color: var(--mu); }

.big-check {
  background: var(--s1);
  border: 1px solid var(--bd);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  margin-bottom: .7rem;
}
.big-check h3 { font-family: var(--serif); font-size: 1rem; font-weight: 400; margin-bottom: .6rem; }

.progress-wrap {
  background: var(--s2);
  border-radius: 20px;
  height: 5px;
  margin: .8rem 0 .4rem;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, var(--p), var(--g));
  transition: width .35s ease;
  width: 0%;
}
.progress-label {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--mu);
  text-align: right;
}

.nib {
  background: rgba(232, 212, 77, 0.06);
  border: 1px solid rgba(232, 212, 77, 0.18);
  border-radius: 10px;
  padding: 9px 13px;
  margin-bottom: .8rem;
  font-size: 12px;
  line-height: 1.65;
}
.nib-t {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--ye);
  margin-bottom: 5px;
  font-weight: 500;
}

/* ── COLOUR HELPERS ── */
.cp  { color: var(--p);  }
.cg  { color: var(--g);  }
.ca  { color: var(--a);  }
.cr  { color: var(--r);  }
.cb  { color: var(--b);  }
.cpk { color: var(--pk); }
.cye { color: var(--ye); }
