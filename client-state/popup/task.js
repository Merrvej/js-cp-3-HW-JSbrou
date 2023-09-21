let modalPopup = document.getElementById('subscribe-modal');

let isCookie = document.cookie.includes('closed');
if(!isCookie) {
    modalPopup.classList.add('modal_active');

let modalClose = document.querySelector('.modal__close');

    modalClose.addEventListener('click', () => {
        modalPopup.classList.remove('modal_active');
        document.cookie = 'popup=closed';
    })
}