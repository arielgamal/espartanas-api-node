'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = 'admin';
    const passwordHash = await bcrypt.hash(password, 8);
    // const currentDate = new Date();
    // const nextYearDate = new Date();
    // const nextHourDate = new Date();
    // nextYearDate.setFullYear(currentDate.getFullYear() + 1);
    // nextHourDate.setHours(currentDate.getHours() + 1);

    await queryInterface.bulkInsert('users', [
      {
        firstname: "Maria",
        lastname: "Silva",
        birthdate: "01/01/1990",
        email: "maria@example.com",
        cpf: '529.982.247-25',
        password_hash: passwordHash,
        verifycode: "6666",
        premium: true,
        premium_time: 360,
        privacypolitics: true,
        termsandservices: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        firstname: "Joao",
        lastname: "Souza",
        birthdate: "01/01/1990",
        email: "joao@example.com",
        cpf: '111.444.777-35',
        password_hash: passwordHash,
        verifycode: "1234",
        premium: true,
        premium_time: 5,
        privacypolitics: true,
        termsandservices: true,
        created_at: new Date(),
        updated_at: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { email: ["maria@example.com", "joao@example.com"] }, {});
  }
};
