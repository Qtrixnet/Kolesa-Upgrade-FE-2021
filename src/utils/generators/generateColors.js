const generateColorsMarkup = color => `<li class="checkbox__list-item">
    <input class="popup__input" name="color" type="radio" id="${color.value}" value="${color.name}" required />
    <label for="${color.value}" class="popup__label popup__label_color">
        <span style="background-color: ${color.value}" class="popup__color"></span>${color.name}
    </label>
</li>`;

export default generateColorsMarkup;
