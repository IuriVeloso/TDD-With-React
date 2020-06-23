import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

const EmptyDishItens = () => (
  <CollectionItem
    style={{ color: 'gray' }}> Click the button to add your first dish
  </CollectionItem>
);

const SomeDishItems = ({ dish }) => (
  dish.map(dishes => (
    <CollectionItem key={dishes}>
      {dishes}
    </CollectionItem>
  ))
);

const DishItems = ({ dishNames }) => (
  dishNames.length === 0 ? <EmptyDishItens/> : <SomeDishItems dish={dishNames}/>
);

function DishList({ dishNames }) {
  return (
    <Collection header="Dishes">
      <DishItems dishNames={dishNames}/>
    </Collection>
  );
}

export default DishList;
