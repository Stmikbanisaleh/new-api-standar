const Sequelize = require('sequelize');
const sequelize = require('../libraries/connection');

// eslint-disable-next-line camelcase
const d_perbaikan = sequelize.define('d_perbaikan', {
  id_usulan: {
    type: Sequelize.INTEGER,
  },
  surat_pengantar_1: {
    type: Sequelize.STRING,
  },
  rsni_1: {
    type: Sequelize.STRING,
  },
  notulensi_1: {
    type: Sequelize.STRING,
  },
  dok_perbaikan_1: {
    type: Sequelize.STRING,
  },
  surat_pengantar_2: {
    type: Sequelize.STRING,
  },
  rsni_2: {
    type: Sequelize.STRING,
  },
  notulensi_2: {
    type: Sequelize.STRING,
  },
  dok_perbaikan_2: {
    type: Sequelize.STRING,
  },
  surat_pengantar_3: {
    type: Sequelize.STRING,
  },
  rsni_3: {
    type: Sequelize.STRING,
  },
  notulensi_3: {
    type: Sequelize.STRING,
  },
  dok_perbaikan_3: {
    type: Sequelize.STRING,
  },
  surat_pengantar_4: {
    type: Sequelize.STRING,
  },
  rsni_4: {
    type: Sequelize.STRING,
  },
  notulensi_4: {
    type: Sequelize.STRING,
  },
  dok_perbaikan_4: {
    type: Sequelize.STRING,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
  freezeTableName: true,
});

// force: true will drop the table if it already exists
d_perbaikan.sync({ force: false }).then(() => {
// Table created
// return mspaten.create({
//     name: 'admin',
//     password: 'admin',
//     email : 'imamsatrianta@gmail.com'
// });
});
// eslint-disable-next-line camelcase
module.exports = d_perbaikan;
