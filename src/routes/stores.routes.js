import { Router } from "express";

import { getAllStores, createStore, getStoreById } from "../controllers/stores.controllers";

const router = Router()

router.get('/stores', getAllStores)
router.get('/stores/:id', getStoreById)
router.post('/stores', createStore)

export default router