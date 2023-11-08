import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Activities from './pages/activities/Activities';
import ActivityDetail from './pages/activityDetail/ActivityDetail';
import HomePage from './pages/homepage/homepage';
import Courses from './pages/courses/courses';
import StuOrgs from './pages/stu-orgs/stuorgs'
import React, {useState} from 'react';
import Navbar from './project-components/navbar';
import InteractiveMap from './pages/interactiveMap/InteractiveMap';

function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <Router>
      <main className="content">
        <Navbar openDrawer={toggleDrawer}/>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/stuorgs" element={<StuOrgs />} />
          <Route path="/interactive-map" element={<InteractiveMap />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
