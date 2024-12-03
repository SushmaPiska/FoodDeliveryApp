import express from 'express';
import { addToCart, deleteCartItem, getCartItems } from '../controllers/cartItems.controller.js';
import { authenticateToken } from '../middleware/authToken.js';

const router=express.Router()

router.post('/addToCart',authenticateToken,addToCart)
router.get('/getCartItems',authenticateToken,getCartItems)
router.delete('/deleteCartItem/:id',authenticateToken,deleteCartItem)

export default router;
