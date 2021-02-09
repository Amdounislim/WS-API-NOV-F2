import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from './UserCard'

const Users = () => {
  const [listUsers, setListUsers] = useState([]);

  //get List Users
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="row">
      {listUsers.map((el, i) => (
        <UserCard user={el} key={i} />
      ))}
    </div>
  );
};

export default Users;
