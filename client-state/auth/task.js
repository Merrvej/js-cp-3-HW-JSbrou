const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    xhr.addEventListener('readystatechange', () => {
        if(xhr.status >= 200 && xhr.status< 300) {
            let serverAnswer = JSON.parse(response.responseText);

            let userId = serverAnswer.user_id;
            localStorage.setItem('id', userId);

            if(id) {
                welcomeBlock.classList.add('welcome_active');
                userIdSpan.textContent = userId;
            } else {
                welcomeBlock.classList.add('welcome_active');
                welcomeBlock.textContent = 'Неверный логин/пароль';
            }

        }
    })

    xhr.send(formData);
})

