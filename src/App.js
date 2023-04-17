import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Platform } from "./pages/Platform";
import {LoginPage } from "./pages/LoginPage";
import {ProjectDetail} from "./pages/ProjectDetail";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AllProjects } from "./pages/AllProjects";
import UserProfile from "./pages/UserProfile";
import { PostProject } from "./pages/PostProject";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="platform" element={<Platform />} />
        <Route path="projects" element={<AllProjects />} />
        <Route path="project/:projectId" element={<ProjectDetail />} />
        <Route path="profile/:username" element={<UserProfile />} />
        <Route path="post-project" element={<PostProject />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
