// import { Box, useMediaQuery, useTheme } from "@mui/material";
// import TypingAnim from "../components/typer/TypingAnim";

// const Home = () => {
//   const theme = useTheme();
//   const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
//   return (
//     <Box width={"100%"} height={"100%"}>
//       <Box
//         sx={{
//           display: "flex",
//           width: "100%",
//           flexDirection: "column",
//           alignItems: "center",
//           mx: "auto",
//           mt: 3,
//         }}
//       >
//         <Box>
//           <TypingAnim />
//         </Box>
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             flexDirection: { md: "row", xs: "column", sm: "column" },
//             gap: 5,
//             my: 10,
//           }}
//         >
//           <img
//             src="robot.png"
//             alt="robot"
//             style={{ width: "200px", margin: "auto" }}
//           />
//           <img
//             className="image-inverted"
//             src="kmitlogo.png"
//             alt="KMIT"
//             style={{ width: "200px", margin: "auto" }}
//           />
//         </Box>
//         <Box sx={{ display: "flex", mx: "auto" }}>
//           <img
//             src="chat.png"
//             alt="chatbot"
//             style={{
//               display: "flex",
//               margin: "auto",
//               width: isBelowMd ? "80%" : "60%",
//               borderRadius: 20,
//               boxShadow: "-5px -5px 105px #64f3d5",
//               marginTop: 20,
//               marginBottom: 20,
//               padding: 10,
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


//--------------------main---------------------

// import { Box, Typography, useMediaQuery, useTheme, Container, Grid, Paper } from "@mui/material";
// import TypingAnim from "../components/typer/TypingAnim";

// const Home = () => {
//   const theme = useTheme();
//   const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Container maxWidth="lg">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h2" align="center" gutterBottom>
//           Welcome to AI Chat
//         </Typography>
//         <Box sx={{ my: 4 }}>
//           <TypingAnim />
//         </Box>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
//               <img
//                 src="robot.png"
//                 alt="robot"
//                 style={{ width: "200px", maxWidth: "100%", height: "auto" }}
//               />
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
//               <img
//                 className="image-inverted"
//                 src="kmitlogo.png"
//                 alt="KMIT"
//                 style={{ width: "200px", maxWidth: "100%", height: "auto" }}
//               />
//             </Paper>
//           </Grid>
//         </Grid>
//         <Box sx={{ mt: 4 }}>
//           <Paper 
//             elevation={6} 
//             sx={{
//               p: 2,
//               borderRadius: 4,
//               boxShadow: '0 0 20px rgba(100, 243, 213, 0.5)',
//             }}
//           >
//             <img
//               src="chat.png"
//               alt="chatbot"
//               style={{
//                 width: isBelowMd ? "100%" : "80%",
//                 maxWidth: "100%",
//                 height: "auto",
//                 display: "block",
//                 margin: "auto",
//               }}
//             />
//           </Paper>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Home;




// import { Box, Typography, useMediaQuery, useTheme, Container, Grid, Paper, Button } from "@mui/material";
// import TypingAnim from "../components/typer/TypingAnim";
// import { Link } from "react-router-dom";
// const Home = () => {
//   const theme = useTheme();
//   const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Container maxWidth="lg">
//       <Box sx={{ my: 4 }}>
//         <Typography 
//           variant="h2" 
//           align="center" 
//           gutterBottom
//           sx={{
//             background: 'linear-gradient(45deg, #64F3D5, #6466F1)',
//             backgroundClip: 'text',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             mb: 4
//           }}
//         >
//           Welcome to Quiz Craft
//         </Typography>
//         <Box sx={{ my: 4 }}>
//           <TypingAnim />
//         </Box>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12}>
//             <Paper 
//               elevation={3} 
//               sx={{ 
//                 p: 4, 
//                 textAlign: 'center',
//                 background: 'rgba(100, 243, 213, 0.1)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(100, 243, 213, 0.2)',
//               }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 component={Link} to="/login"
//                 sx={{
//                   py: 2,
//                   px: 6,
//                   fontSize: '1.2rem',
//                   borderRadius: '50px',
//                   background: 'linear-gradient(45deg, #64F3D5, #6466F1)',
//                   boxShadow: '0 8px 20px rgba(100, 243, 213, 0.3)',
//                   transition: 'all 0.3s ease',
//                   '&:hover': {
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 12px 24px rgba(100, 243, 213, 0.4)',
//                   }
//                 }}
//               >
//                 Generate
//               </Button>
//             </Paper>
//           </Grid>
//         </Grid>
//         <Box sx={{ mt: 4 }}>
//           <Paper 
//             elevation={6} 
//             sx={{
//               p: 4,
//               borderRadius: 4,
//               boxShadow: '0 0 20px rgba(100, 243, 213, 0.5)',
//               background: 'rgba(100, 243, 213, 0.1)',
//               backdropFilter: 'blur(10px)',
//               border: '1px solid rgba(100, 243, 213, 0.2)',
//             }}
//           >
//             <Typography variant="h5" align="center" sx={{ color: 'text.secondary' }}>
//               Start generating amazing content with AI
//             </Typography>
//           </Paper>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Home;


import React from 'react';
import { Box, Typography, Container, Button, Paper, Grid } from "@mui/material";
import { styled } from '@mui/system';
import { Link as RouterLink } from "react-router-dom";

const GradientTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #64F3D5, #6466F1)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  animation: 'gradient 5s ease infinite',
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #64F3D5, #6466F1)',
  borderRadius: '50px',
  padding: theme.spacing(2, 6),
  fontSize: '1.2rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 15px rgba(100, 243, 213, 0.3)',
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 8, textAlign: 'center' }}>
        <GradientTypography variant="h2" as="h1" gutterBottom>
          Welcome to Quiz Craft
        </GradientTypography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Create engaging quizzes with the power of AI
        </Typography>
        {/* <StyledButton
          variant="contained"
          component={RouterLink}
          to="/login"
          sx={{ mt: 4 }}
        >
          Get Started
        </StyledButton> */}
        <RouterLink to="/login">
  <StyledButton variant="contained" sx={{ mt: 4 }}>
    Get Started
  </StyledButton>
</RouterLink>
        <Grid container spacing={4} sx={{ mt: 8 }}>
          <Grid item xs={12} sm={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h6" gutterBottom>
                AI-Powered
              </Typography>
              <Typography variant="body2">
                Leverage advanced AI to generate quizzes on any topic
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h6" gutterBottom>
                Customizable
              </Typography>
              <Typography variant="body2">
                Tailor quizzes to fit your specific needs and preferences
              </Typography>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureCard elevation={3}>
              <Typography variant="h6" gutterBottom>
                Easy to Use
              </Typography>
              <Typography variant="body2">
                Intuitive interface for quick and effortless quiz creation
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;

