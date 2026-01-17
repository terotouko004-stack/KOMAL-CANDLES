// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Add to cart toast
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function() {
    const toast = document.getElementById('cart-toast');
    const productName = this.closest('.product-card').querySelector('h3').textContent;
    document.getElementById('toast-message').textContent = `${productName} added to cart!`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 2500);
  });
});

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const successMsg = document.getElementById('form-success');
  successMsg.classList.remove('hidden');
  this.reset();
  setTimeout(() => successMsg.classList.add('hidden'), 4000);
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});
