export interface Item {
  id: number;
  name: string;
  price:number;
  category: string,
  description: string,
  image: string,
  rating: number,
}

export const items = [
  {
    id: 1,
    name: 'Apple iPhone 13',
    price: 376089,
    description: '128Gb черный',
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    rating: 4.5,
    category: "Smartphone"
  },
  {
    id: 2,
    name: 'Samsung Galaxy A13',
    price: 87490,
    description: '4 ГБ/128 ГБ черный',
    link: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
    rating: 5,
    category: "Smartphone",
  },
  {
    id: 3,
    name: 'Nokia G21',
    price: 74948,
    description: '4 ГБ/128 ГБ синий',
    link: "https://kaspi.kz/shop/p/nokia-g21-4-gb-128-gb-sinii-104374009/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/h53/49844769718302/nokia-g21-4-gb-128-gb-sinij-104374009-1.jpg",
    rating: 4,
    category: "Smartphone",
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 11 Pro",
    price: 139195,
    description: "8 ГБ/128 ГБ серый",
    link:"https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
    rating: 4.5,
    category: "Smartphone",
  },
  {
    id: 5,
    name: "TECNO Spark 9 Pro",
    price: 77718,
    description: "4 ГБ/128 ГБ черный",
    link: "https://kaspi.kz/shop/p/tecno-spark-9-pro-4-gb-128-gb-chernyi-106366803/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h71/62288519757854/tecno-spark-9-pro-4-gb-128-gb-cernyj-106366803-1.jpg",
    rating: 5,
    category: "Smartphone",
  },
  {
    id: 1,
    name: "Игровая приставка Sony PlayStation 5 белый",
    price: 328984,
    description: "тип: стационарная\n" +
      "объем SSD: 825 Гб\n" +
      "поддержка UHD (4K): Да\n" +
      "тип носителя для игр: UHD Blu-ray",
    link: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg",
    rating: 3,
    category: "Tv, Audio, Video",
  },
  {
    id: 2,
    name: "Телевизор LG 50UQ76003LD 127 см черный",
    price: 267690,
    description: "тип: LED-телевизор\n" +
      "диагональ: 50 дюйм\n" +
      "разрешение: 3840x2160\n" +
      "поддержка HD: 4K UHD\n" +
      "технология Smart TV: Да\n" +
      "wi-Fi: Да\n" +
      "входы: HDMI, ,USB",
    link: "https://kaspi.kz/shop/p/lg-50uq76003ld-127-sm-chernyi-105054596/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h35/51110128386078/lg-50uq76003ld-chernyi-105054596-1.jpg",
    rating: 4,
    category: "Tv, Audio, Video",
  },
  {
    id: 3,
    name: "Телевизор Xiaomi MI TV P1 L43M6-6ARG 109 см черный",
    price: 204990,
    description: "тип: LED-телевизор\n" +
      "диагональ: 43 дюйм\n" +
      "разрешение: 3840x2160\n" +
      "поддержка HD: 4K UHD\n" +
      "технология Smart TV: Да\n" +
      "wi-Fi: Да\n" +
      "входы: аудио, ,оптический, ,композитный, ,HDMI, ,Ethernet (RJ-45), ,USB, ,антенный",
    link: "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-l43m6-6arg-109-sm-chernyi-102743844/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h5b/49320428371998/televizor-xiaomi-mi-tv-p1-l43m6-6arg-109-sm-cernyj-102743844-1.jpg",
    rating: 4.5,
    category: "Tv, Audio, Video",
  },
  {
    id: 4,
    name: "Экшн-камера GoPro HERO 11",
    price: 253990,
    description: "максимальное разрешение видео: 5312x2988\n" +
      "максимальное разрешение фото: 2704x2028\n" +
      "угол обзора, градусов: 155\n" +
      "тип матрицы: CMOS\n" +
      "модель: HERO 11",
    link: "https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-11-106585231/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/h17/62711822549022/ekshn-kamera-gopro-hero-11-106585231-1.jpg",
    rating: 4.5,
    category: "Tv, Audio, Video",
  },
  {
    id: 5,
    name: "Наушники Apple AirPods Max серебристый",
    price: 375000,
    description: "тип: гарнитура\n" +
      "вид: накладные\n" +
      "подключение: беспроводное\n" +
      "тип акустического оформления: закрытые\n" +
      "тип крепления: оголовье\n" +
      "система активного шумоподавления: Да\n" +
      "микрофон: Да",
    link: "https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h18/33524667154462/apple-airpods-max-serebristyj-100949286-1-Container.jpg",
    rating: 5,
    category: "Tv, Audio, Video",
  },
  {
    id: 1,
    name: "Стиральная машина DEXP WM-F510DVL/WW белый",
    price: 104990,
    description: "установка: отдельностоящая\n" +
      "управление: электронно-механическое\n" +
      "максимальная загрузка белья: 5 кг\n" +
      "класс потребления электроэнергии: A++\n" +
      "скорость вращения при отжиме: 1000 об/мин\n" +
      "защита от протечек воды: Нет\n" +
      "цвет: белый",
    link: "https://kaspi.kz/shop/p/dexp-wm-f510dvl-ww-belyi-107963185/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h6a/66670235123742/dexp-wm-f510dvl-ww-belyi-107963185-1.jpg",
    rating: 4,
    category: "Appliances",
  },
  {
    id: 2,
    name: "Genau Fresh Air 20L",
    price: 119790,
    description: "назначение прибора: увлажнение воздуха\n" +
      "обслуживаемая площадь: 90 кв.м\n" +
      "тип увлажнителя: ультразвуковой\n" +
      "режимы: УФ лампа\n" +
      "управление: электронное\n" +
      "цвет: белый",
    link: "https://kaspi.kz/shop/p/genau-fresh-air-20l-100817911/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h9c/51351515201566/genau-fresh-air-24l-belyj-100817911-1-Container.jpg",
    rating: 5,
    category: "Appliances",
  },
  {
    id: 3,
    name: "Робот-пылесос Xiaomi Mi Robot Vacuum Mop 2 BHR5055EU белый",
    price: 136713,
    description: "тип уборки: сухая и влажная\n" +
      "емкость пылесборника: 550 мл\n" +
      "емкость бака для воды: 250 мл\n" +
      "фильтр тонкой очистки: Нет\n" +
      "наличие дисплея: Нет\n" +
      "емкость аккумулятора: 3200 мАч\n" +
      "цвет: белый",
    link: "https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-2-bhr5055eu-belyi-103450270/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h19/48289555709982/xiaomi-bhr5055eu-mi-robot-vacuum-mop-2-belyj-103450270-1.jpg",
    rating: 5,
    category: "Appliances",
  },
  {
    id: 4,
    name: "Варочная поверхность Hansa BHC66206",
    price: 104300,
    description: "панель конфорок: стеклокерамика\n" +
      "всего конфорок: 3\n" +
      "тип плиты: электрическая\n" +
      "установка: независимая\n" +
      "цвет: черный",
    link: "https://kaspi.kz/shop/p/hansa-bhc66206-4501835/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/hd4/51178974609438/hansa-bhc66206-black-4501835-1-Container.jpg",
    rating: 4,
    category: "Appliances",
  },
  {
    id: 5,
    name: "Пылесос Bosch BGS412234 черный",
    price: 115508,
    description: "тип: традиционный\n" +
      "уборка: сухая\n" +
      "тип пылесборника: контейнер\n" +
      "потребляемая мощность: 2200 Вт\n" +
      "источник питания: сеть\n" +
      "цвет: черный",
    link: "https://kaspi.kz/shop/p/bosch-bgs412234-chernyi-3701569/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/hae/48392679882782/bosch-bgs-412234-black-3701569-1-Container.jpg",
    rating: 5,
    category: "Appliances",
  },
  {
    id: 1,
    name: "MSQ 01 диван, обивка текстиль, 90x80x280 см, серый, бежевый",
    price: 105069,
    description: "механизм трансформации: еврокнижка\n" +
      "обивка: текстиль\n" +
      "высота, см: 90\n" +
      "ширина, см: 80\n" +
      "глубина, см: 280\n" +
      "цвет: серый, ,бежевый\n" +
      "страна: Казахстан",
    link: "https://kaspi.kz/shop/p/msq-01-divan-obivka-tekstil-90x80x280-sm-seryi-bezhevyi-104375933/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h1e/49848894586910/msq-divan-uglovoj-01-divan-obivka-tekstil-90x80x280-sm-seryj-bezevyj-104375933-1.jpg",
    rating: 4,
    category: "Furniture",
  },
  {
    id: 2,
    name: "Шкаф Гранд Турин 5Д, 225x50x218 см, белый",
    price: 132145,
    description: "тип установки: напольный\n" +
      "материал: ЛДСП\n" +
      "ширина, см: 225\n" +
      "глубина, см: 50\n" +
      "высота, см: 218\n" +
      "цвет: белый\n" +
      "страна: Казахстан",
    link: "https://kaspi.kz/shop/p/grand-turin-5d-225x50x218-sm-belyi-105072998/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h65/51132067053598/skaf-grand-turin-5d-225x50x218-sm-ldsp-belyj-105072998-1.jpg",
    rating: 4,
    category: "Furniture",
  },
  {
    id: 3,
    name: "Игровое Canyon Deimos CND-SGCH4, черный, оранжевый",
    price: 123556,
    description: "назначение: игровое кресло\n" +
      "тип базы: крестовина с колесами\n" +
      "материал обивки: искусственная кожа\n" +
      "регулировка: высота сиденья, ,угол наклона\n" +
      "цвет: черный, ,оранжевый\n" +
      "страна: Беларусь",
    link: "https://kaspi.kz/shop/p/igrovoe-canyon-deimos-cnd-sgch4-chernyi-oranzhevyi-17800395/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf1/ha7/31957591359518/canyon-deimos-cnd-sgch4-black-orange-17800395-1-Container.jpg",
    rating: 5,
    category: "Furniture",
  },
  {
    id: 4,
    name: "Detskaya1 Софа 160х80 белый",
    price: 123443,
    description: "тип: детская кровать\n" +
      "материал: дерево\n" +
      "спинки кровати: реечные\n" +
      "стенки кровати: реечные\n" +
      "комод: Нет\n" +
      "ящик под кроватью: Да\n" +
      "матрас в комплекте: Да\n" +
      "цвет: белый\n" +
      "страна: Россия",
    link: "https://kaspi.kz/shop/p/detskaya1-sofa-160h80-belyi-103454541/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/hf4/48301309755422/detskaya1-sofa-160h80-belyj-103454541-1.jpg",
    rating: 4,
    category: "Furniture",
  },
  {
    id: 5,
    name: "Обеденный стол SEM BRAND 70292173363, 150x80x90 см, черный, бежевый",
    price: 103245,
    description: "тип: классический\n" +
      "форма: квадратный\n" +
      "материал: ЛДСП, ,металл\n" +
      "длина, см: 150\n" +
      "ширина, см: 80\n" +
      "высота, см: 90\n" +
      "цвет: черный, ,бежевый\n" +
      "страна: Казахстан",
    link: "https://kaspi.kz/shop/p/sem-brand-70292173363-150x80x90-sm-chernyi-bezhevyi-104262133/?c=750000000#!/item",
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h70/49631382896670/-sem-brand-70292173363-150x80x90-sm-104262133-1.jpg",
    rating: 5,
    category: "Furniture",
  },
];

