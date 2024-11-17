//DARK MODE
// DARK MODE
// DARK MODE
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = '<i class="fa-solid fa-moon" style="color: #B197FC;"></i>';
const sunIcon = '<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>';

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeToggle.innerHTML = sunIcon;
    } else {
        themeToggle.innerHTML = moonIcon;
    }
});

// LOADING SCREEN
window.addEventListener('load', function () {
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 3000); // 3s timeout
});


//LOADING SCREEN
window.addEventListener('load', function () {
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 3000); // 3s timeout
});