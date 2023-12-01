import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Activities from './pages/activities/Activities';
import ActivityDetail from './pages/activityDetail/ActivityDetail';
import HomePage from './pages/homepage/homepage';
import Login from './pages/login/Login';
import Courses from './pages/courses/courses';
import StuOrgs from './pages/stu-orgs/stuorgs'
import MauaLocation from "./pages/maua-location/MauaLocation";
import React, {useState} from 'react';
import Navbar from './project-components/navbar';
import InteractiveMap from './pages/interactiveMap/InteractiveMap';
import Announcement from './pages/announcement/Announcement';
import StuAnnouncement from './pages/announcementstudent/StuAnnouncement';


function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  return (
    <Router>
      <main className="content">
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/activities" element={<><Navbar openDrawer={toggleDrawer} /><Activities /></>} />
          <Route path="/activity/:id" element={<><Navbar openDrawer={toggleDrawer} /><ActivityDetail /></>} />
          <Route path="/homepage" element={<><Navbar openDrawer={toggleDrawer} /><HomePage /></>} />
          <Route path="/courses" element={<><Navbar openDrawer={toggleDrawer} /><Courses /></>} />
          <Route path="/stuorgs" element={<><Navbar openDrawer={toggleDrawer} /><StuOrgs /></>} />
          <Route path="/interactive-map" element={<><Navbar openDrawer={toggleDrawer} /><InteractiveMap /></>} />
          <Route path="/maua-location" element = {<><Navbar openDrawer={toggleDrawer} /><MauaLocation /></>} />
          <Route path="/stuannouncement" element = {<><Navbar openDrawer={toggleDrawer} /><StuAnnouncement /> </>} />
          <Route path="/announcement" element = {<><Navbar openDrawer={toggleDrawer} /><Announcement /> </>} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
