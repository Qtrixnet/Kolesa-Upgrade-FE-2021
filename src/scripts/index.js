import './index.scss';
import clothes from '../mock/clothes';
import accessories from '../mock/accessories';
import { sortElements, renderCards } from '../utils/utils';
import { cardsList, categoryButtons } from '../utils/constants';

const sorttedClothes = sortElements(clothes);
const sorttedAccessories = sortElements(accessories);
const allItems = sortElements([...sorttedClothes, ...sorttedAccessories]);

renderCards(allItems, cardsList);

categoryButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        const activeButton = button.classList.contains('main__category-button_active');
        const { target } = evt;
        const { category } = target.dataset;

        if (!activeButton) {
            categoryButtons.forEach(eachButton => eachButton.classList.remove('main__category-button_active'));
            target.classList.add('main__category-button_active');

            switch (category) {
                case 'accessories':
                    renderCards(sorttedAccessories, cardsList);
                    break;
                case 'clothes':
                    renderCards(sorttedClothes, cardsList);
                    break;
                default:
                    renderCards(allItems, cardsList);
            }
        }
    });
});
