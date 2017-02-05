const mongoose = require('mongoose');
const Site = mongoose.model('Site');
const Mouse = mongoose.model('Mouse');

const sendJsonResponse = function(res, status, content) {
  res.status(status).json(content);
}

module.exports.index = (req, res) => {
  const { site, mouseData } = req.body;
  console.log(site, mouseData);
  sendJsonResponse(res, 200, {success: req.body})
}
