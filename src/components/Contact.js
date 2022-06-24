import { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <section id="Contact">
                <h1>Say hi!</h1>
                <div className="icon">
                    <a href="https://github.com/jordan-liubenov">
                        <i className="fab fa-github fa-5x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-liubenov-a92b81228/">
                        <i className="fab fa-linkedin fa-5x"></i>
                    </a>
                    <a>
                        <i
                            id="envelope"
                           
                            className="fas fa-envelope-square fa-5x"
                        >
                        </i>
                    </a>
                </div>

                <p id="text" className="adresses">
                    Find me on the following platforms!
                </p>
                <p id="email" className="mail"></p>
            </section>
        );
    }
}

// onClick="displayEmail()"

export default Contact;
