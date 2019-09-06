var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  id: String,
  nombre: String,
  sexo: String,
  edad: String,
  estado_civil: String,
  telefono: String,
  escolaridad: String,
  ocupacion: String,
  domicilio: String,
  correo: String,
  apoyo_solicitado: String,
  fecha : String,
  lugar_trabajo: String,
  puesto: String,
  salario: String,
  otros_ingresos: String,
  total_ingresos: String,
  observaciones: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);