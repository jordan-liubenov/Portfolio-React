import "./style/App.css";

import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Intro></Intro>
            <About></About>
        </div>
    );
}

export default App;
