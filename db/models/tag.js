'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    numQuestions: DataTypes.INTEGER,
    numFollowers: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    const columnMappingUser = {
      through: 'TagUser',
      foreignKey: 'tagId',
      otherKey: 'userId'
    }
    const columnMappingQuestion = {
      through: 'TagQuestion',
      foreignKey: 'tagId',
      otherKey: 'questionId'
    }
    Tag.belongsToMany(models.User , columnMappingUser)
    Tag.belongsToMany(models.Question , columnMappingQuestion)
  };
  return Tag;
};
