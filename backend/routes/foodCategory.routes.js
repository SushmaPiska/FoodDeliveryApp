import express from 'express';
import { getFoodCategories, uploadCategories } from '../controllers/foodCategory.controller.js';

const router=express.Router()

router.post('/uploadCategories', uploadCategories);
router.get('/getFoodCategories',getFoodCategories);

export default router;