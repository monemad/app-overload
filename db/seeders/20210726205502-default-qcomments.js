'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('QuestionComments', [
        { comment: `I think you should use json instead of send`, votes: 76, questionId: 1, userId: 40, createdAt: new Date(), updatedAt: new Date() },
        { comment: `The code you posted here should work fine, at least with the latest expressjs. The fact that you're getting the default page instead might suggest issues with this specific route It could also be some unintentional interaction by a middleware. Do you have any?`, votes: -2, questionId: 1, userId: 29, createdAt: new Date(), updatedAt: new Date() },
        { comment: `AhmetŞimşek , the send is not the cause, because my other endpoints also use send without such problem.`, votes: 83, questionId: 1, userId: 18, createdAt: new Date(), updatedAt: new Date() },
        { comment: `The issue is not related to Typescript for sure. For debugging purposes, just comment out everything in the handler, add a simple console.log() and check if the endpoint is being called or not. Seems to me there's something wrong with the route (middleware or route overlap)`, votes: 67, questionId: 1, userId: 35, createdAt: new Date(), updatedAt: new Date() },
        { comment: `Are you sure productArr is an array? because if some service returns this value - it might be unresolved promise`, votes: 62, questionId: 1, userId: 5, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuestionComments', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
