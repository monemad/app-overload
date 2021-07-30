'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('TagUsers', [
        {userId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
        { userId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
        { userId: 2, tagId: 1 , createdAt: new Date(), updatedAt: new Date()},
        { userId: 2, tagId: 1 , createdAt: new Date(), updatedAt: new Date()},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TagUsers', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
