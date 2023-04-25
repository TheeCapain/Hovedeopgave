import { Router } from "express";
import db from '../database/connection.js';

const biografRouter = new Router();

biografRouter.get("/api/biograf", (req, res) => {
    db.query('SELECT * from theaterdb.biografer ORDER BY theaterdb.biografer.biograf_postnr', (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})
biografRouter.post("/api/biograf/search", (req, res) => {
    console.log(req.body)
    let cinemaname = "%" + req.body.movietitle + "%"
    db.query('SELECT * from theaterdb.biografer WHERE biograf_navn LIKE (?)', [cinemaname], (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})

export default biografRouter