/**
 * Created by hong on 2016. 5. 17..
 */
var express = require('express');
var router = express.Router();

var db = require('../models/db');
require('../models/bookmodel');
var BookModel = db.model('Book');

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {
    book_id : 1,
    user_id : 2,
    username : "hongkevin",
    user_type : "M",
    like_count : 14
  };
  res.json({data:obj});
});

module.exports = router;