'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('plans', [
      {
      name: 'Anual',
      big_price: 'R$ 187,00',
      big_price_number: 187,
      text_discount: '(economize 35%)',
      premium_points: 360,
      },
      {
      name: 'Semestral',
      big_price: 'R$ 108,00',
      big_price_number: 108,
      text_discount: '(economize 25%)',
      premium_points: 180,
      },
      {
        name: 'Trimestral',
        big_price: 'R$ 62,00',
        big_price_number: 62,
        text_discount: '(economize 15%)',
        premium_points: 90,
      },
      {
        name: 'Mensal',
        big_price: 'R$ 24,00',
        big_price_number: 24,
        text_discount: '',
        premium_points: 30,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('plans', null, {})
  }
};
