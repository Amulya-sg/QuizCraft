// import { Box, Button, Typography } from "@mui/material";
// import {IoIosLogIn} from "react-icons/io";
// import  React ,{ useEffect } from "react";
// import {CustomizedInput} from "../components/shared/CustomizedInput";
// import { useAuth } from "../context/AuthContext";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// const Login = () =>{
//     const navigate = useNavigate();
//     const auth = useAuth();
//     const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
//         const email = formData.get("email") as string;
//         const password = formData.get("password") as string;
//         try {
//             toast.loading("Logging In",{id:"login"});
//             await auth?.login(email,password)
//             toast.success("Logged In successfully",{id:"login"});
//         } catch (error) {
//             console.log(error);
//             toast.error("Logging In Failed",{id:"login"});
//         }


//     }
//     useEffect(() => {
//         if (auth?.user) {
//           return navigate("/chat");
//         }
//       }, [auth]);
//     return <Box width={"100%"} height={"100%"} display="flex" flex={1}>
//         <Box padding={8} mt={8} display={{md:"flex",sm:"none",xs:"none"}}>
//             <img src="airobot.png" alt= "Robot" style={{width: "400px"}}/>
//         </Box>
//         <Box display={"flex"} flex={{xs:1,md:0.5}} justifyContent={'center'} alignItems={'center'} padding={2} ml={"auto"} mt={16}>
//             <form
//                 onSubmit={handleSubmit} 
//                 style = {{
//                 margin:'auto',
//                 padding:"30px",
//                 boxShadow:"10px 10px 20px #000",
//                 borderRadius:"10px",
//                 border:"none", 
//             }}>
//                 <Box sx={{display:"flex" , flexDirection:"column", justifyContent:"center"}}>
//                     <Typography variant="h4" textAlign="center" padding={2} fontWeight={600}>Login</Typography>
//                     <CustomizedInput type = "email" name = "email" label = "email"/>
//                     <CustomizedInput type = "password" name = "password" label = "Password"/>
//                     <Button type="submit" sx={{px:2,py:1,mt:2,width:"400px",borderRadius:2,bgcolor:"#00fffc",":hover":{bgcolor: "white",color:"black"}}} endIcon={<IoIosLogIn/>}>Login</Button>
//                 </Box>


//             </form>
//         </Box>

//     </Box>
// };

// export default Login;




import React, { useEffect } from "react";
import { Box, Button, Typography, Container, Paper, Avatar } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import { CustomizedInput } from "../components/shared/CustomizedInput";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Logging In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Logged In successfully", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Logging In Failed", { id: "login" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ mt: 8, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <IoIosLogIn />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <CustomizedInput type="text" name="email" label="Roll Number" />
          <CustomizedInput type="password" name="password" label="Password" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
