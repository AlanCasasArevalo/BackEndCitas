'use strict'

const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');

mongoose.connect(config.db, (error, res) => {
  if (error) console.log(`Error al conectar en la base de datos ${error}`)
  console.log(` Conexion a la base de datos establecida`)
  app.listen(2053, () => {
      console.log(` API CORRIENDO en http://localhost:${config.port}`)
  })
})




