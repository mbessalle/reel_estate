import React, { useState, useEffect } from "react";
import ListingDisplay from "./ListingDisplay";
import Slider from "./Slider"

export default function Listings(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [Listings, setListings] = useState([]);
// State for  actual sliders
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setListings(data);
          console.log(data);
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
    return (<main>
        <h1>Listings</h1>
        <Slider />
        {Listings.map(listing => (
            <ListingDisplay key={listing.id} data={listing}/>
        ))}
    </main>
        );
  }
}
