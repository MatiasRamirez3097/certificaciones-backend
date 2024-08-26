import { Router } from "express";
import cooperativasController from '../controllers/cooperativasController.js'

const { createOne, getAll, getOne, updateOne } = cooperativasController

const cooperativasRouter = Router();

cooperativasRouter.get(['/', '/:search'], getAll)
cooperativasRouter.get('/getbyid/:id', getOne)
cooperativasRouter.post('/create', createOne)
cooperativasRouter.put('/update/:id', updateOne)

export default cooperativasRouter;