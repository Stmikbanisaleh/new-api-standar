const Sequelize = require('sequelize');
const sequelize = require('../libraries/connection');

const msusulan = sequelize.define('msusulan', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  jenis_standar: {
    type: Sequelize.INTEGER,
  },
  komite_teknis: {
    type: Sequelize.STRING,
  },
  kode: {
    type: Sequelize.STRING,
  },
  judul: {
    type: Sequelize.STRING,
  },
  ruang_lingkup: {
    type: Sequelize.STRING,
  },
  jenis_perumusan: {
    type: Sequelize.INTEGER,
  },
  jalur_perumusan: {
    type: Sequelize.INTEGER,
  },
  no_sni_ralat: {
    type: Sequelize.STRING,
  },
  p_sni_ralat: {
    type: Sequelize.STRING,
  },
  no_sni_amandemen: {
    type: Sequelize.STRING,
  },
  p_sni_amandemen: {
    type: Sequelize.STRING,
  },
  no_sni_terjemah: {
    type: Sequelize.STRING,
  },
  jenis_adopsi: {
    type: Sequelize.INTEGER,
  },
  metode_adopsi: {
    type: Sequelize.INTEGER,
  },
  keb_mendesak: {
    type: Sequelize.INTEGER,
  },
  dok_keb_mendesak: {
    type: Sequelize.STRING,
  },
  terkait_paten: {
    type: Sequelize.INTEGER,
  },
  dok_kesediaan_paten: {
    type: Sequelize.STRING,
  },
  informasi_paten: {
    type: Sequelize.TEXT,
  },
  detail_penelitian: {
    type: Sequelize.STRING,
  },
  dok_detail_penelitian: {
    type: Sequelize.STRING,
  },
  tujuan_perumusan: {
    type: Sequelize.STRING,
  },
  kesesuaian: {
    type: Sequelize.TEXT,
  },
  ulasan: {
    type: Sequelize.TEXT,
  },
  org_pendukung: {
    type: Sequelize.INTEGER,
  },
  dok_org_pendukung: {
    type: Sequelize.STRING,
  },
  evaluasi: {
    type: Sequelize.TEXT,
  },
  surat_pengajuan: {
    type: Sequelize.STRING,
  },
  outline: {
    type: Sequelize.STRING,
  },
  proses_usulan: {
    type: Sequelize.INTEGER,
  },
  proses_perumusan: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.TINYINT,
  },
  alasan_penolakan: {
    type: Sequelize.TEXT,
  },
  dok_pembatalan: {
    type: Sequelize.STRING,
  },
  user_input: {
    type: Sequelize.STRING,
  },
  tgl_input: {
    type: Sequelize.DATE,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});

// force: true will drop the table if it already exists
msusulan.sync({ force: false }).then(() => {
//     // Table created
//     return msuser.create({
//         name: 'admin',
//         password: 'admin',
//         email : 'imamsatrianta@gmail.com'
//     });
});
module.exports = msusulan;
