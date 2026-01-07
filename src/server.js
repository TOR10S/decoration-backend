import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import decorationsRouter from "./routes/decorations.js";
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export const startServer = () => {
const app = express();
app.use(cors());
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);
app.use(
  express.json({
    type: ['application/json', 'application/vnd.api+json'],
  }),
);

app.use(decorationsRouter);
app.use("", notFoundHandler);
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`hello, ${PORT}`);
});

};
