let textArea = document.getElementById('editor');

textArea.addEventListener('input', function() {
    localStorage.setItem('text', textArea.value);
})

window.onload = function() {
    textArea.value = localStorage.getItem('text');
}