'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      event: {
        type: Sequelize.STRING
      },
      object: {
        allowNull: false,
        defaultValue: "payment",
        type: Sequelize.STRING
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      date_created: {
        type: Sequelize.STRING
      },
      asaas_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      billing_type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      confirmed_date: {
        type: Sequelize.STRING
      },
      credit_card_number: {
        type: Sequelize.STRING
      },
      credit_card_brand: {
        type: Sequelize.STRING
      },
      credit_card_token: {
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      premium_points: {
        type: Sequelize.INTEGER
      },
      api_confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("payments");
  }
};
