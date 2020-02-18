module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    Tutorial.associate = function(models) {
        Tutorial.belongsTo(models.user,{foreignKey:'user_id'});
    };
    return Tutorial;
};