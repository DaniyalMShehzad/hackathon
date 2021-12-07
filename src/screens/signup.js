import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../components/button";
import InputText from "../components/input";
import { signUp } from "../config/firebasefunc";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,onChange } from '@ant-design/icons';
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let signup = (e) => {
    e.preventDefault();
    let obj = {
      email,
      password,
      name,
    };
    dispatch((dispatch)=>signUp(dispatch,obj, navigate));
  };

  return (
    <>
      <div className="SignUp">
        {/* <Navbar /> */}
        <div className="SignUp2">
          <form className="formLogin2"  onSubmit={(e) => signup(e)}>
            <div className="login3">
              <h3 className="signinh4">Sign Up</h3>
              <img className="guestImg" src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg" />
              <div className="setEmail">
                <label className="EmailLabel">User Name</label>
                <InputText
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  type="text"
                  className="enterEmail"
                />
              </div>
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
    </>
  );
}
export default SignUp;
