import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';

const ProtectedRoute = ({ element }) => {
  return (
    <div>
      <AuthenticatedTemplate>
        {element}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Navigate to="/" replace />
      </UnauthenticatedTemplate>
    </div>
  );
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
          <Route
            path="/activities"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><Activities /></>} />}
          />
          <Route
            path="/activity/:id"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><ActivityDetail /></>} />}
          />
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
          <Route
            path="/interactive-map"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><InteractiveMap /></>} />}
          />
          <Route
            path="/maua-location"
            element={<ProtectedRoute element={<><Navbar openDrawer={toggleDrawer} /><MauaLocation /></>} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
