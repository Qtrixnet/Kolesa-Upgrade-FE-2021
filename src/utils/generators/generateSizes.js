const generateSizesMarkup = size => `<li class="checkbox-list__item">
    <input class="popup__input" name="size" type="radio" id="size-${size}" value="size-${size}" required />
    <label for="size-${size}" class="popup__label">${size}</label>
</li>`;

export default generateSizesMarkup;
