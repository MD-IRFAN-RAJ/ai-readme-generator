import './App.css';
import { Analytics } from "@vercel/analytics/react"; // ✅ Use react version (not next)
import GeneratorForm from './components/GeneratorForm.jsx';
import Example from './pages/Examples/Example.jsx';
import Pricing from './pages/Pricing/Pricing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GeneratorForm />} />
          <Route path="/examples" element={<Example />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Optional: 404 Page */}
          {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
        </Routes>
        {/* ✅ Keep analytics inside main div */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;

