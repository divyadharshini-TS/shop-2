const dict = {
  en: {
    logo: 'Ramesh\'s <span>Poli</span>',
    hero_title: 'Authentic Taste,<br>Served Hot Since <span class="highlight">2005</span>',
    hero_subtitle: 'Freshly made every evening — order now!',
    explore_menu: 'Explore Menu',
    categories: 'Categories',
    cat_all: 'All', cat_poli: 'Poli', cat_kara: 'Kara', cat_bun: 'Bun',
    delivery_info: '🛵 Delivery Info',
    delivery_desc: 'Min ₹60 | 1km: ₹20 | +₹20 per extra km',
    delivery_time: 'Available 6:00 PM – 9:45 PM',
    bulk_orders: '🎉 Bulk Orders & Functions',
    bulk_desc: 'Pre-book for parties & occasions!',
    enquire_wa: 'Enquire on WhatsApp',
    story_title: 'Our Kutty Story',
    story_p1: "Started in 2005 as a small pushcart in Nanganallur, Ramesh's Poli has grown through sheer love and word-of-mouth. Our mission has always been simple: serve hot, fresh, and hygienic traditional snacks.",
    story_p2: "Every evening, the aroma of roasting ghee and jaggery brings our neighborhood together. Thank you for being part of our journey for nearly two decades!",
    reviews_title: 'Customer Reviews',
    write_review: 'Write a Review',
    submit_review: 'Submit Review',
    chef_msg1: 'Click me!',
    chef_msg2: 'Party Time!',
    err_req: 'Required field'
  },
  ta: {
    logo: 'ரமேஷ் <span>போளி</span>',
    hero_title: 'அசலான சுவை,<br><span class="highlight">2005</span> முதல் சுடச்சுட',
    hero_subtitle: 'தினமும் மாலையில் புதிதாக செய்யப்படுகிறது — இப்போதே ஆர்டர் செய்யுங்கள்!',
    explore_menu: 'மெனுவை பார்க்க',
    categories: 'வகைகள்',
    cat_all: 'அனைத்தும்', cat_poli: 'போளி', cat_kara: 'காரா', cat_bun: 'பன்',
    delivery_info: '🛵 டெலிவரி விவரங்கள்',
    delivery_desc: 'குறைந்தபட்சம் ₹60 | 1 கி.மீ: ₹20 | +₹20 கூடுதல் கி.மீ-க்கு',
    delivery_time: 'கிடைக்கும் நேரம் 6:00 PM – 9:45 PM',
    bulk_orders: '🎉 விசேஷ ஆர்டர்கள்',
    bulk_desc: 'பண்டிகைகள் மற்றும் விழாக்களுக்கு முன்கூட்டியே ஆர்டர் செய்யலாம்!',
    enquire_wa: 'வாட்ஸ்அப்பில் விசாரிக்க',
    story_title: 'எங்கள் குட்டி கதை',
    story_p1: "2005 இல் நங்கநல்லூரில் ஒரு சிறிய தள்ளுவண்டியில் தொடங்கப்பட்ட ரமேஷ் போளி, உங்கள் அன்பால் வளர்ந்துள்ளது. சுடச்சுட, சுத்தமான பாரம்பரிய சிற்றுண்டிகளை வழங்குவதே எங்கள் நோக்கம்.",
    story_p2: "ஒவ்வொரு மாலையும், நெய் மற்றும் வெல்லத்தின் நறுமணம் நம்மை ஒன்றிணைக்கிறது. கிட்டத்தட்ட இரண்டு தசாப்தங்களாக எங்கள் பயணத்தில் இருப்பதற்கு நன்றி!",
    reviews_title: 'வாடிக்கையாளர் மதிப்புரைகள்',
    write_review: 'மதிப்புரை எழுத',
    submit_review: 'மதிப்புரை சமர்ப்பிக்க',
    chef_msg1: 'என்னை அழுத்தவும்!',
    chef_msg2: 'பார்ட்டி நேரம்!',
    err_req: 'கட்டாயம் தேவை'
  }
};

