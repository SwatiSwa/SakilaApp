
module.exports = {
    findActorByIdAndLastName : "SELECT * FROM actor where actor_id=? or last_name=?",
    findAllActors            : "SELECT * FROM actor",
    deleteActorById          : "delete from actor where actor_id=?",
    addActor                 : "insert into actor SET ?",
    updateActor              : "UPDATE actor SET first_name = ?, last_name= ? WHERE actor_id = ?"
};