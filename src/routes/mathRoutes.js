import express from "express";
import {echoHandler, sumHandler} from "../controllers/mathController.js";

const router = express.Router()


router.post("/echo",echoHandler )

router.post("/sum", sumHandler)

export default router