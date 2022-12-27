'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Messages', [{
      name: 'Karim',
      email: 'karim22@gmail.com',
      title: 'appreciation',
      message: 'I saw your personal page and its vety good page. good luck bro',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Omid',
      email: 'omid.haddi@gmail.com',
      title: 're-appreciation',
      message: 'Thanks alot my dear friend',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
