const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const signinButton = document.getElementById('signin__btn');

function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    xhr.addEventListener('load', () => {
               
        const serverAnswer = xhr.responseText;
        const userId = serverAnswer.user_id;

        localStorage.setItem('user_id', userId);
        localStorage.setItem('loggedIn', 'true');

        if (userId) {
            signinForm.classList.remove('signin_active');
            welcomeBlock.classList.add('welcome_active');
            userIdSpan.textContent = userId;
        } else {
            welcomeBlock.classList.add('welcome_active');
            welcomeBlock.textContent = 'Неверный логин/пароль';
        }

        xhr.send(formData);

    })

    xhr.onerror = function() {
        welcomeBlock.classList.add('welcome_active');
        welcomeBlock.textContent = 'Произошла ошибка при отправке формы';
    }
}

window.addEventListener('load', function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        signinForm.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = userId;
    }  
})

signinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    signinForm.reset();
    submitForm();
  });

