import { model, Schema, Types } from "mongoose"

const tipoMovimientoSchema = Schema({
    nombre: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})

const Model = model('tipoMovimientos', tipoMovimientoSchema)

export default Model;