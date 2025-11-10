import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  antiguedad: { type: Number, required: true, min: 0 },
  sueldoActual: { type: Number, required: true, min: 0 },
  sueldoNuevo: { type: Number, required: true, min: 0 }
});

const Empleado = mongoose.model('Empleado', empleadoSchema);
export default Empleado;
