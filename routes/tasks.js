var express= require('express');
var router= express.Router();
var mongojs= require('mongojs');

var db=mongojs('mongodb://keshav99:howzzat19@ds121190.mlab.com:21190/newdb', ['tasks'], ['ranks'], ['questions']);

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

      if(task.name){
          updTask.name = task.name;
      }

      if(task.regno){
          updTask.regno = task.regno;
      }

      if(task.phno){
          updTask.phno = task.phno;
      }

      if(task.email){
          updTask.email = task.email;
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

        if(rank.name){
            updrank.name = rank.name;
        }

        if(rank.regno){
            updrank.regno = rank.regno;
        }

        if(rank.rank){
            updrank.rank = rank.rank;
        }

        if(rank.finished){
            updrank.finished = rank.finished;
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

    router.get('/questions', function(req, res, next){
    db.questions.find(function(err, questions){
      if(err){
      re.send(err);
      }
      else {
        res.json(questions);
      }
    });
    });

  module.exports= router;

  router.get('/question/:id', function(req, res, next){
    db.questions.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, question){
      if(err){
      res.send(err);
      }
      else {
        res.json(question);
      }
    });
    });


    //Save questionf
    router.post('/question', function(req, res, next){
        var question = req.body;
        if(!question.title || !(question.isDone + '')){
            res.status(400);
            res.json({
                "error": "Bad Data"
            });
        } else {
            db.questions.save(question, function(err, question){
                if(err){
                    res.send(err);
                }
                res.json(question);
            });
        }
    });

    // Delete question
    router.delete('/question/:id', function(req, res, next){
        db.questions.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, question){
            if(err){
                res.send(err);
            }
            res.json(question);
        });
    });

    // Update question
    router.put('/question/:id', function(req, res, next){
        var question = req.body;
        var updquestion = {};

        if(question.title){
            updquestion.title = question.title;
        }

        if(question.number){
            updquestion.number = question.number;
        }

        if(question.content){
            updquestion.content = question.content;
        }

        if(question.clue){
            updquestion.clue = question.clue;
        }

        if(question.number_finished){
            updquestion.number_finished = question.number_finished;
        }

        if(question.img_url){
            updquestion.img_url = question.img_url;
        }

        if(!updquestion){
            res.status(400);
            res.json({
                "error":"Bad Data"
            });
        } else {
            db.questions.update({_id: mongojs.ObjectId(req.params.id)},updquestion, {}, function(err, question){
            if(err){
                res.send(err);
            }
            res.json(question);
        });
        }
    });
module.exports= router;
