const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nlijinraj_db_user:jyUqL9dYciNTBrYj@namastenodedb.2nkfl7u.mongodb.net/devTinderDB"
  );
};

module.exports = connectDB;
