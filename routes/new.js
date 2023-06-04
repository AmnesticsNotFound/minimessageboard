var express = require('express');
var router = express.Router();
const {messages} = require('./index');

let path= "/home/adrian/OdinStuff/Node/minimessageboard/"

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render(path + 'views/form.jade');
});

router.post('/new', (req, res) => {

  messages.push({text: req.body.text, user: req.body.user, added: new Date()});
  res.redirect("/");
})

module.exports = router;
