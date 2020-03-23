const db = require('../data/dbConfig');

function find() {
  return db('cars').select();
}

function findById(id){
  return db('cars').where("id", id).first();
}

async function add(car) {
  const [id] = await db('cars').insert(car);
  return findById(id);
}

function remove(id) {
  return db('cars').where("id",id).del();

}

async function modify(id,newCar) {
  // const car = findById(id)
  // const updatedCar = {...car, ...newCar}
   await db('cars').where('id',id).update(newCar);
   return findById(id);
}

module.exports = {
  find,
  findById,
  add, 
  remove, 
  modify
}