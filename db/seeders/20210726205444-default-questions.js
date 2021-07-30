'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Questions', [
        {title: `router handler returns an array of object but client doesn't get them in json though response with 200 status`, details: `I am implementing a express.js project with Typescript.

I have defined a enum and a interface:

    export enum ProductType {
      FOOD = 'food',
      CLOTH = 'cloth',
      TOOL = 'tool'
    }

    export interface MyProduct {
      type: ProductType;
      info: {
        price: number;
        date: Date;
      };
    }
    One of my router handler needs to return an array of MyProduct to client.I tried this :

    const productArr: MyProduct[] = // call another service returns an array of MyProduct
      app.get('/products', (req, res) => {
        res.status(200).send({ products: productArr });
      });

    I use Postman tested this endpoint, it responses with status 200 but with a default HTML page instead of the array of objects in JSON.

enter image description here

What do I miss? Is it because express.js can't automatically parse the enum and interface to json object??

P.S.I have set up json parser, so it is not about that, other endpoints work fine with json response:

const app = express();
  app.use(express.json());
  ...`, votes: 19, viewCount: 80, userId: 11, createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
