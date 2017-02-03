const sendJsonResponse = function(res, status, content) {
  res.status(status).json(content);
}

module.exports.index = (req, res) => {
  console.log(req.body, 1);
  sendJsonResponse(res, 200, {success: 2})
}
