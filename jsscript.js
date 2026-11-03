/* =========================================================
   Hanami · House of Wellness
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Content (fa / en) ---------- */
const D = {
  fa: {
    'gate.music':'ورود با موسیقی','gate.silent':'بدون موسیقی',
    'nav.legend':'افسانه','nav.services':'خدمات','nav.gallery':'گالری','nav.team':'تیم','nav.contact':'تماس','nav.book':'رزرو نوبت',
    'hero.eyebrow':'خانه‌ی آرامش · 花見',
    'hero.lead':'جایی که زیبایی، مثل شکوفه‌ی گیلاس، آرام و لحظه‌به‌لحظه می‌شکفد. ماساژ، مراقبت از پوست و مو، ناخن و میکاپ، همه زیر یک سقف.',
    'hero.cta1':'رزرو نوبت','hero.cta2':'مشاهده خدمات',
    'legend.eyebrow':'نام ما از کجا آمد','legend.title':'افسانه‌ی هانامی',
    'legend.p1':'هانامی (花見) در زبان ژاپنی یعنی «تماشای گل». سنتی کهن که هر بهار مردم زیر درختان شکوفه‌ی گیلاس جمع می‌شوند، چای می‌نوشند و زیبایی گذرای لحظه را جشن می‌گیرند.',
    'legend.p2':'شکوفه‌ها چند روز بیشتر نمی‌مانند و همین گذرا بودن، آن‌ها را ارزشمند می‌کند. هانامی هاوس آو ولنس همین حس را به مراقبت از شما می‌آورد: توقفی آرام برای دیده شدن و شکفتن.',
    'legend.quote':'زیبایی در لحظه‌ای است که برای خودتان می‌ایستید.',
    'svc.eyebrow':'مراقبت در هر شکل','svc.title':'خدمات هانامی','svc.book':'رزرو این خدمت',
    's.massage.n':'ماساژ','s.massage.d':'ماساژ آرامش‌بخش با روغن‌های ملایم، در اتاقی با نور گرم و رایحه‌ی شمع.',
    's.nails.n':'ناخن','s.nails.d':'مانیکور و پدیکور، کاشت و طراحی ناخن با طیف کامل رنگ‌ها.',
    's.hair.n':'کوتاهی مو','s.hair.d':'کوتاهی و حالت‌دهی متناسب با فرم صورت و سبک شخصی شما.',
    's.facial.n':'فیشال','s.facial.d':'پاک‌سازی و احیای پوست با محصولات حرفه‌ای و مراقبت مخصوص هر پوست.',
    's.color.n':'رنگ مو','s.color.d':'از بلوند خاکستری تا قهوه‌ای عمیق؛ رنگی که به موی شما احترام می‌گذارد.',
    's.restore.n':'احیای مو','s.restore.d':'درمان‌های ترمیمی و اسپای سر برای موی خسته، شاداب و پرجان.',
    's.micro.n':'میکروبلیدینگ','s.micro.d':'ابرو، آیلاینر دائم و Sakura Lips با ظرافت و رنگ‌های طبیعی.',
    's.makeup.n':'میکاپ','s.makeup.d':'میکاپ روزانه، مهمانی و عروس؛ درخشان و ماندگار.',
    's.lash.n':'مژه','s.lash.d':'اکستنشن و لیفت مژه برای نگاهی پرتر و طبیعی.',
    'gal.eyebrow':'از درون خانه','gal.title':'لحظه‌هایی از هانامی',
    'team.eyebrow':'دو دوست، یک خانه','team.title':'بنیان‌گذاران',
    'team.p':'هانامی با یک ایده ساخته شد: مراقبت از زیبایی باید حس یک مکث آرام داشته باشد، نه عجله. هر گوشه‌ی این خانه با همین نگاه طراحی شده است.',
    'team.n1':'هنگامه حافظ','team.role':'بنیان‌گذار','team.n2':'میترا یوسفی','team.role2':'بنیان‌گذار',
    'book.eyebrow':'یک ساعت برای خودتان','book.title':'رزرو نوبت',
    'book.side':'نوبت‌تان را ثبت کنید؛ بقیه‌اش با ما. یک چای، یک مکث و مراقبتی که شایسته‌ی شماست.',
    'f.name':'نام و نام خانوادگی','f.phone':'شماره تماس','f.service':'خدمت','f.staff':'پرسنل','f.anystaff':'هر کدام (اولین نفر آزاد)',
    'f.date':'تاریخ','f.choosedate':'انتخاب تاریخ','f.time':'ساعت',
    'f.note':'توضیحات (اختیاری)','f.submit':'ثبت نوبت','f.pickdate':'ابتدا تاریخ را انتخاب کنید.','f.pickfirst':'ابتدا خدمت و تاریخ را انتخاب کنید.','f.choose':'انتخاب کنید…',
    'f.nofree':'برای این روز ساعت خالی نیست.','f.free':'ساعت‌های خط‌خورده پر شده‌اند.',
    'ok.title':'نوبت شما ثبت شد','ok.p':'برای قطعی شدن، تأیید را از طریق واتساپ برای ما بفرستید.','ok.wa':'تأیید در واتساپ','ok.close':'بستن',
    'foot.about':'خانه‌ی زیبایی و آرامش، با الهام از سنت هانامی و فضای گرم ژاپنی.',
    'foot.hours':'ساعت کار','foot.hoursv':'همه‌روزه ۱۰ تا ۲۰','foot.addr':'نشانی','foot.addrv':'مشهد، حامد جنوبی ۱، پلاک ۶۴','foot.contact':'ارتباط'
  },
  en: {
    'gate.music':'Enter with music','gate.silent':'Without music',
    'nav.legend':'Legend','nav.services':'Services','nav.gallery':'Gallery','nav.team':'Team','nav.contact':'Contact','nav.book':'Book now',
    'hero.eyebrow':'A house of calm · 花見',
    'hero.lead':'Where beauty, like cherry blossom, unfolds slowly and in its own time. Massage, skin and hair care, nails and makeup — all under one roof.',
    'hero.cta1':'Book an appointment','hero.cta2':'Explore services',
    'legend.eyebrow':'Where our name comes from','legend.title':'The Legend of Hanami',
    'legend.p1':'Hanami (花見) is Japanese for “flower viewing”. An old custom in which, each spring, people gather beneath blooming cherry trees to share tea and celebrate the fleeting beauty of the moment.',
    'legend.p2':'Blossoms last only days, and that brevity is what makes them precious. Hanami House of Wellness brings this feeling to your care: a quiet pause to be seen, and to bloom.',
    'legend.quote':'Beauty is the moment you stop for yourself.',
    'svc.eyebrow':'Care in every form','svc.title':'Our Services','svc.book':'Book this service',
    's.massage.n':'Massage','s.massage.d':'Soothing massage with gentle oils, in a softly lit room scented by candlelight.',
    's.nails.n':'Nails','s.nails.d':'Manicure, pedicure, extensions and nail art in a full palette of shades.',
    's.hair.n':'Haircut','s.hair.d':'Cuts and styling shaped around your features and personal style.',
    's.facial.n':'Facial','s.facial.d':'Cleansing and renewal with professional products, tailored to your skin.',
    's.color.n':'Hair Color','s.color.d':'From ash blonde to deep chestnut — colour that respects your hair.',
    's.restore.n':'Hair Restoration','s.restore.d':'Restorative treatments and scalp spa for tired hair, back to life.',
    's.micro.n':'Microblading','s.micro.d':'Brows, permanent eyeliner and Sakura Lips, finished with delicacy.',
    's.makeup.n':'Makeup','s.makeup.d':'Day, evening and bridal makeup — luminous and long-lasting.',
    's.lash.n':'Lashes','s.lash.d':'Extensions and lifts for a fuller, natural-looking gaze.',
    'gal.eyebrow':'Inside the house','gal.title':'Moments at Hanami',
    'team.eyebrow':'Two friends, one house','team.title':'The Founders',
    'team.p':'Hanami began with one idea: beauty care should feel like a calm pause, not a rush. Every corner of this house was designed with that in mind.',
    'team.n1':'Hengameh Hafez','team.role':'Founder','team.n2':'Mitra Yousefi','team.role2':'Founder',
    'book.eyebrow':'An hour for yourself','book.title':'Book an Appointment',
    'book.side':'Reserve your time and leave the rest to us. A cup of tea, a pause, and care you deserve.',
    'f.name':'Full name','f.phone':'Phone number','f.service':'Service','f.staff':'Specialist','f.anystaff':'Any available',
    'f.date':'Date','f.choosedate':'Select a date','f.time':'Time',
    'f.note':'Notes (optional)','f.submit':'Confirm booking','f.pickdate':'Pick a date first.','f.pickfirst':'Pick a service and a date first.','f.choose':'Choose…',
    'f.nofree':'No free slots on this day.','f.free':'Struck-through times are taken.',
    'ok.title':'Your booking is saved','ok.p':'Send us the confirmation on WhatsApp to finalise it.','ok.wa':'Confirm on WhatsApp','ok.close':'Close',
    'foot.about':'A house of beauty and calm, inspired by the hanami tradition and warm Japanese interiors.',
    'foot.hours':'Opening hours','foot.hoursv':'Daily, 10:00 – 20:00','foot.addr':'Address','foot.addrv':'Hamed Jonoubi 1, No. 64, Mashhad','foot.contact':'Contact'
  }
};

