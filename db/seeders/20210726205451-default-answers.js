'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Answers', [
        {answer: "Because it's hard to upgrade", votes: 2, questionId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { answer: "Write async in the function declaration", votes: 4, questionId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
