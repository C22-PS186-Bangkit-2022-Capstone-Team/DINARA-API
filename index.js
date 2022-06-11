const express = require("express");
const mysql = require("mysql");
const Pool = require("mysql/lib/Pool");
const app = express();


app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`DINARA REST API listening on port ${port}`);
});

app.get("/", async (req, res) => {
    res.json({ status: "working properly!" });
});

app.get("/:nama", async (req, res) => {
    const query = "SELECT * FROM monument WHERE nama =?";
    pool.query(query, [req.params.nama], (error, results) => {
        if (!results[0]) {
            res.json({ status: " Data Not Found!" });
        } else {
            res.json(results[0]);
        }
    });
});


const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    path: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
});