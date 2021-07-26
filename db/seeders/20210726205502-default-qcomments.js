'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('QuestionComments', [
        {comment: "Nice question, i was wondering about that too", votes: 10, questionId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        { comment: "We learned about that in app academy!", votes: 8, questionId: 2, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuestionComments', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
