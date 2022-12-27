'use strict';
import connection from '../connection'

const { Model, DataTypes } = require('sequelize');
const initMessage = (sequelize, DataTypes) => {
  class Message extends Model {

    // static associate(models) {
    //   // define association here
    // }
  }
  Message.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    message: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};

export default initMessage(connection, DataTypes)