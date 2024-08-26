import { model, Schema, Types } from "mongoose"

const periodoSchema = Schema({
    anio: {
        required: true,
        type: Number
    },
    mes: {
        required: true,
        type: Number
    },
    periodo: [
        {
            type: Types.ObjectId,
            ref: 'contratos'
        }
    ]
}, {
    timestamps: true
})

periodoSchema.index({ anio: 1, mes: 1 }, { unique: true });

const Model = model('periodos', periodoSchema)

export default Model;