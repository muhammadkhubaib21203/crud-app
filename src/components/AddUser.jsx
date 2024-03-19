import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";

import { useState } from "react";

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  };

  return (
    <FormGroup sx={{ width: "50%", margin: "5% auto 0 auto" }}>
      <Typography variant="h4">Add User</Typography>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <Button onClick={() => addUserDetails()} variant="contained">
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddUser;
