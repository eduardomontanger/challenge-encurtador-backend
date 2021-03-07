module.exports = (Sequelize, DataTypes) => {
  const RedirectHost = Sequelize.define(
    'RedirectHost',
    {
      originUrl: {
        type: DataTypes.TEXT,
        field: 'origin_url',
        allowNull: false,
      },
      codeUrl: {
        type: DataTypes.TEXT,
        field: 'code_url',
        defaultValue: false,
      },
      expiryDate: {
        type: DataTypes.DATE,
        field: 'expiry_date',
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      },
    },
    {
      tableName: 'redirect_host',
      underscored: true
    }
  );

  return RedirectHost;
};
