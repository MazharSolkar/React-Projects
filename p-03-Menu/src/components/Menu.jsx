import React, { useState } from 'react';
import data from '../constant/data';
import Card from './Card';
import Button from './Button';

const Menu = () => {
  const [mainItemList] = useState(data);
  const [itemList, SetItemList] = useState(mainItemList);
  console.log(itemList);

  const [categories, setCategories] = useState([
    'all',
    ...new Set(mainItemList.map((item) => item.category)),
  ]);

  const filter = (category) => {
    console.log('clicked');
    console.log(category);
    if (category === 'all') {
      SetItemList(mainItemList);
    } else {
      const list = mainItemList.filter((item) => item.category === category);
      SetItemList(list);
    }
  };

  return (
    <section>
      <div className='flex justify-center'>
        {categories.map((category) => (
          <Button key={category} filter={filter}>
            {category}
          </Button>
        ))}
      </div>
      <div className='flex flex-wrap justify-center'>
        {itemList.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;

// Manually filter out unique categories from the itemList array
// const uniqueCategories = itemList.reduce(
//   (categories, item) => {
//     if (!categories.includes(item.category)) {
//       categories.push(item.category);
//     }
//     return categories;
//   },
//   ['all']
// );
