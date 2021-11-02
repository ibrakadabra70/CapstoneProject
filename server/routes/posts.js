import express from 'express';

import {getForms, sendForms} from '../controllers/posts.js';


const router = express.Router();

router.get('/', getForms );
router.post('/', sendForms);

export default router;