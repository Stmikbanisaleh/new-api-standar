const Sequelize = require('sequelize');
const sequelize = require('../libraries/connection');

const mskota = sequelize.define('mskota', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_kota: {
    type: Sequelize.INTEGER,
  },
  id_prov: {
    type: Sequelize.INTEGER,
  },
  nama: {
    type: Sequelize.STRING,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});

// force: true will drop the table if it already exists
mskota.sync({ force: false }).then(() => {
//     // Table created
//     return msuser.create({
//         name: 'admin',
//         password: 'admin',
//         email : 'imamsatrianta@gmail.com'
//     });
});
module.exports = mskota;
