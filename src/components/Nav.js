import { Component } from "react";

import "../style/NavBar.css";

class Nav extends Component {
    render() {
        return (
            <nav class="navbar">
                <div class="emblem">
                    <h4 class="myPort">My Portfolio</h4>
                </div>
                <ul class="links">
                    <li>
                        <a href="#Name">Home</a>
                    </li>

                    <li>
                        <a href="#About">About</a>
                    </li>

                    <li>
                        <a href="#Projects">Projects</a>
                    </li>

                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
