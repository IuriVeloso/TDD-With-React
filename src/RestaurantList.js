import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import { Link } from "react-router-dom";

const EmptyRestaurantItens = () => (
  <CollectionItem
    style={{ color: 'gray' }}> Click the button to add your first restaurant
  </CollectionItem>
);

const SomeRestaurantItems = ({ restaurants }) => (
  restaurants.map(restaurant => (
    <CollectionItem key={restaurant.id}>
      <Link to={`/restaurants/${restaurant.attributes.name}`} >{restaurant.attributes.name}</Link>
    </CollectionItem>
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