const SERVICES = [
  { id:'massage', ic:'bi-droplet-half' },
  { id:'nails',   ic:'bi-stars' },
  { id:'hair',    ic:'bi-scissors' },
  { id:'facial',  ic:'bi-flower3' },
  { id:'color',   ic:'bi-palette2' },
  { id:'restore', ic:'bi-heart-pulse' },
  { id:'micro',   ic:'bi-pen' },
  { id:'makeup',  ic:'bi-brush' },
  { id:'lash',    ic:'bi-eye' }
];

/* پرسنل هر خدمت — هر وقت کسی اضافه یا کم شد فقط همین‌جا را عوض کن */
const STAFF = {
  nails:   [{id:'fereshteh',fa:'فرشته',en:'Fereshteh'},{id:'ghazal',fa:'غزل',en:'Ghazal'},
            {id:'maedeh',fa:'مائده',en:'Maedeh'},{id:'firouzeh',fa:'فیروزه',en:'Firouzeh'}],
  lash:    [{id:'fereshteh',fa:'فرشته',en:'Fereshteh'},{id:'farnaz',fa:'فرناز',en:'Farnaz'}],
  massage: [{id:'nafas',fa:'نفس',en:'Nafas'},{id:'saba',fa:'صبا',en:'Saba'},{id:'monireh',fa:'منیره',en:'Monireh'}]
};

