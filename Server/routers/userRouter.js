import { Router } from "express";
import db from '../connection.js';
import { comparePassword, hashPassword } from "../middleware/auth.js";


const userRouter = new Router()

userRouter.get("/api/users", (req, res) => {
    db.query('SELECT * from users;', (err, rows, fields) => {
        if (err) throw err
        res.send({ status: rows })
    })
})

userRouter.post("/api/login", async (req, res) => {

    db.query('SELECT * from users where user_name = (?);', [req.body.username], (err, rows, fields) => {
        if (rows[0].user_password) {
            if (comparePassword(req.body.password, rows[0].user_password))
                console.log("Compared is true")
            res.status(200).send({ user: rows[0] })
        } else {
            res.status(400).send({ user: "Wrong info" })
        }
        if (err) throw err
    })
})

userRouter.post("/api/users", async (req, res) => {
    let test = await hashPassword(req.body.password)
    db.query('INSERT INTO users(user_name, user_password) VALUES (?,?);', [req.body.userName, test], (err, rows, fields) => {
        if (err) throw err
        res.send({ status: rows })
    })
})


export default userRouter