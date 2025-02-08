import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/hero/Hero.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Content from "./components/Content/Content.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div id="up" className="container">
              <Header />
              <Hero />
              <div className="divider" />
              <Main />
              <div className="divider" />
              <Footer />
              <a href="#up">
                <button className="icon-keyboard_arrow_up scroll2Top"></button>
              </a>
            </div>
          }
        />
        <Route
          path="/content/:path"
          element={
            <div id="up" className="container">
              <Header />
              <Content />
              <div className="divider" />
              <Footer />
              <a href="#up">
                <button className="icon-keyboard_arrow_up scroll2Top"></button>
              </a>
            </div>
          }
        />

        <Route
          path="/Articles"
          element={
            <div id="up" className="container">
              <Header />
              <Main />
              <Footer />
              <a href="#up">
                <button className="icon-keyboard_arrow_up scroll2Top"></button>
              </a>
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
