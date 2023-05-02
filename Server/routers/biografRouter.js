import { Router } from "express";
import db from '../database/connection.js';

const biografRouter = new Router();

biografRouter.get("/api/biograf", (req, res) => {
    db.query('SELECT cinema_name, cinema_opened, cinema_closed, address_road, address_city, address_postcode, status_description FROM biorama.cinemas INNER JOIN biorama.addresses ON address_id = fk_address_id INNER JOIN biorama.status ON status_id = fk_status_id;', (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })

})
biografRouter.post("/api/biograf/search", (req, res) => {
    if (req.body.movietitle === undefined) {
        req.body.movietitle = ""
    }
    let cinemaname = "%" + req.body.movietitle + "%"
    console.log(cinemaname)

    db.query("SELECT cinema_name, cinema_opened, cinema_closed, address_road, address_city, address_postcode, status_description from cinemas INNER JOIN biorama.addresses ON address_id = fk_address_id INNER JOIN biorama.status ON status_id = fk_status_id WHERE cinema_name LIKE (?) AND YEAR(STR_TO_DATE(cinema_opened, '%d.%m.%Y')) between (?) and (?) AND YEAR(STR_TO_DATE(cinema_closed, '%d.%m.%Y'))<= (?)", [cinemaname, req.body.yearStart, req.body.yearEnd, req.body.yearEnd], (err, rows, fields) => {
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