var express= require('express');
var router= express.Router();

router.get('/', function(req, res, next){
  res.render('client/index.html');
});

router.get('/signup', function(req, res, next){
  res.render('client/app/tasks/task.component.html');
});

router.get('/leaderboard', function(req, res, next){
  res.render('client/leaderboard.html');
});

module.exports= router;
