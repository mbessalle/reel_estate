import React from 'react'

export default function ListingDisplay(props) {
    const { address, priceEuro, m2, bedRooms } = props.data
    return (
        <div>
         <p>address: {address.city}, {address.street}, {address.number}</p>
         <p>priceEuro: {priceEuro}</p>
         <p>m2: {m2}</p>
         <p>bedRooms: {bedRooms}</p>
        </div>
    )
}
