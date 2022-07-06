'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Astrazeneca',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moderna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pfizer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sinovac',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
