import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1243446&lng=72.84490140000001&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <h1>Loading please wait ...</h1>;
  }

  const { name, costForTwoMessage, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>{avgRatingString}</h3>
    </div>
  );
};

export default RestaurantMenu;
