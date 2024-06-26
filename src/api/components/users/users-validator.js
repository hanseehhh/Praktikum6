const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      cpass: joi.string().min(6).max(32).required().label('CPass'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },
  
  changePass: {
    body: {
      oldpass: joi.string().min(6).max(32).required().label('Oldpassword'),
      newpass: joi.string().min(6).max(32).required().label('Newpassword'),
      copass: joi.string().min(6).max(32).required().label('CPass'),
      },
    },
};
