import React from "react";
import ReactDOM from "react-dom";
import "../components/Footer.css";


function Footer()
{
    return (
        <div className="footer-box">
            <div className="footer-content">
            
                <a className="link" href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>

            </div>

        </div>
    );
}

ReactDOM.render(<Footer/>,document.getElementById('footer'));

export default Footer;