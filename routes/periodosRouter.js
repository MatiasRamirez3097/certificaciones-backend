import { Router } from "express";
import periodosController from "../controllers/periodosController.js";

const { createOne, getAll, getOne, updateOne } = periodosController

const periodosRouter = Router();

periodosRouter.get(['/', '/:search'], getAll)
periodosRouter.get('/getbyid/:id', getOne)
periodosRouter.post('/create', createOne)
periodosRouter.put('/update/:id', updateOne)

export default periodosRouter;