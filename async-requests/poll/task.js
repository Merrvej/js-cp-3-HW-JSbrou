let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send();

xhr.addEventListener('readystatechange', (e) => {
    e.preventDefault();
    let result = JSON.parse(xhr.responseText);
    
    const titleElement = document.getElementById('poll__title');
    titleElement.innerText = result.data.title;

    const answersElement = document.getElementById('poll__answers');

    result.data.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!')
        });
        answersElement.appendChild(button);
    })
})