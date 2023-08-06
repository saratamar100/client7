import React, { useEffect, useState } from "react";
import "../style/style.css";
import Search from "./Search";

const Scroll = ({ url }) => {
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  //const state of load
  const [id, setId] = useState(0);
  const handleScroll = () => {
    // console.log(
    //   window.innerHeight + document.documentElement.scrollTop,
    //   document.documentElement.offsetHeight
    // );
    //console.log("scroll");
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    console.log("adding");
    setIsFetching(true);
  };
  const initailFetch = () => {
    setItems([
      {
        description: "חולצה יפה מאוד",
        cost: 56,
        img: "pic",
        id: id,
      },
    ]);
    setId((id) => id + 10);
  };

  const fetchMoreListItems = () => {
    const newItem = {
      description: "חולצה יפה מאוד",
      cost: 56,
      img: "pic",
      id: id + 1,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setId((prevId) => prevId + 1);
    setIsFetching(false);
  };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);
  useEffect(() => {
    initailFetch();
  }, []);

  //   useEffect(() => {
  //     document.addEventListener("input", handleScroll);
  //     return () => {
  //       document.removeEventListener("input", handleScroll);
  //     };
  //   });
  useEffect(() => {
    const interval = setInterval(handleScroll, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Search items={items} />;
};
export default Scroll;
