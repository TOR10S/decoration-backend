import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
const PORT = Number(process.env.PORT);

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
app.get("/",(req, res) => {
    res.json({
        text: "hi"
    });
});

app.use('', (req, res, next) => {
  res.status(404).json({
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
    error: err.message,
  });
});
app.listen(PORT,() => {
    console.log(`hello, ${PORT}`);
});

};
