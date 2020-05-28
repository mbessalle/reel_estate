import React, { useState, useEffect } from "react";
import ListingDisplay from "./ListingDisplay";

export default function Listings(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [Listings, setListings] = useState([]);
  const [minLValue, setMinLValue] = useState(0);
  const [maxLValue, setMaxLValue] = useState(0);
  const [minRValue, setMinRValue] = useState(0);
  const [maxRValue, setMaxRValue] = useState(0);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codaisseur/listings-agents-data/listings"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setListings(data);
          const prices = data
            .map((d) => d.priceEuro / 1e3)
            .sort((a, b) => a - b);
          const floor = data.map((d) => d.m2).sort((a, b) => a - b);

          setMinLValue(prices[0]);
          setMaxLValue(prices[prices.length - 1]);
          setMinRValue(floor[0]);
          setMaxRValue(floor[floor.length - 1]);
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
      <main>
        <h1>Listings</h1>
        <p>
          {minLValue} <input type="range" min={minLValue} max={maxLValue} />{" "}
          {maxLValue}
        </p>
        <p>
          {minRValue} <input type="range" min={minRValue} max={maxRValue} />{" "}
          {maxRValue}
        </p>
        <div>
          {Listings.map((listing) => {
            return (
              <div key={listing.id}>
                <hr />
                <ListingDisplay data={listing} key={listing.id} />
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}
