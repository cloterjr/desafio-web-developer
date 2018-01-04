import { InMemoryDbService } from 'angular-in-memory-web-api';

// This classe has the responsability of give the Mock information, this way its possible
// to make real http request, when the real api become available, the real API can be used
export class InMemoryCatalogoDbService implements InMemoryDbService {
  createDb() {

    let sites =
      [
        {
          id: 1,
          logo: "assets/images/site/logo_ciandt.png"
        }
      ]


    let categories = [
      { id: 1, name: "Kitchen", img: "assets/images/kitchen/kitchen_principal.jpg" },
      { id: 2, name: "Sports", img: "assets/images/sports/sports_principal.jpg" },
      { id: 3, name: "Office", img: "assets/images/office/office_principal.jpg" },
      { id: 4, name: "Apparel",img: "assets/images/apparel/apparel_principal.jpg" }
    ]

    let products = [
      {
        id: 1, name: "Blender High Tech", idCategorie: 1, price: 54.99,
        images: [
          {
            id: 1,
            src: "assets/images/kitchen/kitchen_1_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/kitchen/kitchen_1_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/kitchen/kitchen_1_3.jpg"
          }
        ],
        description: "This is a High Tech Blender, it will prepare juices and vitamins with gorgeous flavor.",
        detail: "<p>Volts : 220V</p><p>Color: Black</p>"
      },
      {
        id: 2, name: "Metal Silver Microwave", idCategorie: 1, price: 129.99,
        images: [
          {
            id: 1,
            src: "assets/images/kitchen/kitchen_2_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/kitchen/kitchen_2_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/kitchen/kitchen_2_3.jpg"
          }
        ],
        description: "This is a Metal Siver Microwave, maintain your food always hot, and make delicious lunchs using this appliance.",
        detail: "<p>Volts : 220V</p><p>Color: Silver</p>"
      },
      {
        id: 3, name: "Red Multifunction Toaster", idCategorie: 1, price: 34.90,
        images: [
          {
            id: 1,
            src: "assets/images/kitchen/kitchen_3_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/kitchen/kitchen_3_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/kitchen/kitchen_3_3.jpg"
          }
        ],
        description: "This is a High Tech Multifunction Toaster, give a new life to that old bread.",
        detail: "<p>Volts : 220V</p><p>Color: Red</p>"
      },
      {
        id: 4, name: "Palmeiras T-Shirt I 17/18", idCategorie: 2, price: 1499.99,
        images: [
          {
            id: 1,
            src: "assets/images/sports/sports_1_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/sports/sports_1_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/sports/sports_1_3.jpg"
          }
        ],
        description: "The greatest Soccer Team of all times, when it surges the imposing green white.",
        detail: "<p>Size : P | M | G</p><p>Color: Green</p>"
      },
      {
        id: 5, name: "São Paulo T-Shirt II 17/18", idCategorie: 2, price: 24.99,
        images: [
          {
            id: 1,
            src: "assets/images/sports/sports_2_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/sports/sports_2_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/sports/sports_2_3.jpg"
          },
          {
            id: 4,
            src: "assets/images/sports/sports_2_4.jpg"
          }
        ],
        description: "The seconde strength in Soccer League.",
        detail: "<p>Size : P | M | G</p><p>Color: Pink</p>"
      },
      {
        id: 6, name: "Corinthians T-Shirt II 17/18", idCategorie: 2, price: 1.99,
        images: [
          {
            id: 1,
            src: "assets/images/sports/sports_3_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/sports/sports_3_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/sports/sports_3_3.jpg"
          }
        ],
        description: "The Gamba's T-Shirt.",
        detail: "<p>Second Division : Yes</p><p>World Championships: 2</p><p>Libertadores: 1</p>"
      },
      {
        id: 7, name: "Football Boots Adidas 17 TF Male", idCategorie: 2, price: 89.99,
        images: [
          {
            id: 1,
            src: "assets/images/sports/sports_4_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/sports/sports_4_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/sports/sports_4_3.jpg"
          }
        ],
        description: "Powerfull acessorie to make a lot of Goals against your friends.",
        detail: "<p>Color : White</p><p>Field: Grass</p>"
      },
      {
        id: 8, name: "Backpack for notebook", idCategorie: 3, price: 59.49,
        images: [
          {
            id: 1,
            src: "assets/images/office/office_1_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/office/office_1_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/office/office_1_3.jpg"
          }
        ],
        description: "Beautiful and useful backpack for notebook.",
        detail: "<p>Color : Black</p>"
      },
      {
        id: 9, name: "Notebook IdeaPad 320", idCategorie: 3, price: 1399.99,
        images: [
          {
            id: 1,
            src: "assets/images/office/office_2_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/office/office_2_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/office/office_2_3.jpg"
          }
        ],
        description: "High Tech Notebook with the latest configuration and Linux as SO.",
        detail: "<p>Color : Black and Silver</p><p>Volts: 220V</p>"
      },
      {
        id: 10, name: "Monochrome Printer", idCategorie: 3, price: 209.99,
        images: [
          {
            id: 1,
            src: "assets/images/office/office_3_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/office/office_3_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/office/office_3_3.jpg"
          }
        ],
        description: "A printer with the most economic plan and cost benefit.",
        detail: "<p>Color : Black</p>"
      },
      {
        id: 11, name: "Black T-Shirt for Woman", idCategorie: 4, price: 39.49,
        images: [
          {
            id: 1,
            src: "assets/images/apparel/apparel_1_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/apparel/apparel_1_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/apparel/apparel_1_3.jpg"
          }
        ],
        description: "Beautiful piece of clothe, your wife will be pretty happy if you get this for her.",
        detail: "<p>Color : Black</p>"
      },
      {
        id: 12, name: "Blue Shorts for Men", idCategorie: 4, price: 18.89,
        images: [
          {
            id: 1,
            src: "assets/images/apparel/apparel_2_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/apparel/apparel_2_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/apparel/apparel_2_3.jpg"
          }
        ],
        description: "A Blue shorts for man.",
        detail: "<p>Color : Blue</p>"
      },
      {
        id: 13, name: "Captain's America T-Shirt", idCategorie: 4, price: 109.99,
        images: [
          {
            id: 1,
            src: "assets/images/apparel/apparel_3_1.jpg"
          },
          {
            id: 2,
            src: "assets/images/apparel/apparel_3_2.jpg"
          },
          {
            id: 3,
            src: "assets/images/apparel/apparel_3_3.jpg"
          }
        ],
        description: "The best T-Shirt from store.",
        detail: "<p>Enterprise : Marvel</p>"
      }
    ]


    return { sites, categories, products };
  }
}