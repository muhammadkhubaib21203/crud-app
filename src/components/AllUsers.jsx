import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getUsers, deleteUser } from "../service/api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };
  
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  };

  return (
    <Table
      sx={{
        width: "90%",
        margin: "50px auto 0 auto",
      }}
    >
      <TableHead>
        <TableRow sx={{ backgroundColor: "#000" }}>
          <TableCell sx={{ color: "#fff", fontSize: "20px" }}>Id</TableCell>
          <TableCell sx={{ color: "#fff", fontSize: "20px" }}>Name</TableCell>
          <TableCell sx={{ color: "#fff", fontSize: "20px" }}>
            Username
          </TableCell>
          <TableCell sx={{ color: "#fff", fontSize: "20px" }}>Email</TableCell>
          <TableCell sx={{ color: "#fff", fontSize: "20px" }}>Phone</TableCell>
          <TableCell sx={{ color: "#fff", fontSize: "20px" }}>Company Name</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ border: "1px solid #e0e0e0" }}>
        {users.map((user) => (
          <TableRow>
            <TableCell sx={{ fontSize: "18px" }}>{user.id}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>{user.name}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>{user.username}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>{user.email}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>{user.phone}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>{user.company}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                sx={{ marginRight: "20px" }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
