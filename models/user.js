const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    emailId: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (![male, female, other].includes(value.toLowerCase())) {
          throw new Error("Gender must be male, female, or others");
        }
      },
    },

    bio: {
      type: String,
      default: "this is my bio",
    },

    skills: {
      type: [String],
    },
    profilePicture: {
      type: String,
      default:
        "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
