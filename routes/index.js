const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.post('/api/', (req, res) => {
  console.log(req.body.data);
});

module.exports = router;
