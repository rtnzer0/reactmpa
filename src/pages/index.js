import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "@material-ui/core";
import Banner from "../components/Banner";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "src/pages/index.css";
function RdContent(){
    return (
        <div>
            <div className="booty">
                <p className="booty" id="booty"> stuff </p>
            </div>
            <Paper elevation={10} className="content-paper">
            <Typography variant="h1" component="h1">
                Hello World!
            </Typography>
            <Typography variant="h6" component="h6">
                This is a body.
            </Typography>
            </Paper>
        </div>
    )
}
ReactDOM.render(<Banner/>,document.getElementById('banner'));
ReactDOM.render(<RdContent/>,document.getElementById("content"));
