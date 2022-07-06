'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    hours: DataTypes.STRING,
    min_age: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {});

  Event.associate = (models) => {
    Event.belongsTo(models.Category, {
      foreignKey: {
        name: 'category_id',
        allowNull: false
      },
      as: 'category'
    });

    Event.hasMany(models.Participant, {
      foreignKey: {
        name: 'event_id',
        allowNull: false
      },
      as: 'participants'
    });
  };

  return Event;
};