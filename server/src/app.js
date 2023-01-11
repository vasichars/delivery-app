import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from './middleware/morgan.js';
import router from './startup/router.js';
import error from './middleware/error.js';

const app = express();

app.use(helmet());
app.use(morgan);
app.use(express.json());
app.use(router);
app.use(error);

export default app;