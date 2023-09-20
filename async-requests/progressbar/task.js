const uploadForm = document.getElementById('form');
const progress = document.getElementById('progress')
uploadForm.onsubmit = function(e) {
    e.preventDefault();
    const input = this.elements.file;
    const file = input.files[0];
    if(file) {
        upload(file);
    } else {
        return false;
    }
}

function upload(file) {
    let xhr = new XMLHttpRequest();    

    xhr.upload.onprogress = function(event) {
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }

    xhr.upload.onerror = function() {
        alert('Произошла ошибка при отправке данных на сервер')
    }

    const formData = new FormData();
    formData.append('file', file);
     xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
     xhr.send(file);
}