import { model, Schema, Types } from "mongoose"

const cooperativaSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    cuit: {
        type: String,
        required: true,
        unique: true
    },
    matriculaNacional: {
        type: String,
        required: true,
        unique: true
    },
    matriculaProvincial: {
        type: String,
        required: true,
        unique: true
    },
    domicilio: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    contratos: [
        {
            type: Types.ObjectId,
            ref: 'contratos'
        }
    ]
}, {
    timestamps: true
})

const Model = model('cooperativas', cooperativaSchema)

export default Model;