import React, {useState} from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import "./ProductComponent.css"
const ProductComponent = () => {
  const [userID, setUserID]= useState(0)
  const [clicked, setClicked]=useState(false)
  const users = useSelector((state) => state.allProducts.users);
  const renderList = users.map((user) => {
    const { id, email, first_name, last_name, avatar } = user;
    console.log(users)
    return (
  
      <div className="five wide column" key={id}>
        <div className="users__btn">
          <button id={id} className={`{clicked?'activeBtn':'Btn'}`} onClick={function(){setUserID(id)}}>User {id}</button>
        

          </div>
      </div>
      
    );
  });
  return <>{renderList}{ <UserProfile userID={userID}/>}</>;
};

export default ProductComponent;
