const products = [
  {
    name: 'Monitor Samsung Curvo de 34" C34F791WQL',
    url: 'https://www.samsung.com/br/monitors/ultra-wide-c34f791/',
    imageUrl: 'https://images.samsung.com/is/image/samsung/br-ultra-wide-c34f791-lc34f791wqlxzd-dynamicwhite-72942896?$PD_GALLERY_L_JPG$',
    originalPrice: 4499.1,
    price: 2499,
    details: [
      '9 meses de garantia Samsung',
      '3 meses de uso',
      'todos os manuais e acessórios',
    ],
    sold: true
  },
  {
    name: 'Cadeira Herman Miller Sayl Preta',
    url: 'https://store.hermanmiller.com.br/cadeira-sayl-preta-as2-0002-preto/p',
    imageUrl: 'https://hermanmiller.vteximg.com.br/arquivos/ids/158889/cadeira_sayl_preta_AS2VA22HA-0002_1.jpg?v=636905245002930000',
    originalPrice: 4410,
    price: 2499,
    details: [
      '7 anos de garantia Herman Miller',
      'sim, 7 ANOS',
    ],
    sold: true
  },
  {
    name: 'iPhone XS Space Grey 64GB',
    url: 'https://www.apple.com/br/shop/buy-iphone/iphone-xs/tela-de-5,8-polegadas-64gb-cinza-espacial',
    imageUrl: 'https://i.expansys.net/img/p/313672/apple-iphone-xs-a1920.jpg',
    originalPrice: 5455.99,
    price: 3999,
    details: [
      '7 meses de garantia Apple',
    ],
    sold: true
  },
  {
    name: 'Mesa de Jantar com 4 Cadeiras',
    url: '',
    imageUrl: 'img/mesa-jantar.jpg',
    originalPrice: 2200,
    price: 2200,
    details: [
      'Tampo de Vidro',
      'Tamanho: 1,40 x 1,40',
    ]
  },
  {
    name: 'Sofá 4 Lugares Chase Retrátil',
    url: '',
    imageUrl: 'img/sofa.jpg',
    originalPrice: 2200,
    price: 2200,
    details: [
      'Tamanho: 2,80 x 1,15',
      'Chase aberto: 1,80',
    ]
  },
  {
    name: 'Refrigerador Samsung RT5000K Twin Cooling Plus, 384 L',
    url: 'https://www.samsung.com/br/support/model/RT38K5430SL/AZ/',
    imageUrl: 'https://images.samsung.com/is/image/samsung/br-top-mount-freezer-rt38k5430sl-az-rt38k5430sl-az-001-front-silver?$L2-Thumbnail$',
    originalPrice: 1839.20,
    price: 1199,
    details: [
      'menos de 2 anos de uso',
      'baixo consumo de energia',
    ],
    sold: true
  },
  {
    name: 'Ar-Condicionado Samsung Split Digital Inverter Frio (220 V)',
    url: 'https://www.samsung.com/br/air-conditioners/ar-condicionado-split-digital-inverter-frio-2017/AR12KVSPBGMNAZ/',
    imageUrl: 'https://images.samsung.com/is/image/samsung/br-ar-condicionado-split-digital-inverter-frio-2017-ar12kvspbgmnaz-frontpmgray-69147213?$PD_GALLERY_L_JPG$',
    originalPrice: 1568.94,
    price: 899,
    details: [
      'menos de 2 anos de uso',
      '12,000 BTU/h',
    ],
    sold: true
  },
  {
    name: 'TV Samsung KU6450 49” UHD 4K',
    url: 'https://www.samsung.com/br/tvs/uhd-ku6450/',
    imageUrl: 'https://images.samsung.com/is/image/samsung/br-uhd-ku6450-un49ku6450gxzd-frontblack-81752123?$PD_GALLERY_L_JPG$',
    originalPrice: 2499,
    price: 1499,
    details: [
      '4K de verdade com HDR Premium',
      'controle remoto único',
    ],
    sold: true
  },
  {
    name: 'Fogão 5 Bocas Electrolux Duplo Forno Grill 76DTX',
    url: 'https://www.buscape.com.br/electrolux-celebrate-76dtx-piso-5-bocas-prata',
    imageUrl: 'http://www.gazin.com.br/comprar/produtos/fotos900/14910.jpg',
    originalPrice: 2499,
    price: 999,
    details: [
      '6 anos de uso',
    ]
  },
  {
    name: 'Volvo C30 T5 2.5 Automático 2009',
    url: 'https://www.volvocars.com/br/sobre/nossa-empresa/heranca-volvo/modelos-historicos/69-c30',
    imageUrl: 'img/volvo-c30.jpg',
    originalPrice: 39000,
    price: 39000,
    details: [
      '2 anos de garantia contra corrosão da carroceria',
      '72.000 km',
      '230 cavalos',
    ]
  },
  {
    name: 'Lava & Seca Samsung Seine, 10.1 kg (110 V)',
    url: 'https://www.samsung.com/br/support/model/WD106UHSAWQ/AZ/',
    imageUrl: 'https://www.pontofrio-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=8192408',
    originalPrice: 2564,
    price: 1199,
    details: [
      'menos de 2 anos de uso',
      'WD106UHSAWQ',
    ],
    sold: true
  },
  {
    name: 'iPhone 8 Gold 64GB',
    url: 'https://www.apple.com/br/shop/buy-iphone/iphone-8/tela-de-4,7-polegadas-64gb-dourado',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637',
    originalPrice: 2991.12,
    price: 2499,
    details: [
      'sem 1 arranhão',
      'sempre usado com película e capa',
      'funcionando perfeitamente :)'
    ]
  },
  {
    name: 'Espelho Adnet',
    url: '',
    imageUrl: 'https://cdn.leroymerlin.com.br/products/espelho_decorativo_adnet_branco_com_alca_caramelo_60x40cm_89664071_0001_600x600.jpg',
    originalPrice: 350,
    price: 250,
    details: [
      'Menos de 1 ano de uso',
      'A: 60cm, L: 40cm, P: 4cm',
      'Diâmetro: 40cm',
    ],
  },
  {
    name: 'Cadeira Charles Eames Eiffel Base Madeira',
    url: 'https://www.americanas.com.br/produto/32302520/cadeira-charles-eames-eiffel-base-madeira-branco?WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&epar=bp_pl_00_go_mv_todas_geral_gmv&gclid=EAIaIQobChMIpKrFgab94QIViA6RCh0TTgYlEAQYBCABEgItv_D_BwE&i=5ab9c181eec3dfb1f891be8a&o=5a944839ebb19ac62c2ccc66&opn=YSMESP&sellerId=29709769000165',
    imageUrl: 'https://images-americanas.b2w.io/produtos/01/00/oferta/32302/5/32302522_3GG.jpg',
    originalPrice: 158,
    price: 100,
    details: [
      'Menos de 1 ano de uso',
      'Cor: branca',
    ]
  },
  {
    name: 'Estante Hipster Grandona Mel',
    url: 'https://www.tadah.com.br/moveis/estante-hipster-grandona-mel.html',
    imageUrl: 'https://www.tadah.com.br/media/catalog/product/cache/1/image/450x450/9df78eab33525d08d6e5fb8d27136e95/e/s/estante-hipster-mel-lado-grandona.jpg',
    originalPrice: 167.9,
    price: 100,
    details: [
      'Tamanho: 170 x 65 x 30 cm',
      'Madeira Pinus de Reflorestamento',
    ],
    sold: true
  },
  {
    name: 'Base Baú Ortobom Queen',
    url: 'https://www.ortobom.com.br/cama/base-bau-ortobom-nobuck-cream/queen158',
    imageUrl: 'https://www.ortobom.com.br/Content/Photo?id=2307&w=770&h=770',
    originalPrice: 1999,
    price: 1200,
    details: [
      'Tamanho: Queen',
      'Forração em Couro Nobuck creme',
      'Sistema de fechamento e abertura com pistões pneumáticos (amortecedores) que facilitam o manuseio',
    ]
  },
]
