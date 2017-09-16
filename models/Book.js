module.exports = (sequelize, DataTypes) => 
  sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
    previewLink: {
      type: DataTypes.STRING,
    },
    imageLink: {
      type: DataTypes.STRING
    }
  },
    {
      updatedAt: false
    },
  );
