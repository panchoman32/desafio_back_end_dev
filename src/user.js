const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  userName: { type: String, required: true, trim: true },
  passwordHashed: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  post: {},
});

const model = mongoose.model("User", schema);

module.exports = {
  schema,
  model,
};
