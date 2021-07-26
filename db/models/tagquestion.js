'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagQuestion = sequelize.define('TagQuestion', {
    questionId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  TagQuestion.associate = function(models) {
    // associations can be defined here
  };
  return TagQuestion;
};