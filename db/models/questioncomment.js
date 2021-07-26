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
  };
  return QuestionComment;
};
