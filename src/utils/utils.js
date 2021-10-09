import { page } from './constants';
import generatePopup from './generators/generatePopup';
import generateCard from './generators/generateCard';

const deletePopup = () => (document.querySelector('.popup') ? document.querySelector('.popup').remove() : '');

const openPopup = (evt) => {
    const targetCard = evt.target.closest('.card');

    page.insertAdjacentHTML('beforeEnd', generatePopup(targetCard));

    document.querySelector('.popup').classList.add('popup_opened');
    document.querySelector('.popup__close-button').addEventListener('click', deletePopup);
    document.addEventListener('keyup', event => (event.key === 'Esc' || event.key === 'Escape' ? deletePopup() : ''));
};

export const sortElements = arr => arr.sort(item => (item.isNew === true ? -1 : 1));

export const renderCards = (cards, container) => {
    document.querySelectorAll('.card').forEach(card => card.remove());

    cards.forEach(card => container.insertAdjacentHTML('beforeEnd', generateCard(card)));

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', openPopup);
    });
};
