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
    Question.hasMany(models.QuestionComment, { foreignKey: 'questionId', onDelete: 'CASCADE', hooks: true})
    Question.hasMany(models.Answer, { foreignKey: 'questionId', onDelete: 'CASCADE', hooks: true})
    Question.belongsTo(models.User, {foreignKey: 'userId'})
    Question.belongsToMany(models.Tag, columnMapping)
  };
  return Question;
};
