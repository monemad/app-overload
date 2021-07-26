'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tags', [
        {name: 'Javascript', description: 'A nice scripting language', numQuestions: 500, numFollowers: 300, createdAt: new Date(), updatedAt: new Date()},
        { name: 'C/C++', description: 'Awful languages', numQuestions: 5000, numFollowers: 3000 , createdAt: new Date(), updatedAt: new Date()}
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
