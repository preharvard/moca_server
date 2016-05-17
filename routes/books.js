/**
 * Created by hong on 2016. 5. 17..
 */
var express = require('express');
var router = express.Router();

var db = require('../models/db');
require('../models/bookmodel');
var BookModel = db.model('Book');

// POST 이미지 업로드
router.post('/', function(req, res, next) {
  var data = new BookModel({
    user_id   : req.body.user_id,
    username  : req.body.username,
    user_type : req.body.user_type,
    book_desc : req.body.book_desc
    // 다른 것들도 여기에 추가.
    });
  data.save(function(err, docs) {
    if (err) {
      console.log('err: ', err)
    } else {
      res.send('ok');
    }
  });
});

// GET 뉴스피드
router.get('/', function(req, res, next) {
  BookModel.find(function(err, docs) {
    var books = {
      title: "newsfeed",
      books: docs
    };
    res.json(books);
  });
});

module.exports = router;