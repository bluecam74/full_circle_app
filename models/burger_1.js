module.exports = function(sequelize,DataTypes){
    var Burger = sequelize.define("Burger",{
        Name: { type: DataTypes.STRING, allowNull: false },
        Devoured: { type: DataTypes.BOOLEAN, defaultValue: 0 }
    },{
        timestamps: false
    });
    Burger.associate = function(models){
        Burger.belongsTo(models.Customer,{
            onDelete: "CASCADE",
            foreignKey: {
              allowNull: true
            }
        });
    };
    return Burger;
};