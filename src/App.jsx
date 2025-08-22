import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Import Pages

import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Homepage";
import ContactPage from "./Pages/Contact page";
import AboutDeePlus from "./Pages/About page";
import TherapyServices from "./Pages/Therapy page";
import FamilyTherapy from "./Pages/Family Therapy page";
import ApproachForm from "./Pages/I Get This page";
import PaymentPage from "./Pages/Payment page";
import MeditationPage from "./Pages/Meditation page";
import DiscoverMeditations from "./Pages/Discover meditation page";
import Login from "./Pages/Login page";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-roboto">
        {/* Header/Navbar */}
        <Navbar />

     
         <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutDeePlus />} />
            <Route path="/contact" element={<ContactPage />} />
             <Route path="/getthis" element={<ApproachForm />} />
            <Route path="/therapy" element={<TherapyServices/>} />
             <Route path="/family" element={<FamilyTherapy/>} />
            
        {/* Example placeholders */}
        <Route path="/individual-therapy" element={<h2>Individual Therapy Page</h2>} />
        <Route path="/couple-therapy" element={<h2>Couple Therapy Page</h2>} />
        <Route path="/group-therapy" element={<h2>Group Therapy Page</h2>} />
        <Route path="/online-therapy" element={<h2>Online Therapy Page</h2>} />
               <Route path="/pay" element={<PaymentPage />} />
                <Route path="/meditate" element={<MeditationPage />} />
                  <Route path="/discover" element={<DiscoverMeditations />} />
            <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
        </main>

       
        <Footer/> 
      </div>
    </Router>
  );
}

export default App;
