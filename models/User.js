const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./config/connection');

class User extends Model {}

User.init(
    {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        }
    },
{
    sequelize,
    modelName: 'User'
}
);

module.exports = User;