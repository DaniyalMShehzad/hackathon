import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ButtonAppBar, Home, Login, SignUp, slick } from "./approuters";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/navbar" element={<ButtonAppBar />} />
        </Routes>
      </Router>
    </>
  );
}
