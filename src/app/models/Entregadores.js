import Sequelize, { Model } from 'sequelize';

class Entregadores extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      canceled_at: Sequelize.DATE,
    },
    {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Files, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Entregadores;
