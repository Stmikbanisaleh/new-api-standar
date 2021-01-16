const Sequelize = require('sequelize');
const sequelize = require('../libraries/connection');

const mskonseptor = sequelize.define('mskonseptor', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nik: {
    type: Sequelize.STRING,
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
  instansi: {
    type: Sequelize.STRING,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
  freezeTableName: true,
});

// force: true will drop the table if it already exists
mskonseptor.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
module.exports = mskonseptor;
