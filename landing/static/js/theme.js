// Dark mode

const htmlElement = document.getElementById('html-theme');
const themeIcon = document.getElementById('theme-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

function setTheme(themeName) {
    htmlElement.setAttribute('data-bs-theme', themeName);
    document.body.className = themeName === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
    localStorage.setItem('theme', themeName);
    
    if (themeName === 'dark') {
        themeIcon.classList.replace('bi-brightness-high', 'bi-moon');
    } else {
        themeIcon.classList.replace('bi-moon', 'bi-brightness-high');
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});
