'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Questions', [
        {title: "Why version 1?", details: "I'd rather use version 2", votes: 10, viewCount: 95, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        { title: "How do i write an async function?", details: "I have only written synchronous code before" , votes: 1, viewCount: 9, userId: 2, createdAt: new Date(), updatedAt: new Date() },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
