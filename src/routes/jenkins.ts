import express from 'express';
import {getSuccess} from '../controllers/jenkins';

const router = express.Router();

router.get('/',getSuccess);

export default router;