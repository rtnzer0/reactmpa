import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Banner from "../components/Banner";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import "../pages/signin.css"
// import pg from "pg";
// const {Pool} = require("pg");
// const pool = new Pool(
//     {
//         user: "paraxic",
//         host: "db.localhost",
//         database: 'users',
//         password:'test',
//         port: 3211,
//     }
// );

function SignInForm()
{
    return (

        <div className="sign-in-box">
            <Container maxWidth="sm">
                <Paper variant="outlined" elevation={10}>
                <h1>Sign In</h1>
                <Grid spacing={8}>
                    <Container maxWidth="sm">
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Username"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" type="password" label="Password"/>
                    </Grid>
                    <Grid item xs={0}>
                        <div className="sign-in-button">
                            <Button variant="contained">Sign In</Button>
                        </div>
                    </Grid>
                    </Container>
                </Grid>
                
                </Paper>
            </Container>
        </div>

    )
}

ReactDOM.render(<Banner/>,document.getElementById('banner'));
ReactDOM.render(<SignInForm/>,document.getElementById('sign-in-form'));