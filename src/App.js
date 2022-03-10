//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigator } from "./components/Navigator";
import { Home } from "./components/Home";
import Historical from "./components/historical/Historical";
import { Container } from "react-bootstrap";
import { About } from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historical/:symbol" element={<Historical />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
