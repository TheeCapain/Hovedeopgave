import { Router } from "express";
import db from '../database/connection.js';

const biografRouter = new Router();

biografRouter.get("/api/biograf", (req, res) => {
    db.query('SELECT * from theaterdb.biografer ORDER BY theaterdb.biografer.Postnr', (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})

export default biografRouter