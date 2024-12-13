// import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// const Logo = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         marginRight: "auto",
//         alignItems: "center",
//         gap: "15px",
//       }}
//     >
//       <Link to={"/"}>
//         <img
//           src="kmitlogo.png"
//           alt="KMIT"
//           width={"30px"}
//           height={"30px"}
//           className="image-inverted"
//         />
//         </Link>{" "}
//       <Typography
//         sx={{
//           display: { md: "block", sm: "none", xs: "none" },
//           mr: "auto",
//           fontWeight: "800",
//           textShadow: "2px 2px 20px #000",
//         }}
//       >
//         <span style={{ fontSize: "20px" }}>KMIT</span>-Groq
//       </Typography>
//     </div>
//   );
// };

// export default Logo;



// // import React from 'react';
// import { Link } from "react-router-dom";
// import { Typography, Box } from "@mui/material";

// const Logo = () => {
//   return (
//     <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//       <Link to="/">
//         <img
//           src="kmitlogo.png"
//           alt="KMIT"
//           style={{ width: "30px", height: "30px", filter: "invert(1)" }}
//         />
//       </Link>
//       <Typography
//         variant="h6"
//         sx={{
//           display: { md: "block", sm: "none", xs: "none" },
//           fontWeight: 800,
//           letterSpacing: 1,
//         }}
//       >
//         <span>Quiz</span>Craft
//       </Typography>
//     </Box>
//   );
// };

// export default Logo;



import React from 'react';
import { Typography, Box } from "@mui/material";

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 2, 
        cursor: 'pointer' 
      }} 
      onClick={onClick}
    >
      <img
        src="kmitlogo.png"
        alt="KMIT"
        style={{ width: "250px", height: "65px" }}
      />
      <Typography
        variant="h6"
        sx={{
          color:"primary.main",
          display: { md: "block", sm: "none", xs: "none" },
          fontWeight: 800,
          letterSpacing: 1,
        }}
      >
        {/* <span>Quiz</span>Craft */}
      </Typography>
    </Box>
  );
};

export default Logo;

