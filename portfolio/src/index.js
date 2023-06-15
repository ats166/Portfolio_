import React from "react";
import { createRoot } from "react-dom/client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
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
  <HashRouter basename={process.env.PUBLIC_URL}>
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
  </HashRouter>
);

reportWebVitals();
