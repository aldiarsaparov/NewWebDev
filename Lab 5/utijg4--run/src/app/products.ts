export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  url: string;
  category: string;
  likes: number;
}

export const products = [
  {
    category: "Phones",
    likes: 0,
    id: 1,
    image: 'assets/images/iphone_xr.jpeg',
    name: 'iPhone XR',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000#!/item'
  },

  {
    category: "Phones",
    likes: 0,
    id: 2,
    image: 'assets/images/iphone_mini.jpeg',
    name: 'iPhone 13 Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-belyi-102298521/?c=750000000#!/item'
  },

  {
    category: "Phones",
    likes: 0,
    id: 3,
    image: 'assets/images/nokia.jpeg',
    name: 'Nokia 3310',
    price: 199,
    description: 'The legenday and unkillable phone',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/nokia-3310-sinii-8800447/?c=750000000#!/item'
  },

  {
    category: "Computers",
    likes: 0,
    id: 4,
    image: 'assets/images/macbook.jpeg',
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 1099,
    description: 'The very new MacBook Air with M1 chip.',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item'
  },

  {
    category: "Hardware",
    likes: 0,
    id: 5,
    image: 'assets/images/hyperx.jpeg',
    name: 'HyperX Headset',
    price: 99,
    description: 'The gaming headset perfect for pro-gamers.',
    rating: 4.4,
    url: 'https://kaspi.kz/shop/p/hyperx-cloud-ii-khx-hscp-rd-krasnyi-101180989/?c=750000000#!/item'
  },

  {
    category: "Computers",
    likes: 0,
    id: 6,
    image: 'assets/images/imac.jpeg',
    name: 'Apple iMac',
    price: 2099,
    description: 'The latest iMac with M2 Pro chip.',
    rating: 4.7,
    url: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mgtf3-serebristyi-101530799/?c=750000000#!/item'
  },

  {
    category: "Hadrware",
    likes: 0,
    id: 7,
    image: 'assets/images/microphone.jpeg',
    name: 'Hyperx Mic',
    price: 299,
    description: 'Gaming microphone with minimalistic design.',
    rating: 4.8,
    url: 'https://kaspi.kz/shop/p/hyperx-quadcast-standalon-microphone-4p5p6aa-104266179/?c=750000000#!/item'
  },

  {
    category: "Hardware",
    likes: 0,
    id: 8,
    image: 'assets/images/mouse.jpeg',
    name: 'Logitech G102',
    price: 39,
    description: 'Great mouse for its price.',
    rating: 4.3,
    url: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item'
  },

  {
    category: "Hardware",
    likes: 0,
    id: 9,
    image: 'assets/images/keyboard.jpeg',
    name: 'Magic Keyboard v2',
    price: 299,
    description: 'The second generation of famous Magic Keyboard',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/apple-magic-keyboard-2nd-generation-en-belyi-103957650/?c=750000000#!/item'
  },
  
  {
    category: "Hardware",
    likes: 0,
    id: 10,
    image: 'assets/images/webcamera.jpeg',
    name: 'Web camera',
    price: 39,
    description: 'High quality web camera.',
    rating: 4,
    url: 'https://kaspi.kz/shop/p/telycam-digicam-web-chernyi-100859156/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 11,
    image: 'assets/images/tv1.jpeg',
    name: 'Samsung UE43T5300AUXCE 109',
    price: 599,
    description: 'Full HD LED TV, 43 inches',
    rating: 4.6,
    url: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 12,
    image: 'assets/images/tv2.jpeg',
    name: 'Samsung UE75AU7100UXCE 191',
    price: 999,
    description: '4K Smart TV, 73 inches',
    rating: 4.9,
    url: 'https://kaspi.kz/shop/p/samsung-ue75au7100uxce-191-sm-chernyi-101496170/?c=750000000#!/item'
  },
  {
    category: "Phones",
    likes: 0,
    id: 13,
    image: 'assets/images/p4.jpeg',
    name: 'Смартфон Google Pixel 6a 6 ГБ/128 ГБ зеленый',
    price: 699,
    description: 'Цвет зеленый, Объем встроенной памяти 128',
    rating: 4.6,
    url: 'https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-zelenyi-106250320/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 14,
    image: 'assets/images/tv4.jpeg',
    name: 'LG 50UQ81009LC',
    price: 349,
    description: '4K LED LG TV with ThinQ technology',
    rating: 4.5,
    url: 'https://kaspi.kz/shop/p/lg-50uq81009lc-127-sm-chernyi-104794768/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 15,
    image: 'assets/images/tv5.jpeg',
    name: 'Haier 43 SMART TV S1',
    price: 749,
    description: '4K Ultra, resolution: 3840x2160, Smart TV',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/haier-43-smart-tv-s1-chernyi-108728233/?c=750000000#!/item'
  },
  {
    category: "Phones",
    likes: 0,
    id: 16,
    image: 'assets/images/p5.jpeg',
    name: 'Смартфон Google Pixel 7 Pro 12 ГБ/128 ГБ серый',
    price: 1249,
    description: 'Цвет серый, Объем встроенной памяти 128',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-seryi-107066184/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 17,
    image: 'assets/images/tv7.jpeg',
    name: 'LG 65QNED7S6QA',
    price: 870,
    description: 'QNED display, 65 inches, 4K UHD, Smart TV',
    rating: 4.7,
    url: 'https://kaspi.kz/shop/p/lg-65qned7s6qa-chernyi-108089483/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 18,
    image: 'assets/images/tv8.jpeg',
    name: 'Xiaomi Mi TV A2 L50M7-EARU',
    price: 690,
    description: 'LED dusplay, 50 inches, 4K UHD, Smart TV',
    rating: 4.1,
    url: 'https://kaspi.kz/shop/p/xiaomi-mi-tv-a2-l50m7-earu-chernyi-108570383/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 19,
    image: 'assets/images/tv9.jpeg',
    name: 'LG 50NANO756QA',
    price: 990,
    description: 'LED display, 50 inches, 4K UHD, Smart TV',
    rating: 4.4,
    url: 'https://kaspi.kz/shop/p/lg-50nano756qa-127-sm-chernyi-105572443/?c=750000000#!/item'
  },
  {
    category: "TVs",
    likes: 0,
    id: 20,
    image: 'assets/images/tv10.jpeg',
    name: 'LG 55UQ91009LD',
    price: 1090,
    description: 'LED display, 55 inches, 4K Ultra, Smart TV',
    rating: 4.4,
    url: 'https://kaspi.kz/shop/p/lg-55uq91009ld-140-sm-chernyi-105537038/?c=750000000#!/item'
  },
  {
    category: "Computers",
    likes: 0,
    id: 21,
    image: 'assets/images/c3.jpeg',
    name: 'Системный блок Impacto Gaming S черный',
    price: 890,
    description: 'Установленная ОС: Windows 11, процессор: Intel Core i5',
    rating: 4.7,
    url: 'https://kaspi.kz/shop/p/impacto-gaming-s-chernyi-108213662/?c=750000000#!/item'
  },
  {
    category: "Computers",
    likes: 0,
    id: 22,
    image: 'assets/images/c4.jpeg',
    name: 'Системный блок Vega Limited 844083 черный',
    price: 6480,
    description: 'Установленная ОС: Windows 10, процессор: Intel Core i9',
    rating: 5,
    url: 'https://kaspi.kz/shop/p/vega-limited-844083-chernyi-108778429/?c=750000000'
  },
  {
    category: "Computers",
    likes: 0,
    id: 23,
    image: 'assets/images/c5.jpeg',
    name: 'Системный блок EVOLUTION EVOLPROPC01 черный',
    price: 6000,
    description: 'Установленная ОС: нет, процессор: Intel Core i9',
    rating: 4.7,
    url: 'https://kaspi.kz/shop/p/evolution-evolpropc01-chernyi-108089938/?c=750000000'
  },
];
