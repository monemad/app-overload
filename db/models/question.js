'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    details: DataTypes.TEXT,
    votes: DataTypes.INTEGER,
    viewCount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'TagUser',
      foreignKey: 'questionId',
      otherKey: 'tagId'
    }
    Question.hasMany(models.Answer, {foreignKey: 'questionId'})
    Question.belongsTo(models.User, {foreignKey: 'userId'})
    Question.hasMany(models.QuestionComment, {foreignKey: 'questionId'})
    Question.belongsToMany(models.Tag, columnMapping)
  };
  return Question;
};
