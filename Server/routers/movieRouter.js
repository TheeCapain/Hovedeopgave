import { Router } from "express";
import db from '../database/connection.js';

const movieRouter = new Router()


movieRouter.get("/api/premieres", (req, res) => {
    db.query(`Select distributor_name, Country_name, rating, Premiere_period, movie_title, original_title,premiere_year from premieres
    inner join  distributors d on premieres.fk_distributør = d.distributor_id
    inner join countries c on premieres.fk_country = c.country_id
    inner join censorships c2 on premieres.fk_censorship = c2.censorship_id order by premiere_year LIMIT 1000`, (err, rows, fields) => {
        if (err) throw err
        res.send({ movies: rows })
    })
})

movieRouter.post("/api/premieres/search", (req, res) => {
    console.log(req.body)
    let movieName = req.body.movieName + '%'

    db.query(`SELECT * from premieres
    inner join countries c on premieres.fk_country = c.country_id
    inner join censorships c2 on premieres.fk_censorship = c2.censorship_id
    inner join distributors d on premieres.fk_distributør = d.distributor_id
    where movie_title like ? AND
    premiere_year between ? and ? AND
    Country_name = ? AND
    rating = ?
    `, [movieName, req.body.yearStart, req.body.yearEnd, req.body.country, req.body.rating], (err, rows, fields) => {
        if (err) throw err
        res.send({ movies: rows })
    })
})
export default movieRouter