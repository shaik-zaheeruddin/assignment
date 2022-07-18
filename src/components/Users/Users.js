import React from "react";
import { useSelector } from "react-redux";
import User from "./User";
function Users() {
  const users = useSelector((state) => state.getUsers);
  const user = (
    <div className="users">
      {users.map((obj) => (
        <User user={obj} key={obj.id} />
      ))}
    </div>
  );
  return <>{user}</>;
}

export default Users;
