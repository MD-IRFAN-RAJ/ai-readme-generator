
import './App.css'
import GeneratorForm from './components/GeneratorForm.jsx'
import { Link } from "react-router-dom";
import Example from './pages/Examples/Example.jsx'
import Pricing from './pages/Pricing/Pricing.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GeneratorForm />} />
          <Route path="/examples" element={<Example />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
