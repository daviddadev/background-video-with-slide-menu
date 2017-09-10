// console.log('Starting script.js');
const button = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar');

// This function allows the sidebar to toggle in and out of view.
button.addEventListener('click', function() {
    sidebar.classList.toggle('isHidden');
});

