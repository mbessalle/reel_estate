import React, { useState, useEffect } from "react";

//https://reactjs.org/docs/faq-ajax.html
export default function ScheduleViewing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [ListingAddresses, setAddress] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data);
          setAddress(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <label htmlFor="addresses">Listing addresses:</label>
        <select name="adresses" id="addresses">
          {ListingAddresses.map((address) => (
            <option key={address.id}>
              {address.address.street} {address.address.number},
              {address.address.city}
            </option>
          ))}
        </select>
        <br></br>
        <label htmlFor="name">Name:</label>
        <input type="text" id="fname" name="fname" />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" />
        <br />
        <br />
        <label htmlFor="start">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
        ></input>
      </div>
    );
  }
}
