// import { TypeAnimation } from "react-type-animation";

// const TypingAnim = () => {
//   return (
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed once, initially
//         "Have Quiz Questions Generated With Our AI",
//         1000,
//         "Built By Team G198",
//         2000,
//         "In Your Own Customized Way 💻",
//         1500,
//       ]}
//       speed={50}
//       style={{
//         fontSize: "60px",
//         color: "white",
//         display: "inline-block",
//         textShadow: "1px 1px 20px #000",
//       }}
//       repeat={Infinity}
//     />
//   );
// };

// export default TypingAnim;


// import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { Box, useTheme } from "@mui/material";

const TypingAnim = () => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <TypeAnimation
        sequence={[
          "Have Quiz Questions Generated With Our AI",
          1000,
          "In Your Own Customized Way 💻",
          1500,
        ]}
        speed={50}
        style={{
          fontSize: "2.5rem",
          display: "inline-block",
          color: theme.palette.primary.main,
          textShadow: `1px 1px 20px ${theme.palette.primary.light}`,
        }}
        repeat={Infinity}
      />
    </Box>
  );
};

export default TypingAnim;

