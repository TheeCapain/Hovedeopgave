import { Router } from "express";
import db from '../database/connection.js';
import { comparePassword, hashPassword } from "../middleware/auth.js";


const userRouter = new Router()

userRouter.get("/api/users", (req, res) => {
    db.query('SELECT * from users;', (err, rows, fields) => {
        if (err) throw err
        res.send({ status: rows })
    })
})

userRouter.post("/api/login", async (req, res) => {
    const [user,_] = db.execute('SELECT * from users where user_name = ?;', [req.body.username])
    console.log(user)

    if (user) {
        if (await comparePassword(req.body.password, user.user_password))
            res.send({ message: "All is good" })
    }
})

userRouter.post("/api/users", async (req, res) => {

    let test = await hashPassword(req.body.password)


    db.query('INSERT INTO users(user_name, user_password) VALUES (?,?);', [req.body.userName, test], (err, rows, fields) => {
        if (err) throw err
        res.send({ status: rows })
    })
})


export default userRouter