let currentLang = localStorage.getItem('poli-lang') || 'en';
let currentTheme = localStorage.getItem('poli-theme') || 'light';
const menuItems = [
  { id: 'paruppu-poli', name: 'Paruppu Poli', price: 15, category: 'poli', image: '/images/hero.png', desc: 'Traditional sweet poli made with chana dal filling, jaggery and aromatic spices. Served hot off the griddle.' },
  { id: 'coconut-poli', name: 'Coconut Poli', price: 15, category: 'poli', image: '/images/coconut_poli.png', desc: 'Delicious poli stuffed with freshly grated coconut and palm jaggery. A South Indian classic.' },
  { id: 'kara-poli', name: 'Kara Poli', price: 15, category: 'kara', image: '/images/kara_poli.png', desc: 'Spicy poli with a savory filling of seasoned potatoes and onions. Perfect for those who love a kick.' },
  { id: 'paal-bun', name: 'Paal Bun', price: 15, category: 'bun', image: '/images/paal_bun.jpg', desc: 'Soft, fluffy bun soaked in sweetened milk. A beloved evening treat for all ages.' }
];

const reviews = [
  { name: 'Karthik', comment: 'The hot poli is just amazing! Tastes exactly like home.', rating: 5 },
  { name: 'Priya', comment: 'Best evening snacks in the area. Paal bun is so soft!', rating: 5 },
  { name: 'Suresh', comment: 'Authentic taste and fresh quality. I order every weekend.', rating: 4 },
  { name: 'Meena', comment: 'The Kara poli is spicy and perfect. Great service!', rating: 5 },
  { name: 'Rahul', comment: 'Reminds me of my grandmother\'s cooking. Thank you!', rating: 5 }
];

let cart = [];
let activeCategory = 'all';

// ===== INIT =====
function init() {
  applyTheme(currentTheme);
  setLanguage(currentLang);
  renderMenu();
  renderReviews();
  setupEventListeners();
  initAnimations();
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('poli-theme', theme);
  document.getElementById('theme-toggle').textContent = theme === 'light' ? '🌓' : '☀️';
}

function setLanguage(lang) {
  localStorage.setItem('poli-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[lang][key]) el.innerHTML = dict[lang][key];
  });
  document.getElementById('lang-toggle').textContent = lang === 'en' ? '🌐' : 'A/அ';
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Hero chef dramatic entrance - bounces in from the right after 500ms
  const heroChef = document.querySelector('.hero-chef');
  if (heroChef) {
    heroChef.style.opacity = '0';
    setTimeout(() => {
      heroChef.style.opacity = '1';
      heroChef.classList.add('just-entered');
      heroChef.addEventListener('animationend', () => {
        heroChef.classList.remove('just-entered');
      }, { once: true });
    }, 500);
  }
}

// ===== RENDER MENU =====
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  const filtered = activeCategory === 'all' ? menuItems : menuItems.filter(i => i.category === activeCategory);

  grid.innerHTML = filtered.map(item => `
    <div class="menu-card" data-id="${item.id}">
      <div class="card-fav" data-fav="${item.id}">♡</div>
      <div class="card-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="card-info">
        <h4>${item.name}</h4>
        <div class="price">₹${item.price}</div>
      </div>
    </div>
  `).join('');
}

