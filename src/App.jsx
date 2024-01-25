import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Activities from './pages/activities/Activities';
import ActivityDetail from './pages/activityDetail/ActivityDetail';
import HomePage from './pages/homepage/homepage';
import Login from './pages/login/Login';
import Courses from './pages/courses/courses';
import StuOrgs from './pages/stu-orgs/stuorgs'
import MauaLocation from "./pages/maua-location/MauaLocation";
import CollegeInfo from './pages/college-info/collegeInfo';
import React, {useState} from 'react';
import Navbar from './project-components/navbar';
import InteractiveMap from './pages/interactiveMap/InteractiveMap';
import Announcement from './pages/announcement/Announcement';
import StuAnnouncement from './pages/announcementstudent/StuAnnouncement';
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';

const ProtectedRoute = ({ element }) => {
  const regexAluno = /^\d{2}\.\d{5}-\d@maua\.br$/;
  const { accounts } = useMsal();
  if ( useIsAuthenticated() && !regexAluno.test(accounts[0].username) && !(accounts[0].username === "print_teste@maua.br")) {
    return (
      <div>
        {/* TODO: Notification Screen */}
      </div>
    )
  }
  else {
    return (
      <div>
        <AuthenticatedTemplate>
          {element}
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          {// Removido-24-01
          /* <Navigate to="/" replace /> */}
          {element}
        </UnauthenticatedTemplate>
      </div>
    );
  }
};

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
          {// Removido-24-01
          /* <Route
            path="/activities"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><Activities /></>} />}
          />
          <Route
            path="/activity/:id"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><ActivityDetail /></>} />}
          /> */}
          <Route
            path="/homepage"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><HomePage /></>} />}
          />
          <Route
            path="/courses"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><Courses /></>} />}
          />
          <Route
            path="/stuorgs"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><StuOrgs /></>} />}
          />
          {// Removido-24-01
          /* <Route
            path="/interactive-map"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><InteractiveMap /></>} />}
          /> */}
          <Route
            path="/maua-location"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><MauaLocation /></>} />}
          />
          <Route
            path="/college-info"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><CollegeInfo /></>} />}
          />
          {// Removido-24-01
          /* <Route
            path="/stuannouncement"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><StuAnnouncement /></>} />}
          />
          <Route
            path="/announcement"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><Announcement /></>} />}
          /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
