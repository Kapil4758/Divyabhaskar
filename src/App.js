import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from "./containers/Video";
import Sidebar from "./components/Sidebar";
import Leftsidebar from "./containers/Leftsidebar";
import Singleblog from "./containers/Singleblog";
import Sports from "./containers/Sports";
import Entertainment from "./containers/Entertainment";
import India from "./containers/India";
import World from "./containers/World";
import Astrology from "./containers/Astrology";
import { ToastContainer } from "react-toastify";

const App = () => {

  const searchData = ["મારું શહેર", "મારું ગુજરાત", "ઓરિજિનલ", "ઈન્ડિયા", "વર્લ્ડ", "એન્ટરટેઇનમેન્ટ", "કોરોના", "ધર્મ દર્શન", "યુટિલિટી", "લાઇફસ્ટાઇલ", "બિઝનેસ", "સ્પોર્ટ્સ", "મેગેઝિન", "અમદાવાદ", "સુરત", "રાજકોટ", "વડોદરા", "ભાવનગર", "અબડાસા", "એસેસરીઝ", "અહા જિંદગી", "અંબાજી", "અમીરગઢ", "આમોદ", "અમરેલી", "આણંદ", "અંજાર", "આંકલાવ", "અંકલેશ્વર", "અરવલ્લી (મોડાસા)", "ઓટોમોબાઈલ", "બાબરા", "બગસરા", "બાલાસિનોર", "બાંટવા", "બારડોલી", "બરવાળા", "બાવળા", "બાયડ", "બ્યૂટી"];

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header searchData={searchData} />
        <div className="news-content">
          <div className="col-3 right-sidebar" id="rightSidebar">
            <Sidebar />
          </div>
          <div className="col-6">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/video" element={<Video />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/india" element={<India />} />
              <Route path="/world" element={<World />} />
              <Route path="/astrology" element={<Astrology />} />
              <Route path="/singleblog/:index" element={<Singleblog />} />
            </Routes>
          </div>
          <div className="col-3 left-sidebar" id="leftSidebar">
            <Leftsidebar />
          </div>
        </div>
        <ToastContainer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;