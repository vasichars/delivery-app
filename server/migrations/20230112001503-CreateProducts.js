const products = [
  {
    name: 'Aubergine and garam masala gyoza',
    description: 'Thin pastry cases stuffed with salted aubergine and garam masala',
    price: 9,
    category: 'appetizers',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673440946/delivery-app/appetizer_2_otykzz.png'
  },
  {
    name: 'Horseradish and trout wontons',
    description: 'Thin wonton cases stuffed with fresh horseradish and rainbow trout',
    price: 12,
    category: 'appetizers',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673440946/delivery-app/appetizer_2_otykzz.png'
  },
  {
    name: 'Chickpea and sweetcorn gyoza',
    description: 'Thin pastry cases stuffed with fresh chickpea and baby sweetcorn',
    price: 8,
    category: 'appetizers',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673440946/delivery-app/appetizer_2_otykzz.png'
  },
  {
    name: 'Gimlet',
    description: '1/2oz Lime Juice',
    price: 10,
    category: 'drinks',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673439982/delivery-app/drink_3_z7k9ln.png'
  },
  {
    name: 'Snakebite',
    description: '1/4oz Lime Juice',
    price: 5,
    category: 'drinks',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673439982/delivery-app/drink_3_z7k9ln.png'
  },
  {
    name: 'Perfect Rob Roy',
    description: '1/8oz Dry Vermouth, 1/8oz Sweet Vermouth',
    price: 7,
    category: 'drinks',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673439982/delivery-app/drink_3_z7k9ln.png'
  },
  {
    name: 'Lamb and feta fusilli',
    description: 'Fresh egg pasta in a sauce made from succulent lamb and tangy feta',
    price: 18,
    category: 'main dishes',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673439977/delivery-app/main_2_fjwhlz.png'
  },
  {
    name: 'Black pepper and fish bagel',
    description: 'A warm bagel filled with hot black pepper and fish',
    price: 15,
    category: 'main dishes',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673439977/delivery-app/main_2_fjwhlz.png'
  },
  {
    name: 'Sheermal and bread',
    description: 'Crunchy bread made with sheermal ',
    price: 13,
    category: 'main dishes',
    image: 'https://res.cloudinary.com/dvitt6yud/image/upload/v1673439977/delivery-app/main_2_fjwhlz.png'
  }
];

export const up = async (db) => {
  await db.collection('products').insertMany(products);
};

export const down = async (db) => {
  await db.collection('products').drop();
};
