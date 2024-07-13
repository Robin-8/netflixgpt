import { Button, Menu, MenuItem } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useEffect } from "react";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { serachMovieView } from "./utils/movieGptSlice";
import { MULTI_LANG } from "./utils/constonts";
import { changeLang } from "./utils/langSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const shwoGptSerch = useSelector((store)=>store.serachGpt.shwoGptSerch)
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/errorPage");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const gtpSerchHandler = () => {
    dispatch(serachMovieView())
  }


  const handilChangLang = (e) => {
      dispatch(changeLang(e.target.value))
  }
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-screen flex justify-between items-center">
      {user && (
        <div className="flex items-center space-x-4">
          
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
       
        </div>
        
      )}
      {user &&(
         <div className="flex space-x-2">
         <PopupState variant="popover" popupId="demo-popup-menu">
           {(popupState) => (
             <React.Fragment>
             {shwoGptSerch &&(
               <select className="bg-gray-600 text-white" onClick={handilChangLang}>
               {MULTI_LANG?.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
                  
             </select>
             )}
                <button className="bg-purple-700 text-white px-4 py-2 rounded" onClick={gtpSerchHandler}>{shwoGptSerch?"Back Home":"GPT search"}</button>
               <Button {...bindTrigger(popupState)}>
                 <img
                   className=" w-10 h-10 "
                   src="https://occ-0-4963-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                   alt="log-icon"
                 ></img>
                  
               </Button>
               <Menu {...bindMenu(popupState)}>
                 <MenuItem onClick={popupState.close}>Profile</MenuItem>
                 <MenuItem onClick={popupState.close}>My account</MenuItem>
                 <MenuItem
                   onClick={() => {
                     popupState.close();
                     handleLogout();
                   }}
                 >
                   Logout
                 </MenuItem>
               </Menu>
             </React.Fragment>
           )}
         </PopupState>
       </div>
      )}
     
    </div>
  );
};

export default Header;
