const { Model, DataTypes } = require('sequelize')

class Tech extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, { sequelize })
    }

    // static associate(models){
    //     this.hasMany(models.Adress, { foreignKey: 'user_id', as: 'adresses' })
    // }

}

module.exports = Tech