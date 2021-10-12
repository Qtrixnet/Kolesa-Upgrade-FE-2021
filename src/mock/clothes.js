import generateRandomId from '../utils/generators/generateId';

const clothes = [
    {
        id:      generateRandomId(),
        isNew:   true,
        price:   101,
        picture: 'fucking-awesome.jpg',
        details: 'Футболка "fucking awesome" от всем известного дизайнера',
        name:    'Футботка "Fucking awesome"',
        sizes:   ['S', 'M', 'L'],
        colors:  [
            {
                value: '#FBCEB1',
                name:  'Абрикосовый',
            },
            {
                value: '#7FFFD4',
                name:  'Аквамариновый',
            },
            {
                value: '#fff',
                name:  'Белый',
            },
        ],
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   202,
        picture: 'hunter-newton.jpg',
        details: 'Эксклюзивная черная футболка "Phenomenally black" от Hunter Newton',
        name:    'Футболка "Phenomenally black"',
        sizes:   ['XL', 'XXL'],
        colors:  [
            {
                value: '#000',
                name:  'Черный',
            },
        ],
    },
    {
        id:      generateRandomId(),
        isNew:   true,
        price:   255,
        picture: 'kukuvaja.jpg',
        details: 'Футботка с хмурой совой - "Kukuvaja"',
        name:    'Футботка "Kukuvaja"',
        sizes:   ['M', 'L'],
        colors:  [
            {
                value: '#E32636',
                name:  'Ализариновый красный',
            },
            {
                value: '#9966CC',
                name:  'Аметистовый',
            },
            {
                value: '#000',
                name:  'Черный',
            },
        ],
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   179,
        picture: 'austin-wade.jpg',
        details: 'Футболка "Methodical coffee" от Austin Wade',
        name:    'Футболка "Methodical coffee"',
        sizes:   ['S', 'M'],
        colors:  [
            {
                value: '#B5B8B1',
                name:  'Агатовый серый',
            },
            {
                value: '#44944A',
                name:  'Арлекин',
            },
            {
                value: '#6E5160',
                name:  'Баклажановый Крайола',
            },
            {
                value: '#79553D',
                name:  'Бежево-коричневый',
            },
        ],
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   183,
        picture: 'jonathan-sanchez.jpg',
        details: 'Футболка "Love thy emeny" от Jonathan Sanchez',
        name:    'Футболка "Love thy emeny"',
        sizes:   ['S', 'M'],
        colors:  [
            {
                value: '#004524',
                name:  'Глубокий зеленый',
            },
            {
                value: '#DCDCDC',
                name:  'Гейнсборо',
            },
            {
                value: '#5E2129',
                name:  'Винно-красный',
            },
        ],
    },
    {
        id:      generateRandomId(),
        isNew:   false,
        price:   136,
        picture: 'vinicius-henrique.jpg',
        details: 'Футболка "Let me hear the fucking bass" от Vinicius Henrique',
        name:    'Футболка "Let me hear the fucking bass"',
        sizes:   ['S', 'M'],
        colors:  [
            {
                value: '#F3A505',
                name:  'Георгиново-желтый',
            },
            {
                value: '#ff681d',
                name:  'Белый',
            },
            {
                value: '#42AAFF',
                name:  'Голубой',
            },
            {
                value: '#F34723',
                name:  'Гранатовый',
            },
        ],
    },
];

export default clothes;