const GALLERY = [
  { v:'nails.mp4',    poster:'nails.jpg',        fa:'هدیه',         en:'Gift' },
  { v:'hair.mp4',     poster:'hair-flowers.jpg', fa:'کوتاهی مو',    en:'Haircut' },
  { v:'facial.mp4',   poster:'skincare.jpg',     fa:'فیشال',        en:'Facial' },
  { v:'color.mp4',    poster:'artist.jpg',       fa:'رنگ مو',       en:'Hair Color' },
  { v:'restore.mp4',  poster:'scalp-spa.jpg',    fa:'احیای مو',     en:'Hair Restoration' },
  { v:'micro.mp4',    poster:'microblading.jpg', fa:'میکروبلیدینگ', en:'Microblading' },
  { v:'makeup.mp4',   poster:'makeup.jpg',       fa:'میکاپ',        en:'Makeup' },
  { v:'lash.mp4',     poster:'brows-lashes.jpg', fa:'مژه',          en:'Lashes' }
];

const WA_NUMBER = '98XXXXXXXXXX';          // ← شماره واتساپ سالن (بدون + و صفر)
const SLOTS = ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00'];
const STORE = 'hanami_bookings_v1';

let lang = localStorage.getItem('hm_lang') || 'fa';
let theme = localStorage.getItem('hm_theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const t = k => (D[lang][k] ?? k);

/* ---------- Language ---------- */
function applyLang() {
  const html = document.documentElement;
  html.lang = lang; html.dir = lang === 'fa' ? 'rtl' : 'ltr';
  $('#bs-rtl').disabled = lang !== 'fa';
  $('#bs-ltr').disabled = lang === 'fa';
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $('#langBtn').textContent = lang === 'fa' ? 'EN' : 'فا';
  renderServices(); renderSelect(); renderStaff(); renderSlots();
  refreshDate(); renderGallery();
  $('#yr').textContent = new Date().getFullYear();
  observe();
}
$('#langBtn').onclick = () => { lang = lang === 'fa' ? 'en' : 'fa'; localStorage.setItem('hm_lang', lang); applyLang(); };

/* ---------- Theme ---------- */
function applyTheme() {
  document.documentElement.dataset.bsTheme = theme;
  $('#themeBtn').innerHTML = `<i class="bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}"></i>`;
  $('meta[name=theme-color]').content = theme === 'dark' ? '#110e0d' : '#f8f2ea';
}
$('#themeBtn').onclick = () => { theme = theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('hm_theme', theme); applyTheme(); };

/* ---------- Services ---------- */
function renderServices() {
  $('#svcGrid').innerHTML = SERVICES.map((s, i) => `
    <div class="col-md-6 col-lg-4">
      <article class="svc rv" data-id="${s.id}" tabindex="0">
        <span class="no">0${i + 1}</span>
        <div class="svc-ic"><i class="bi ${s.ic}"></i></div>
        <h3>${t(`s.${s.id}.n`)}</h3>
        <p>${t(`s.${s.id}.d`)}</p>
        <span class="go">${t('svc.book')} <i class="bi bi-arrow-${lang === 'fa' ? 'left' : 'right'}"></i></span>
      </article>
    </div>`).join('');
  $$('.svc').forEach(c => {
    const go = () => {
      $('#fSvc').value = c.dataset.id;
      $('#fSvc').dispatchEvent(new Event('change'));      // پرسنل و ساعت‌ها به‌روز شوند
      location.hash = '#book';
      $('#fDate').focus({ preventScroll: true });
    };
    c.onclick = go;
    c.onkeydown = e => { if (e.key === 'Enter') go(); };
  });
}
function renderSelect() {
  const cur = $('#fSvc').value;
  $('#fSvc').innerHTML = `<option value="" disabled selected>${t('f.choose')}</option>` +
    SERVICES.map(s => `<option value="${s.id}">${t(`s.${s.id}.n`)}</option>`).join('');
  if (cur) $('#fSvc').value = cur;
}

/* ---------- Gallery (videos) ---------- */
function renderGallery() {
  $('#galGrid').innerHTML = GALLERY.map(g => `
    <figure class="rv vid">
      <video muted loop playsinline preload="none" poster="${g.poster}"
             data-src="${g.v}" aria-label="${g[lang]}"></video>
      <span class="vid-play"><i class="bi bi-play-fill"></i></span>
      <figcaption>${g[lang]}</figcaption>
    </figure>`).join('');
  initGalleryVideos();
}

let vidIO;
function initGalleryVideos() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  vidIO && vidIO.disconnect();

  vidIO = new IntersectionObserver(es => es.forEach(e => {
    const v = $('video', e.target);
    if (e.isIntersecting) {
      if (!v.src) v.src = v.dataset.src;                  // لود تنبل
      if (!reduce && !saveData) v.play().catch(() => {});
    } else v.pause();
  }), { threshold: .45 });

  $$('#galGrid figure').forEach(f => {
    const v = $('video', f);
    vidIO.observe(f);
    f.onclick = () => {                                   // لمس/کلیک: پخش یا مکث
      if (!v.src) v.src = v.dataset.src;
      v.paused ? v.play().catch(() => {}) : v.pause();
    };
    v.addEventListener('play',  () => f.classList.add('playing'));
    v.addEventListener('pause', () => f.classList.remove('playing'));
  });
  observe();
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) $$('#galGrid video').forEach(v => v.pause());
});

