import {Gallery, Partners, Services} from "@/app/_types";

export const images = {
  logo: '/img/logo.svg',
  bg: '/img/main_sht.jpg',
}

export const services: Array<Services> = [
  {
    id: 0,
    bg: '/img/blue_sht.png',
    img: '/img/services/CIMG9018.JPG',
    description: 'Применение холодной энкаустики в различного типа сооружениях.',
  },
  {
    id: 1,
    bg: '/img/gold_sht.jpg',
    img: '/img/services/CIMG9021.JPG',
    description: 'Декоративная отделка различных фасадов и мебели.',
  },
  {
    id: 2,
    bg: '/img/blue_sht.png',
    img: '/img/services/CIMG9019.JPG',
    description: 'Работа с фреской, орнаментом или живописью.',
  },
]

export const gallery:Array<Gallery> = [
  {
    id: 0,
    url: '/img/gallery/IMG_2694.jpg',
  },
  {
    id: 1,
    url: '/img/gallery/IMG_2699.jpg',
  },
  {
    id: 2,
    url: '/img/gallery/IMG_2712.jpg',
  },
  {
    id: 3,
    url: '/img/gallery/IMG_2700.jpg',
  },
  {
    id: 4,
    url: '/img/gallery/Изображение 056.jpg',
  },
  {
    id: 5,
    url: '/img/gallery/Изображение 057.jpg',
  },
  {
    id: 6,
    url: '/img/gallery/Изображение 058.jpg',
  },
  {
    id: 7,
    url: '/img/gallery/Изображение 056.jpg',
  },
]

export const partners: Array<Partners> = [
  {
    id: 0,
    url: '/img/partners/partner1.png',
  },
  {
    id: 1,
    url: '/img/partners/partner2.svg',
  },
  {
    id: 2,
    url: '/img/partners/partner3.png',
  },
  {
    id: 3,
    url: '/img/partners/partner4.png',
  },
]
