import { Router } from "express";
import db from '../database/connection.js';

const adresseRouter = new Router()


adresseRouter.get("/api/adresse/postnr", (req, res) => {
    db.query('Select address_postcode from addresses ORDER BY address_postcode ASC;', (err, rows, fields) => {
        if (err) throw err
        res.send({ postnr: rows })
    })

})

export default adresseRouter