/* ---------- Booking ---------- */
const bookings = () => { try { return JSON.parse(localStorage.getItem(STORE)) || []; } catch { return []; } };
const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);

/* ---------- Jalali (fa) / Gregorian (en) date picker ---------- */
const dateInput = $('#fDate'), dateView = $('#fDateView'), cal = $('#cal');
const JM = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
const jf = new Intl.DateTimeFormat('en-u-ca-persian-nu-latn', { year: 'numeric', month: 'numeric', day: 'numeric' });
const P = d => {                                          // y/m/d in the active calendar
  if (lang === 'fa') { const o = {}; jf.formatToParts(d).forEach(x => o[x.type] = x.value); return { y: +o.year, m: +o.month, d: +o.day }; }
  return { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() };
};
const noon = d => new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12);
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const monthFirst = d => { let x = noon(d); while (P(x).d !== 1) x = addDays(x, -1); return x; };
const fmtN = n => lang === 'fa' ? n.toLocaleString('fa-IR', { useGrouping: false }) : String(n);
let anchor = monthFirst(new Date());

function drawCal() {
  const first = anchor, pf = P(first), todayK = iso(new Date());
  let len = 0, x = first;
  while (P(x).m === pf.m) { len++; x = addDays(x, 1); }
  const off = lang === 'fa' ? (first.getDay() + 1) % 7 : first.getDay();       // fa: week starts Saturday
  const heads = lang === 'fa' ? ['ش','ی','د','س','چ','پ','ج'] : ['S','M','T','W','T','F','S'];
  const title = lang === 'fa' ? `${JM[pf.m - 1]} ${fmtN(pf.y)}` : first.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  const canPrev = iso(first) > iso(monthFirst(new Date()));
  let cells = '<span></span>'.repeat(off);
  for (let i = 1; i <= len; i++) {
    const k = iso(addDays(first, i - 1));
    cells += `<button type="button" data-k="${k}" class="${k === dateInput.value ? 'sel' : ''} ${k === todayK ? 'today' : ''}" ${k < todayK ? 'disabled' : ''}>${fmtN(i)}</button>`;
  }
  const L = lang === 'fa' ? ['right', 'left'] : ['left', 'right'];
  cal.innerHTML = `
    <div class="cal-h">
      <button type="button" data-nav="-1" ${canPrev ? '' : 'disabled'}><i class="bi bi-chevron-${L[0]}"></i></button>
      <b>${title}</b>
      <button type="button" data-nav="1"><i class="bi bi-chevron-${L[1]}"></i></button>
    </div>
    <div class="cal-w">${heads.map(h => `<span>${h}</span>`).join('')}</div>
    <div class="cal-g">${cells}</div>`;
}
function openCal() { drawCal(); cal.hidden = false; }
function closeCal() { cal.hidden = true; }
function refreshDate() {                                  // called on language change
  dateView.placeholder = t('f.choosedate');
  if (dateInput.value) dateView.value = new Date(dateInput.value + 'T12:00')
    .toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  anchor = monthFirst(dateInput.value ? new Date(dateInput.value + 'T12:00') : new Date());
  if (!cal.hidden) drawCal();
}
dateView.addEventListener('click', () => cal.hidden ? openCal() : closeCal());
dateView.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCal(); } if (e.key === 'Escape') closeCal(); });
cal.addEventListener('click', e => {
  const nav = e.target.closest('[data-nav]'), day = e.target.closest('[data-k]');
  if (nav) {
    anchor = +nav.dataset.nav > 0 ? monthFirst(addDays(anchor, 32)) : monthFirst(addDays(anchor, -1));
    drawCal();
  } else if (day && !day.disabled) {
    dateInput.value = day.dataset.k;
    dateView.value = new Date(day.dataset.k + 'T12:00')
      .toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    closeCal();
    dateInput.dispatchEvent(new Event('change'));
  }
});
document.addEventListener('click', e => { if (!cal.hidden && !e.target.closest('#cal, #fDateView')) closeCal(); });

