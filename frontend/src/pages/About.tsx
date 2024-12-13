import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
        Welcome to our AI-powered quiz generator. We are dedicated to transforming the way learners, educators, and professionals create interactive quizzes and assessments.        </Typography>
        <Typography variant="body1" paragraph>
        Our platform leverages cutting-edge artificial intelligence to generate customized quizzes based on your specific topics, and quiz types. Whether you're preparing for a test, a study session, or a knowledge check, we've got you covered.        </Typography>
        <Typography variant="body1" paragraph>
        Founded by a team of passionate tech enthusiasts and educators, our mission is to simplify the process of creating high-quality, engaging, and adaptive quizzes that cater to individual learning needs.        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom color="primary">
            Our Vision
          </Typography>
          <Typography variant="body1">
          To empower learners and educators worldwide with intelligent, dynamic quiz generation tools that enhance knowledge retention and the learning experience.

</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;

