import { Router } from "express";

import { getAllCollections, createCollection, getCollectionById } from "../controllers/collections.controllers";

const router = Router()

router.get('/collections', getAllCollections)
router.get('/collections/:id', getCollectionById)
router.post('/collections', createCollection)

export default router