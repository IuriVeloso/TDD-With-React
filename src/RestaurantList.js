import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

export default function RestaurantList({ restaurants }) {
    return (
        <Collection header="Restaurants">
            {
                restaurants.length === 0 && (
                    <CollectionItem style={{ color: 'gray' }}> Click the button to add your first restaurant</CollectionItem>
                )
            }
            {restaurants.map(restaurantName => (
                <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
            ))}
        </Collection>
    );
}
