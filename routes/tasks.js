var express= require('express');
var router= express.Router();
var mongojs= require('mongojs');

var db=mongojs('mongodb://keshav99:howzzat19@ds121190.mlab.com:21190/newdb', ['tasks'], ['ranks']);

router.get('/tasks', function(req, res, next){
  db.tasks.find(function(err, tasks){
    if(err){
    re.send(err);
    }
    else {
      res.json(tasks);
    }
  });
  });

module.exports= router;

router.get('/task/:id', function(req, res, next){
  db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
    if(err){
    res.send(err);
    }
    else {
      res.json(task);
    }
  });
  });


  //Save Task
  router.post('/task', function(req, res, next){
      var task = req.body;
      if(!task.title || !(task.isDone + '')){
          res.status(400);
          res.json({
              "error": "Bad Data"
          });
      } else {
          db.tasks.save(task, function(err, task){
              if(err){
                  res.send(err);
              }
              res.json(task);
          });
      }
  });

  // Delete Task
  router.delete('/task/:id', function(req, res, next){
      db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
          if(err){
              res.send(err);
          }
          res.json(task);
      });
  });

  // Update Task
  router.put('/task/:id', function(req, res, next){
      var task = req.body;
      var updTask = {};

      if(task.isDone){
          updTask.isDone = task.isDone;
      }

      if(task.title){
          updTask.title = task.title;
      }

      if(!updTask){
          res.status(400);
          res.json({
              "error":"Bad Data"
          });
      } else {
          db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
          if(err){
              res.send(err);
          }
          res.json(task);
      });
      }
  });

  router.get('/ranks', function(req, res, next){
    db.ranks.find(function(err, ranks){
      if(err){
      re.send(err);
      }
      else {
        res.json(ranks);
      }
    });
    });

  module.exports= router;

  router.get('/rank/:id', function(req, res, next){
    db.ranks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, rank){
      if(err){
      res.send(err);
      }
      else {
        res.json(rank);
      }
    });
    });


    //Save rank
    router.post('/rank', function(req, res, next){
        var rank = req.body;
        if(!rank.title || !(rank.isDone + '')){
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        } else {
            db.ranks.save(rank, function(err, rank){
                if(err){
                    res.send(err);
                }
                res.json(rank);
            });
        }
    });

    // Delete rank
    router.delete('/rank/:id', function(req, res, next){
        db.ranks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, rank){
            if(err){
                res.send(err);
            }
            res.json(rank);
        });
    });

    // Update rank
    router.put('/rank/:id', function(req, res, next){
        var rank = req.body;
        var updrank = {};

        if(rank.isDone){
            updrank.isDone = rank.isDone;
        }

        if(rank.title){
            updrank.title = rank.title;
        }

        if(!updrank){
            res.status(400);
            res.json({
                "error":"Bad Data"
            });
        } else {
            db.ranks.update({_id: mongojs.ObjectId(req.params.id)},updrank, {}, function(err, rank){
            if(err){
                res.send(err);
            }
            res.json(rank);
        });
        }
    });
module.exports= router;
