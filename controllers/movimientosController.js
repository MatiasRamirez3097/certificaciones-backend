import Movimiento from "../Models/Movimiento.js"

const movimientosController = {

    createOne: async (req, res, next) => {
        console.log(req.body)
        let el;
        let success = true;
        let error = null;

        try {
            el = await Movimiento.create(req.body)
        }
        catch (err) {
            console.log(err)
            success = false;
            error = err;
        }
        res.json({
            response: el,
            success,
            error
        })
    },
    deleteOne: async (req, res, next) => {
        const id = req.params.id
        let success = true;
        let error = null;

        try {
            await Cooperativa.findOneAndDelete({ _id: id })
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: "deleted",
            success,
            error
        })
    },
    getOne: async (req, res, next) => {
        const id = req.params.id
        console.log(id)
        let success = true;
        let el;
        let error = null;

        try {
            el = await Cooperativa.findById(id).exec();
        }
        catch (err) {
            console.log(err)
            success = false
            error = err
        }
        console.log(el)
        res.json({
            response: el,
            success,
            error
        })
    },
    getAll: async (req, res, next) => {
        const search = req.params.search ? {
            $or: [{
                nombre: {
                    $regex: req.params.search + ".*", $options: "i"
                }
            },
            {
                cuit: {
                    $regex: req.params.search + ".*", $options: "i"
                }
            },
            {
                matriculaNacional: {
                    $regex: req.params.search + ".*", $options: "i"
                }
            },
            {
                matriculaProvincial: {
                    $regex: req.params.search + ".*", $options: "i"
                }
            },
            {
                domicilio: {
                    $regex: req.params.search + ".*", $options: "i"
                }
            }]
        } : {}
        console.log(search)
        let success = true;
        let els;
        let error = null;

        try {
            els = await Cooperativa.find(
                search
            );
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: els,
            success,
            error
        })

    },
    updateOne: async (req, res, next) => {
        console.log(req.body)
        const id = req.params.id
        let el;
        let success = true;
        let error = null;

        try {
            el = await Cooperativa.findOneAndUpdate({ _id: id }, req.body)
        }
        catch (err) {
            success = false
            error = err
        }
        res.json({
            response: el,
            success,
            error
        })
    }

}

export default movimientosController;