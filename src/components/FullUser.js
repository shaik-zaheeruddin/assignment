import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function FullUser() {
  const { id } = useParams();
  const user = useSelector((state) => state.getUsers).filter(
    (obj) => obj.id == id
  )[0];
  console.log(user);
  return user != undefined ? (
    <div className="main">
      <div className="App">
        <h1>
          {user.first_name} {user.last_name}
        </h1>
        <img src={user.avatar} alt="" className="img" />
      </div>
      <p className="content">
        <span>email : {user.email}</span>
        <p>
          Description :
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          numquam minima odit nihil voluptatibus sed recusandae quia ipsa
          explicabo aliquid, facere, unde maxime corrupti inventore mollitia
          quas sint quae fuga! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda possimus rerum soluta sequi perferendis
        </p>
      </p>
    </div>
  ) : (
    ""
  );

  //   return <h1>{user.first_name}</h1>;
}

export default FullUser;
