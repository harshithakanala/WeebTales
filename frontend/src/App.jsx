import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Sidebar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 ml-[250px]">
          <Topbar />
          <div className="px-6 mt-16 flex-1">
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:blogId" element={<Blog />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* Footer should be outside the content and take full width */}
      <Footer />
    </div>
  );
};

export default App;
