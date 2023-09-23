import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.randomuser.me/api?results=1");
        const data = await response.json();
        setPerson(data.results);
        console.log("Fetched data:", data); // Log the data to the console
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {person.map((user, index) => (
        <ul key={index}>
          <li>First name: {user.name.first}</li>
          <li>Last name: {user.name.last}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
