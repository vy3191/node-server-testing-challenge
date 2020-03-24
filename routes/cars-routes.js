const express = require('express');
const router = express.Router();
const carsModal = require('../modals/cars-modals');

router.get('/', async (req,res,next) => {
    try{
      const cars = await carsModal.find();
      res.status(200).json(cars);
    }catch(err) {

    }
});

router.post('/', async (req,res,next) => {
  try{
    const cars = await carsModal.add(req.body);
    res.status(201).json(cars);
  }catch(err) {

  }
});

router.delete('/', async (req,res,next) => {
  try{
    return await carsModal.remove();
  }catch(err) {

  }
});
router.get('/', async (req,res,next) => {
  try{

  }catch(err) {

  }
});

router.get('/', async (req,res,next) => {
  try{

  }catch(err) {

  }
});

module.exports = router;