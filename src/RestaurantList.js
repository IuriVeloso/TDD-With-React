import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

export default function RestaurantList({ restaurants }) {
    return (
        <Collection>
            {restaurants.map(restaurantName => (
                <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
            ))}
        </Collection>
    );
}
