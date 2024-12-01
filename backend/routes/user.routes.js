import express from "express";
import { signup,signin, updateProfile } from "../controllers/user.controller.js";


const router=express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/updateProfile/:id',updateProfile)


export default router;