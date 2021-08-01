'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('TagQuestions', [
      { questionId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { questionId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { questionId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TagQuestions', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};