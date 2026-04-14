import express from 'express'
import checkAuth from "../middleware/checkAuth.js";
import {homeHandler, healthHandler, crashHandler, adminHandler} from "../controllers/mainController.js";

const router = express.Router()

// routes GET
router.get('/admin', checkAuth,adminHandler )

router.get("/", homeHandler)

router.get("/health", healthHandler )

// Route CRASH
router.get('/crash', crashHandler)

export default router
