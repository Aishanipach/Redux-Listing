import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Spinner from 'react-bootstrap/Spinner';
import "./ProductListing.css"
const ProductPage = () => {
  const users = useSelector((state) => state.allProducts.users);
  const [userPage, setUserPage] = useState(1);
  const [Loading, setLoading] = useState(true)
  function setPageValueHandler(event) {
    if (event.target.id == "back") {
      userPage !== 1 ? setUserPage(userPage - 1) : setUserPage(userPage)
    }

    if (event.target.id == "next") {
      userPage !== 2 ? setUserPage(userPage + 1) : setUserPage(userPage)
    }
  }

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://reqres.in/api/users/?page=${userPage}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

    setLoading(false)
    dispatch(setProducts(response.data.data));

  };

  useEffect(() => {
    fetchProducts();
  }, [userPage]);


  console.log("Products :", users);
  return (
    <div className="listing__bg">
      {Loading ? <div style={{ backgroundColor: "white", height: "100vh" }}><Spinner animation="border" size="lg" variant="primary" /> </div> :
        <div className="ui grid container">

          <ProductComponent />
          <div className="footer">

            <button id="back" onClick={setPageValueHandler}>{`<`}</button>
            <div className="current">Page {userPage}</div>
            <button id="next" onClick={setPageValueHandler}>{`>`}</button>

          </div>
        </div>}

    </div>
  );
};

export default ProductPage;
