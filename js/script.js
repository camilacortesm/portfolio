'use strict'

const toggleButton = document.getElementById('toggle-info');
const infoPanel = document.getElementById('infoPanel');
const header = document.getElementById('header-');

toggleButton.addEventListener('click', ()=> {
    infoPanel.classList.toggle('active');
    header.classList.toggle('active');

    const isOpen = infoPanel.classList.contains('active');
    infoPanel.setAttribute('aria-hidden', !isOpen);
});
