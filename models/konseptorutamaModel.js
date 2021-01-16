const Sequelize = require('sequelize');
const sequelize = require('../libraries/connection');

// eslint-disable-next-line camelcase
const d_konseptor_utama = sequelize.define('d_konseptor_utama', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usulan: {
    type: Sequelize.INTEGER,
  },
  nama: {
    type: Sequelize.STRING,
  },
  alamat: {
    type: Sequelize.TEXT,
  },
  telepon: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
  freezeTableName: true,
});

// force: true will drop the table if it already exists
d_konseptor_utama.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
// eslint-disable-next-line camelcase
module.exports = d_konseptor_utama;
