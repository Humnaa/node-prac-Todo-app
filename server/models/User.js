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
    unique: true
  },
  age: {
    type: Number
  }
});
module.exports = { User };
