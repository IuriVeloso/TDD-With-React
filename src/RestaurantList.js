import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

const EmptyRestaurantItens = () => (
  <CollectionItem
    style={{ color: 'gray' }}> Click the button to add your first restaurant
  </CollectionItem>
);

const SomeRestaurantItems = ({ restaurants }) => (
  restaurants.map(restaurantName => (
    <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
  ))
);

const RestaurantItems = ({ restaurantItens }) => (
  restaurantItens.length === 0 ? <EmptyRestaurantItens/> : <SomeRestaurantItems restaurants={restaurantItens}/>
);

export default function RestaurantList({ restaurants }) {
  return (
    <Collection header="Restaurants">
      <RestaurantItems restaurantItens={restaurants}/>
    </Collection>
  );
}
