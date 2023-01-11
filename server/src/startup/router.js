import express from 'express';
import ApiError from '../errors/ApiError.js';
import homeRouter from '../routes/home.js';

const router = express.Router();

router.use('/', homeRouter);
router.use((req, res) => ApiError.notFound(`${req.method} ${req.url}: Page Not Found!`));

export default router;