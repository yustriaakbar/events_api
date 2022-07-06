'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {});

  Category.associate = (models) => {
    Category.hasMany(models.Event, {
      foreignKey: {
        name: 'category_id',
        allowNull: false
      },
      as: 'events'
    });
  };

  return Category;
};