'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('hewans', [
      {
        nama : "bobo",
        namaspesies : "kucing" ,
        umur : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "moza",
        namaspesies : "kelinci" ,
        umur : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "fly",
        namaspesies : "kupu-kupu" ,
        umur : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "moimoi",
        namaspesies : "lumba-lumba" ,
        umur : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama : "boy",
        namaspesies : "kucing" ,
        umur : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('hewans', null, {});
  }
};
