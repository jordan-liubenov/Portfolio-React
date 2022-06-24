import { Component } from "react";

import generator from "../img/generator.png";
import weather from "../img/weather.png";
import timer from "../img/timer.png";

class Projects extends Component {
    render() {
        return (
            <section id="Projects">
                <h1 className="proj">My Projects</h1>
                <p>(Click on them!)</p>
                <div className="projects">
                    <div className="project">
                        <img
                            className="genIMG"
                            src={generator}
                            width="550"
                            height="350"
                            alt="Something seems missing..."
                        ></img>
                    </div>
                    <div className="project">
                        <img
                            className="weatherIMG"
                            src={weather}
                            width="550"
                            height="350"
                            alt="Something seems missing..."
                        ></img>
                    </div>
                    <div className="project">
                        <img
                            className="timerIMG"
                            src={timer}
                            width="550"
                            height="350"
                            alt="Something seems missing..."
                        ></img>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
