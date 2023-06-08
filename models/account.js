const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const accountSchema = mongoose.Schema(
  {
    balance: {
      type: Number,
      required: true,
    },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
