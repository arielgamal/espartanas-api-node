'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('training_level', [
      { type: "Iniciante" },
      { type: "Intermediário" },
      { type: "Avançado" },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('training_level', null, {})
  }
};
