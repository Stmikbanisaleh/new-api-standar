const provinsiSchema = require('../models/provinsiModel');
const kotaSchema = require('../models/kotaModel');

//  Get Token
exports.getProvince = async (req, res) => {
  try {
    provinsiSchema.sequelize.query('select id_prov, nama from msprovinsi', { type: provinsiSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};

exports.getKota = async (req, res) => {
  try {
    kotaSchema.sequelize.query('select id_kota, id_prov, nama from mskota', { type: kotaSchema.sequelize.QueryTypes.SELECT })
      .then((data) => {
        res.status(200).json(data);
      });
  } catch (error) {
    res.status(400).json({
      status: 500,
      messages: error,
    });
  }
};
