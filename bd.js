const { Sequelize, DataTypes } = require('sequelize');

// Conexão com SQL Server usando porta fixa
const sequelize = new Sequelize('FireDB', 'Admin2', 'admin', {
  host: 'localhost',
  dialect: 'mssql',
  port: 50940,         // porta TCP do SQL Server
  dialectOptions: {
    encrypt: false     // se você não usa SSL
  },
  logging: false
});


// Modelo da tabela Usuario
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'Usuario',
  timestamps: false,
});
// Testar conexão
sequelize.authenticate()
  .then(() => console.log('✅ Conexão com o banco de dados estabelecida.'))
  .catch(error => console.error('❌ Erro ao conectar ao banco de dados:', error));

module.exports = { Usuario, sequelize };
