'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('AnswerComments', [
        { comment: `Are you sure productArr is an array? because if some service returns this value - it might be unresolved promise`, votes: 62, answerId: 1, userId: 5, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AnswerComments', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
