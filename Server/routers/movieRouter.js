import { Router } from "express";
import db from '../database/connection.js';

const movieRouter = new Router()


movieRouter.get("/api/movies", (req, res) => {
    db.query(`SELECT * FROM filmpremiere`, (err, rows, fields) => {
        if (err) throw err
        res.send({ movies: rows })
    })
})

export default movieRouter