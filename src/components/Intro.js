import { Component } from "react";

import "../style/Intro.css";
import mongoPng from "../img/mongo.png";

class Intro extends Component {
    render() {
        return (
            <section id="Name">
                <h1 className="me">Jordan Liubenov</h1>
                <p className="aboutMe">Web Developer</p>
                <div className="tools">
                    <i className="fab fa-js-square fa-5x"></i>
                    <i className="fab fa-react fa-5x"></i>
                    <i className="fab fa-node fa-5x"></i>
                    <i className="fab fa-html5 fa-5x"></i>
                    <i className="fab fa-css3-alt fa-5x"></i>
                    <img
                        className="mongoIcon"
                        src={mongoPng}
                        width="80"
                        height="80"
                        alt="Something seems to be missing..."
                    ></img>
                </div>
            </section>
        );
    }
}

export default Intro;

// <i class="fab fa-angular fa-5x"></i>
