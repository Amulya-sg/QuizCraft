import React from 'react';
import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We'd love to hear from you! If you have any questions, suggestions, or just want to say hello, please feel free to reach out using the form below.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="message"
            label="Your Message"
            id="message"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "primary.main", color: "background.paper" }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;

