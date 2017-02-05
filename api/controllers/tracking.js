const sendJsonResponse = function(res, status, content) {
  res.status(status).json(content);
}

module.exports.index = (req, res) => {
  for (var key in req.body) {
    console.log(key, req.body[key]);
  }
  console.log('');
  /*for (var i of req.body) {
    console.log(i)
  }*/
  //console.log(req.body);
  console.log(req.body);
  sendJsonResponse(res, 200, {success: req.body})
}
