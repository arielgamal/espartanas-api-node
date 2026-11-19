'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('videos', [
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 1,
        level_id: 1,
        url: "https://www.youtube.com/watch?v=lpPa3EN4mAg",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 2,
        level_id: 1,
        url: "https://www.youtube.com/watch?v=vqF7hvf_odU",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 3,
        level_id: 1,
        url: "https://www.youtube.com/watch?v=W-M9gNQLViQ",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 5,
        level_id: 1,
        url: "https://www.youtube.com/watch?v=I85_HMUQiUk",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 1,
        level_id: 2,
        url: "https://www.youtube.com/watch?v=lpPa3EN4mAg",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 2,
        level_id: 2,
        url: "https://www.youtube.com/watch?v=vqF7hvf_odU",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 3,
        level_id: 2,
        url: "https://www.youtube.com/watch?v=W-M9gNQLViQ",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 5,
        level_id: 2,
        url: "https://www.youtube.com/watch?v=I85_HMUQiUk",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 1,
        level_id: 3,
        url: "https://www.youtube.com/watch?v=lpPa3EN4mAg",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 2,
        level_id: 3,
        url: "https://www.youtube.com/watch?v=vqF7hvf_odU",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 3,
        level_id: 3,
        url: "https://www.youtube.com/watch?v=W-M9gNQLViQ",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      {
        mes: "junho",
        ano: "2024",
        divisao_id: 5,
        level_id: 3,
        url: "https://www.youtube.com/watch?v=I85_HMUQiUk",
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('videos', {
      mes: "junho",
      ano: "2024",
    });
  }
};
