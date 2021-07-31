'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('QuestionComments', [
        { comment: `I think you should use json instead of send`, votes: 75, questionId: 1, userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { comment: `The code you posted here should work fine, at least with the latest expressjs. The fact that you're getting the default page instead might suggest issues with this specific route It could also be some unintentional interaction by a middleware. Do you have any?`, votes: 29, questionId: 1, userId: 5, createdAt: new Date(), updatedAt: new Date() },
        { comment: `AhmetŞimşek , the send is not the cause, because my other endpoints also use send without such problem.`, votes: 32, questionId: 1, userId: 3, createdAt: new Date(), updatedAt: new Date() },
        { comment: `The issue is not related to Typescript for sure. For debugging purposes, just comment out everything in the handler, add a simple console.log() and check if the endpoint is being called or not. Seems to me there's something wrong with the route (middleware or route overlap)`, votes: 42, questionId: 1, userId: 6, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Are you sure productArr is an array? because if some service returns this value - it might be unresolved promise`, votes: 40, questionId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date() },
        { comment: `The golden rule of CoffeeScript is: "It's just JavaScript".`, votes: 50, questionId: 2, userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { comment: `This answer maybe useful: stackoverflow.com/a/58064366/7059557`, votes: 28, questionId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Why don't you just <script src="messages.js"></script> and call them after that?`, votes: 22, questionId: 4, userId: 9, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Perhaps this can be a solution, but there is another thing that concerns me. I also have a file called "representation.js" for abstracting the representation that is common to the client and the server. In that file I also have require statements and on the server side it should be ok because I am running node. However, on the client side this will be an issue. What do you think?`, votes: 0, questionId: 4, userId: 39, createdAt: new Date(), updatedAt: new Date() },
        { comment: `For newbies like me (who couldn't even spell "npm" a week ago! :-), it may be helpful to understand that browserify's --require option causes require() to be defined on the client side. See: lincolnloop.com/blog/speedy-browserifying-multiple-bundles`, votes: 51, questionId: 4, userId: 27, createdAt: new Date(), updatedAt: new Date() },
        { comment: ` If there are 100 such files... we can't keep on loading the, in HTML right......... `, votes: 23, questionId: 4, userId: 3, createdAt: new Date(), updatedAt: new Date() },
        { comment: `whitequark's answer (the one with the most votes) should be marked as the correct answer. Do you mind updating it for others with the same question as you that stumble upon your question?`, votes: 54, questionId: 5, userId: 23, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Use the query object in express request - here are examples using express request query`, votes: 16, questionId: 5, userId: 28, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Dev01 he is not active since 2014 lol`, votes: 68, questionId: 5, userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { comment: `If anyone looking for Nodejs API boilerplate with Expressjs and MongoDB. Try this: github.com/maitraysuthar/rest-api-nodejs-mongodb `, votes: 61, questionId: 5, userId: 40, createdAt: new Date(), updatedAt: new Date() },
        { comment: `GottZ maybe this can help (spoke to someone working within node js) gist.github.com/samsonradu/1b0c6feb438f5a53e30e. I ll deploy the socket.error handler today and let you know.`, votes: -4, questionId: 7, userId: 40, createdAt: new Date(), updatedAt: new Date() },
        { comment: `the socket.error handles doesn t help, but process.on('uncaughtException') catches the error. Here is the console.log of the error: { [Error: read ECONNRESET] code: 'ECONNRESET', errno: 'ECONNRESET', syscall: 'read' }`, votes: 68, questionId: 7, userId: 7, createdAt: new Date(), updatedAt: new Date() },
        { comment: `ECONNRESET could be from network problem. As you know it is impossible to catch all the exceptions when testing. Some will show up on your production server. You will have to make your server robust. You can handle the session deletion by using Redis as storage. It makes your sessions persist even after your node server goes down.`, votes: 97, questionId: 7, userId: 9, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Why is that related with session deletion? They are handled by Redis anyway.`, votes: 97, questionId: 7, userId: 33, createdAt: new Date(), updatedAt: new Date() },
        { comment: `You have at-least one TCP socket listening that does not have the handler set. So now it's time to check where that one is :D`, votes: 13, questionId: 7, userId: 37, createdAt: new Date(), updatedAt: new Date() },
        { comment: `This seams to me as you are getting a socket timeout from one of your connected clients. Try to add an 'error' listener to all your connections, not the process itself.`, votes: 44, questionId: 7, userId: 20, createdAt: new Date(), updatedAt: new Date() },
        { comment: `net.js does a lot of debuglog-ing when it's going to emit an error, you might get some mileage out of setting env.NODE_DEBUG="net" and then matching the output up against source locations.`, votes: 85, questionId: 7, userId: 27, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Moss define connected clients. The node server only listens to websocket connections and they have an error handler added. `, votes: 38, questionId: 7, userId: 9, createdAt: new Date(), updatedAt: new Date() },
        { comment: `You have at-least one TCP socket listening that does not have the handler set. So now it's time to check where that one is :D`, votes: 9, questionId: 7, userId: 9, createdAt: new Date(), updatedAt: new Date() },
        { comment: `just as note: in my case this happens with a childprocesses stdio and not a tcp socket or anything else. just raw stdio. will try that uncaughtException event now. thanks. `, votes: 55, questionId: 7, userId: 6, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Can you show the relevant code from your server where the error occurs. Or at least some minimal code to reproduce the error. It is difficult without looking at the code. `, votes: 79, questionId: 7, userId: 8, createdAt: new Date(), updatedAt: new Date() },
        { comment: `user568109 here are some relevant parts (if you re fine with Coffeescript) gist.github.com/samsonradu/5585b0f4a101fee3cab4`, votes: 81, questionId: 7, userId: 18, createdAt: new Date(), updatedAt: new Date() },
        { comment: `github.com/joyent/node/releases/tag/v0.10.12 seeing a fix to socket writes. will upgrade`, votes: 81, questionId: 7, userId: 4, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Simply adding process.on('uncaughtException', function (err) { ... }) sorted this for me. It doesn't get to the root of the problem but the error is rare enough for me that this quick and dirty solution is fine for my use case. – user993683`, votes: 13, questionId: 7, userId: 28, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Related: if anyone sees this happening on some cloud/PaaS offerings, it could be because the instances are throttling down (during quiet times).`, votes: 79, questionId: 7, userId: 19, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuestionComments', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
