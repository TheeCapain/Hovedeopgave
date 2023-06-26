import express from 'express';
import cors from 'cors';
import biografRouter from './routers/biografRouter.js';
import adresseRouter from './routers/adresseRouter.js';
import statusRouter from './routers/statusRouter.js';
import movieRouter from './routers/movieRouter.js';
import countryRouter from './routers/countryRouter.js';
import ratingRouter from './routers/ratingRouter.js';
import distributorRouter from './routers/distributorRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use(biografRouter);
app.use(adresseRouter);
app.use(statusRouter)
app.use(movieRouter)
app.use(countryRouter)
app.use(ratingRouter)
app.use(distributorRouter)
app.use(userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server running on localhost port", PORT))