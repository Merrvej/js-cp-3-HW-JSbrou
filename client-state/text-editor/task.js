let textArea = document.getElementById('editor');

textArea.addEventListener('input', function() {
    localStorage.setItem('text', textArea.value);
})

window.onload = function() {
    const savedText = localStorage.getItem('text');
    textArea.value = savedText;
}