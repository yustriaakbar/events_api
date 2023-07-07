'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    event_id: DataTypes.INTEGER,
    full_name: DataTypes.STRING,
    nik: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});

  Participant.associate = (models) => {
    Participant.belongsTo(models.Event, {
      foreignKey: {
        name: 'event_id',
        allowNull: false
      },
      as: 'event'
    });
  };

  return Participant;
};