/**
 * Created by hong on 2016. 5. 17..
 */
var mongoose = require('mongoose');

var BookScheme = new mongoose.Schema({
  book_id   : Number, // auto_increment 1부터
  book_img  : Array,     // 일단은 한 개만 하지만 나중에는 여러 개일 수 있음.
  user_id   : Number,
  username  : String,
  user_type  : String,      // I: Invalid, V: Valid(인증), M: Model, P: Photographer
  thumbnail_img : String,
  upload_time: { type: Date, default: Date.now },
  book_desc : String,
  like_count : String,
  like_user  : Array// 좋아요 누른 유저의 user_id를 넣어놓아서 이걸 검색해서 내가 라이크 눌렀는지 안눌렀는지 확인하자.
});

mongoose.model('Book', BookScheme);