import { Router } from "express";
import db from '../database/connection.js';

const countryRouter = new Router()


countryRouter.get("/api/country", (req, res) => {
    db.query('select distinct Country_name from countries order by Country_name;', (err, rows, fields) => {
        if (err) throw err
        res.send({ countries: rows })
    })
})

export default countryRouter