// ===== RENDER REVIEWS =====
function renderReviews() {
  const container = document.getElementById('reviews-list');
  container.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-top">
        <span class="review-name">${r.name}</span>
        <span class="review-stars">${'⭐'.repeat(r.rating)}</span>
      </div>
      <p class="review-text">"${r.comment}"</p>
    </div>
  `).join('');
}

// ===== DETAIL VIEW =====
function showDetail(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;

  const content = document.getElementById('detail-content');
  content.innerHTML = `
    <div class="detail-hero">
      <img src="${item.image}" alt="${item.name}">
      <div class="detail-fav">♡</div>
    </div>
    <div class="detail-body">
      <h2>${item.name}</h2>
      <div class="detail-rating">
        <span class="stars">⭐⭐⭐⭐⭐</span>
        <span class="count">78 ratings</span>
      </div>
      <div class="detail-price">₹${item.price}</div>
      <div class="detail-desc">
        <h4>Description</h4>
        <p>${item.desc}</p>
      </div>
      <div class="qty-row">
        <button class="qty-btn" id="qty-minus">−</button>
        <span class="qty-val" id="qty-val">1</span>
        <button class="qty-btn" id="qty-plus">+</button>
      </div>
      <div class="detail-total">
        <span>Total:</span>
        <span id="detail-total-price">₹${item.price}</span>
      </div>
      <div class="detail-actions">
        <button class="btn-primary full" id="btn-add-cart" data-id="${item.id}">Add to Cart</button>
      </div>
    </div>
  `;

  let qty = 1;
  document.getElementById('qty-minus').onclick = () => { if (qty > 1) { qty--; updateQty(); } };
  document.getElementById('qty-plus').onclick = () => { qty++; updateQty(); };
  function updateQty() {
    document.getElementById('qty-val').textContent = qty;
    document.getElementById('detail-total-price').textContent = `₹${item.price * qty}`;
  }

  document.getElementById('btn-add-cart').onclick = () => {
    for (let i = 0; i < qty; i++) addToCart(item.id);
    showView('home');
  };

  showView('detail');
}

// ===== VIEWS =====
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${name}`).classList.add('active');
  window.scrollTo(0, 0);
}

// ===== CART =====
function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.quantity++;
  else cart.push({ ...item, quantity: 1 });
  renderCart();
}

