import generateRandomId from '../utils/generators/generateId';

const accessories = [
    {
        id:      generateRandomId(),
        isNew:   true,
        price:   23,
        picture: 'src/images/accessories/amr-taha.jpg',
        details: 'Шикарные белые бусы от Amr Taha',
        name:    'Бусы',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   37,
        picture: 'src/images/accessories/apostolos-vamvouras.jpg',
        details: 'Самые солнцезащитные очки от Apostolos Vamvouras',
        name:    'Солнцезащитные очки',
    },
    {
        id:      generateRandomId(),
        isNew:   true,
        price:   22,
        picture: 'src/images/accessories/lilartsy.jpg',
        details: 'Комплект бижутерии от Lil\'Artsy. Ты просто оцепенеешь когда наденешь её на себя ⛓',
        name:    'Бижутерия',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   10,
        picture: 'src/images/accessories/logan-weaver.jpg',
        details: 'Визитница из натуральной кожи дракона 🐲, от Logan Weaver',
        name:    'Визитница',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   31,
        picture: 'src/images/accessories/mike-von.jpg',
        details: 'Комплект сверкающих ✨ браслетов от Mike Von',
        name:    'Комплект браслетов',
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   48,
        picture: 'src/images/accessories/salman-hossain-saif.jpg',
        details: 'Самые точные в мире наручные часы ⏱ от Salman Hossain Saif',
        name:    'Наручные часы',
    },
];

export default accessories;
