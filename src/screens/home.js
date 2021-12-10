import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import Footer from "./footer";
import Slick from "./slider";
import ButtonAppBar from "./navbar"
function Home() {
  const navigate = useNavigate();
  const dataFromRedux = useSelector((a) => a);
  console.log(dataFromRedux);

  // let goToLogin = () => {
  //   navigate("/login");
  // };
  // let goToSignUp = () => {
  //   navigate("/signup");
  // };

  return (
    <>
          <ButtonAppBar/>
          {/* <Button onClick={goToLogin}>Login</Button> */}
          {/* <Button onClick={goToSignUp}>Sign Up</Button> */}

        {/* <Slick /> */}
        
        {/* <Footer /> */}
    </>
  );
}
export default Home;
