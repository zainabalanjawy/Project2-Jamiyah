const mongoose = require("mongoose");

const jamiyahSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    duration: {
      type: String,
      required: true,
    },
    monthlyContribution: {
      type: Number,
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isEnded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

jamiyahSchema.virtual("endDate").get(function () {
  if (!this.startDate || !this.duration) {
    return null;
  }
  const [number, unit] = this.duration.split(" ");
  if (unit.toLowerCase() !== "months") {
    return null;
  }
  const end = new Date(this.startDate);
  end.setMonth(end.getMonth() + parseInt(number));
  return end;
});

const Jamiyah = mongoose.model("Jamiyah", jamiyahSchema);
module.exports = Jamiyah;
