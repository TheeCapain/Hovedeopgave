import { Router } from "express";
import db from '../connection.js';

const distributorRouter = new Router()

distributorRouter.get("/api/distributors", (req, res) => {
    db.query('SELECT DISTINCT distributor_name from distributors order by distributor_name;', (err, rows, fields) => {
        if (err) throw err
        res.send({ distributors: rows })
    })
})


export default distributorRouter