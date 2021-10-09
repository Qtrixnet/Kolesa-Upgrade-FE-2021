import amrTaha from '../images/accessories/amr-taha.jpg';
import apostolosVamvouras from '../images/accessories/apostolos-vamvouras.jpg';
import lilartsy from '../images/accessories/lilartsy.jpg';
import loganWeaver from '../images/accessories/logan-weaver.jpg';
import mikeVon from '../images/accessories/mike-von.jpg';
import salmanHossainSaif from '../images/accessories/salman-hossain-saif.jpg';
import generateRandomId from '../utils/generators/generateId';

const accessories = [
    {
        id:      generateRandomId(),
        isNew:   true,
        price:   20,
        picture: amrTaha,
        details: 'Шикарные белые бусы от Amr Taha',
        name:    'Бусы',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   30,
        picture: apostolosVamvouras,
        details: 'Самые солнцезащитные очки от Apostolos Vamvouras',
        name:    'Солнцезащитные очки',
    },
    {
        id:      generateRandomId(),
        isNew:   true,
        price:   25,
        picture: lilartsy,
        details: 'Комплект бижутерии от Lil\'Artsy. Ты просто оцепенеешь когда наденешь её на себя ⛓',
        name:    'Бижутерия',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   10,
        picture: loganWeaver,
        details: 'Визитница из натуральной кожи дракона 🐲, от Logan Weaver',
        name:    'Визитница',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   35,
        picture: mikeVon,
        details: 'Комплект сверкающих ✨ браслетов от Mike Von',
        name:    'Комплект браслетов',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   45,
        picture: salmanHossainSaif,
        details: 'Самые точные в мире наручные часы ⏱ от Salman Hossain Saif',
        name:    'Наручные часы',
    },
];

export default accessories;
