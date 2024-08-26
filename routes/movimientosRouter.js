import { Router } from "express";
import movimientosController from "../controllers/movimientosController.js";

const { createOne, getAll, getOne, updateOne } = movimientosController

const movimientosRouter = Router();

movimientosRouter.get(['/', '/:search'], getAll)
movimientosRouter.get('/getbyid/:id', getOne)
movimientosRouter.post('/create', createOne)
movimientosRouter.put('/update/:id', updateOne)

export default movimientosRouter;