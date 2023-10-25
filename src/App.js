import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Activities from './pages/activities/Activities';
import ActivityDetail from './pages/activityDetail/ActivityDetail';
import HomePage from './pages/homepage/homepage';
import React, {useState} from 'react';
import Navbar from './project-components/navbar';

function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <Router>
      <main className="content">
        {/* <Navigation /> */}
        <Navbar openDrawer={toggleDrawer}/>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" component={ActivityDetail} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
