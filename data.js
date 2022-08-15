const products = [
  {
    name: 'Bascula Xiaomi Mi Body Composition Scale 2',
    url: 'https://www.mi.com/mx/product/mi-body-composition-scale-2/',
    imageUrl: 'img/xiaomi-scale.png',
    originalPrice: 70000,
    price: 50000,
    details: [
      'ENTREGA INMEDIATA',
      'Bascula digital Xiaomi',
      'Se integra con application de Smartphone. Peso, agua, porcentaje grasa, masa muscular/osea',
      'Como nueva!',
    ],
    available: true
  },
  {
    name: 'Horno Microondas Samsung AGE83X',
    url: 'https://www.samsung.com/co/microwave-ovens/grill/microwave-oven-grill-age83x/',
    imageUrl: 'img/microondas.jpg',
    originalPrice: 459900,
    price: 200000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Como nuevo!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Mueble Comoda',
    url: 'img/comoda2.jpg',
    imageUrl: 'img/comoda.jpg',
    price: 80000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Comoda cafe con 3 cajones',
      '80 cm ancho x 75 cm alto x 38 cm profundo',
      'Buen estado!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Smart TV Samsung UN48JU6100 4K 48 pulgadas',
    url: 'https://www.linio.com.co/p/televisor-samsung-48-4k-un48ju6100-led-negro-tpq4wk',
    imageUrl: 'img/tv.jpg',
    originalPrice: 1899900,
    price: 1200000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Netflix/YouTube/PrimeVideo/Spotify',
      '4K, 3 puertos HDMI, Internet Wifi, TDT, Incluye control remoto',
      'Buen estado!',
    ],
    // sold: false
    reserved: true,
  },
  {
    name: 'Rascador gatos 3 niveles',
    imageUrl: 'img/rascador.jpg',
    price: 90000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Rascador amarillo/negro',
      'Altura 165 cm',
      'Poco uso',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Fuente flor de agua para gatos Catit (mas repuesto) original',
    url: 'https://usa.catit.com/shop/flower-fountain/',
    imageUrl: 'img/fuente.jpg',
    originalPrice: 119000,
    price: 45000,
    details: [
      'ENTREGA 10 de Septiembre',
      'Menos de 2 años de uso, 3 litros, 3 tipos de agua, triple filtro (pelos, calcio, olores)',
      'Raspada pero 100% funcional',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Nevera Whirlpool WRW25AKTWW 257 Litros',
    url: 'https://www.whirlpool.com.co/nevera-top-mount-9-pies-cubicos-wrw25bktww/p',
    imageUrl: 'img/nevera.jpg',
    originalPrice: 1549000,
    price: 750000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Congelador no frost, modalidad ahorradora',
      'Algunos arañazos menores, 100 funcional',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Lavadora Secadora Samsung WD11M44733S 11.5 Kg',
    url: 'https://www.youtube.com/watch?v=KWxgPi7W1TI',
    imageUrl: 'img/lavadora.jpg',
    originalPrice: 2050000,
    price: 1700000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Lavadora secadora (electrica)',
      '60 cm ancho x 85 cm alto x 65 cm profundo',
      'Como nueva! Menos de 1 año de uso',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Tapete Gris',
    imageUrl: 'img/tapete.jpg',
    originalPrice: 300000,
    price: 150000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Tapete gris con franjas hecho en Turquia',
      'Como nuevo!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Sofacama verde tela antiarañazos!',
    url: 'img/sofa-collage.jpg',
    imageUrl: 'img/sofa.jpg',
    originalPrice: 1400000,
    price: 1000000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Realmente funciona! Tenemos 2 gatos y esta sin 1 rasguño!',
      '3 posiciones, bastante comodo. Producto colombiano',
      'Sofa: 182 cm ancho x 95 cm alto x 94 cm profundo',
      'Cama: 182 cm ancho x 60 cm alto x 65 cm profundo',
      'Como nuevo!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Licuadora/Extractor Nutribullet Pro Original 900W',
    url: 'https://nutribulletcolombia.com/product/nutribullet-900-watts/',
    imageUrl: 'img/nutribullet.jpg',
    originalPrice: 320000,
    price: 250000,
    details: [
      'ENTREGA INMEDIATA',
      'Con todos los accesorios, en caja original',
      'Como nuevo!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Juego de Alcoba, cama doble y mesas de noche',
    url: 'img/cama-collage.jpg',
    imageUrl: 'img/cama.jpg',
    price: 1500000,
    details: [
      'ENTREGA 08 de Septiembre',
      '1 cama doble, 2 mesas de noche', '200 cm largo x 145 cm largo',
      'Se entrega con 1 plumon, 2 Duvet',
      'Como nuevo!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Bicicleta Todoterreno GW negro con gris',
    url: 'img/bicicleta-gris-collage.jpg',
    imageUrl: 'img/bicicleta-gris.jpg',
    originalPrice: 900000,
    price: 700000,
    details: [
      'ENTREGA INMEDIATA',
      'Bicicleta cambios Shimano, frenos de disco, amortiguador frontal',
      'Incluye casco!',
      'RIN 29',
      'Como nueva!',
    ],
    // sold: true
    available: true
  },
  {
    name: 'Bicicleta Todoterreno GW negro con verde',
    url: 'img/bicicleta-verde-collage.jpg',
    imageUrl: 'img/bicicleta-verde.jpg',
    originalPrice: 900000,
    price: 700000,
    details: [
      'ENTREGA INMEDIATA',
      'Bicicleta cambios Shimano, frenos de disco, amortiguador frontal',
      'Incluye casco!',
      'RIN 29',
      'Como nueva!',
    ],
    // sold: true
    available: true
  },
  {
    name: 'Parlante Google Home',
    url: 'https://www.xataka.com/basics/todo-que-puedes-hacer-google-home-como-configurarlo-reyes-te-han-traido-uno',
    imageUrl: 'img/google-home.jpg',
    originalPrice: 350000,
    price: 150000,
    details: [
      'ENTREGA INMEDIATA',
      'Compatible con Google Assistant, comandos en Español e Ingles',
      'Como nuevo!',
    ],
    // sold: false,
  },
  {
    name: 'Parlante Google Home Mini Gris',
    url: 'https://www.xataka.com/accesorios/google-home-mini-mas-pequeno-pero-con-las-mismas-prestaciones-que-su-hermano-mayor',
    imageUrl: 'img/google-home-mini.jpg',
    originalPrice: 214000,
    price: 70000,
    details: [
      'ENTREGA INMEDIATA',
      'Compatible con Google Assistant, comandos en Español e Ingles',
      'Como nuevo!',
    ],
    available: true
  },
  {
    name: 'Aspiradora Robot iRobot Roomba 675',
    url: 'https://www.irobotcolombia.com/producto/roomba-675/',
    imageUrl: 'img/roomba.jpg',
    originalPrice: 1270000,
    price: 700000,
    details: [
      'ENTREGA INMEDIATA',
      'Compatible con Google Assistant, programacion desde App. 415 limpiezas realizadas',
      'Buen estado!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Carpa 2 persona Quechua Arpenaz 2',
    url: 'img/carpa-collage.jpg',
    imageUrl: 'img/carpa.jpg',
    originalPrice: 250000,
    price: 200000,
    details: [
      'ENTREGA INMEDIATA',
      'Impermeable, blanca, 1.3 KG, Alto: 105cm - Largo: 200cm - Ancho: 120cm',
      'Como nueva!',
    ],
    // sold: false
    available: true
  },
  ,
  {
    name: 'Maleta Camping roja',
    url: 'img/maleta-camping-collage.jpg',
    imageUrl: 'img/maleta-camping.jpg',
    originalPrice: 70000,
    price: 30000,
    details: [
      'ENTREGA INMEDIATA',
      'Roja, capacidad 70 Litros (No incluye gatos)',
      'Como nueva!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Juego 2 de Sillas Bar negras',
    url: 'img/sillas-collage.jpg',
    imageUrl: 'img/sillas.jpg',
    originalPrice: 300000,
    price: 180000,
    details: [
      'ENTREGA 08 de Septiembre',
      'Sillas graduables en altura',
      'Como nuevas!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Juego de Pesas 20Kg',
    url: 'img/juego-pesas-collage.jpg',
    imageUrl: 'img/juego-pesas.png',
    originalPrice: 300000,
    price: 280000,
    details: [
      'ENTREGA INMEDIATA',
      '2 barras 2Kg, 4 discos 2Kg, 8 discos 1Kg, 4 seguros',
      'Como nuevo!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Parlante Inalambrico Origaudio Boxanne',
    url: 'https://origaudiopromo.com/product/boxanne-wireless-speaker-white/',
    imageUrl: 'img/parlante.jpg',
    price: 20000,
    details: [
      'ENTREGA INMEDIATA',
      'Viene con cable microusb y 3.5mm',
      'Nuevo en caja!',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Bateria portatil 10.000 mA para celular',
    imageUrl: 'img/bateria.jpg',
    price: 30000,
    details: [
      'ENTREGA INMEDIATA',
      'Salida USB: 5V/2.0A , Wireless 5V/1.0A. Viene con cable micro USB' ,
      'Nuevo en caja!',
    ],
    // sold: false
    available: true
  },
  {
    name: '5 Vasos Cristar Schubert Rocks',
    url: 'https://tienda.cristar.com.co/producto/vaso-schubert-rocks/',
    imageUrl: 'img/vasos.jpg',
    originalPrice: 20000,
    price: 15000,
    details: [
      'ENTREGA INMEDIATA',
      '5 vasos de cristal para bebidas/cocteles',
      'Perfecto estado',
    ],
    // sold: false
    available: true
  },
  {
    name: 'Sacacorchos',
    url: 'https://www.homesentry.co/p/sacacorchos-ilko-metalico/',
    imageUrl: 'img/sacacorchos.jpg',
    originalPrice: 40000,
    price: 20000,
    details: [
      'ENTREGA INMEDIATA',
      'Sacacorchos/destapador',
      'Como nuevo',
    ],
    // sold: false
    available: true
  },
]
