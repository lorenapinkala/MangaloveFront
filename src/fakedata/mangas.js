const fakeData = [
  {
    id: 1,
    name: "Sailor Moon",
    description:
      "Mouse inalámbrico para juegos LIGHTSPEED diseñado para un desempeño excelente con las innovaciones tecnológicas más recientes. Impresionante duración de baterías de 250 horas. Ahora en una variedad de vibrantes colores.",
    rating: 10,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BjOqZvJkumdg2V8XhRmjVwHaEP%26pid%3DApi&f=1&ipt=89229635a4ac6d4385d7eccdef327a5c984361860d9808c043afa044c06aebfc&ipo=images",
    ],
    genre: "shoujo",
  },

  {
    id: 2,
    name: "Love Live",
    description:
      "Tecnología Force Feedback TRUEFORCE exclusiva con una conexión directa a la física de los juegos, para ofrecer realismo sin precedentes. Construcción premium, con palancas de cambio de aluminio, volante de cuero cosido a mano y sistema de frenos sensible a la presión.",
    rating: 9,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EE-YM__dewhYAGJYadURIAHaFO%26pid%3DApi&f=1&ipt=06b592acfad9e3bb87384eb9b32a712a7c4c0545b11893457236fc60760967bb&ipo=images",
    ],
    genre: "music",
  },

  {
    id: 3,
    name: "selector infected WIXOSS",
    description:
      "De The Aurora Collection, el G715 es un teclado inalámbrico LIGHTSPEED y Bluetooth® para juegos diseñado para ofrecer confort con el mullido reposamanos incluido. Totalmente equipado con iluminación RGB y los interruptores mecánicos GX que tú elijas. Disponible en Blanco White Mist. Accesorios de combinación de colores a la venta por separado.",
    rating: 10,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sJClzfJvHyfoKH5VB1kLGQHaHR%26pid%3DApi&f=1&ipt=899e4c86d9667fc86d033ab008c925e30ca4613f5e136c5a12e7ebc4a61114f0&ipo=images",
    ],
    genre: "psicological",
  },

  {
    id: 4,
    name: "Shingeki no Kyojin",
    description:
      "Una edición exclusiva de nuestros audífonos con micrófono PRO X para juegos con el estilo emblemático oficial de League of Legends. Audio nitidísimo y comunicaciones profesionales para el mejor desempeño en League of Legends.",
    rating: 9,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dOb8UuDurzkcGHZmY9qaxgHaEu%26pid%3DApi&f=1&ipt=cc5568742e1b82c43ed237013195d1dfa63b74f6114cf7203a5090fc1afd4452&ipo=images",
    ],
    genre: "shounen",
  },
  {
    id: 5,
    name: "Hibike! Euphonium",
    description: "iphoneeeeeeeee",
    rating: 7,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.y3DfRIth7glrNx5GxlzpbQHaHZ%26pid%3DApi&f=1&ipt=8ca910f5c73bef4046726849abf3564bb6cc0fd468415c1ff6d84e8ccab6a50c&ipo=images",
    ],
    genre: "music",
  },
  {
    id: 6,
    name: "Nana",
    description:
      "Vaya más allá de los componentes ópticos integrados en los portátiles con la cámara Web C505 que ofrece vídeo colorido, nítido y fluido con formato panorámico HD 720p, ángulo de visión diagonal de 60°, foco fijo y corrección de iluminación automática. • Y además ofrecerá un sonido estupendo gracias a un micrófono omnidireccional que garantiza una conversación clara y natural hasta a 3 metros de distancia.",
    rating: 7,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.oRz-kEGLdLDPu2X4xxXQkQHaHa%26pid%3DApi&f=1&ipt=15645fcbbe22d776cb9c2390a08a9110af868b60dc5bd49c6231414e91bf5f6a&ipo=images",
    ],
    genre: "josei",
  },
  {
    id: 7,
    name: "Dragon Ball",
    description:
      "Vaya más allá de los componentes ópticos integrados en los portátiles con la cámara Web C505 que ofrece vídeo colorido, nítido y fluido con formato panorámico HD 720p, ángulo de visión diagonal de 60°, foco fijo y corrección de iluminación automática. • Y además ofrecerá un sonido estupendo gracias a un micrófono omnidireccional que garantiza una conversación clara y natural hasta a 3 metros de distancia.",
    rating: 8,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5meWmoL73GYg_i0i-zCX6QHaE8%26pid%3DApi&f=1&ipt=4f57f3258899a6cd4e4b7d65c59c6a9c3130cf8f017c690e0db89aeac0074eae&ipo=images",
    ],
    genre: "shonen",
  },
  {
    id: 8,
    name: "Jujutsu Kaisen",
    description:
      "Vaya más allá de los componentes ópticos integrados en los portátiles con la cámara Web C505 que ofrece vídeo colorido, nítido y fluido con formato panorámico HD 720p, ángulo de visión diagonal de 60°, foco fijo y corrección de iluminación automática. • Y además ofrecerá un sonido estupendo gracias a un micrófono omnidireccional que garantiza una conversación clara y natural hasta a 3 metros de distancia.",
    rating: 7,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Fhz4q6BGTG14Nhi479BcigHaEK%26pid%3DApi&f=1&ipt=ccd9204a2a8621293331d051b98d72a04e6a983c8f7e3c804629e55d8aa4d956&ipo=images",
    ],
    genre: "seinen",
  },
  {
    id: 9,
    name: "Kuzu no Honkai",
    description:
      "Vaya más allá de los componentes ópticos integrados en los portátiles con la cámara Web C505 que ofrece vídeo colorido, nítido y fluido con formato panorámico HD 720p, ángulo de visión diagonal de 60°, foco fijo y corrección de iluminación automática. • Y además ofrecerá un sonido estupendo gracias a un micrófono omnidireccional que garantiza una conversación clara y natural hasta a 3 metros de distancia.",
    rating: 9,
    image: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7l0IH9yv5Oi66p45JJ10KwHaEK%26pid%3DApi&f=1&ipt=22be1fd21ec759ac58b6730727c606faa77ee88d9a3ab08d5b012b7b6e5063d5&ipo=images",
    ],
    genre: "slice of life",
  },
];

export { fakeData };
