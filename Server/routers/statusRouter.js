import { Router } from "express";
import db from '../connection.js';

const statusRouter = new Router()

statusRouter.get("/api/status", (req, res) => {
    db.query('SELECT DISTINCT status_description from status order by status_description;', (err, rows, fields) => {
        if (err) throw err
        res.send({ status: rows })
    })
})

statusRouter.get("/api/statusId", (req, res) => {
    db.query('SELECT DISTINCT status_id ,status_description from status order by status_description;', (err, rows, fields) => {
        if (err) throw err
        res.send({ status: rows })
    })
})


export default statusRouter