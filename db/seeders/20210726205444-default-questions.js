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
  ...`, votes: 68, viewCount: 166, userId: 32, createdAt: new Date(), updatedAt: new Date()},
{title: `Configure the sw- precache WebPack plugin to load a server rendered page as the navigateFallback route`, details: `consider the following scenario:

My express server dynamically generates HTML for the "" / "" route of my single page application.

I would like to re - serve this same generated HTML as the service worker navigateFallback when the user is offline.

  I'm using https://www.npmjs.com/package/sw-precache-webpack-plugin in my webpack configuration.

If I generate an index.html via html - webpack - plugin, say, and set index.html as my navigateFallback file, that generated file gets served correctly by the service worker.

  However, I can see no way to cause the on - the - fly rendered index html(what the live server returns for the "" / "" path) to be cached and used as the offline html.`, votes: -4, viewCount: 419, userId: 22, createdAt: new Date(), updatedAt: new Date()},
{title: `Why doesn't adding CORS headers to an OPTIONS route allow browsers to access my API?`, details: `I am trying to support CORS in my Node.js application that uses the Express.js web framework. I have read a Google group discussion about how to handle this, and read a few articles about how CORS works. It doesn't seem to work.It seems like my browser(Chrome) is not sending the initial OPTIONS request.When I just updated the block for the resource I need to submit a cross - origin GET request.It works(in Chrome).This also works in Safari.

I have read that...

In a browser implementing CORS, each cross - origin GET or POST request is preceded by an OPTIONS request that checks whether the GET or POST is OK.

So my main question is, how come this doesn't seem to happen in my case? Why isn't my app.options block called ? Why do I need to set the headers in my main app.get block ? `, votes: 64, viewCount: 65, userId: 31, createdAt: new Date(), updatedAt: new Date()},
{title: `Client on Node.js: Uncaught ReferenceError: require is not defined`, details: `I am writing an application with the Node.js, Express.js, and Jade combination.

I have file client.js, which is loaded on the client.In that file I have code that calls functions from other JavaScript files.in order to load the contents of messages.js(just like I do on the server side) and later on call functions from that file.However, require is not defined on the client side, and it throws an error of the form Uncaught ReferenceError: require is not defined.

These other JavaScript files are also loaded at runtime at the client, because I place the links at the header of the webpage.So the client knows all the functions that are exported from these other files.

How do I call these functions from these other JavaScript files(such as messages.js) in the main client.js file that opens the socket to the server ? `, votes: 93, viewCount: 158, userId: 13, createdAt: new Date(), updatedAt: new Date()},
{title: `How to get GET(query string) variables in Express.js on Node.js ? `, details: `Can we get the variables in the query string in Node.js just like we get them in $_GET in PHP ?

  I know that in Node.js we can get the URL in the request.Is there a method to get the query string parameters ? `, votes: 29, viewCount: 932, userId: 14, createdAt: new Date(), updatedAt: new Date()},
{title: `Writing files in Node.js`, details: `I've been trying to find a way to write to a file when using Node.js, but with no success. How can I do that?`, votes: 67, viewCount: 879, userId: 21, createdAt: new Date(), updatedAt: new Date()},
{title: `How do I debug error ECONNRESET in Node.js?`, details: `I'm running an Express.js application using Socket.io for a chat webapp and I get the following error randomly around 5 times during 24h. The node process is wrapped in forever and it restarts itself immediately.

The problem is that restarting Express kicks my users out of their rooms and nobody wants that.

The web server is proxied by HAProxy.There are no socket stability issues, just using websockets and flashsockets transports.I cannot reproduce this on purpose.`, votes: 9, viewCount: 184, userId: 5, createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
