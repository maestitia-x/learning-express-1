import express from 'express'
import checkAuth from './middleware/checkAuth.js'
import loggerMiddleWare from "./middleware/logger.js";
import mainRoutes from "./routes/mainRoutes.js";
import mathRoutes from "./routes/mathRoutes.js";



// middleware
const app = express()
const PORT = 3000;


app.use(express.json())

app.use(loggerMiddleWare)

// get routes
app.use('/', mainRoutes)



// routes POST
app.use('/math', mathRoutes)





app.use((req, res) => {
    res.status(404).json("Route bulunamadi")
})


app.use((err, req, res) => {
    console.log(err)
    res.status(500).json({message:"Sunucu hatasi!", error: err.message})
})


app.listen(PORT, (error)=>{
    if (error) {
        throw error
    }
    console.log(`Server ${PORT} portunda calisiyor`)
})

