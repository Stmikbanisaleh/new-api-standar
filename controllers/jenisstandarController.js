const jenisstandarSchema = require('../models/jenistandarModel');
const konseptorSchema = require('../models/konseptorModel');


//  Get Token
exports.JenisStandar = async (req, res) => {
  try {
    jenisstandarSchema.sequelize.query('select * from msrev where golongan = 14', { type: jenisstandarSchema.sequelize.QueryTypes.SELECT })
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

exports.KomiteTeknis = async (req, res) => {
  try {
    jenisstandarSchema.sequelize.query('select * from msrev where golongan = 15', { type: jenisstandarSchema.sequelize.QueryTypes.SELECT })
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

exports.JenisPerumusan = async (req, res) => {
  try {
    jenisstandarSchema.sequelize.query('select * from msrev where golongan = 16', { type: jenisstandarSchema.sequelize.QueryTypes.SELECT })
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

exports.JalurPerumusan = async (req, res) => {
  try {
    jenisstandarSchema.sequelize.query('select * from msrev where golongan = 17', { type: jenisstandarSchema.sequelize.QueryTypes.SELECT })
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

exports.GetKonseptor = async (req, res) => {
  try {
    konseptorSchema.sequelize.query('select * from mskonseptor', { type: konseptorSchema.sequelize.QueryTypes.SELECT })
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
