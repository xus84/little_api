import { Router } from "express";
const router = Router();
import data from '../data';

router.get('/data', (req, res) => {
    res.json(data.products)
     
})

export default router