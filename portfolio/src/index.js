import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import IntroPage from "./pages/IntroPage";
import ProjectPage from "./pages/ProjectPage";
import OtherPage from "./pages/OtherPage";
import DetailPage from "./pages/DetailPage";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<IntroPage />} />
          <Route path="home" element={<MainPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project/:id" element={<DetailPage />} />
          <Route path="other" element={<OtherPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
