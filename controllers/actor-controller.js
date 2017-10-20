var connection = require('../connection');
var query      = require('../query');

function findActorByIdAndLastName(req, res, next) {
    var actor_id = req.query.actor_id;
    var last_name = req.query.last_name;
  
    if(!actor_id || !last_name){
      return res.status(500).send("Invalid arguments");
    }
  
    connection.query(query.findActorByIdAndLastName, [actor_id, last_name],function (error, results, fields) {
      if (error) return res.status(500).send({message: error.message});
      res.send(results);
    });  
}

function findAllActors(req, res, next){
    connection.query(query.findAllActors,function (error, results, fields) {
        if (error) return res.status(500).send({message: error.message});
        res.send(results);
    });      
}

function deleteActor(req, res, next){
    var actor_id = req.params.actor_id;
    connection.query(query.deleteActorById, [actor_id],function(error, results, fields){
        if(error) return res.status(500).send({message: error.message});
        res.send("Record deleted successfully "+ actor_id);
    });
}

function addActor(req, res, next){
    var record = {
        first_name : req.body.firstName,
        last_name  :  req.body.lastName
    };
    connection.query(query.addActor, record, function(error, results, fields){
        if(error) return res.status(500).send({message: error.message});
        res.send("Record added successfully");
    });    
}

function updateActor(req, res, next){
    var actor_id  = req.params.actor_id;
    var firstName = req.body.firstName;
    var lastName  = req.body.lastName;    

    connection.query(query.updateActor, [firstName, lastName, actor_id],function(error, results, fields){
        if(error) return res.status(500).send({message: error.message});
        res.send("Record updated successfully "+ actor_id);
    });
}


module.exports = {
    findActorByIdAndLastName : findActorByIdAndLastName,
    findAllActors            : findAllActors,
    deleteActor              : deleteActor,
    addActor                 : addActor,
    updateActor              : updateActor
};