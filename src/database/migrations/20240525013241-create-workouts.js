'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      divisao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      level_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      explicacao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      serie1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      serie2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      serie3: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      serie4: {
        type: Sequelize.TEXT,
      },
      serie5: {
        type: Sequelize.TEXT,
      },
      serie6: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("workouts");
  }
};
