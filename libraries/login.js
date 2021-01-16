/* eslint-disable arrow-body-style */
/* eslint-disable object-shorthand */
const axios = require('axios');

// eslint-disable-next-line arrow-body-style
const gettoken = async (email, password) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${process.env.API_GATEWAY_URL}/usersv2/login`,
      method: 'POST',
      data: {
        email: email,
        password: password,
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

// eslint-disable-next-line arrow-body-style
const getUserDetails = async (id) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${process.env.API_GATEWAY_URL}/usersv2/getuserbyid`,
      method: 'POST',
      data: {
        id: id,
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

// eslint-disable-next-line arrow-body-style

module.exports = { gettoken, getUserDetails };
