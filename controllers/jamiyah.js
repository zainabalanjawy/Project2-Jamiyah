const Jamiyah = require("../models/jamiyah");
const User = require("../models/user");
const History = require("../models/history");

exports.jamiyah_home_get = async (req, res) => {
  //res.send(' Here is jamiyah/home')
  try {
    const jamiyahs = await Jamiyah.find({
      participants: { $in: [req.user._id] },
    });
    res.render("jamiyah/home", { jamiyahs });
  } catch (error) {
    console.log(error.message);
    res.send("An error occurred");
  }
};

exports.jamiyah_create_get = async (req, res) => {
  //res.send(' Here is jamiyah/create')
  const users = await User.find();
  res.render("jamiyah/create", { users });
};

exports.jamiyah_create_post = (req, res) => {
  console.log("here");
  console.log(req.body);
  const jamiyah = new Jamiyah(req.body);
  // jamiyah.participants = req.body.id
  jamiyah
    .save()
    .then(() => {
      console.log("your Jamiyah has been saved");
      res.redirect("/jamiyah/home");
    })
    .catch((err) => {
      console.log("an error occurred", err);
    });
};

exports.jamiyah_details_get = async (req, res) => {
  //res.send(' Here is jamiyah/details')
  //Find jamaya of the id passed to url and expand its details
  try {
    const users = await User.find();
    const today = new Date();
    const jamiyah = await Jamiyah.findById(req.query.id);
    // console.log("jam details get: ", jamiyah);
    res.render("jamiyah/details", { jamiyah, users, today });
    // console.log(req.query.isEditing)

    // if (req.query.isEditing === 'true') {
    //     let isEditing = true
    // // } else {
    //     let isEditing = false
    //     res.render('jamiyah/details', {jamiyah, users, today, isEditing})
    // }
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

exports.jamiyah_details_post = async (req, res) => {
  try {
    console.log(req.body);
    await Jamiyah.findByIdAndUpdate(req.body.id, req.body);
    res.redirect("/jamiyah/home");
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

exports.jamiyah_delete = async (req, res) => {
  console.log(req.query.id);
  try {
    // Try to excute this code
    await Jamiyah.findByIdAndDelete(req.query.id);
    return res.redirect("/jamiyah/home");
  } catch (error) {
    // Execute this if there is an error
    console.log(error.message);
    res.send(error.message);
  } finally {
    //Execute this code no matter what
    console.log("We are in the finally block");
  }
};

exports.jamiyah_history = async (req, res) => {
  try {
    const jamiyahs = await Jamiyah.find({ isEnded: true }).populate({
      path: "/jamiyah/history",
      populate: {
        path: "/jamiyah/history",
      },
    });
    res.render("jamiyah/history", { jamiyahs });
  } catch (error) {
    next(error);
  }
};
