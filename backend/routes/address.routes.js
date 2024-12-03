import express from 'express';
import { addAddress, getAddresses, deleteAddress, updateAddress } from '../controllers/address.controller.js';
import { authenticateToken } from '../middleware/authToken.js';

const router=express.Router()

router.post('/addAddress',addAddress)
router.get('/getAddresses',authenticateToken, getAddresses)
router.delete('/deleteAddress/:id',authenticateToken,deleteAddress)
router.post('/updateAddress/:id',authenticateToken,updateAddress)

export default router;
