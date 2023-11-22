import React, { useState, useEffect } from "react";
import "../styles/Items.css";
import Item from "./Item";
import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";
const ListItems = (props) => {
  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState();
  const lostFoundFetch=async()=>{
    try{
      setSpinner(true);
      const response =await axios.get(`https://finding-nemo.onrender.com/lostItem/getByCategory?category=${props.section}`);
      console.log(response);
      setItems(response.data.reverse());
      setSpinner(false);
    }catch(error){
      console.log("Error in fetching data");
      setSpinner(false);
    }
  }
  useEffect(() => {
    lostFoundFetch();
    // fetch(
    //   `https://finding-nemo.onrender.com/lostItem/getByCategory?category=${props.section}`
    // )
    //   .then(setSpinner(true))
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setItems(data.reverse());
    //     setSpinner(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //     setSpinner(false);
    //   });
  }, [props.section]);
  console.log(items);
  return (
    <div className="container">
      {spinner && <InfinitySpin width="200" color="#019aff" />}
      {items.map((item) => (
        <div key={item._id}>
          <Item key={item._id} data={item} />
        </div>
      ))}
    </div>
  );
};

export default ListItems;
