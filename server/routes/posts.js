import express from 'express';

import {getForms, sendForms, deletePost} from '../controllers/posts.js';


const router = express.Router();

router.get('/', getForms );
router.post('/', sendForms);
router.delete('/:id', deletePost);

export default router;