const mongoose = require('mongoose');
const { Schema } = mongoose;

const mouseSchema = new Schema({
  resolution: String,
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  time: { type: Number, required: true }
});

const siteSchema = new Schema({
  url: { type: String, required: true },
  mouseRecordings: [mouseSchema]
});

mongoose.model('Site', siteSchema);
mongoose.model('Mouse', mouseSchema);
