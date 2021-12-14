import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getData, signout, useruid } from '../config/firebasefunc';
import { useEffect, useState } from 'react';
import Png from "./png.gif"
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box } from '@mui/material';
// import Card from './card';
export default function ButtonAppBar() {
  const [loader, setLoader] = useState(false)
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const state = useSelector((e) => e)
  // console.log(state);
  let Logout = () => {
    dispatch(() => signout(navigate, setLoader,));
  };
  // console.log(state);
  let userid = { user: state.uiddata.userid }
  // console.log(userid);
  useEffect(() => {
    dispatch(() => getData(setLoader, dispatch, userid))
    // console.log(location.state);
  }, [])
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {
        loader ?
          //  <h1>LOADING......</h1>
          <img src={Png} />

          :
          // <Box sx={{ flexGrow: 1 }}>
          //   <AppBar position="static">
          //     <Toolbar>
          //       <IconButton
          //         size="large"
          //         edge="start"
          //         color="inherit"
          //         aria-label="menu"
          //         sx={{ mr: 2 }}
          //       >
          //       </IconButton>
          //       <Typography variant="h6" component="div" color='trarnsparent' sx={{ flexGrow: 1 }}>
          //         <h5  >{state.useriddata.userid.name}</h5>
          //       </Typography>
          //       <Button color="inherit"
          //         onClick={}
          //       >sign out</Button>
          //     </Toolbar>
          //   </AppBar>
          // </Box>
          <>
            <Box sx={{ flexGrow: 1 }}>
              {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h5  >{state.useriddata.userid.name}</h5>
                  </Typography>
                  {auth && (
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={Logout}>Sign out</MenuItem>
                      </Menu>
                    </div>
                  )}
                </Toolbar>
              </AppBar>
            </Box> 
            {/* <Card /> */}
          </>
      }
    </>


  );

}
{
/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {


  return (
    
  );
}*/}