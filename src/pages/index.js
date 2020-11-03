import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Grid } from "@material-ui/core";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "src/pages/index.css";
function RdContent(){
    return (
        <div className="content">
            <Grid>
            <Paper elevation={10} className="content-paper">
            <Typography variant="h3" component="h3">
                Hello World!
            </Typography>
            <Typography variant="h6" component="h6">
                This is a body.
            </Typography>
            </Paper>
            </Grid>
            
        </div>
    )
}
ReactDOM.render(<Banner/>,document.getElementById('banner'));
ReactDOM.render(<RdContent/>,document.getElementById("content"));
