const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.onload = function(e) {
    e.preventDefault();
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.responseText);
        const valute = data.response.Valute;
        displayData(valute);
        hideLoader();
      }
}

xhr.send();

function displayData(object) {
    const itemsContainer = document.getElementById('item');

    for(let key = 0; key < object.length; key++) {
        const codeElement = document.createElement('div');
        codeElement.classList.add('item__code');
        codeElement.textContent = object.[key].CharCode;
    
        const valueElement = document.createElement('div');
        valueElement.classList.add('item__value');
        valueElement.textContent = object.[key].Value;
    
        const currencyElement = document.createElement('div');
        currencyElement.classList.add('item__currency');
        currencyElement.textContent = 'руб.';
    
        itemsContainer.appendChild(codeElement);
        itemsContainer.appendChild(valueElement);
        itemsContainer.appendChild(currencyElement); 
    }
}

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
}