import express from 'express';
import { addToCart, deleteCartItem, getCartItems } from '../controllers/cartItems.controller.js';

const router=express.Router()

router.post('/addToCart',addToCart)
router.get('/getCartItems',getCartItems)
router.delete('/deleteCartItem/:id',deleteCartItem)

export default router;
