import { Router } from "express";
import db from '../connection.js';

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
    console.log(req.body.rating)
    let country = req.body.country
    let distributor = req.body.distributor;
    let rating = req.body.rating;

    if (country === '') {
        country = '%' + country + '%'
    }

    if (distributor === '') {
        distributor = '%' + distributor + '%'
    }

    if (rating === '') {
        rating = '%' + rating + '%'
    }

    let movieName = '%' + req.body.movieName + '%'


    db.query(`SELECT * from premieres
    inner join countries c on premieres.fk_country = c.country_id
    inner join censorships c2 on premieres.fk_censorship = c2.censorship_id
    inner join distributors d on premieres.fk_distributør = d.distributor_id
    where movie_title like ? AND
    premiere_year between ? and ? AND
    Country_name like ? AND
    distributor_name like ? and
    rating like ?
    `, [movieName, req.body.yearStart, req.body.yearEnd, country, distributor, rating], (err, rows, fields) => {
        if (err) throw err
        res.send({ movies: rows })
    })
})
export default movieRouter