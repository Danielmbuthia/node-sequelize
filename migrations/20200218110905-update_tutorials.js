'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tutorials','user_id', {
        allowNull: true,
        type: Sequelize.INTEGER.UNSIGNED,
    });
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.removeColumn('tutorials','user_id');
  }
};
