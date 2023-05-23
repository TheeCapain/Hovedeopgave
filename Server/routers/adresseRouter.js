import { Router } from "express";
import db from '../connection.js';

const adresseRouter = new Router()


adresseRouter.get("/api/adresse/postnr", (req, res) => {
    db.query('SELECT DISTINCT address_postcode, address_city from addresses ORDER BY address_postcode;', (err, rows, fields) => {
        if (err) throw err
        res.send({ postnr: rows })
    })
})

adresseRouter.get("/api/adresse/postnr/range", (req, res) => {
    console.log(req.body.liste)
    //FOR LOOP IGENNEM LISTE SENDT FRA FRONTEND?
    db.query('SELECT cinema_name, cinema_opened, cinema_closed, address_road, address_city, address_postcode from biorama.cinemas inner join biorama.addresses ON address_id = fk_address_id WHERE address_postcode = 2000;', (err, rows, fields) => {
        if (err) throw err
        res.send({ postnr: rows })
    })
})

export default adresseRouter