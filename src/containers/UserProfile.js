import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css"
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
import {
  selectedProduct,

} from "../redux/actions/productsActions";

//   useEffect(() => {
//     if (productId && productId !== "") fetchProductDetail(productId);
//     return () => {
//       dispatch(removeSelectedProduct());
//     };
//   }, [productId]);
function UserProfile(props) {
  const [loading, setLoading] = useState(true)
  let user = useSelector((state) => state.user);
  const { id, email, first_name, last_name, avatar } = user;
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://reqres.in/api/users/${props.userID}`)

      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data.data));
    setLoading(false)
  };

  useEffect(() => {
    if (props.userID != 0) {
      fetchProductDetail(props.userID);
    }

  }, [props.userID]);


  return (

    <div className="userCard">
      {loading ? <div style={{ backgroundColor: "white", height: "100%" }}><Spinner animation="border" size="lg" variant="primary" /> </div> :
        <>
          <div className="content">
            <div className="userName">{props.userID == 0 ? "Click on a user!" : `${user.first_name} ${user.last_name}`}</div>
            <div className="userEmail">{props.userID == 0 ? "& get more information" : `${user.email}`}</div>

          </div>
          <div className="image">
            <img src={user.avatar} alt={id} />
          </div>
        </>}
    </div>

  )
}

export default UserProfile