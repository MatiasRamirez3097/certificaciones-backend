import { model, Schema, Types } from "mongoose"

const contratoSchema = Schema({
    tarea: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    plazoEjecucion: {
        type: Number,
        required: true
    },

    periodo: {
        type: Types.ObjectId,
        ref: 'periodos',
        required: true
    },

    contratoUrl: {
        type: String
    },

    cooperativa:
    {
        type: Types.ObjectId,
        ref: 'cooperativas',
        required: true
    },
    //MONTO se carga despues
    monto:
    {
        type: Number,
        required: false
    },

    //despues
    numeroNota:
    {
        type: String
    },

    notaUrl:
    {
        type: String
    },
    //despues
    numeroOrden:
    {
        type: String
    },

    //despues
    numeroExpediente: {
        type: String
    },

    movimientos: [
        {
            type: Types.ObjectId,
            ref: 'movimientos'
        }
    ],

    montoFacturado: {
        type: Number
    },

    nroNotaCertificado: {
        type: Number
    }
    //OBSERVACIONES 
    /*
        tipo
        descripcion
        fecha
    */
}, {
    timestamps: true
})

const Model = model('contratos', contratoSchema)

export default Model;