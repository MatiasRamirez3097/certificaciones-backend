import { model, Schema, Types } from "mongoose"

const movimientoSchema = Schema({
    fecha: {
        required: true,
        type: Date
    },
    tipoMovimiento: {
        required: true,
        type: Types.ObjectId,
        ref: 'tipoMovimientos'
    },
    desc: {
        required: false,
        type: String
    }
}, {
    timestamps: true
})

const Model = model('movimientos', movimientoSchema)

export default Model;