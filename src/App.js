import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Activities from './pages/activities/Activities';
import ActivityDetail from './pages/activityDetail/ActivityDetail';

function App() {
  return (
    <Router>
      <main className="content">
        {/* <Navigation /> */}

        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" component={ActivityDetail} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
