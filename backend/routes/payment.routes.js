import express from 'express';
import { addPaymentCard, getPaymentCards,deletePaymentCard, updatePaymentCard } from '../controllers/payment.controller.js';
import { authenticateToken } from '../middleware/authToken.js';

const router=express.Router()

router.post('/addPaymentCard',authenticateToken,addPaymentCard)
router.get('/getPaymentCards',authenticateToken,getPaymentCards)
router.delete('/deletePaymentCard/:id',authenticateToken,deletePaymentCard)
router.post('/updatePaymentCard/:id',authenticateToken,updatePaymentCard)

export default router;
