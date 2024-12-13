// import { TextField } from "@mui/material";
// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// type Props = {
//     name: string;
//     type: string;
//     label: string;
// };




// export const CustomizedInput = (props: Props) => {
//   return (
//       <TextField
//         margin="normal"
//         InputLabelProps={{ style: { color: "white" } }}
//         name={props.name}
//         label={props.label}
//         type={props.type}
//         InputProps={{
//           style: {
//             width: "400px",
//             borderRadius: 10,
//             fontSize: 20,
//             color: "white",
//           },
//         }}
//       />
//     );
//   };

    
// export const CustomizedDropDown = (props: Props) => {
//   const [Type, setType] = React.useState('');
//   const handleChange = (event:SelectChangeEvent) => {
//     setType(event.target.value as string);
//   };
//       return (
//         <FormControl fullWidth>
//         <InputLabel id="Topic" >Topic</InputLabel>
//         <Select
//           labelId="topic"
//           id="topic"
//           value={Type}
//           label={props.label}
//           name={props.name}
//           onChange={handleChange}
//           sx={{color:"white"}}
//           MenuProps={{
//             PaperProps: {
//               style: {
//                 maxHeight: 48 * 4.5 + 8,
//                 width: 250,
//                 color:"white",
//                 backgroundColor:"black"
//               },
//             }}}
//         >
//           <MenuItem value='Quiz'>Quiz</MenuItem>
//           <MenuItem value='True or False'>True or False</MenuItem>
//           <MenuItem value='Short Answer'>Short Answer</MenuItem>
//           <MenuItem value='Fill in the blanks'>Fill in the blanks</MenuItem>
//         </Select>
//       </FormControl>
//     );
//   };


import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
};

export const CustomizedInput = (props: Props) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      name={props.name}
      label={props.label}
      type={props.type}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
    />
  );
};

export const CustomizedDropDown = (props: Props) => {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id={`${props.name}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${props.name}-label`}
        id={props.name}
        value={type}
        label={props.label}
        name={props.name}
        onChange={handleChange}
      >
        <MenuItem value='Quiz'>MCQs</MenuItem>
        <MenuItem value='True or False'>True or False</MenuItem>
        <MenuItem value='Short Answer'>Short Answer</MenuItem>
        <MenuItem value='Fill in the blanks'>Fill in the blanks</MenuItem>
      </Select>
    </FormControl>
  );
};

