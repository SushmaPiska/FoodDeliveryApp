import express from 'express';
import { addPaymentCard, getPaymentCards,deletePaymentCard, updatePaymentCard } from '../controllers/payment.controller.js';

const router=express.Router()

router.post('/addPaymentCard',addPaymentCard)
router.get('/getPaymentCards',getPaymentCards)
router.delete('/deletePaymentCard/:id',deletePaymentCard)
router.post('/updatePaymentCard/:id',updatePaymentCard)

export default router;
