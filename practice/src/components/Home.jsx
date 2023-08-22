import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const IMG_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

const RESTAURANT_LIST =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1243446&lng=72.84490140000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

const Home = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(RESTAURANT_LIST);
    const data = await res.json(null);
    console.log(
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantList(
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (restaurantList == null) {
    return <h1>Fetching data please wait ...</h1>;
  }
  return (
    <section className='my-8 border-2 border-red-500'>
      {restaurantList.map((restaurant) => (
        <Link
          to={`/restaurants/${restaurant?.info?.id}`}
          key={restaurant?.info?.id}>
          <div
            className='w-10/12 my-4 mx-auto p-4 border-2 border-slate-200
            shadow-lg rounded-xl'>
            <img
              className='w-2/12'
              src={`${IMG_URL}${restaurant?.info?.cloudinaryImageId}`}
            />
            <h1 className='font-bold mb-4 bg-slate-200 text-yellow-400'>
              {restaurant?.info?.name}
            </h1>
            <h2>{restaurant?.info?.cuisines.join(' || ')}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Home;
