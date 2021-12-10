import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../components/button";
import InputText from "../components/input";
import { userLogin } from "../config/firebasefunc";
import { useNavigate } from "react-router";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  let login = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    dispatch((dispatch) => userLogin(dispatch, obj, navigate));
  };


  // let forgpassword=()=>{
  //   dispatch((dispatch) => forgetpassword(dispatch, navigate));
  // }
  return (
    <>
      <div className="login">
        <div className="login2">
          <form className="formLogin" onSubmit={(e) => login(e)}>
            <div className="login3">
              <h3 className="signinh4">Sign in</h3>
              <img className="guestImg" src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg" />
              <div className="setEmail">
                <label className="EmailLabel">Email address</label>
                <InputText
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className="enterEmail"
                />
              </div>
              <div className="setEmail">
                <label className="EmailLabel">Password</label>
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="enterEmail"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              <Button className="LoginBtn">Login</Button>
              <NavLink className="Navlink" to="/Signup">Signup</NavLink>
              {/* forgpassword
              <NavLink className="Navlink" to="/Signup">Signup</NavLink> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;