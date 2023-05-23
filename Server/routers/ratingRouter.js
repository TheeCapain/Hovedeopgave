import { Router } from "express";
import db from '../connection.js';

const ratingRouter = new Router()

ratingRouter.get("/api/rating", (req, res) => {
    db.query('select distinct rating from censorships order by rating ;', (err, rows, fields) => {
        if (err) throw err
        res.send({ ratings: rows })
    })
})


export default ratingRouter