import Header from "./components/header/Header";

import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import WelcomeSection from "./components/welcome/WelcomeSection";
import OrgSection from "./components/org/OrgSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <OrgSection />
      <Footer />
    </div>
  );
}

export default App;
