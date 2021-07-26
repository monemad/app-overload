'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    reputation: DataTypes.INTEGER,
    avatarURL: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'TagUser',
      foreignKey: 'userId',
      otherKey: 'tagId'
    }
    User.hasMany(models.Answer, {foreignKey:'userId'})
    User.hasMany(models.AnswerComment ,{foreignKey: 'userId'})
    User.hasMany(models.Question ,{foreignKey: 'userId'})
    User.hasMany(models.QuestionComment ,{foreignKey: 'userId'})
    User.belongsToMany(models.Tag, columnMapping)
  };
  return User;
};
