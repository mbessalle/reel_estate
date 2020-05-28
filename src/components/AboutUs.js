import React, { useState, useEffect } from "react";

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAgents(data);
          console.log(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(agents);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <h1>About Us</h1>
      </main>
    );
  }
}
