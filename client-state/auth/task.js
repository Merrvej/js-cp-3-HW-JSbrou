const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

function sendRequest(url, data, callback) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', url);
    const serverAnswer = xhr.responseText;

    xhr.addEventListener('load', () => {
        callback();
    })
    
    xhr.onerror = function() {
            welcomeBlock.classList.add('welcome_active');
            welcomeBlock.textContent = 'Неверный логин/пароль';
        }

    xhr.send(JSON.stringify(data));
    return serverAnswer;
}

function welcomeUser() {
    if(serverAnswer.success) {
        localStorage.setItem('user_id', response.user_id);
        signinForm.classList.remove('signin_active');
        if(userId) {
            welcomeBlock.classList.add('welcome_active');
            userIdSpan.textContent = userId;
        } 
    }
}
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userLogin = document.getElementsByName('login').value;
    const userPassword = document.getElementsByName('password').value;
    
    signinForm.reset;

    sendRequest('https://students.netoservices.ru/nestjs-backend/auth', {userLogin, userPassword}, welcomeUser)
})

// sendRequest('https://students.netoservices.ru/nestjs-backend/auth', credentials, welcomeUser)

//     let formData = new FormData(signinForm);
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

//     xhr.addEventListener('readystatechange', () => {
//         if(xhr.status >= 200 && xhr.status< 300) {
//             let serverAnswer = JSON.parse(response.responseText);

//             let userId = serverAnswer.user_id;
//             localStorage.setItem('id', userId);

//             if(id) {
//                 welcomeBlock.classList.add('welcome_active');
//                 userIdSpan.textContent = userId;
//             } else {
//                 welcomeBlock.classList.add('welcome_active');
//                 welcomeBlock.textContent = 'Неверный логин/пароль';
//             }

//         }
//     })

//     xhr.send(formData);
// })

