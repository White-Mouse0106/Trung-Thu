window.onload = () => {
function startScene() {
  makeStars(60);
  makeClouds(3);
  setInterval(spawnLantern, 2200);
  setInterval(spawnFloatingText, 1200);
  createFlyingImage('img1.webp');
  createFlyingImage('img2.webp');
  createFlyingImage('img3.webp');
  createFlyingImage('img4.webp');
  createFlyingImage('img5.webp');
  setTimeout(startRabbitRun, 4000);
}


  /* ===== WISHES ===== */
const wishes = [
  "Gửi đến bạn — người đã vô tình bước vào thế giới nhỏ của mình 💫",
  "Trung Thu này, mình chỉ muốn nói: Cảm ơn vì bạn đã đến 🌕",
  "Dù chúng ta chỉ quen nhau qua màn hình nhỏ, nhưng mình vẫn thấy ấm áp lắm 💌",
  "Mình không biết tương lai ra sao, chỉ mong hôm nay bạn thật vui 😊",
  "Mong nụ cười của bạn luôn sáng như ánh trăng đêm rằm ✨",
  "Nếu có điều ước, mình ước được gặp bạn một lần ngoài đời 💝",
  "Bạn biết không? Mỗi khi nhắn tin với bạn, mình lại thấy lòng nhẹ hơn 🌸",
  "Trung Thu này, không bánh, không đèn, chỉ có món quà nhỏ mình dành cho bạn 🎁",
  "Mình không giỏi nói lời hoa mỹ, nhưng thật lòng rất quý bạn 💖",
  "Mong bạn luôn bình an, luôn vui, và luôn là chính mình 🌷",
  "Khoảnh khắc bạn add mình, có lẽ là món quà Trung Thu sớm nhất năm nay 🌙",
  "Cảm ơn bạn đã khiến mình tin rằng, đôi khi gặp nhau cũng là một cái duyên 💫",
  "Chúc bạn một Trung Thu an yên, đầy ắp yêu thương và nụ cười 💞",
  "Nếu bạn thấy web này, thì đó là cả tấm lòng nhỏ mình gửi đến bạn 🌠",
  "Trung Thu này, mình không mong gì hơn — chỉ mong bạn biết rằng, mình thật sự trân quý bạn ❤️"
];


/* ===== DOM refs ===== */
const container = document.getElementById('container');
const sceneWrapper = document.getElementById('sceneWrapper');
const musicIcon = document.getElementById('musicIcon');
const bgm = document.getElementById('bgm');
const openSfx = document.getElementById('openSfx');

const rabbit = document.getElementById('rabbit');
const logoBtn = document.getElementById('logoBtn');
const popupOverlay = document.getElementById('popupOverlay');
const envelope = document.getElementById('envelope');
const envelopeTop = document.getElementById('envelopeTop');
const envelopeBody = document.getElementById('envelopeBody');
const closeLetter = document.getElementById('closeLetter');
const giftBox = document.getElementById('giftBox');

/* ===== STARS ===== */
function makeStars(n=120){
  for(let i=0;i<n;i++){
    const s=document.createElement('div');
    s.className='star';
    const size= (Math.random()*2)+0.6;
    s.style.width=s.style.height=size+'px';
    s.style.left= Math.random()*100 + 'vw';
    s.style.top= Math.random()*100 + 'vh';
    s.style.opacity = 0.15 + Math.random()*0.85;
    s.style.animation = `twinkle ${1.6 + Math.random()*2}s ease-in-out ${Math.random()*2}s infinite`;
    document.body.appendChild(s);
  }
}
makeStars(35);

/* ===== CLOUDS ===== */
function makeClouds(n=6){
  for(let i=0;i<n;i++){
    const c=document.createElement('div');
    c.className='cloud';
    const w=150 + Math.random()*240;
    const h=50 + Math.random()*40;
    c.style.width=w+'px'; c.style.height=h+'px';
    c.style.left=Math.random()*100+'vw';
    c.style.top=(6 + Math.random()*65)+'vh';
    c.style.animationDuration=(40 + Math.random()*40)+'s';
    document.body.appendChild(c);
  }
}
makeClouds(3);

/* ===== LANTERNS ===== */
function spawnLantern(){
  const l=document.createElement('div');
  l.className='lantern';
  l.textContent='🏮';
  l.style.left = Math.random()*100 + 'vw';
  l.style.animationDuration = (12 + Math.random()*12) + 's';
  document.body.appendChild(l);
  setTimeout(()=> l.remove(), 23000);
}
setInterval(spawnLantern, 2200);

/* ===== FLOATING TEXT ===== */
function spawnFloatingText(){
  const t=document.createElement('div');
  t.className='floating-text';
  t.textContent = wishes[Math.floor(Math.random()*wishes.length)];
  t.style.left = Math.random()*85 + 'vw';
  t.style.top = Math.random()*75 + 'vh';
  container.appendChild(t);
  t.animate([
    { transform:'translateY(12px)', opacity:0 },
    { transform:'translateY(0)', opacity:1 },
    { transform:'translateY(-12px)', opacity:0.9 }
  ], { duration: 14000 + Math.random()*12000, easing:'ease-in-out' });
  setTimeout(()=> t.remove(), 26000);
}
setInterval(spawnFloatingText, 1200);

/* ===== FLOATING IMAGES (fade + mini stars) ===== */
const floatingImages = [
  "img1.webp", "img2.webp", "img3.webp", "img4.webp", "img5.webp"
];

function spawnFloatingImg(src) {
  const img = document.createElement('img');
  img.src = src;
  img.className = 'floating-img';

  // nhỏ xíu ✨
  const size = 40 + Math.random() * 35;
  img.style.width = `${size}px`;
  img.style.height = 'auto';
  img.style.left = Math.random() * 100 + 'vw';
  img.style.top = Math.random() * 100 + 'vh';
  img.style.animationDelay = Math.random() * 4 + 's';
  document.body.appendChild(img);

  function randomMove() {
    const newLeft = Math.random() * 100;
    const newTop = Math.random() * 100;
    const rotate = (Math.random() * 60) - 30;
    img.style.left = newLeft + 'vw';
    img.style.top = newTop + 'vh';
    img.style.transform = `rotate(${rotate}deg) scale(${0.8 + Math.random() * 0.4})`;
    setTimeout(randomMove, 7000 + Math.random() * 4000);
  }
  randomMove();

  // sau 90s tự xóa để tiết kiệm bộ nhớ
  setTimeout(() => img.remove(), 90000);
}

// tạo 5 ảnh lung linh ngẫu nhiên và lặp lại
setInterval(() => {
  floatingImages.forEach(src => spawnFloatingImg(src));
}, 14000);

// spawn ban đầu
floatingImages.forEach(src => spawnFloatingImg(src));


/* ===== RABBIT RUN (CSS animation) ===== */
function startRabbitRun() {
  rabbit.style.opacity = 1;
  rabbit.querySelectorAll('.rabbit-ear').forEach(el=>{
    el.style.animation = 'earWiggle .32s ease-in-out infinite';
  });
  rabbit.querySelectorAll('.leg').forEach((el,idx)=>{
    el.style.animation = `legMove ${0.28 + Math.random()*0.12}s ${idx*0.06}s infinite ease-in-out`;
  });
  rabbit.style.animation = 'rabbitRun 5s linear forwards';
  rabbit.addEventListener('animationend', ()=>{
  rabbit.animate([{opacity:1},{opacity:0, transform:'scale(.98)'}],
                 {duration:420,easing:'ease-out',fill:'forwards'});
  setTimeout(showLogo, 420);
}, {once:true});
}
setTimeout(startRabbitRun, 4000);

/* show logo */
function showLogo() {
  logoBtn.classList.add('visible');
  logoBtn.style.pointerEvents = 'auto'; // bật click ngay lập tức
}

/* ===== LOGO CLICK -> OPEN ENVELOPE (only on click) ===== */
logoBtn.addEventListener('click', openEnvelope);

function openEnvelope(){
  popupOverlay.classList.add('show');
  popupOverlay.setAttribute('aria-hidden','false');
  envelope.classList.add('envelope-open');
  try{ openSfx.currentTime = 0; openSfx.play(); }catch(e){}
}

function closeEnvelope(){
  popupOverlay.classList.remove('show');
  popupOverlay.setAttribute('aria-hidden','true');
  envelope.classList.remove('envelope-open');
}
closeLetter.addEventListener('click', closeEnvelope);
popupOverlay.addEventListener('click', e=>{ if(e.target===popupOverlay) closeEnvelope(); });

giftBox.addEventListener('click', ()=>{
  giftBox.animate([{transform:'scale(1)'},{transform:'scale(1.1)'},{transform:'scale(1)'}],
                  {duration:360,easing:'ease-out'});
  setTimeout(()=>window.location.href='gift.html',420);
});

/* ===== MUSIC ICON control (moon) ===== */
let playing=false;
musicIcon.addEventListener('click', async ()=>{
  if(!playing){
    try{ await bgm.play(); playing=true; musicIcon.classList.add('playing'); musicIcon.textContent='🎶'; }
    catch(e){}
  } else {
    bgm.pause(); playing=false; musicIcon.classList.remove('playing'); musicIcon.textContent='🎵';
  }
});

/* ===== ESC closes envelope for accessibility ===== */
document.addEventListener('keydown', e=>{
  if(e.key==='Escape' && popupOverlay.classList.contains('show')) closeEnvelope();
});

// Thêm vào cuối file script.js
function disableAutoRotate() {
  clearTimeout(idleTimer);
  document.removeEventListener('mousemove', scheduleIdle);
  document.removeEventListener('touchstart', scheduleIdle);
  document.removeEventListener('mousedown', scheduleIdle);
}

function enableAutoRotate() {
  if (window.innerWidth > 768) scheduleIdle();
}

popupOverlay.addEventListener('transitionstart', () => disableAutoRotate());
popupOverlay.addEventListener('transitionend', () => {
  if (!popupOverlay.classList.contains('show')) enableAutoRotate();
});


};
