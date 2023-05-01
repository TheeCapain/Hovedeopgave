import { Router } from "express";
import db from '../database/connection.js';

const biografRouter = new Router();

biografRouter.get("/api/biograf", (req, res) => {
    db.query('SELECT cinema_name, cinema_opened, cinema_closed, cinema_status, cinema_alt_name, address_road, address_city, address_postcode from biorama.cinemas inner join biorama.addresses ON address_id = fk_address_id', (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})
biografRouter.post("/api/biograf/search", (req, res) => {
    let cinemaname = "%" + req.body.movietitle + "%"
    db.query('SELECT * from cinemas WHERE cinema_name LIKE (?)', [cinemaname], (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})

biografRouter.post("/api/biograf/year", (req, res) => {
    db.query("SELECT * FROM cinemas where YEAR(STR_TO_DATE(cinema_opened, '%d.%m.%Y')) between (?) AND (?) order by YEAR(cinema_opened) desc",
        [req.body.yearStart, req.body.yearEnd], (err, rows, fields) => {
            if (err) throw err
            res.send({ biografer: rows })
        })

})

export default biografRouter