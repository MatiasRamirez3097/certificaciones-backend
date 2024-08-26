import { Router } from "express";
import cooperativasRouter from "./cooperativasRouter.js";
import periodosRouter from "./periodosRouter.js";
import movimientosRouter from "./movimientosRouter.js";
import tipoMovimientosRouter from "./tipoMovimientosRouter.js";
import contratosRouter from "./contratosRouter.js";


const indexRouter = Router();

indexRouter.get('/', (req, res, next) => {
    res.send('its fine')
})

indexRouter.use('/contratos', contratosRouter)
indexRouter.use('/cooperativas', cooperativasRouter)
indexRouter.use('/periodos', periodosRouter)
indexRouter.use('/movimientos', movimientosRouter)
indexRouter.use('/tipomovimientos', tipoMovimientosRouter)

export default indexRouter;