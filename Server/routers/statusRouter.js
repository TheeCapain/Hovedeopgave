import { Router } from "express";
import db from '../database/connection.js';

const statusRouter = new Router()

statusRouter.get("/api/status", (req, res) => {
    db.query('SELECT DISTINCT status_description from status order by status_description;', (err, rows, fields) => {
        if (err) throw err
        res.send({ status: rows })
    })
})


export default statusRouter