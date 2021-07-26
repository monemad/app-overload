'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagUser = sequelize.define('TagUser', {
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  TagUser.associate = function(models) {
    // associations can be defined here
  };
  return TagUser;
};