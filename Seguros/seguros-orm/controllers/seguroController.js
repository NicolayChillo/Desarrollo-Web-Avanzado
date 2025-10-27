import Seguro from "../models/seguroModel.js"; 

//Crear Seguro
export const crearSeguro = async (req, res) => {
  try {
    const { nombre, montoAceptado } = req.body;

    if (!nombre || !montoAceptado) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const nuevoSeguro = await Seguro.create({ nombre, montoAceptado });

    res.status(201).json(nuevoSeguro);
  } catch (error) {
    res.status(500).json({ message: "Error al crear cliente", error: error.message });

  }
};


//Listar Seguro
export const listarSeguros = async (req, res) => {
  try {
    const seguros = await Seguro.findAll();
    res.status(200).json(seguros);
  } catch (error) {
    res.status(500).json({ message: "Error al listar seguros", error: error.message });
  }
};

//Buscar seguto por ID
export const buscarSeguroPorId = async (req, res) => {
  try {
    const seguro = await Seguro.findByPk(req.params.id);
    if(!seguro) 
    {    
        return res.status(404).json({ message: "Seguro no encontrado" });
    }

    res.json(seguro);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar seguro", error: error.message });
  }
};

//Actualizar seguro
export const actualizarSeguro = async (req, res) => {
  try {
    const seguro = await Seguro.findByPk(req.params.id);
    if (!seguro){
        return res.status(404).json({ message: "Seguro no encontrado" });
    }

    const { nombre, montoAceptado } = req.body;
    await seguro.update({ nombre, montoAceptado });
    res.json(seguro);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar seguro", error: error.message });
  }
};

//Eliminar seguro
export const eliminarSeguro = async (req, res) => {
  try {
    const seguro = await Seguro.findByPk(req.params.id);
    if (!seguro) 
    {
        return res.status(404).json({ message: "Seguro no encontrado" });
    }

    await seguro.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar seguro", error: error.message });
  }
};

//Calcular cuota
export const calcularCuotaSeguro = async (req, res) => {
  try {
    const seguro = await Seguro.findByPk(req.params.id);
    if (!seguro) return res.status(404).json({ message: "Seguro no encontrado" });

    const resultado = seguro.calcularCuota();
    res.json({
      id: cliente.id,
      nombre: cliente.nombre,
      montoAceptado: cliente.montoAceptado,
      ...resultado,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al calcular cuota", error: error.message });
  }
};