import React from 'react';

export default function RestaurantList({ restaurants }) {
    return (
        <ul>
            {restaurants.map(restaurantName => (
                <li key={restaurantName}>{restaurantName}</li>
            ))}
        </ul>
    );
}
