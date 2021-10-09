const generateSizesMarkup = size => `<li class="checkbox-list__item">
    <input class="popup__input" name="size" type="radio" id="size-small" value="small" required />
    <label for="size-small" class="popup__label">${size}</label>
</li>`;

export default generateSizesMarkup;