/* ---------- Staff + slots ---------- */
const isBusy = (date, time, key) => bookings().some(b => b.date === date && b.time === time && (b.staff || b.service) === key);

function freeFor(date, time, svc, staffId) {              // list of free resources for this slot
  const list = STAFF[svc];
  if (!list) return isBusy(date, time, svc) ? [] : [svc];
  const ids = (staffId && staffId !== 'any') ? [staffId] : list.map(p => p.id);
  return ids.filter(id => !isBusy(date, time, id));
}

function renderStaff() {
  const svc = $('#fSvc').value, list = STAFF[svc], wrap = $('#staffWrap'), box = $('#staffPick');
  if (!list) { wrap.hidden = true; box.innerHTML = ''; return; }
  const items = [{ id: 'any' }, ...list];
  const cur = ($('input[name=staff]:checked') || {}).value;
  const pick = items.some(p => p.id === cur) ? cur : 'any';
  box.innerHTML = items.map(p => `<input type="radio" name="staff" id="st_${p.id}" value="${p.id}" ${p.id === pick ? 'checked' : ''}>
    <label for="st_${p.id}">${p.id === 'any' ? t('f.anystaff') : p[lang]}</label>`).join('');
  wrap.hidden = false;
}

function renderSlots() {
  const box = $('#slots'), d = dateInput.value, svc = $('#fSvc').value;
  if (!d || !svc) { box.innerHTML = ''; $('#slotHint').textContent = t('f.pickfirst'); return; }
  const staffId = ($('input[name=staff]:checked') || {}).value;
  const now = new Date(), isToday = d === iso(now);
  box.innerHTML = SLOTS.map(s => {
    const past = isToday && +s.slice(0, 2) <= now.getHours();
    const off = past || !freeFor(d, s, svc, staffId).length;
    return `<input type="radio" name="slot" id="sl${s.replace(':', '')}" value="${s}" ${off ? 'disabled' : ''} required>
            <label for="sl${s.replace(':', '')}">${s}</label>`;
  }).join('');
  const free = $$('input:not(:disabled)', box).length;
  $('#slotHint').textContent = free ? t('f.free') : t('f.nofree');
}
dateInput.addEventListener('change', renderSlots);
$('#fSvc').addEventListener('change', () => { renderStaff(); renderSlots(); });
$('#staffPick').addEventListener('change', renderSlots);

