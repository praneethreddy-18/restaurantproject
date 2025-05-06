import React from "react";
import Layout from "./../components/Layout/Layout";
const soupItemsVeg = [
  {
    id: 1,
    name: 'Rasam',
    description: 'A tasty south Indian soup, traditionally prepared using tamarind juice as a base, with the addition of tomato, chilli, pepper, cumin and other spices as seasonings.',
    price: '$4.99',
    image: "https://img.freepik.com/premium-photo/spicy-nuoc-cham-sauce-isolated-white-background_787273-44005.jpg?semt=ais_hybrid"
  },
  {
    id: 2,
    name: ' Sambar',
    description: 'A south Indian stew made from lentils, vegetables, tamarind and spices.',
    price: '$4.99',
    image: "https://img.freepik.com/free-photo/top-view-delicious-soup-inside-plate-dark-surface_140725-44024.jpg?semt=ais_hybrid",
  },
  {
    id: 3,
    name: 'Tomato Soup',
    description: 'A delicious soup made of tomatoes and cream.',
    price: '$5.99',
    image: 'https://img.freepik.com/premium-photo/tomato-basil-soup-with-fresh-tomatoes_118124-360999.jpg?semt=ais_hybrid'
  },
  {
    id: 4,
    name: 'Vegetable Corn Soup',
    description: 'A delicious soup made with corn.',
    price: '$5.99',
    image: 'https://img.freepik.com/free-photo/corn-soup-white-bowl-black-background_123827-28225.jpg?semt=ais_hybrid'
  },
  {
    id: 5,
    name: ' Vegetable Hot & Sour Soup ',
    description: 'A delicious soup made of spicy and tangy combination of veggies and chinese sauces.',
    price: '$5.99',
    image: 'https://i.pinimg.com/236x/8a/44/5c/8a445c28c053b5e2ce569aeb52597cd8.jpg'
  }
];


const soupItemsNonVeg = [
  {
    id: 1,
    name: 'Chicken Corn Soup',
    description: 'A delicious soup made with corn and chicken .',
    price: '$6.99',
    image: 'https://i.pinimg.com/236x/93/bc/18/93bc18b62795c3be06f585d7a24736ef.jpg'
  },
  {
    id: 2,
    name: ' Chicken Hot & Sour Soup',
    description: 'A delicious soup made of spicy and tangy combination of veggies, chicken and chinese sauces.',
    price: '$6.99',
    image: 'https://i.pinimg.com/236x/8a/44/5c/8a445c28c053b5e2ce569aeb52597cd8.jpg'
  }
];

const appetizersItemsVeg = [
  {
    id: 1,
    name: 'Aloo Bajji',
    description: 'Sliced potatoes cooked with spicy chickpea flour batter and deep fried. Served with fresh mint and tamarind chutneys.',
    price:"$4.99",
    image: 'https://i.pinimg.com/236x/2a/96/ff/2a96ffe46ffe6fc6fe75d42566c49435.jpg'
  },
  {
    id: 2,
    name: 'Samosa veg (3 pieces)',
    description: 'A triangular pastry stuffed with potatoes & peas and deep fried, served with fresh mint and tamarind chutneys.',
    image: 'https://i.pinimg.com/236x/40/99/00/4099002ec1e832fb7e305e2cac4801fb.jpg'
  },
  {
    id: 3,
    name: 'Samosa Chat',
    description: 'Samosa mixed with chick peas masala, chat powder and topped with mint sause, tamarind suase, yogurt and onions.',
    image: 'https://i.pinimg.com/236x/e6/0a/39/e60a39f3e376ec0a9105f15f1417bc9a.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];


const appetizersItemsNonVeg = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];

const southIndianTiffins = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const dosaItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const vegEntreesItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const nonVegEntreesItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
  ,
  {
    id: 18,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];

const seaFoodItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];

const TandooriVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  }
];

const TandooriNonVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const RotiBreadItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const vegBriyaniItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const nonVegBiryaniItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const vegPulaoItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const nonVegpulaoItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const indoChineeseVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const indoChineeseNonVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const dessertItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const beverages = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const sideItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const kidsItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  }
];
const Menu = () => {
  return (
    <Layout>
      <div className="Adds">
        <div className="menu-main">
          <h2>Mythris’s Delicious Menu</h2>
        </div>
        <div className="menuItem-type">
          <h2>Soups (Veg)</h2>
        </div>
        <div className="menu-container">

          {soupItemsVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>
            </div>
          ))}
        </div>

        <div className="menuItem-type">
          <h2>Soups (Non-Veg)</h2>
        </div>
        <div className="menu-container">

          {soupItemsNonVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Appetizers (Veg)</h2>
        </div>
        <div className="menu-container">

          {appetizersItemsVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Appetizers (Non-Veg)</h2>
        </div>
        <div className="menu-container">

          {appetizersItemsNonVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>South Indian tiffins</h2>
        </div>
        <div className="menu-container">

          {southIndianTiffins.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Dosa's</h2>
        </div>
        <div className="menu-container">

          {dosaItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Veg Entrees</h2>
        </div>
        <div className="menu-container">

          {vegEntreesItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Non-Veg Entrees</h2>
        </div>
        <div className="menu-container">

          {nonVegEntreesItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Sea Food</h2>
        </div>
        <div className="menu-container">

          {seaFoodItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Tandoori (Veg)</h2>
        </div>
        <div className="menu-container">

          {TandooriVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Tandoori (Non-Veg)</h2>
        </div>
        <div className="menu-container">

          {TandooriNonVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Roti Bread</h2>
        </div>
        <div className="menu-container">

          {RotiBreadItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Biryani (veg)</h2>
        </div>
        <div className="menu-container">

          {vegBriyaniItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Biryani (Non-veg)</h2>
        </div>
        <div className="menu-container">

          {nonVegBiryaniItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Pulao (veg)</h2>
        </div>
        <div className="menu-container">

          {vegPulaoItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Pulao (Non-veg)</h2>
        </div>
        <div className="menu-container">

          {nonVegpulaoItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Indo Chineese (veg)</h2>
        </div>
        <div className="menu-container">

          {indoChineeseVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Indo Chineese (Non-veg)</h2>
        </div>
        <div className="menu-container">

          {indoChineeseNonVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Desserts</h2>
        </div>
        <div className="menu-container">

          {dessertItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Beverages</h2>
        </div>
        <div className="menu-container">

          {beverages.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Sides</h2>
        </div>
        <div className="menu-container">

          {sideItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Kids Menu</h2>
        </div>
        <div className="menu-container">

          {kidsItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
