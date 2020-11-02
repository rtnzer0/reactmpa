import React from "react"
import pg from "pg";
const {Pool} = require("pg");
const pool = new Pool(
    {
        user: "paraxic",
        host: "db.localhost",
        database: 'users',
        password:'test',
        port: 3211,
    }
);