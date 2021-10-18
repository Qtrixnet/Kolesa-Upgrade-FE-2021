import { page } from './constants';
import generatePopup from './generators/generatePopup';
import generateCard from './generators/generateCard';

/* eslint-disable */
const deletePopup = () => {
    document.querySelector(".popup")
        ? document.querySelector(".popup").remove()
        : "";
    document.removeEventListener("keyup", handleEscapeClose);
    document.removeEventListener("click", handleOverlayClose);
    document.body.style.overflow = "";
};

const handleEscapeClose = (evt) =>
    evt.key === "Esc" || evt.key === "Escape" ? deletePopup() : "";

const handleOverlayClose = (evt) =>
    evt.target.classList.contains("popup__overlay") ? deletePopup() : "";
/* eslint-enable */

export const openPopup = (event) => {
    const targetCard = event.target.closest('.card');

    page.insertAdjacentHTML('beforeEnd', generatePopup(targetCard));

    document
        .querySelector('.popup__close-button')
        .addEventListener('click', deletePopup);
    document.addEventListener('keyup', handleEscapeClose);
    document.addEventListener('click', handleOverlayClose);
    document.body.style.overflow = 'hidden';
};

export const sortElements = arr => arr.sort(item => (item.isNew ? -1 : 1));

export const renderCards = (cards, container) => {
    container.querySelectorAll('.card').forEach(card => card.remove());

    cards.forEach(card => container.insertAdjacentHTML('beforeEnd', generateCard(card)));

    container
        .querySelectorAll('.card')
        .forEach(card => card.addEventListener('click', openPopup));
};
