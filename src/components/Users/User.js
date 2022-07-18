import React from "react";
import { Link } from "react-router-dom";
function User({ user }) {
  return (
    <Link to={`/user/${user.id}`} type="button">
      <div className="user">
        <h4>{user.first_name}</h4>
      </div>
    </Link>
  );
}

export default User;
