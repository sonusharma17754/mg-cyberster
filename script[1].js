// Simple client-side functionality: gallery, localStorage for registrations & demos, modal preview

const IMAGES = [
  {key:'images/car-1.svg', title:'Cyberster — Front view'},
  {key:'images/car-2.svg', title:'Cyberster — Side view'},
  {key:'images/car-3.svg', title:'Cyberster — Interior'},
  {key:'images/car-4.svg', title:'Cyberster — Rear view'},
  {key:'images/car-5.svg', title:'Cyberster — Top view'},
  {key:'images/car-6.svg', title:'Cyberster — Wheel detail'}
];

function el(id){return document.getElementById(id)}

function renderGallery(){
  const grid = el('gallery-grid');
  grid.innerHTML = '';
  IMAGES.forEach(img=>{
    const card = document.createElement('div'); card.className='gallery-card';
    const i = document.createElement('img'); i.src = img.key; i.alt = img.title;
    const t = document.createElement('div'); t.className='gallery-title'; t.textContent = img.title;
    i.addEventListener('click', ()=>openModal(img));
    card.appendChild(i); card.appendChild(t);
    grid.appendChild(card);
  });
}

function openModal(img){
  const modal = el('modal'); modal.setAttribute('aria-hidden','false');
  el('modal-content').innerHTML = `<img src="${img.key}" alt="${img.title}"><p style="margin-top:8px">${img.title}</p>`;
}

function closeModal(){ const modal=el('modal'); modal.setAttribute('aria-hidden','true'); el('modal-content').innerHTML=''; }

document.addEventListener('DOMContentLoaded', ()=>{
  renderGallery();
  el('modal-close').addEventListener('click', closeModal);
  el('view-gallery').addEventListener('click', ()=>location.href='#gallery');
  el('book-demo').addEventListener('click', ()=>location.href='#demo');

  // Registrations
  const regForm = el('register-form');
  regForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = el('r-name').value.trim();
    const email = el('r-email').value.trim();
    const phone = el('r-phone').value.trim();
    if(!name||!email) return alert('Please provide name and email');
    const regs = JSON.parse(localStorage.getItem('mg_regs')||'[]');
    regs.unshift({id:Date.now(),name,email,phone});
    localStorage.setItem('mg_regs', JSON.stringify(regs));
    el('r-name').value=''; el('r-email').value=''; el('r-phone').value='';
    renderRegs();
    alert('Registered — saved locally in your browser.');
  });

  // Demos
  const demoForm = el('demo-form');
  demoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = el('d-name').value.trim();
    const email = el('d-email').value.trim();
    const date = el('d-date').value;
    const time = el('d-time').value;
    if(!name||!email||!date||!time) return alert('Please fill all fields');
    const demos = JSON.parse(localStorage.getItem('mg_demos')||'[]');
    demos.unshift({id:Date.now(),name,email,date,time});
    localStorage.setItem('mg_demos', JSON.stringify(demos));
    el('d-name').value=''; el('d-email').value=''; el('d-date').value=''; el('d-time').value='';
    renderDemos();
    alert('Demo booked — saved locally in your browser.');
  });

  renderRegs(); renderDemos();
});

function renderRegs(){
  const list = el('registrations-list');
  const regs = JSON.parse(localStorage.getItem('mg_regs')||'[]');
  if(!regs.length){ list.innerHTML = '<div>No registrations yet.</div>'; return; }
  list.innerHTML = regs.slice(0,10).map(r=>`<div>${r.name} — ${r.email}${r.phone? ' — '+r.phone: ''}</div>`).join('');
}
function renderDemos(){
  const list = el('demo-list');
  const demos = JSON.parse(localStorage.getItem('mg_demos')||'[]');
  if(!demos.length){ list.innerHTML = '<div>No demo bookings yet.</div>'; return; }
  list.innerHTML = demos.slice(0,10).map(d=>`<div>${d.name} — ${d.date} ${d.time}</div>`).join('');
}
