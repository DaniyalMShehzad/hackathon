import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, SignUp } from "./approuters";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/:uid" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
