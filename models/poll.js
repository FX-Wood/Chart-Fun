'use strict';
const uuid = require('uuid/v4')
module.exports = (sequelize, DataTypes) => {
  const poll = sequelize.define('poll', {
    name: DataTypes.STRING,
    answer: DataTypes.STRING,
    survey: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(poll) {
        poll.id = uuid()
      }
    }
  });
  poll.associate = function(models) {
    // associations can be defined here
  };
  return poll;
};