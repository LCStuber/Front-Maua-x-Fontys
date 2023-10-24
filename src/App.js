import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <Router>
      <main className="content">
        {/* <Navigation /> */}

        <Routes>
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
