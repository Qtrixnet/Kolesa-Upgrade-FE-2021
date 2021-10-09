import generateColorsMarkup from './generateColors';
import generateSizesMarkup from './generateSizes';
import { balanceCount } from '../constants';
import clothes from '../../mock/clothes';
import accessories from '../../mock/accessories';

const generatePopup = (card) => {
    const cardId = +card.dataset.id;
    const allCards = [...clothes, ...accessories];
    const foundCard = allCards.find(item => item.id === cardId);

    const {
        colors = false, details = '', name = '', picture = '', price = 0, sizes = false,
    } = foundCard;

    return `<div class="popup">
    <div class="popup__window">
        <div class="popup__slider">
            <img class="popup__slider-image" src="${picture}"
                alt='${name}' width="330" height="330" />
            <ul class="popup__slider-preview">
                <li>
                    <img
                        class="popup__slider-preview-image"
                        src="./src/images/preview-2.png"
                        alt='Футболка "Эволюционируй или сдохни"'
                        width="50"
                        height="50"
                    />
                </li>
                <li>
                    <img
                        class="popup__slider-preview-image popup__slider-preview-image_active"
                        src="${picture}"
                        alt='Футболка "Эволюционируй или сдохни"'
                        width="50"
                        height="50"
                    />
                </li>
                <li>
                    <img
                        class="popup__slider-preview-image"
                        src="./src/images/preview-3.png"
                        alt='Футболка "Эволюционируй или сдохни"'
                        width="50"
                        height="50"
                    />
                </li>
            </ul>
        </div>
        <form action="" class="popup__form">
            <h2 class="popup__title">
                ${name}
            </h2>
            <div class="popup__main-info">
                <div class="popup__info-container">
                    <span class="popup__price">${price} баллов</span>
                    <button class="submit-button" type="submit">
                        Заказать
                    </button>
                </div>
                <div class="balance">
                    <span class="balance__title">Твой балланс:</span>
                    <span class="balance__count">${balanceCount.toLocaleString()} баллов</span>
                </div>
            </div>
            <fieldset class="popup__form-data">
                ${colors ? `<h4 class="popup__checkbox-title">Цвета:</h4>
                <ul class="checkbox-list">
                    ${colors.map(color => generateColorsMarkup(color)).join('')}
                </ul>` : ''}

                ${sizes ? `<h4 class="popup__checkbox-title">Размер:</h4>
                <ul class="checkbox-list">
                    ${sizes.map(size => generateSizesMarkup(size)).join('')}
                </ul>` : ''}
            </fieldset>
            ${details ? `<h4 class="popup__details">Детали:</h4>
            <h3 class="popup__details-text">${details}</h3>` : ''}
            ${sizes ? `<h4 class="popup__details">Как выбрать размер:</h4>
            <h3 class="popup__details-text">Написать дяде Рику для уточнения.</h3>` : ''}
        </form>
        <button type="button" class="popup__close-button"></button>
    </div>
    <div class="popup__overlay"></div>

</div>`;
};

export default generatePopup;