/* ---------- Submit ---------- */
const okModal = new bootstrap.Modal('#okModal');
$('#bookForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!f.checkValidity()) { f.classList.add('was-validated'); return; }
  const slot = $('input[name=slot]:checked', f).value;
  const svc = $('#fSvc').value;

  let staff = null;
  if (STAFF[svc]) {
    const pick = $('input[name=staff]:checked').value;
    const free = freeFor(dateInput.value, slot, svc, pick);
    if (!free.length) { renderSlots(); return; }                 // someone just took it
    staff = free[Math.floor(Math.random() * free.length)];       // "any" → pick a free person
  }
  const staffName = staff ? STAFF[svc].find(p => p.id === staff)[lang] : '';

  const b = {
    code: 'HM-' + Math.floor(1000 + Math.random() * 9000),
    name: $('#fName').value.trim(), phone: $('#fPhone').value.trim(),
    service: svc, staff, date: dateInput.value, time: slot, note: $('#fNote').value.trim(), at: Date.now()
  };
  localStorage.setItem(STORE, JSON.stringify([...bookings(), b]));

  const svcName = t(`s.${b.service}.n`);
  const niceDate = new Date(b.date + 'T00:00').toLocaleDateString(lang === 'fa' ? 'fa-IR' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  $('#okCode').textContent = b.code;
  $('#okSum').innerHTML = `<li><b>${svcName}</b></li>${staffName ? `<li>${t('f.staff')}: ${staffName}</li>` : ''}<li>${niceDate} · <span dir="ltr">${b.time}</span></li><li>${b.name}</li>`;
  const msg = `Hanami · ${b.code}\n${b.name} (${b.phone})\n${svcName}${staffName ? ' · ' + staffName : ''}\n${niceDate} ${b.time}${b.note ? '\n' + b.note : ''}`;
  $('#okWa').href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  okModal.show();
  f.reset(); dateInput.value = ''; dateView.value = ''; f.classList.remove('was-validated'); renderStaff(); renderSlots();
});

