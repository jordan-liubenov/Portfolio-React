import { Component } from "react";

import "../style/About.css";

class About extends Component {
    render() {
        return (
            <section id="About">
                <h1>About me</h1>
                <p className="pAbout">
                    Hi! I'm Jordan, a creative and passionate programmer and web
                    developer. I have experience working with back-end
                    technologies such as Express.js and MongoDB as well as
                    front-end technologies such as React.js. I am constantly
                    striving to improve and develop my skills further any
                    opportunity I have!
                </p>
            </section>
        );
    }
}

export default About;
