require('dotenv').config()

const express = require("express");
const mysql = require("mysql");

const app = express();
const bodyParser = require('body-parser');
const connection = require('./database')

app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`DINARA REST API is running at:http://localhost:${port}`);
});

app.get("/", async (req, res) => {
    res.json({ status: "working properly!" });
});

app.get('/monument', async (req, res) => {
    connection.query(
        "SELECT * FROM `dinaradb1`.`monument`",
        (error, results, fields) => {
            if (error) throw error;
            res.json(results);
        }
    );
});

app.route("/monument/:id")
    .get((req, res, next) => {
        connection.query(
            "SELECT * FROM `dinaradb1`.`monument` WHERE id = ?", req.params.id,
            (error, results, fields) => {
                if (error) throw error;
                res.json(results);
            }
        );
    });

app.route("/monument/nama")
    .get((req, res, next) => {
        connection.query(
            "SELECT * FROM `dinaradb1`.`monument` WHERE nama = ?", req.params.id,
            (error, results, fields) => {
                if (error) throw error;
                res.json(results);
            }
        );
    });

app.route("/monument/nama")
    .get((req, res, next) => {
        connection.query(
            "SELECT * FROM `dinaradb1`.`monument` WHERE nama = ?", req.params.id,
            (error, results, fields) => {
                if (error) throw error;
                res.json(results);
            }
        );
    });


