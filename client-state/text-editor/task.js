let textArea = document.getElementById('editor');

textArea.addEventListener('input', function() {
    localStorage.setItem('text', textArea.value);
})

window.onload = function() {
    const savedText = localStorage.getItem('text');
    if(savedText) {
        textArea.value = savedText;
    }
}