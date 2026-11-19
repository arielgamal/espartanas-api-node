'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('iniciante_training_division', [
      { codigo: "A", divisao: 'Membros inferiores', descricao: 'Membros inferiores completo' },
      { codigo: "B", divisao: 'Membros superiores', descricao: 'Membros superiores completo' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('iniciante_training_division', null, {})
  }
};
