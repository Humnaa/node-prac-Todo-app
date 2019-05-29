var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Todo-app");

var User = mongoose.model("User", {
  name: {
    type: String
  },
  completed: {
    type: Boolean
  }
  ,
  age: {
    type: Number
  }
});
var newUser = new User({
  name: "Rehan",
  completed:true,
  age:30
});
newUser.save().then(
  doc => {
    console.log("Saved user", doc);
  },
  err => {
    console.log("Unable to save user");
  }
);
