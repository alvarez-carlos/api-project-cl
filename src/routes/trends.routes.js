import { Router } from "express";

import { getAllTrends, createTrend, getTrendById } from "../controllers/trends.controllers";

const router = Router()

router.get('/trends', getAllTrends)
router.get('/trends/:id', getTrendById)
router.post('/trends', createTrend)

export default router