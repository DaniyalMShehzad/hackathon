import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { firebaseRedrict, useruid } from "../firebasefunc";
import { ButtonAppBar, Home, Login, SignUp, slick } from "./approuters";

export default function AppRouter(props) {
  const[loader,setLoader]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(()=>useruid(setLoader, dispatch,navigate))
    // console.log(location.state);
  },[])
  // useEffect(()=>{
  //   dispatch(()=>firebaseRedrict( dispatch,navigate))
  //   // console.log(location.state);
  // },[])
  // console.log(window.location.href); 
  return (
    <>
      {/* <Router> */}
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          {/* <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navbar" element={<ButtonAppBar />} />
        </Routes>
      {/* </Router> */}
    </>
  );
}


