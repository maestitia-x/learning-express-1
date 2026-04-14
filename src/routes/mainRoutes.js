import express from 'express'
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router()

// routes GET
router.get('/admin', checkAuth, (req, res)=> {
    res.send("Welcome to the admin page")
})

router.get("/", (req, res) => {
    res.send("Ana Sayfa")
})

router.get("/health", (req, res) => {
    res.send("Server Ayakta")
})

// Route CRASH
router.get('/crash', (req, res)=>{
    throw new Error("Beklenmedik bir hata!")
})

export default router
