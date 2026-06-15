/* ============================================
   JAYENDRA'S PORTFOLIO — MINIMALIST SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
});

/* ---------- Accordion Logic ---------- */
function toggleAccordion(element) {
  const listItem = element.closest('.list-item');
  const icon = element.querySelector('.list-icon');
  const isActive = listItem.classList.contains('active');

  // Optional: close other accordions in the same group
  // const group = element.closest('.list-group');
  // group.querySelectorAll('.list-item').forEach(item => {
  //   item.classList.remove('active');
  //   item.querySelector('.list-icon').textContent = '[+]';
  // });

  if (!isActive) {
    listItem.classList.add('active');
    if(icon) icon.textContent = '[-]';
  } else {
    listItem.classList.remove('active');
    if(icon) icon.textContent = '[+]';
  }
}

/* ---------- Theme Toggle ---------- */
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Load saved preference
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
    updateToggleLabel(toggle, saved);
  }

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleLabel(toggle, next);
  });
}

function updateToggleLabel(btn, theme) {
  btn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}
