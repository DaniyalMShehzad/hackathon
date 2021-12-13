import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import InputText from "../components/input";
import { signUp } from "../config/firebasefunc";
import { Input } from 'antd';
import Png from "./png.gif"
import { Result} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,onChange } from '@ant-design/icons';
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[loader,setLoader]=useState()
  let signup = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
      name,
      address,
      contact,
      country
    };
    dispatch((dispatch)=>signUp(dispatch,obj, navigate,setLoader));
  };

  return (
    <>
        {
      loader ?
        //  <h1>LOADING......</h1>
        <img src={Png} />

        :
      <div className="SignUp">
        {/* <Navbar /> */}
        <div className="SignUp2">
          <form className="formLogin2" onSubmit={(e) => signup(e)}>
            <div className="login3">
              <h3 className="signinh4">Sign Up</h3>
              <div className="setEmail">
                <label className="EmailLabel">User Name</label>
                <InputText
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  type="text"
                  className="enterEmail"
                  required
                />
              </div>
              <div className="setEmail">
                <label className="EmailLabel">Email address</label>
                <InputText
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className="enterEmail"
                  required
                />
              </div>
              <div className="setEmail">
                <label className="EmailLabel">Enter Your Address</label>
                <input className="enterEmail" required placeholder="Address" type="text" onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="setEmail">
                <label className="EmailLabel">Contact</label>
                <input className="enterEmail" placeholder="Contact" required type="number" onChange={(e) => setContact(e.target.value)} />
              </div>
                <div className="setEmail">
                  <label className="EmailLabel">Country</label>
                  <input className="enterEmail" placeholder="Country" required type="text" onChange={(e) => setCountry(e.target.value)} />
                </div>
              <div className="setEmail">
                <label className="EmailLabel">Password</label>
                {/* <Input
                  placeholder="Password"
                  type="password"
                  className="enterEmail"
                /> */}
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="enterEmail"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              <Button className="LoginBtn">sign up</Button>
            </div>
          </form>
        </div>
      </div>
}
    </>
  );
}
export default SignUp;
