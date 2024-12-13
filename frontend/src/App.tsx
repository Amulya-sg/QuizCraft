// import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Question from "./pages/Chat";
// import Signup from "./pages/Signup";
// import NotFound from "./pages/NotFound";
// import { useAuth } from "./context/AuthContext";

// function App() {
//   const auth = useAuth();
//   console.log(useAuth()?.isLoggedIn);
//   return (
//     <main>
//       <Header/>
//       <Routes>
//         <Route path= "/" element ={<Home/>} />
//         <Route path= "/login" element ={<Login/>} />
//         <Route path= "/signup" element ={<Signup/>} />
//         {auth?.isLoggedIn && auth.user && (
//           <Route path="/chat" element={<Question />} />
//         )}
//         <Route path= "*" element ={<NotFound/>} />
//       </Routes>
//     </main>
//   );
// }

// export default App



import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Question from "./pages/Chat";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import About from "./pages/About";
import Contact from "./pages/Contact";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4f46e5',
    },
    secondary: {
      main: '#e0e7ff',
    },
    background: {
      default: '#f0f4f8',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  const auth = useAuth();
  console.log(useAuth()?.isLoggedIn);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          {auth?.isLoggedIn && auth.user && (
            <Route path="/chat" element={<Question />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;