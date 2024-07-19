
'use strict';

// Utility function to toggle class
const toggleClass = (element, className) => element.classList.toggle(className);

// Sidebar toggle
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

sidebarBtn.addEventListener('click', () => toggleClass(sidebar, 'active'));

// Modal functionality
const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const openModal = item => {
  modalImg.src = item.querySelector('[data-testimonials-avatar]').src;
  modalImg.alt = item.querySelector('[data-testimonials-avatar]').alt;
  modalTitle.textContent = item.querySelector('[data-testimonials-title]').textContent;
  modalText.textContent = item.querySelector('[data-testimonials-text]').textContent;
  toggleClass(modalContainer, 'active');
  toggleClass(overlay, 'active');
};

testimonialsItems.forEach(item => {
  item.addEventListener('click', () => openModal(item));
});

modalCloseBtn.addEventListener('click', () => {
  toggleClass(modalContainer, 'active');
  toggleClass(overlay, 'active');
});
overlay.addEventListener('click', () => {
  toggleClass(modalContainer, 'active');
  toggleClass(overlay, 'active');
});

// Custom select functionality
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

select.addEventListener('click', () => toggleClass(select, 'active'));

selectItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedValue = item.textContent.toLowerCase();
    selectValue.textContent = item.textContent;
    toggleClass(select, 'active');
    filterItems.forEach(filterItem => {
      filterItem.classList.toggle('active', selectedValue === 'all' || selectedValue === filterItem.dataset.category);
    });
  });
});

let lastClickedBtn = filterBtns[0];

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedValue = btn.textContent.toLowerCase();
    selectValue.textContent = btn.textContent;
    filterItems.forEach(filterItem => {
      filterItem.classList.toggle('active', selectedValue === 'all' || selectedValue === filterItem.dataset.category);
    });
    lastClickedBtn.classList.remove('active');
    btn.classList.add('active');
    lastClickedBtn = btn;
  });
});

// Contact form validation
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

formInputs.forEach(input => {
  input.addEventListener('input', () => {
    formBtn.disabled = !form.checkValidity();
  });
});

// Page navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    const targetPage = link.getAttribute('href').substring(1);
    pages.forEach(page => {
      page.classList.toggle('active', page.id === targetPage);
      navigationLinks.forEach(navLink => {
        navLink.classList.toggle('active', navLink === link);
      });
    });
    window.scrollTo(0, 0);
  });
});
