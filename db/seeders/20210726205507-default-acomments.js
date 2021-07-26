'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('AnswerComments', [
        {comment: "Good job with that answer!", votes: 3, answerId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { comment: "That's the same answer that I got too", votes: 8, answerId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date() }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AnswerComments', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
