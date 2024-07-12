'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products', 'tags', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  // down: async (queryInterface, Sequelize) => {
  //   await queryInterface.removeColumn('products', 'tags');
  // },
};
