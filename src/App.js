import Footer from "./components/Before-Login/Footer/Footer";
import Home from "./components/Before-Login/Home/Home";
import Navbar from "./components/Before-Login/Navbar/Navbar";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvestorsLogin from "./components/Before-Login/Investor/InvestorsLogin";
import StartupLogin from "./components/Before-Login/Startup/StartupLogin";
import CrowdfundingLogin from "./components/Before-Login/Crowdfunding/CrowdfundingLogin";
import InvestorSignup from "./components/Before-Login/Investor/InvestorSignup";
import StartupSignup from "./components/Before-Login/Startup/StartupSignup";
import Crowdfundingsignup from "./components/Before-Login/Crowdfunding/Crowdfundingsignup";
import BrowseStartup from "./components/Before-Login/Browse Startup/BrowseStartup";
import About from "./components/Before-Login/About/About";
import HomeC from "./components/After-Login/Crowdfunding/Home/HomeC";
import NavbarC from "./components/After-Login/Crowdfunding/Navbar/NavbarC";
function App() {
  const state = localStorage.getItem("state");
  const id = localStorage.getItem("id");
  const section = localStorage.getItem("section");
  if (state === null) {
    return (
      <Router>
        <Navbar />
        <div className="bg-black bg-gradient">
          <Routes>
            <Route
              path={"/crowdfunding/" + id + "/home"}
              element={<HomeC />}
            ></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/investorlogin" element={<InvestorsLogin />} />
            <Route path="/startuplogin" element={<StartupLogin />} />
            <Route path="/crowdfunding" element={<CrowdfundingLogin />} />
            <Route
              path="/crowdfundingsignup"
              element={<Crowdfundingsignup />}
            />
            <Route path="/investorsignup" element={<InvestorSignup />} />
            <Route path="/startupsignup" element={<StartupSignup />} />
            <Route path="/browsestartup" element={<BrowseStartup />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  } else if (state === "true" && section === "crowdfunding") {
    return (
      <>
        <Router>
          <NavbarC />
          <Routes>
            <Route
              path={"/crowdfunding/" + id + "/home"}
              element={<HomeC />}
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
