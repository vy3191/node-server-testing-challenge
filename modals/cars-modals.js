const db = require('../data/dbConfig');

function find() {

}

function findById(id){
  return db('cars').where("id", id).first();
}

function add(car) {

}

function remove(id) {

}

function update(id,newCar) {

}

module.exports = {
  find,
  findById,
  add, 
  remove, 
  update
}