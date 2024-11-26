import express from 'express';
import { getFoodDeals, uploadDeals } from '../controllers/foodDeal.controller.js';

const router=express.Router()

router.post('/uploadDeals',uploadDeals)
router.get('/getFoodDeals',getFoodDeals)

export default router;
