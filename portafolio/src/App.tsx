import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Container, Grid } from "@mui/material";

// Components
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Profile from "./components/layouts/Profile";
import AccessibilityOptions from "./components/accessibility/AccessibilityOptions";

// Pages
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("route-fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("route-fadeOut");
  }, [location, displayLocation]);

  return (
    <Container sx={{ mt: { xs: "30px", md: "60px" }, mb: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Header />
          <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
              if (transitionStage === "route-fadeOut") {
                setTransistionStage("route-fadeIn");
                setDisplayLocation(location);
              }
            }}
          >
            <Routes location={displayLocation}>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Grid>
      </Grid>
      <AccessibilityOptions />
    </Container>
  );
};

export default App;
