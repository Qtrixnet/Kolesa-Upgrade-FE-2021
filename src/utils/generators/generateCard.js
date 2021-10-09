const generateCard = ({
    isNew, name, picture, price, sizes, id,
}) => `<li data-id=${id} class="card cards-list__item">
    <div class="card__wrapper">
        <div class="card__image-container">
            <img loading="lazy" width="330" height="330" class="card__image" src="${picture}"
                alt='${name}'>
            ${isNew ? '<span class="card__new">new</span>' : ''}
        </div>
        <div class="card__info">
            <span class="card__price">${price} баллов</span>
            <h2 class="card__title">${name}</h2>
            ${sizes ? `<span class="card__scale">Размеры ${sizes.join(' / ')}</span>` : ''}
            <button class="card__button">Заказать</button>
        </div>
    </div>
</li>`;

export default generateCard;
