// Product Array
let products = [
  {name:'খাটি প্রাকৃতিক মধু', category:'Health', price:850, oldPrice:1200, image:'images/honey1.jpg'},
  {name:'প্রিমিয়াম আতর', category:'Perfume', price:1500, oldPrice:1800, image:'images/attar.jpg'},
  {name:'কালোজিরা তেল', category:'Oil', price:800, oldPrice:1000, image:'images/oil.jpg'},
  {name:'প্রাকৃতিক মিসওয়াক', category:'Dental', price:200, oldPrice:300, image:'images/miswak.jpg'},
  {name:'আঞ্জওয়া খেজুর', category:'Food', price:1000, oldPrice:1400, image:'images/dates.jpg'}
];

// Load Home Products
let homeContainer = document.getElementById('home-products');
products.forEach(p => {
  homeContainer.innerHTML += `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p><span style="text-decoration:line-through;color:#888;">৳${p.oldPrice}</span> ৳${p.price}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">কার্টে যোগ করুন</button>
      <button onclick="goToDetails('${p.name}')">ডিটেইলস</button>
    </div>
  `;
});

// Cart Logic
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let existing = cart.find(item => item.name === name);
  if(existing) existing.qty += 1;
  else cart.push({name:name, price:price, qty:1});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cartCount').innerText = cart.reduce((a,b)=>a+b.qty,0);
}

// Redirect to Product Details
function goToDetails(name) {
  localStorage.setItem('selectedProduct', name);
  window.location.href = 'product.html';
}
