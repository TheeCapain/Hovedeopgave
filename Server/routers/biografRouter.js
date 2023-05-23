import { Router } from "express";
import db from '../connection.js';

const biografRouter = new Router();

biografRouter.get("/api/test", (req, res) => {
    db.query(`Select * from status`, (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })
})

biografRouter.get("/api/biograf", (req, res) => {
    db.query(`SELECT cinema_id,cinema_name, cinema_alt_names, cinema_opened, cinema_closed,status_id,status_description,address_id, address_road, address_city, address_postcode, status_description
    FROM biorama.cinemas 
    INNER JOIN biorama.addresses 
    ON address_id = fk_address_id 
    INNER JOIN biorama.status 
    ON status_id = fk_status_id
    ORDER BY cinema_name;;`, (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })
})



biografRouter.post("/api/biograf/id", (req, res) => {
    console.log("test")
    console.log(req.body)
    db.query(`SELECT cinema_name, cinema_opened, cinema_closed, address_road, address_city, address_postcode, status_description 
    FROM cinemas 
    INNER JOIN addresses 
    ON address_id = fk_address_id 
    INNER JOIN status 
    ON status_id = fk_status_id
    where cinema_id = ?
    ORDER BY fk_address_id;`, [req.body.cinemaId], (err, rows, fields) => {
        if (err) throw err
        res.send({ biografer: rows })
    })
})

biografRouter.post("/api/biograf", (req, res) => {
    console.log(req.body)

    db.query('INSERT INTO cinemas(cinema_name, cinema_alt_names, cinema_opened, cinema_closed, fk_status_id, fk_address_id) VALUES (?,?,?,?,?,?);', [req.body.cinemaName, req.body.cinemaAlt, req.body.opened, req.body.closed, req.body.statusId, req.body.addressId], (err, rows, fields) => {
        if (err) {
            res.status(400).send({
                message: "Could not create cinema"
            })
        }
        res.send({ status: rows })
    })
})

biografRouter.put("/api/biograf/update", (req, res) => {
    console.log(req.body)



    res.send({
        message: "Updated"
    })
})


biografRouter.post("/api/biograf/search", (req, res) => {
    try {

        console.log(req.body)
        if (req.body.cinemaName === '' || req.body.cinemaName === undefined) {
            req.body.cinemaName = '%'
        }

        if (req.body.yearStart === '') {
            req.body.yearStart = '1900'
        }
        if (req.body.yearEnd === '') {
            req.body.yearEnd = '2023'
        }

        let cinemaname = '%' + req.body.cinemaName + '%'
        let status = req.body.status + '%'
        let postnr = req.body.postnr + '%'
        let yearStart = req.body.yearStart;
        let yearEnd = req.body.yearEnd;

        db.query(`SELECT cinema_name, cinema_opened, cinema_closed, address_road, address_city, address_postcode, status_description
    FROM cinemas
    INNER JOIN biorama.addresses ON address_id = fk_address_id
    INNER JOIN biorama.status ON status_id = fk_status_id
    WHERE cinema_name LIKE (?)
    AND (YEAR(STR_TO_DATE(cinema_opened, '%d.%m.%Y')) between (?) and (?) or YEAR(STR_TO_DATE(cinema_opened, '%d.%m.%Y')) < (?))
    AND (YEAR(STR_TO_DATE(cinema_closed, '%d.%m.%Y'))between (?) and (?) or YEAR(STR_TO_DATE(cinema_closed, '%d.%m.%Y')) > (?))
    AND address_postcode like (?)
    AND status_description like (?) ;`, [cinemaname, yearStart, yearEnd, yearStart, yearStart, yearEnd, yearEnd, postnr, status], (err, rows, fields) => {

            if (err) throw err
            res.send({ biografer: rows })
        })

    } catch (error) {
        console.log(error)
    }

})

biografRouter.post("/api/biograf/year", (req, res) => {
    db.query("SELECT * FROM cinemas where YEAR(STR_TO_DATE(cinema_opened, '%d.%m.%Y')) between (?) AND (?) order by YEAR(cinema_opened) desc",
        [req.body.yearStart, req.body.yearEnd], (err, rows, fields) => {
            if (err) throw err
            res.send({ biografer: rows })
        })
})

biografRouter.delete("/api/biograf", (req, res) => {
    console.log("Deleted")
})

export default biografRouter