var express = require('express');
var router = express.Router();

var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date = today.getFullYear()+ '-' + (today.getMonth()+1) + '-' + today.getDate()+ ' at ' + today.getHours() + ":" + today.getMinutes();

const messages = [
  {
    text: "Test message 2",
    user: "User2",
    date: date
  },
  {
    text: "Test message 1",
    user: "User1",
    date: date
  }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    description: req.body.description,
    username: req.body.username,
    date: date
  };
  messages.unshift(newMessage);
  res.redirect('/');
});





module.exports = router;
