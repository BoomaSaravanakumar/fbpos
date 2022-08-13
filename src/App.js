import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route , Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./componets/dashboard1"
import Dinein from "./componets/dinein"
import Login from "./componets/login"
import Kitchen from "./componets/kitchen"
import Header from "./componets/header"
import Menu from "./componets/menulist"
import Billing from "./componets/billing"
import Order from "./componets/order"
import Report from "./componets/report"
import BBQ from "./componets/bbq"
import Payment from './componets/payment';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/dashboard" element={ <Dashboard/>}  />
        <Route path="/dinein" element={<><Header/><Dinein/></>} />
        <Route path="/kitchen" element={<><Header/><Kitchen /></>} />
        <Route path="/menu/:id" element={<><Header/><Menu/></>} />
        <Route path="/billing" element={<><Header/><Billing/></>} />
        <Route path="/Order" element={<><Header/><Order/></>} />
        <Route path="/bbq" element={<><Header/><BBQ/></>} />
        <Route path="/report" element={<><Header/><Report/></>} />
        <Route path="/payment" element={<><Header/><Payment/></>} />
        <Route path="/*" element={ <Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
