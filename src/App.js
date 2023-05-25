import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './About';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/about' element= {<About />} />

        
      </Routes>
    </Router>
  );
}

export default App;
