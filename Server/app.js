import express from 'express';
import cors from 'cors';
import biografRouter from './routers/biografRouter.js';
import adresseRouter from './routers/adresseRouter.js';
import statusRouter from './routers/statusRouter.js';

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use(biografRouter);
app.use(adresseRouter);
app.use(statusRouter)

const PORT = process.env.PORT || 8080



app.listen(PORT, () => console.log("Server running on port", PORT))