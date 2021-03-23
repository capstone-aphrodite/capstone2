import React, { useState } from 'react';
import {
  Input,
  InputLabel,
  Button,
  FormControl,
  Typography,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { useStyles } from './Login';
import { Link } from 'react-router-dom';
// import axios from 'axios';

export default function Signup() {
  const [error, setError] = useState('');
  const classes = useStyles();
  function handleSubmit(event) {
    event.preventDefault();
    setError('');
    console.log('CLICKED');
    console.log('email --->', event.target.email.value);
    if (event.target.password.value !== event.target.confirmPassword.value) {
      setError("Oops, it looks like these passwords don't match");
    }
    // axios.get('/api/users', email, password);
  }
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" className={classes.items}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input name="firstName" type="text" className={classes.items} />
        </FormControl>
        <FormControl variant="outlined" className={classes.items}>
          <InputLabel htmlFor="lastName">LastName</InputLabel>
          <Input name="lastName" type="text" className={classes.items} />
        </FormControl>
        <FormControl variant="outlined" className={classes.items}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input name="email" type="text" className={classes.items} />
        </FormControl>

        <FormControl className={classes.items}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" className={classes.items} />
          {error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
        <FormControl className={classes.items}>
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <Input
            name="confirmPassword"
            type="password"
            className={classes.items}
          />
        </FormControl>
        <FormControl className={classes.items}>
          <InputLabel htmlFor="dateOfBirth" shrink>
            Date of Birth
          </InputLabel>
          <TextField
            name="year"
            type="date"
            className={classes.items}
            defaultValue="1985-01-01"
            placeholder="MM/DD/YYYY"
          />
          <FormHelperText>
            {' '}
            Don't worry, we just need to verify your a grown-up
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.items}
          onSubmit={handleSubmit}
          disableElevation
        >
          Create Account
        </Button>
      </form>
      <Typography variant="body2" className={classes.items}>
        Already a member? Click
        <Link to="/login" className={classes.link}>
          here
        </Link>
        to sign up
      </Typography>
    </div>
  );
}
