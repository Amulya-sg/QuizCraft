// import  AppBar  from "@mui/material/AppBar";
// import { Toolbar } from "@mui/material";
// import Logo from "./shared/Logo";
// import { useAuth } from "../context/AuthContext";
// import NavigationLink from "./shared/NavigationLink";
// const Header = () =>{
//     const auth = useAuth();
//     return (
//         <AppBar sx ={{bgcolor:"transparent",position:"static",boxShadow:"none",}}>
//             <Toolbar sx={{display:"flex"}}>
//                 <Logo/>
//                 <div>
//                     {auth?.isLoggedIn?(
//                         <>
//                             <NavigationLink bg = "#00fffc" to="/chat" text ="Start Interview" textColor="black"/>
//                             <NavigationLink bg = "#51538f" to="/" text ="Logout" textColor="white" onClick={auth.logout}/>
                            
//                         </>
//                         ):(
//                         <>
//                             <NavigationLink bg = "#00fffc" to="/login" text ="Login" textColor="black"/>
//                             <NavigationLink bg="#51538f" textColor="white" to="/signup" text="Signup"/>
//                         </>
//                     )}
//                 </div>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;




// // import React from 'react';
// import AppBar from "@mui/material/AppBar";
// import { Toolbar, Button, Box } from "@mui/material";
// import Logo from "./shared/Logo";
// import { useAuth } from "../context/AuthContext";
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const auth = useAuth();

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Logo />
//         <Box>
//           {auth?.isLoggedIn ? (
//             <>
//               <Button
//                 component={Link}
//                 to="/chat"
//                 variant="contained"
//                 sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
//               >
//                 Start Interview
//               </Button>
//               <Button
//                 onClick={auth.logout}
//                 variant="outlined"
//                 sx={{ color: "primary.main", borderColor: "primary.main" }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/login"
//                 variant="contained"
//                 sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
//               >
//                 Login
//               </Button>
//               <Button
//                 component={Link}
//                 to="/signup"
//                 variant="outlined"
//                 sx={{ color: "primary.main", borderColor: "primary.main" }}
//               >
//                 Signup
//               </Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


// import React from 'react';
// import AppBar from "@mui/material/AppBar";
// import { Toolbar, Button, Box } from "@mui/material";
// import Logo from "./shared/Logo";
// import { useAuth } from "../context/AuthContext";
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const auth = useAuth();

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Logo />
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Button
//             component={Link}
//             to="/about"
//             sx={{ color: "primary.main", mr: 2 }}
//           >
//             About
//           </Button>
//           {/* <Button
//             component={Link}
//             to="/contact"
//             sx={{ color: "primary.main", mr: 2 }}
//           >
//             Contact
//           </Button> */}
//           {auth?.isLoggedIn ? (
//             <>
//               <Button
//                 component={Link}
//                 to="/chat"
//                 variant="contained"
//                 sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
//               >
//                 Generate
//               </Button>
//               <Button
//                 onClick={auth.logout}
//                 variant="outlined"
//                 sx={{ color: "primary.main", borderColor: "primary.main" }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/login"
//                 variant="contained"
//                 sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
//               >
//                 Login
//               </Button>
//               <Button
//                 component={Link}
//                 to="/signup"
//                 variant="outlined"
//                 sx={{ color: "primary.main", borderColor: "primary.main" }}
//               >
//                 Signup
//               </Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;



// import React from 'react';
// import AppBar from "@mui/material/AppBar";
// import { Toolbar, Button, Box } from "@mui/material";
// import Logo from "./shared/Logo";
// import { useAuth } from "../context/AuthContext";
// import { Link } from 'react-router-dom';

// const Header: React.FC = () => {
//   const auth = useAuth();

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Box
//           component={Link}
//           to="/"
//           sx={{ 
//             display: 'flex',
//             alignItems: 'center',
//             textDecoration: 'none',
//             '&:hover': { 
//               backgroundColor: 'transparent' 
//             } 
//           }}
//         >
//           <Logo />
//         </Box>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Button
//             component={Link}
//             to="/about"
//             sx={{ color: "primary.main", mr: 2 }}
//           >
//             About
//           </Button>
//           {auth?.isLoggedIn ? (
//             <>
//               <Button
//                 component={Link}
//                 to="/chat"
//                 variant="contained"
//                 sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
//               >
//                 Generate
//               </Button>
//               <Button
//                 onClick={auth.logout}
//                 variant="outlined"
//                 sx={{ color: "primary.main", borderColor: "primary.main" }}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 component={Link}
//                 to="/login"
//                 variant="contained"
//                 sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
//               >
//                 Login
//               </Button>
//               <Button
//                 component={Link}
//                 to="/signup"
//                 variant="outlined"
//                 sx={{ color: "primary.main", borderColor: "primary.main" }}
//               >
//                 Signup
//               </Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React from 'react';
import AppBar from "@mui/material/AppBar";
import { Toolbar, Button, Box } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo onClick={handleLogoClick} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            component={Link}
            to="/about"
            sx={{ color: "primary.main", mr: 2 }}
          >
            About
          </Button>
          {auth?.isLoggedIn ? (
            <>
              <Button
                component={Link}
                to="/chat"
                variant="contained"
                sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
              >
                Generate
              </Button>
              <Button
                onClick={auth.logout}
                variant="outlined"
                sx={{ color: "primary.main", borderColor: "primary.main" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                sx={{ mr: 2, bgcolor: "primary.main", color: "background.paper" }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="outlined"
                sx={{ color: "primary.main", borderColor: "primary.main" }}
              >
                Signup
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

