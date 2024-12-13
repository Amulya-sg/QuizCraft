// const NotFound = () =>{
//     return<div>Page NotFound</div>
// };

// export default NotFound;


import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" align="center" marginBottom={4}>
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;

