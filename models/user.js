const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name:
    {
      type: String,
      required: true,
      unique:true
    },
    phone: {
      type: String,
      required: true,
    },
    securityCode: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    confirmPassword: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: String
  },
  {
    timestamps: true,
  }
);

userSchema.methods.verifyPassword = function (password) {
  // returns true if both passwords are the same after being hashed
  console.log("Verifying Password: ", password);
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;

