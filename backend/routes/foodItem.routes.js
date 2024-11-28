import express from 'express';
import { getFoodItems, uploadFoodItems } from '../controllers/foodItem.controller.js';

const router=express.Router()

router.post('/uploadFoodItems',uploadFoodItems)
router.post('/getFoodItems',getFoodItems)

export default router;
