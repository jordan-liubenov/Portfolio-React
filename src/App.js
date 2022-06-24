import "./style/App.css";

import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Intro></Intro>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default App;

{/* <Projects></Projects> */}