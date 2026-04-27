import express from 'express'
import loggerMiddleWare from "./middleware/logger.js";
import mainRoutes from "./routes/mainRoutes.js";
import mathRoutes from "./routes/mathRoutes.js";
import config from './config.js'


// middleware
const app = express()
const PORT = config.PORT


app.use(express.json())

app.use(loggerMiddleWare)

// get routes
app.use('/', mainRoutes)



// routes POST
app.use('/math', mathRoutes)



-

app.use((req, res) => {
    res.status(404).json({message:"Route Bulunamadi"})
})


app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({message:"Sunucu hatasi!", error: err.message})
})


app.listen(PORT, (error)=>{
    if (error) {
        throw error
    }
    console.log(`${config.APP_NAME} Serveri ${PORT} portunda calisiyor`)
})

