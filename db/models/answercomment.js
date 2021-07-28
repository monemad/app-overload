'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnswerComment = sequelize.define('AnswerComment', {
    comment: DataTypes.TEXT,
    votes: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  AnswerComment.associate = function(models) {
    // associations can be defined here
    AnswerComment.belongsTo(models.Answer, { foreignKey: 'answerId'})
    AnswerComment.belongsTo(models.User , {foreignKey: 'userId'})
    
  };
  return AnswerComment;
};
