// Copy to clipboard

const copyText = document.getElementById('copyText');

copyText.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('copyText').textContent);
});