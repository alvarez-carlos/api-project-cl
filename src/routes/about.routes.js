import { Router } from "express";

import { getAllAbout, createAbout, getAboutById } from "../controllers/about.controllers";

const router = Router()

router.get('/about', getAllAbout)
router.get('/about/:id', getAboutById)
router.post('/about', createAbout)

export default router