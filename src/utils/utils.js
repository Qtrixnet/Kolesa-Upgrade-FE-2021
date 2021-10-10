import { page } from './constants';
import generatePopup from './generators/generatePopup';
import generateCard from './generators/generateCard';

const deletePopup = () => (document.querySelector('.popup') ? document.querySelector('.popup').remove() : '');

export const openPopup = (event) => {
    const targetCard = event.target.closest('.card');

    page.insertAdjacentHTML('beforeEnd', generatePopup(targetCard));

    document.querySelector('.popup').classList.add('popup_opened');
    document.querySelector('.popup__close-button').addEventListener('click', deletePopup);
    document.addEventListener('keyup', evt => (evt.key === 'Esc' || evt.key === 'Escape' ? deletePopup() : ''));
    document.addEventListener('click', evt => (evt.target.classList.contains('popup__overlay') ? deletePopup() : ''));
};

export const sortElements = arr => arr.sort(item => (item.isNew === true ? -1 : 1));

export const renderCards = (cards, container) => {
    container.querySelectorAll('.card').forEach(card => card.remove());

    cards.forEach(card => container.insertAdjacentHTML('beforeEnd', generateCard(card)));

    container.querySelectorAll('.card').forEach(card => card.addEventListener('click', openPopup));
};
