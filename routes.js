var express = require('express');
var actorController = require("./controllers/actor-controller");
var router  = express.Router();

/* index route */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* actors routes */
router.get('/actors/findAllActors', actorController.findAllActors);
router.get('/actors/findActorByIdAndLastName', actorController.findActorByIdAndLastName);
router.post('/actors', actorController.addActor);
router.put('/actors/:actor_id', actorController.updateActor);
router.delete('/actors/:actor_id', actorController.deleteActor);

/* Otheriwse home page. */
router.get('*', function(req, res, next) {
  res.render('index');
});

module.exports = router;