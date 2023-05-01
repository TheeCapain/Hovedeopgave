import { Router } from "express";
import db from '../database/connection.js';

const biografRouter = new Router();

biografRouter.get("/api/biograf", (req, res) => {
    db.query('SELECT * from biografer ORDER BY biograf_postnr', (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})
biografRouter.post("/api/biograf/search", (req, res) => {
    let cinemaname = "%" + req.body.movietitle + "%"
    db.query('SELECT * from biografer WHERE biograf_navn LIKE (?)', [cinemaname], (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})

biografRouter.post("/api/biograf/year", (req, res) => {
    db.query("SELECT * FROM biografer where YEAR(STR_TO_DATE(biograf_åbnet, '%d.%m.%Y')) between (?) AND (?) order by YEAR(biograf_åbnet) desc",
        [req.body.yearStart, req.body.yearEnd], (err, rows, fields) => {
            if (err) throw err
            res.send({ biografer: rows })
        })

})

export default biografRouter