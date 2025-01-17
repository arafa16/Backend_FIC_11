'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book_authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'authors',
          key: 'id',
        },
        cascade: true,
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book_authors');
  }
};