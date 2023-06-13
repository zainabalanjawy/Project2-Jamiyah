var express = require("express");
var User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.user_profile_get = (req, res) => {
  //res.send(' Here is user/profile')
  //Find jamaya history of the user id to expand its details
  res.render("user/profile");
};

exports.user_profile_post = async (req, res) => {
  //Find user id to update profile
  //Find user id to update profile
  try {
    console.log(req.body);
    const UserId = req.body.id;
    await User.findByIdAndUpdate(UserId, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    res.redirect("/user/profile");
  } catch (e) {
    console.log(e.message);
  }
};