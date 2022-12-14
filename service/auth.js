const {findUserByProperty,createNewUser} = require('./user')
const {error} = require('../utils/error')
const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
exports.registerService = async ({ name, email, password,roles,accountStatus }) => {
  console.log(name,email,password,roles,accountStatus)
  let user = await findUserByProperty("email",email)
  if (user) {
    const err = new Error('user already exist')
    err.status = 400
    throw err
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log(hash)
  return createNewUser({name,email,password: hash,roles,accountStatus})
};

exports.loginService = async ({ email, password }) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw error(400,"user not found")
  }
  // const method = Object.getOwnPropertyNames(user)
  const isUserPass = await bcrypt.compare(password, user.password);
  if (!isUserPass) {
    throw error(400,"Password not match")
  }
  const playLoad = {
    _id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    accountStatus: user.accountStatus
  }
  return jwt.sign(playLoad, process.env.SECRET_KEY, {
    expiresIn: "2h",
  });
};
