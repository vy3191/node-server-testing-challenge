const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const PORT = process.env.PORT || 8000;

const carsRoutes = require('./routes/cars-routes');

server.use(helmet());
server.use(logger('tiny'));
server.use(express.json());
server.use('/cars', carsRoutes);
server.use('/welcome', async () => {
   res.status(200).json({msg:'welcome to the application'});
})

server.use((req,res,next) => res.status(404).json({msg:'Route Not Found'}));
server.use((err,req,res,next) => {
  res.status(500).json({msg:'500-Server Error'})
});

if(!module.parent) {
  server.listen(PORT, (req,res,next) => {
      console.log(`The app is running at https://localhost:${PORT}`);
  })
}

module.exports = server;




