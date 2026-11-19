'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthdate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      bio: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      verifycode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      privacypolitics: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      termsandservices: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      valid_account: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      already_free_trial: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      premium: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      premium_time: {
        type: Sequelize.INTEGER,
      },
      asaas_id: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  }
};
