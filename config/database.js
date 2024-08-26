import mongoose from 'mongoose'

mongoose.connect("mongodb://127.0.0.1:27017/certificaciones")
    .then(() => {
        console.log("Database connected")
    })
    .catch(() => {
        console.log("Connection failed")
    })