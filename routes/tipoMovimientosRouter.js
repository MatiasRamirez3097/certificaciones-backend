import { Router } from "express";
import tipoMovimientosController from "../controllers/tipoMovimientosController.js";

const { createOne, getAll, getOne, updateOne } = tipoMovimientosController

const tipoMovimientosRouter = Router();

tipoMovimientosRouter.get(['/', '/:search'], getAll)
tipoMovimientosRouter.get('/getbyid/:id', getOne)
tipoMovimientosRouter.post('/create', createOne)
tipoMovimientosRouter.put('/update/:id', updateOne)

export default tipoMovimientosRouter;