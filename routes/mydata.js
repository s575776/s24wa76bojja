<<<<<<< HEAD
var express = require('express');
var router = express.Router();

/* GET mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sneha Bojja' });
});

=======
// routes/mydata.js
var express = require('express');
var router = express.Router();

/* GET mydata page. */

router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sneha Bojja' });
});

>>>>>>> 04b9e1adafa599ad7fb7f1e86ea1b860b2e637ca
module.exports = router;