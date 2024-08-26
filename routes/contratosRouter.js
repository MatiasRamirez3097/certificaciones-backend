import { Router } from "express";
import contratosController from "../controllers/contratosController.js";

const { createOne, getAll, getOne, updateOne } = contratosController

const contratosRouter = Router();

contratosRouter.get(['/', '/:search'], getAll)
contratosRouter.get('/getbyid/:id', getOne)
contratosRouter.post('/create', createOne)
contratosRouter.put('/update/:id', updateOne)

export default contratosRouter;