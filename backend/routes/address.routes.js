import express from 'express';
import { addAddress, getAddresses, deleteAddress } from '../controllers/address.controller.js';

const router=express.Router()

router.post('/addAddress',addAddress)
router.get('/getAddresses',getAddresses)
router.delete('/deleteAddress/:id',deleteAddress)

export default router;
