import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../components/button";
import InputText from "../components/input";
import { changepassword } from "../config/firebasefunc";
import { useNavigate } from "react-router";
import { Input } from 'antd';
import Png from "./png.gif"
import { Result } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
export default function ForgetPassword() {
  const[loader,setLoader]=useState()
  const [loader2, setLoader2] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
//   let login = (e) => {
//     e.preventDefault();
//     let obj = {
//       email,
//       password,
//     };
//     dispatch((dispatch) => userLogin(dispatch, obj, navigate,setLoader,setLoader2));
//   };
const forpassword =(e)=>{
  e.preventDefault();
  dispatch((dispatch) => changepassword(dispatch,navigate,setLoader,setLoader2));
}

  // let forgpassword=()=>{
  //   dispatch((dispatch) => forgetpassword(dispatch, navigate));
  // }
  // console.log(loader2);
  return (
    <>
        {
      loader ?
        //  <h1>LOADING......</h1>
        <img src={Png} />

      //   :
      //   loader2?
      //   <Result
      //   status="warning"
      //   title="There are some problems with your operation."
      //   extra={
      //     <Button type="primary" key="console">
      //       Go to login page
      //     </Button>
      //   }
      // />
      :
      <div className="login">
        <div className="login2">
          <form className="formLogin" onSubmit={(e) => forpassword(e)}>
            <div className="login3">
              <h3 className="signinh4">Change Password</h3>
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
                <label className="EmailLabel">Change Password</label>
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Change Password"
                  className="enterEmail"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              <Button className="LoginButton" onClick={(e) => (e)}>Change Password</Button>
              {/* <NavLink className="Navlink" to="/Signup">Signup</NavLink> */}
              {/* forgpassword
              <NavLink className="Navlink" to="/Signup">Signup</NavLink> */}
            </div>
          </form>
        </div>
      </div>
}
    </>
  );
}