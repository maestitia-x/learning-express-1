import express from "express";
import {echoHander, sumHandler} from "../controllers/mathController.js";

const router = express.Router()


router.post("/echo",echoHander )

router.post("/sum", sumHandler)

export default router