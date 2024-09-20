import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res
        .json()
        .then((data) => setUsers(data?.map((user) => user.name)))
        .catch(() => setError("Error in fetching users"))
    );
  }, []);

  return (
    <div>
      <h1>user</h1>
      {error && <p>{error}</p>}
      {users?.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </div>
  );
};

export default UsersList;
