/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
const axios = require('axios');

// eslint-disable-next-line arrow-body-style
// eslint-disable-next-line camelcase
const register = async (insert) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${process.env.API_GATEWAY_URL}/usersv2/register`,
      method: 'POST',
      data: {
        email: insert.email,
        password: insert.password,
        role_id: insert.role_id,
        is_active: insert.is_active,
        no_handphone: insert.no_handphone,
        fax: insert.fax,
        nama_lengkap: insert.nama_lengkap,
        no_ktp: insert.no_ktp,
        alamat: insert.alamat,
        id_provinsi: insert.id_provinsi,
        id_kota: insert.id_kota,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = { register };
