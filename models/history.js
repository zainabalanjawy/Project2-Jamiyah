const mongoose = require("mongoose");

const historySchema = mongoose.Schema(
  {
    jamiyah: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jamiyah",
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const updateEndedJamiyahs = async function () {
  const jamiyahs = await Jamiyah.find({ isEnded: false });
  const now = new Date();
  for (const jamiyah of jamiyahs) {
    if (jamiyah.endDate <= now) {
      jamiyah.isEnded = true;
      await History.create({
        jamiyah: jamiyah._id,
        endDate: jamiyah.endDate,
      });
      await jamiyah.save();
    }
  }
};

const History = mongoose.model("History", historySchema);
module.exports = { History, updateEndedJamiyahs };
