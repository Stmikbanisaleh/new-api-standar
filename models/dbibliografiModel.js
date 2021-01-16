const Sequelize = require('sequelize');
const sequelize = require('../libraries/connection');

// eslint-disable-next-line camelcase
const d_bibliografi = sequelize.define('d_bibliografi', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usulan: {
    type: Sequelize.INTEGER,
  },
  nama: {
    type: Sequelize.TEXT,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
  freezeTableName: true,
});

// force: true will drop the table if it already exists
d_bibliografi.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
// eslint-disable-next-line camelcase
module.exports = d_bibliografi;
