import React, { useState, useEffect } from "react";

export default function ScheduleViewing() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [ListingAddresses, setAddresses] = useState([]);
  const [addressID, setAddressID] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Date, setDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAddresses(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleSubmit = (e) => {
    const address = ListingAddresses[addressID - 1].address;
    setMessage("You have successfully submitted");
    e.preventDefault();
    // prettier-ignore
    console.log(`    Address:       ${address.street} ${address.number}, ${address.city}
    Name:          ${Name}
    Email:         ${Email}
    Phone:         ${Phone}
    Date:          ${Date}`);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="addresses">Listing addresses:</label>
          <select
            name="adresses"
            id="addresses"
            onChange={(e) => setAddressID(e.target.value)}
          >
            {ListingAddresses.map((address) => (
              <option key={address.id} value={address.id}>
                {address.address.street} {address.address.number},
                {address.address.city}
              </option>
            ))}
          </select>
          <br></br>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="start">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <br />
          <br />
          <input type="submit" value="submit"></input>
        </form>
            <h3>{message}</h3>
      </main>
    );
  }
}
