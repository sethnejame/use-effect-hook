import React, { useState, useEffect } from "react";
import { Container, Button, Row } from "reactstrap";
import axios from "axios";

const FunctionBasedComponent = () => {
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  // we have to pull out the async function from the old componentDidMount
  // because we can't have an async inside useEffect
  const fetchUsers = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setUsers(response.data);
  };

  return (
    <Container className="user-list">
      <h1>My Contacts:</h1>
    </Container>
  );
};

export default FunctionBasedComponent;
