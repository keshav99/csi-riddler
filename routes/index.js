var express= require('express');
var router= express.Router();

router.get('/', function(req, res, next){
  res.render('client/index.html');
});

router.get('/signup', function(req, res, next){
  res.render('client/signup.html');
});

router.get('/leaderboard', function(req, res, next){
  res.render('client/app/tasks/leader.component.html');
});

module.exports= router;
