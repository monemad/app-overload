'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Answers', [
        { answer: `As mentioned in the comments, your code should work. I'll list some steps which can be used to try to find the problem.

Show debug info
Set DEBUG =* in your environment.DEBUG is an environment variable which controls logging for many Node modules.You'll be able to see the flow of a request through Express. If there is too much info, you can limit the output like so: DEBUG=*,-babel,-babel:*,-nodemon,-nodemon:*,-router:layer,-follow-redirects,-send (use a comma-separated list and put a - in front of any module you'd like to exclude)

    This should help you trace the life of a request through the various routers and routes.You're now in a position to...

    Check for another route that is short - circuiting the request
    The fact that you're seeing an HTML page when the Express route is sending an object might indicate that your request is matching a different route. Look for catch-all routes such as non-middleware app.use() or wildcard routes which appear ABOVE your route.

    Other suggestions
    Don't explicitly set the status
    Adding.status(200) is more code and unnecessary.

    Use res.json()
    Use.json() instead of.send().If will always add the Content - Type: application / json header, whereas.send() will not when it cannot determine the content type(e.g. .send(null) or.send('hello') will not set the Content Type header to application / json, which may confuse clients).`, votes: 86, questionId: 1, userId: 40, createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
