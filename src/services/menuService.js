// src/services/menuService.js
export const getMenuItems = async (categoryId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allItems = [
        // Starters
        {
          id: 'item1',
          category: 'starters',
          name: 'Amritsari Tandoori Prawns',
          description: 'Succulent prawns marinated with aromatic spices and cooked in the tandoor',
          price: 625,
          image: './assets/images/dish-1.jpg',
          isVegetarian: false,
          isSpicy: true,
          isRecommended: true
        },
        {
          id: 'item2',
          category: 'starters',
          name: 'Dahi Ke Kebab',
          description: 'Delicate hung yogurt kebabs infused with mint and spices',
          price: 425,
          image: './assets/images/dish-2.jpg',
          isVegetarian: true,
          isSpicy: false,
          isRecommended: false
        },
        {
          id: 'item3',
          category: 'starters',
          name: 'Gilafi Seekh Kebab',
          description: 'Minced lamb kebabs coated with colorful bell peppers and fresh herbs',
          price: 545,
          image: './assets/images/dish-3.jpg',
          isVegetarian: false,
          isSpicy: true,
          isRecommended: true
        },

        // Main Course
        {
          id: 'item4',
          category: 'main',
          name: 'Butter Chicken',
          description: 'The legendary Delhi delicacy of tandoori chicken in rich tomato and butter gravy',
          price: 695,
          image: './assets/images/dish-4.jpg',
          isVegetarian: false,
          isSpicy: false,
          isRecommended: true
        },
        {
          id: 'item5',
          category: 'main',
          name: 'Rogan Josh',
          description: 'Slow-cooked Kashmiri lamb curry with aromatic spices and caramelized onions',
          price: 745,
          image: './assets/images/dish-5.jpg',
          isVegetarian: false,
          isSpicy: true,
          isRecommended: false
        },
        {
          id: 'item6',
          category: 'main',
          name: 'Dum Biryani',
          description: 'Fragrant basmati rice cooked with tender meat and saffron, sealed and slow-cooked',
          price: 595,
          image: './assets/images/dish-6.jpg',
          isVegetarian: false,
          isSpicy: true,
          isRecommended: true
        },
        {
          id: 'item15',
          category: 'main',
          name: 'Saffron-Infused Lamb Biryani',
          description: 'Fragrant basmati rice layered with tender lamb, aromatic spices, and saffron, served with raita',
          price: 795,
          image: './assets/images/dish-15.jpg',
          isVegetarian: false,
          isSpicy: true,
          isRecommended: true
        },

        // Tandoor Specials
        {
          id: 'item16',
          category: 'tandoor',
          name: 'Truffle Butter Naan',
          description: 'Traditional naan bread enhanced with truffle butter and topped with microgreens',
          price: 325,
          image: './assets/images/dish-16.jpg',
          isVegetarian: true,
          isSpicy: false,
          isRecommended: true
        },
        {
          id: 'item17',
          category: 'tandoor',
          name: 'Tandoori Lobster',
          description: 'Fresh lobster marinated in yogurt and spices, cooked in a traditional tandoor oven',
          price: 1395,
          image: './assets/images/dish-17.jpg',
          isVegetarian: false,
          isSpicy: true,
          isRecommended: true
        },

        // Desserts
        {
          id: 'item11',
          category: 'desserts',
          name: 'Kulfi with Falooda',
          description: 'Traditional Indian ice cream with vermicelli, basil seeds, and rose syrup',
          price: 375,
          image: './assets/images/dish-11.jpg',
          isVegetarian: true,
          isSpicy: false,
          isRecommended: false
        },
        {
          id: 'item12',
          category: 'desserts',
          name: 'Gulab Jamun Crème Brûlée',
          description: 'A fusion dessert combining French custard with Indian gulab jamun',
          price: 425,
          image: './assets/images/dish-12.jpg',
          isVegetarian: true,
          isSpicy: false,
          isRecommended: true
        },
        {
          id: 'item18',
          category: 'desserts',
          name: 'Saffron Pistachio Kulfi',
          description: 'Traditional Indian ice cream infused with saffron, cardamom, and crushed pistachios',
          price: 395,
          image: './assets/images/dish-18.jpg',
          isVegetarian: true,
          isSpicy: false,
          isRecommended: true
        },

        // Beverages
        {
          id: 'item13',
          category: 'beverages',
          name: 'Masala Chai Martini',
          description: 'Our signature cocktail with vodka, spiced tea, and cardamom',
          price: 495,
          image: './assets/images/dish-13.jpg',
          isVegetarian: true,
          isSpicy: false,
          isRecommended: true
        },
        {
          id: 'item14',
          category: 'beverages',
          name: 'Mango Lassi',
          description: 'Refreshing yogurt drink with alphonso mangoes and a hint of saffron',
          price: 275,
          image: './assets/images/dish-14.jpg',
          isVegetarian: true,
          isSpicy: false,
          isRecommended: false
        }
      ];

      if (categoryId) {
        resolve(allItems.filter(item => item.category === categoryId));
      } else {
        resolve(allItems);
      }
    }, 800);
  });
};

export const getFeaturedMenuItems = async () => {
  const allItems = await getMenuItems();
  return allItems.filter(item => item.isRecommended);
};