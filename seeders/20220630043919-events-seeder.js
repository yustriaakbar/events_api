'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: 'Astrazeneca Dosis I (Pertama)',
        category_id: '1',
        date: '2022-05-11 14:25:04',
        hours: '08:00',
        min_age: '18',
        quota: '90',
        location: 'Halaman Dinas Kesehatan DIY Jl. Gondosuli No. 6 Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Astrazeneca Dosis II (Kedua)',
        category_id: '1',
        date: '2022-05-17 14:25:04',
        hours: '08:00',
        min_age: '18',
        quota: '90',
        location: 'Halaman Dinas Kesehatan DIY Jl. Gondosuli No. 6 Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moderna Dosis I (Pertama)',
        category_id: '2',
        date: '2022-05-19 14:25:04',
        hours: '08:00',
        min_age: '18',
        quota: '90',
        location: 'Halaman Dinas Kesehatan DIY Jl. Gondosuli No. 6 Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moderna Dosis II (Kedua)',
        category_id: '2',
        date: '2022-05-23 14:25:04',
        hours: '08:00',
        min_age: '18',
        quota: '90',
        location: 'Halaman Dinas Kesehatan DIY Jl. Gondosuli No. 6 Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
