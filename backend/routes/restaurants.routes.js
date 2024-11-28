import express from 'express';
import { getRestaurants, uploadRestaurant } from '../controllers/restaurants.controller.js';

const router=express.Router()

router.post('/uploadRestaurant', uploadRestaurant);
router.get('/getRestaurants',getRestaurants);

export default router;