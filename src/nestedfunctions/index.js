import React, { useEffect } from "react";

const MultipleFunction = () => {
  const function1 = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log("Data fetched from API:", data);
      function2(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Process the data in function2
  const function2 = (users) => {
    const filteredUsers = users.filter((user) => user.id < 5);
    console.log("Filtered users:", filteredUsers);
    function3(filteredUsers);
  };

  // Final processing in function3
  const function3 = (processedData) => {
    console.log("Final processed data:", processedData);
  };

  useEffect(() => {
    function1();
  }, []);

  return <div>hello</div>;
};

export default MultipleFunction;
