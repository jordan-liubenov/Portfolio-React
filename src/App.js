import "./style/App.css";

import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Intro></Intro>
            <About></About>
            <Projects></Projects>
        </div>
    );
}

export default App;
