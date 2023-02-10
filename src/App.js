import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Signup from './pages/signup'
import Step1 from './pages/step1'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/step1" element={<Step1 />} />
      </Routes>
    </Router>
  );
}

export default App;
