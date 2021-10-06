import './index.scss';

const cardsList = document.querySelector('.cards-list');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');

const CARDS_COUNT = 12;

const closePopup = () => {
    popup.classList.remove('popup_opened');
    popupCloseButton.removeEventListener('click', closePopup);
};

const openPopup = () => {
    popup.classList.add('popup_opened');
    popupCloseButton.addEventListener('click', closePopup);
};

for (let i = 0; i < CARDS_COUNT; i += 1) {
    const cardTemplate = document.querySelector('.cardTemplate');
    const card = cardTemplate.content
        .querySelector('.card')
        .cloneNode(true);

    cardsList.appendChild(card);
    card.addEventListener('click', openPopup);
}
