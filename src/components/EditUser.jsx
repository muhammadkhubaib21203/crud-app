import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, editUser } from "../service/api";

import { useState, useEffect } from "react";

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };

  return (
    <FormGroup sx={{ width: "50%", margin: "5% auto 0 auto" }}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl sx={{ marginTop: "20px" }}>
        <Button onClick={() => addUserDetails()} variant="contained">
          Edit User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
