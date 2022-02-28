import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Navigator } from './components/Navigator';
import { Home } from './components/Home';
import { Historical } from './components/Historical';
import { Tweets } from './components/Tweets';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navigator />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
