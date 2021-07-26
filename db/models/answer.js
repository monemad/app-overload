'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answer: DataTypes.TEXT,
    votes: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.User, {foreignKey:'userId'})
    Answer.belongsTo(models.Question, {foreignKey:'questionId'})
    Answer.hasMany(models.AnswerComment , {foreignKey: 'answerId'})
  };
  return Answer;
};
