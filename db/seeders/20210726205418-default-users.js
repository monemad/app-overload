'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
        {firstName: "John", lastName: "Doe", username: "johndoey123", hashedPassword: "af98d806dgfkljxf", reputation: 100, avatarURL: '../public/images/default.png', email: "jdoe@gmail.com", createdAt: new Date(), updatedAt: new Date()},
        { firstName: "Alice", lastName: "Smith", username: "asmith456", hashedPassword: "af98dklsjoiljxf", reputation: 99, avatarURL: '../public/images/default.png', email: "asmith@gmail.com", createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
