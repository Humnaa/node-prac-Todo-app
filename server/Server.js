var mongoose = require("mongoose");
var validator = require("validator");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Todo-app");

var User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
    minlenght: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  completed: {
    type: Boolean,
    default: false
  },
  age: {
    type: Number
  }
});
var newUser = new User({
  name: "Humna",
  email: "humna.aleem111@gmail.com",
  completed: true,
  age: 30
});
newUser.save().then(
  doc => {
    console.log("Saved user", doc);
  },
  err => {
    console.log("Unable to save user");
  }
);
