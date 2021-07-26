'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionComment = sequelize.define('QuestionComment', {
    comment: DataTypes.TEXT,
    votes: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  QuestionComment.associate = function(models) {
    // associations can be defined here
    QuestionComment.belongsTo(models.Question , {foreignKey: 'questionId'})
    QuestionComment.belongsTo(models.User , {foreignKey: 'userId'})
  };
  return QuestionComment;
};
