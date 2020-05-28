import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AboutUs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [agents, setAgents] = useState([]);

  const { language } = useParams();
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/agents"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAgents(
            data.filter((a) => {
              return a.languages.includes(language);
            })
          );
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log("agents:");
  console.log(agents);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <h1>About Us</h1>
        {agents.map((a) => (
          <div key={a.id}>
            <img src={a.imageUrl}/>
            <h3>
              {a.firstName} {a.lastName}
            </h3>
        <h4>{a.email}</h4>
        <h4>{a.phoneNumber}</h4>
        <h4>{a.motto}</h4>
        <hr/>
          </div>
        ))}
      </main>
    );
  }
}
