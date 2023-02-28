export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    image: 'assets/images/iphone_xr.jpeg',
    name: 'iPhone XR',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000#!/item'
  },

  {
    id: 2,
    image: 'assets/images/iphone_mini.jpeg',
    name: 'iPhone 13 Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-belyi-102298521/?c=750000000#!/item'
  },

  {
    id: 3,
    image: 'assets/images/nokia.jpeg',
    name: 'Nokia 3310',
    price: 199,
    description: 'The legenday and unkillable phone',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/nokia-3310-sinii-8800447/?c=750000000#!/item'
  },

  {
    id: 4,
    image: 'assets/images/macbook.jpeg',
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 1099,
    description: 'The very new MacBook Air with M1 chip.',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item'
  },

  {
    id: 5,
    image: 'assets/images/hyperx.jpeg',
    name: 'HyperX Headset',
    price: 99,
    description: 'The gaming headset perfect for pro-gamers.',
    rating: 4.4,
    url: 'https://kaspi.kz/shop/p/hyperx-cloud-ii-khx-hscp-rd-krasnyi-101180989/?c=750000000#!/item'
  },

  {
    id: 6,
    image: 'assets/images/imac.jpeg',
    name: 'Apple iMac',
    price: 2099,
    description: 'The latest iMac with M2 Pro chip.',
    rating: 4.7,
    url: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mgtf3-serebristyi-101530799/?c=750000000#!/item'
  },

  {
    id: 7,
    image: 'assets/images/microphone.jpeg',
    name: 'Hyperx Mic',
    price: 299,
    description: 'Gaming microphone with minimalistic design.',
    rating: 4.8,
    url: 'https://kaspi.kz/shop/p/hyperx-quadcast-standalon-microphone-4p5p6aa-104266179/?c=750000000#!/item'
  },

  {
    id: 8,
    image: 'assets/images/mouse.jpeg',
    name: 'Logitech G102',
    price: 39,
    description: 'Great mouse for its price.',
    rating: 4.3,
    url: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item'
  },

  {
    id: 9,
    image: 'assets/images/keyboard.jpeg',
    name: 'Magic Keyboard v2',
    price: 299,
    description: 'The second generation of famous Magic Keyboard',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-magic-keyboard-2nd-generation-en-belyi-103957650/?c=750000000#!/item'
  },
  
  {
    id: 10,
    image: 'assets/images/webcamera.jpeg',
    name: 'Web camera',
    price: 39,
    description: 'High quality web camera.',
    rating: 4,
    url: 'https://kaspi.kz/shop/p/telycam-digicam-web-chernyi-100859156/?c=750000000#!/item'
  }
];
