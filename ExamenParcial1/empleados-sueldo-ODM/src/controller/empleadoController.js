import Empleado from '../model/empleado.js';

function calcularNuevoSalario(antiguedad, sueldoActual) {
  if (typeof antiguedad !== 'number' || Number.isNaN(antiguedad)) {
    return res.status(400).json({ message: "Antiguedad debe ser un numero" });
  }
  if (typeof sueldoActual !== 'number' || Number.isNaN(sueldoActual)) {
    return res.status(400).json({ message: "Sueldo Actual debe ser un número" });
  }
  if (antiguedad < 0 && sueldoActual < 0) {
    return res.status(400).json({ message: "No pueden ser negativos" });
  }
  let porcentaje = 0;

  // Antiguedad de mas de 20 años
  if (antiguedad >= 20) {
    porcentaje = 15;
    //Antiguedad entre 10 y 20 años
  } else if (antiguedad > 10 && antiguedad <= 20) {
    if (sueldoActual <= 300000) {
      porcentaje = 14;
    } else if (sueldoActual > 300000 && sueldoActual <= 500000) {
      porcentaje = 12;
    } else {
      porcentaje = 10;
    }
  // Antiguedad de 10 años o menos
  } else { 
    if (sueldoActual <= 300000) {
      porcentaje = 12;
    } else if (sueldoActual > 300000 && sueldoActual <= 500000) {
      porcentaje = 10;
    } else {
      porcentaje = 8;
    }
  }
  //Calculamos el nuevo sueldo con el porcentaje correspondiente
  const sueldoNuevo = Number((sueldoActual * (1 + porcentaje / 100)).toFixed(2));
  return { sueldoNuevo, porcentaje };
};

// Crear un nuevo empleado
export const crearEmpleado = async(req, res) =>{
  try {
    const { nombre, antiguedad, sueldoActual } = req.body;
    if (!nombre) {
      return res.status(400).json({ message: "nombre es requerido" });
    }
    if (antiguedad === undefined && sueldoActual === undefined) {
      return res.status(400).json({ message: "No pueden ir valores indefinidos" });
    }

    const { sueldoNuevo, porcentaje } = calcularNuevoSalario(antiguedad, sueldoActual);

    const empleado = await Empleado.create({nombre, antiguedad, sueldoActual, sueldoNuevo});
    console.log(`Empleado ${nombre} creado con exito, su porcentaje de aumento es ${porcentaje}%`);

    return res.status(201).json({ empleado, porcentaje });
  } catch (e) {
    console.error("Error al crear el empleado", e.message);
    res.status(500).json({message: "Error interno del servidor"});
  }
};

// Obtener todos los empleados
export const obtenerEmpleados = async(_req, res) =>{
  try {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
  } catch (e) {
    console.error("Error al obtener los empleados", e.message);
    res.status(500).json({message: "Error interno del servidor"});
  }
};


// Obtener por ID
export const obtenerEmpleadoPorId = async(req, res) =>{
    try{
        const empleado = await Empleado.findById(req.params.id);
        if(!empleado){
            return  res.status(404).json({message: "Empleado no encontrado"});
        }
        res.status(200).json(empleado);
    }catch(e){
        console.error("Error al obtener el empleado", e.message);
        res.status(500).json({message: "Error interno del servidor"});
    }
};

// actualizar empleado
export const actualizarEmpleado = async(req, res) =>{
    try{
        const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!empleadoActualizado){
            return res.status(404).json({message: "Empleado no encontrado"});
        }
        res.status(200).json(empleadoActualizado);
    }catch(e){
        console.error("Error al actualizar el empleado", e.message);
        res.status(500).json({message: "Error interno del servidor"});
    }
};

// eliminar empleado
export const eliminarEmpleado = async(req, res) =>{
    try{
        const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
        if(!empleadoEliminado){
            return res.status(404).json({message: "Empleado no encontrado"});
        }
        res.status(200).json({message: "Empleado eliminado correctamente"});
    }catch(e){
        console.error("Error al eliminar el empleado", e.message);
        res.status(500).json({message: "Error interno del servidor"});
    }
};

