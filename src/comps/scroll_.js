import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you use axios for making API calls

const ClothesList = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInitialClothes();
  }, []);

  const fetchInitialClothes = async () => {
    try {
      const response = await axios.get('/api/clothes'); // Replace this with your API endpoint
      setClothes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching initial clothes:', error);
      setLoading(false);
    }
  };

  // Function to fetch more clothes when the user scrolls to the bottom
  const fetchMoreClothes = async () => {
    // Implement logic to fetch the next set of clothes
    // You'll need to handle pagination on the server-side
    // Append the new clothes to the existing clothes array
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;

    if (isBottom && !loading) {
      setLoading(true);
      fetchMoreClothes();
    }
  };

//   const handleScroll = () => {
//     if (
//       Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
//         document.documentElement.offsetHeight ||
//       isFetching
//     )
//       return;
//     setIsFetching(true);
//     console.log(isFetching);
//   };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {clothes.map((clothingItem) => (
        <div key={clothingItem.id}>
          {/* Display individual clothing item details */}
        </div>
      ))}
      {loading && <div>Loading more clothes...</div>}
    </div>
  );
};

export default ClothesList;
