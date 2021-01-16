/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { gettoken, getUserDetails } = require('../libraries/login');
const { register } = require('../libraries/register');
const jwt = require('jsonwebtoken');

const UserSchema = require('../models/userModel');
//  Get Token
exports.userToken = async (req, res) => {
  const validate = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  const payload = {
    email: req.body.email,
    password: req.body.password,
  };
  Joi.validate(payload, validate, (error) => {
    bcrypt.hash(payload.password, 10, (err, hash) => {
      // Store hash in your password DB.
      UserSchema.sequelize.query(`SELECT a.password,a.id,a.nama_lengkap, a.email, a.image, a.role_id, a.is_active,b.nama_rev,b.status,b.keterangan,golongan from msuserstandar a join msrev b on a.role_id = b.id where a.email = "${req.body.email}"`,
        { replacements: { status: 'active', type: UserSchema.sequelize.QueryTypes.SELECT } })
        .then((user) => {
          if (user[0].length < 1) {
            res.status(401).json({
              message: 'Email Tidak Terdaftar !!!',
            });
          } else {
            const users = user[0];
            bcrypt.compare(payload.password, users[0].password, (error, match) => {
              // console.log()
              if (match) {
                const token = jwt.sign({ email: users[0].email, role: users[0].role_id, is_active: users[0].is_active }, process.env.JWTKU, {
                  expiresIn: '30d',
                });
                res.status(200).json({
                  message: 'Success',
                  status: 200,
                  user_id: users[0].id,
                  email: users[0].email,
                  role: users[0].role_id,
                  is_active: users[0].is_active,
                  name: users[0].name,
                  image: users[0].image,
                  nama_rev: users[0].nama_rev,
                  status_rev: users[0].status,
                  keterangan: users[0].keterangan,
                  golongan: users[0].golongan,
                  token,
                });
              } else {
                res.status(403).json({
                  error: 'Email atau Password Salah !!!',
                  status: 403,
                });
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
            status: 500,
          });
        });
      if (error) {
        res.status(400).json({
          message: ' Required',
          error,
        });
      }
    });
  });
};

// Register
exports.userRegister = async (req, res) => {
  const validate = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
    role_id: Joi.number().required(),
  });
  const payload = {
    email: req.body.email,
    password: req.body.password,
    role_id: req.body.role_id,
  };
  Joi.validate(payload, validate, (error) => {
    try {
      const {
        email,
        password,
        role_id,
        is_active,
        no_handphone,
        fax,
        nama_lengkap,
        no_ktp,
        alamat,
        id_provinsi,
        id_kota,
        image,
        stakeholder,
      } = req.body;
      bcrypt.hash(password, 10, async (err, hash) => {
        UserSchema.findAll({
          where: {
            email: req.body.email,
          },
        }).then(async (data) => {
          if (data.length > 0) {
            res.status(401).json({
              status: 401,
              messages: 'Email Already Exist',
            });
          } else {
            const users = await UserSchema.create({
              email,
              password: hash,
              role_id,
              fax,
              no_ktp,
              nama_lengkap,
              alamat,
              id_kota,
              no_handphone,
              id_provinsi,
              is_active,
              image,
              stakeholder,
            });
            if (users) {
              res.status(201).json({
                status: 200,
                messages: 'User berhasil ditambahkan',
                data: users,
              });
            }
          }
        });
      });
    } catch (error) {
      res.status(400).json({
        status: 'ERROR',
        messages: error.message,
        data: {},
      });
    }
    if (error) {
      res.status(400).json({
        status: 'Required',
        messages: error.message,
        data: {},
      });
    }
  });
};

exports.getUserDetail = async (req, res) => {
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

exports.userDetail = async (req, res) => {
  try {
    const validate = Joi.object().keys({
      id: Joi.string().required(),
    });

    const payload = {
      id: req.body.id,
    };

    Joi.validate(validate, payload, async () => {
      try {
        const data = await getUserDetails(req.body.id);
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({
          status: 500,
          messages: error,
        });
      }
    });
  } catch (error) {
    res.status(402).json({
      error,
      status: 402,
      data: 'required',
    });
  }
};
