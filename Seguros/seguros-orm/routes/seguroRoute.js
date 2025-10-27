import { Router } from "express";
import {
  crearSeguro,
  listarSeguros,
  buscarSeguroPorId,
  actualizarSeguro,
  eliminarSeguro,
  calcularCuotaSeguro,
} from "../controllers/seguroController.js";

const router = Router();

router.post("/", crearSeguro);
router.get("/", listarSeguros);
router.get("/:id", buscarSeguroPorId);
router.put("/:id", actualizarSeguro);
router.delete("/:id", eliminarSeguro);
router.get("/:id/cuota", calcularCuotaSeguro);

export default router;
