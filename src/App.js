import "./App.css";
import AppRouter from "./config/router";
import { Provider, useDispatch } from "react-redux";
import "./config/firebasefunc"
import 'antd/dist/antd.min.css';
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useruid } from "./config/firebasefunc";
import {  BrowserRouter as Router, } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
