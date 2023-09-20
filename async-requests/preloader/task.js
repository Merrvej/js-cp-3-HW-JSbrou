const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

xhr.onload = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const valute = data.responce.valute;
        displayData(valute);
        hideLoader();
      }
}

xhr.send();

function displayData(valute) {
    const itemsContainer = document.getElementById('items');

    const codeElement = document.createElement('div');
    codeElement.classList.add('item__code');
    codeElement.textContent = item.CharCode;

    const valueElement = document.createElement('div');
    valueElement.classList.add('item__value');
    valueElement.textContent = item.Value;

    const currencyElement = document.createElement('div');
    currencyElement.classList.add('item__currency');
    currencyElement.textContent = 'руб.';

    itemsContainer.appendChild(codeElement);
    itemsContainer.appendChild(valueElement);
    itemsContainer.appendChild(currencyElement);
}

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');
}

const loader = document.getElementById('loader');