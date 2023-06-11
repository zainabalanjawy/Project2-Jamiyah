const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("../lib/passportConfig");

exports.signUpPage = (req, res) => {
  res.render("auth/signup");
};

exports.signUpPagePost = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(req.body);

    const hash = bcrypt.hashSync(req.body.password, 10);
    console.log(`Hashed Password: ${hash}`);

    user.password = hash;
    user.confirmPassword = hash;

    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).send("Passwords do not match");
    }

    await user.save();
    res.redirect("/");
    console.log("User Added");
  } catch (error) {
    res.send(error.message);
  }
};

exports.signInPage = (req, res) => {
  res.render("auth/signin");
};

exports.signInPagePost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/signin",
});

exports.signout = (req, res) => {
  //signout from system
  req.logout(function (err) {
    if (err) {
      return next();
    }
    res.redirect("/");
    console.log("Signed out!");
  });
};

exports.forget_password_get = (req, res) => {
  res.render("auth/forget_password");
};

exports.forget_password_post = async (req, res) => {
  //Reset password if the security question is correct
  try {
    const user = await User.findOne({ securityCode });

    if (req.body.securityCode !== user.securityCode) {
      return res.status(400).send("Wrong Security Code");
    } else {
      user.password = newPassword;
    }
    await user.save();
    console.log("reset succesful");
  } catch (error) {
    res.send(error.message);
  }
};
