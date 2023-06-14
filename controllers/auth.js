const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("../lib/passportConfig");
const Account = require("../models/account");

function generateRandomSecurityCode() {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;

  return String(randomNumber);
}

exports.signUpPage = (req, res) => {
  // res.render("auth/signup");

  const securityCode = generateRandomSecurityCode();

  res.render("auth/signup", {
    securityCode: securityCode,
  });
};

exports.signUpPagePost = async (req, res) => {
  try {
    const user = new User(req.body);
    const account = new Account();
    account.balance = 0;
    console.log(req.body);

    const hash = bcrypt.hashSync(req.body.password, 10);
    console.log(`Hashed Password: ${hash}`);

    user.password = hash;
    user.confirmPassword = hash;

    user.profileImage = "/uploads/" + req.file.filename;
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).send("Passwords do not match");
    }

    await user.save();
    account.user = user;
    await account.save();
    console.log(account);
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
  successRedirect: "/jamiyah/home",
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
  const { securityCode, newPassword, confirmPassword } = req.body; // assuming you are getting the security code and new password from the request body

  try {
    const user = await User.findOne({ securityCode });

    if (!user) {
      return res.redirect("/auth/forget_password");
    }

    // if security code matches, update password
    if (securityCode === user.securityCode) {
      user.password = newPassword;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      user.confirmPassword = hashedPassword;

      await user.save();
      return res.redirect("/auth/signin");
    } else {
      return res.status(401).json({ error: "Invalid security code." });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error." });
  }
};
