'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('training_division', [
      { codigo: "A", divisao: 'Membros inferiores', descricao: 'Membros inferiores (foco em quadríceps);' },
      { codigo: "BS1", divisao: 'Membros superiores', descricao: 'Membros superiores (ombro, peito, tríceps + abs e cardio' },
      { codigo: "BS2", divisao: 'Membros superiores', descricao: 'Membros superiores (costa, bíceps +abs e cardio)' },
      { codigo: "BS3", divisao: 'Membros superiores', descricao: ' Superiores completo + abs e cardio' },
      { codigo: "C", divisao: 'Membros inferiores', descricao: 'Membros inferiores (posterior e glúteo)' },
      { codigo: "D", divisao: 'Membros inferiores', descricao: 'Inferiores Completo (quadríceps, posterior e glúteo)' },
      { codigo: "E", divisao: 'Dia off', descricao: 'Alongamento/yoga/meditação/dança ou off total' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('training_division', null, {})
  }
};
