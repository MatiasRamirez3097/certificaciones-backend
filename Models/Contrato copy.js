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
        ref: 'periodos'
    },

    cooperativa:
    {
        type: Types.ObjectId,
        ref: 'cooperativas'
    },
    //MONTO se carga despues
    monto:
    {
        type: Types.Number,
        required: false
    },
    //DESPUES
    entregaDdjj:
    {
        //fecha
    },
    //despues
    elevacionPedido:
    {
        //fecha
    },
    //despues
    numeroNota:
    {
        type: Types.String
    },
    //despues
    fechaRecibidoPedido: {
        type: Types.D
    },
    //despues
    nrodeOrden:
    {
        type: Types.String
    },
    //despues
    fechaRetiraCooperativaContrato: {
        //fecha
    },
    //despues
    fechaCooperativaEntrgaContrato: {
        //fecha
    },
    //despues
    fechaElevacionContrato: {

    },
    //despues
    nroExpediente: {
        type: Types.String
    },

    fechaRecibidoExpediente: {
        //fecha
    },
    /*
        MOVIMIENTOS
        -tipo RECHAZADO
        -fecha 
        -observacion AUSENCIA DEL RESPONSABLE
    */
    //despues
    reciboHojaRuta:
    {
        //fecha
    },
    retiroCertificado: {
        //fecha
    },
    entregaCertificado: {
        //fecha
    },

    fechaFactura: {
        //fecha
    },

    montoFacturado: {
        //numero con coma
    },
    elevacionCertificado: {
        //fecha
    },
    nroNotaCertificado: {
        //string
    }
    /*

        ESTADO CONTRATO
        -ANULADO ()
        -PENDIENTE (ROJO)
        -EN CURSO (CELESTE)
        -FINALIZADO (VERDE)
    */
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