function removeFromCart(id) {
  const existing = cart.find(i => i.id === id);
  if (!existing) return;
  if (existing.quantity > 1) existing.quantity--;
  else cart = cart.filter(i => i.id !== id);
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const countEls = [document.getElementById('cart-count'), document.getElementById('cart-count-detail')];
  const totalEl = document.getElementById('total-amount');

  const totalCount = cart.reduce((s, i) => s + i.quantity, 0);
  countEls.forEach(el => { if (el) el.textContent = totalCount; });

  // Also update fab badge if exists
  const fabBadge = document.getElementById('cart-fab-badge');
  if (fabBadge) fabBadge.textContent = totalCount;

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-msg">Your cart is empty</p>';
    totalEl.textContent = '₹0';
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <span>₹${item.price} × ${item.quantity}</span>
      </div>
      <div class="cart-item-actions">
        <button class="cart-minus" data-id="${item.id}">−</button>
        <span class="cart-item-qty">${item.quantity}</span>
        <button class="cart-plus" data-id="${item.id}">+</button>
      </div>
    </div>
  `).join('');

  if (subtotal >= 150) {
    container.innerHTML += '<div class="cart-item" style="justify-content:center;color:var(--primary);font-weight:600;">🎁 Free Poli/Paal Bun added!</div>';
  }

  totalEl.textContent = `₹${subtotal}`;
}

function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
}

// ===== WHATSAPP CHECKOUT =====
function sendWhatsApp() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  if (subtotal < 60) { alert('Minimum order for delivery is ₹60'); return; }

  const nameInput = document.getElementById('cust-name');
  const phoneInput = document.getElementById('cust-phone');
  const addressInput = document.getElementById('cust-address');
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();

  // Reset errors
  document.querySelectorAll('.input-group').forEach(g => g.classList.remove('has-error'));
  
  let isValid = true;
  if (!name) { nameInput.parentElement.classList.add('has-error'); isValid = false; }
  if (!phone) { phoneInput.parentElement.classList.add('has-error'); isValid = false; }
  if (!address) { addressInput.parentElement.classList.add('has-error'); isValid = false; }

  if (!isValid) {
    document.querySelector('.has-error').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  let msg = `*NEW ORDER*\n`;
  msg += `👤 ${name}\n📞 ${phone}\n📍 ${address}\n\n`;
  cart.forEach(i => { msg += `• ${i.name} × ${i.quantity} = ₹${i.price * i.quantity}\n`; });
  if (subtotal >= 150) msg += `\n🎁 Free Poli/Paal Bun\n`;
  msg += `\n*Subtotal: ₹${subtotal}*\n*Delivery: ₹20*\n*Total: ₹${subtotal + 20}*`;

  window.open(`https://wa.me/919894370660?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Theme & Lang Toggles
  document.getElementById('theme-toggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
  });

  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ta' : 'en';
    setLanguage(currentLang);
  });

  // Mascot interactions
  document.querySelectorAll('.actionable-chef').forEach(chef => {
    chef.addEventListener('click', () => {
      const container = chef.closest('.mascot-container');
      container.classList.toggle('show-bubble');
      if(container.classList.contains('show-bubble')) {
        setTimeout(() => container.classList.remove('show-bubble'), 3000);
      }
    });
  });

  // Review Submit
  document.getElementById('btn-submit-review').addEventListener('click', () => {
    const name = document.getElementById('rev-name').value;
    const rating = parseInt(document.getElementById('rev-rating').value);
    const comment = document.getElementById('rev-comment').value;
    if (name && comment) {
      reviews.unshift({ name, rating, comment });
      renderReviews();
      document.getElementById('rev-name').value = '';
      document.getElementById('rev-comment').value = '';
      alert('Thank you for your review!');
    } else {
      alert('Please enter name and comment');
    }
  });
  // Category tabs
  document.getElementById('category-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.cat;
    renderMenu();
  });

  // Menu card click -> detail
  document.getElementById('menu-grid').addEventListener('click', e => {
    const card = e.target.closest('.menu-card');
    if (!card) return;
    if (e.target.closest('.card-fav')) {
      e.target.closest('.card-fav').classList.toggle('liked');
      e.target.closest('.card-fav').textContent = e.target.closest('.card-fav').classList.contains('liked') ? '♥' : '♡';
      return;
    }
    showDetail(card.dataset.id);
  });

  // Explore button
  document.getElementById('btn-explore').addEventListener('click', () => {
    document.querySelector('.menu-section').scrollIntoView({ behavior: 'smooth' });
  });

  // Back button
  document.getElementById('btn-back').addEventListener('click', () => showView('home'));

  // Cart toggles
  document.getElementById('cart-toggle').addEventListener('click', openCart);
  const detailCartBtn = document.getElementById('cart-toggle-detail');
  if (detailCartBtn) detailCartBtn.addEventListener('click', openCart);
  document.getElementById('close-cart').addEventListener('click', closeCart);
  document.getElementById('cart-overlay').addEventListener('click', closeCart);

  // Cart item actions
  document.getElementById('cart-items').addEventListener('click', e => {
    if (e.target.classList.contains('cart-plus')) addToCart(e.target.dataset.id);
    if (e.target.classList.contains('cart-minus')) removeFromCart(e.target.dataset.id);
  });

  // Checkout
  document.getElementById('btn-checkout').addEventListener('click', sendWhatsApp);

  // Bottom nav
  document.querySelectorAll('.nav-btn[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.view === 'menu') {
        document.querySelector('.menu-section').scrollIntoView({ behavior: 'smooth' });
      } else {
        showView(btn.dataset.view);
      }
    });
  });

  // WhatsApp nav
  const navWa = document.getElementById('nav-wa');
  if (navWa) navWa.addEventListener('click', () => {
    window.open('https://wa.me/919894370660?text=Hello!%20I%20have%20a%20question.', '_blank');
  });

  // Call nav
  const navCall = document.getElementById('nav-call');
  if (navCall) navCall.addEventListener('click', () => {
    window.location.href = 'tel:+919894370660';
  });
}

// ===== START =====
init();
renderCart();