/* ---------- Music ---------- */
const bgm = $('#bgm'), mBtn = $('#musicBtn');
const vol = $('#vol');
let savedVol = 20;                                        // صدای پیش‌فرض، از ۰ تا ۱۰۰
try { savedVol = +(localStorage.getItem('hm_vol') ?? 20); } catch {}
vol.value = savedVol; bgm.volume = savedVol / 100;
vol.addEventListener('input', () => {
  bgm.volume = vol.value / 100;
  try { localStorage.setItem('hm_vol', vol.value); } catch {}
});
function setPlaying(on) { mBtn.classList.toggle('playing', on); }
async function playMusic() { try { await bgm.play(); setPlaying(true); } catch { setPlaying(false); } }
mBtn.onclick = () => { bgm.paused ? playMusic() : (bgm.pause(), setPlaying(false)); };
bgm.addEventListener('error', () => mBtn.title = 'audio/tak-diya-sasani.mp3 not found');

/* ---------- Gate ---------- */
const gate = $('#gate');
function enter(withMusic) {
  gate.classList.add('out'); setTimeout(() => gate.remove(), 1000);
  document.body.style.overflow = '';
  if (withMusic) playMusic();
  setTimeout(observe, 300);
}
document.body.style.overflow = 'hidden';
$('#enterMusic').onclick = () => enter(true);
$('#enterSilent').onclick = () => enter(false);

/* ---------- Nav scroll + reveal ---------- */
const nav = $('#nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 30);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
$$('#menu .nav-link').forEach(a => a.addEventListener('click', () => bootstrap.Collapse.getInstance('#menu')?.hide()));

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), (e.target.dataset.d || 0)); io.unobserve(e.target); }
}), { threshold: .12 });
function observe() { $$('.rv:not(.in)').forEach((el, i) => { el.dataset.d = (i % 4) * 90; io.observe(el); }); }

/* ---------- Sakura petals ---------- */
(function petals() {
  const cv = $('#petals'), cx = cv.getContext('2d');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let W, H, P = [];
  const N = innerWidth < 768 ? 14 : 30;
  const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
  addEventListener('resize', size); size();
  const mk = init => ({ x: Math.random() * W, y: init ? Math.random() * H : -30, s: 5 + Math.random() * 8,
    v: .35 + Math.random() * .8, d: Math.random() * 1 - .3, r: Math.random() * 6.28, rv: (Math.random() - .5) * .03,
    o: .3 + Math.random() * .45, w: Math.random() * 6.28 });
  for (let i = 0; i < N; i++) P.push(mk(true));
  (function loop() {
    cx.clearRect(0, 0, W, H);
    for (const p of P) {
      p.w += .015; p.x += p.d + Math.sin(p.w) * .6; p.y += p.v; p.r += p.rv;
      if (p.y > H + 30 || p.x > W + 40 || p.x < -40) Object.assign(p, mk(false));
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.scale(1, .65 + Math.sin(p.w) * .3);
      cx.fillStyle = `rgba(233,150,175,${p.o})`;
      cx.beginPath(); cx.moveTo(0, -p.s);
      cx.bezierCurveTo(p.s * .9, -p.s * .6, p.s * .7, p.s * .7, 0, p.s);
      cx.bezierCurveTo(-p.s * .7, p.s * .7, -p.s * .9, -p.s * .6, 0, -p.s);
      cx.fill(); cx.restore();
    }
    requestAnimationFrame(loop);
  })();
})();

/* ---------- Hero video ---------- */
(function heroVideo() {
  const v = $('#heroVideo');
  if (!v) return;
  v.muted = true;                                         // برای autoplay الزامی است
  const saveData = navigator.connection && navigator.connection.saveData;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (saveData || reduce) {                               // فقط پوستر نشان بده
    v.removeAttribute('autoplay'); v.pause(); return;
  }
  const tryPlay = () => v.play().catch(() => {});
  tryPlay();
  // اگر مرورگر بلاک کرد، با اولین لمس/کلیک پلی شود
  ['click', 'touchstart', 'scroll'].forEach(ev =>
    addEventListener(ev, tryPlay, { once: true, passive: true }));
  // وقتی تب پنهان است متوقف، وقتی برگشتی ادامه
  document.addEventListener('visibilitychange', () => document.hidden ? v.pause() : tryPlay());
})();

/* ---------- Init ---------- */
applyTheme();
applyLang();