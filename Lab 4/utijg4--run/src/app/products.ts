export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    image: 'assets/images/iphone_xr.jpeg',
    name: 'iPhone XR',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: 5
  },

  {
    id: 2,
    image: 'assets/images/iphone_mini.jpeg',
    name: 'iPhone 13 Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: 4.5

  },

  {
    id: 3,
    image: 'assets/images/nokia.jpeg',
    name: 'Nokia 3310',
    price: 199,
    description: 'The legenday and unkillable phone',
    rating: 5
  },

  {
    id: 4,
    image: 'assets/images/macbook.jpeg',
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 1099,
    description: 'The very new MacBook Air with M1 chip.',
    rating: 4.5
  },

  {
    id: 5,
    image: 'assets/images/hyperx.jpeg',
    name: 'HyperX Headset',
    price: 99,
    description: 'The gaming headset perfect for pro-gamers.',
    rating: 4.4
  },

  {
    id: 6,
    image: 'assets/images/imac.jpeg',
    name: 'Apple iMac',
    price: 2099,
    description: 'The latest iMac with M2 Pro chip.',
    rating: 4.7
  },

  {
    id: 7,
    image: 'assets/images/microphone.jpeg',
    name: 'Hyperx Mic',
    price: 299,
    description: 'Gaming microphone with minimalistic design.',
    rating: 4.8
  },

  {
    id: 8,
    image: 'assets/images/mouse.jpeg',
    name: 'Logitech G102',
    price: 39,
    description: 'Great mouse for its price.',
    rating: 4.3
  },

  {
    id: 9,
    image: 'assets/images/keyboard.jpeg',
    name: 'Magic Keyboard v2',
    price: 299,
    description: 'The second generation of famous Magic Keyboard',
    rating: 5
  },
  
  {
    id: 10,
    image: 'assets/images/webcamera.jpeg',
    name: 'Web camera',
    price: 39,
    description: 'High quality web camera.',
    rating: 4
  }
];
