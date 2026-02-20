
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  // Toggle icon
  const icon = menuToggle.querySelector('i');
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a, button').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      menuToggle.querySelector('i').classList.remove('fa-times');
      menuToggle.querySelector('i').classList.add('fa-bars');
    }
  });
});

const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('form-modal');
const closeBtn = document.querySelector('.close-btn');

if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const message = document.getElementById('reg-message').value.trim();
  const status = document.getElementById('form-status');

  if (name && email && phone && message) {
    status.textContent = 'Thank you! Your message has been sent.';
    status.style.color = 'green';
    this.reset();
    
    // Hide modal after a short delay
    setTimeout(() => {
      modal.style.display = 'none';
      status.textContent = ''; // Clear status
    }, 2000);
    
  } else {
    status.textContent = 'Please fill out all fields.';
    status.style.color = 'red';
  }
});
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Optional: unobserve after it has animated in
      // observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.5 // Triggers when 50% of the item is visible
});

// Observe each timeline item
timelineItems.forEach(item => {
  observer.observe(item);
});