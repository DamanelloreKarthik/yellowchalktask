import { Button } from "components/button";
import React, { useState, useEffect } from "react";

const SelectElement = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  console.log("1111", posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <Button title="getData" onClick={() => fetchUsers()} />
    </div>
  );
};

export default SelectElement;
