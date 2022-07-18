import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAction } from "./store/action/operatingAction";
import { getUsers } from "./store/action/getUsers";
import Users from "./components/Users/Users";
import { Routes, Route } from "react-router-dom";
import FullUser from "./components/FullUser";
function App() {
  const str = useSelector((state) => state.str);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(addAction("loaded"));
      dispatch(getUsers());
      console.log("1");
    }, 3000);
  }, []);
  const imgAddress =
    "https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif";
  return (
    <>
      {str !== "loaded" ? (
        <div className="load">
          <img src={imgAddress} className="loading" />
        </div>
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Hello world</h1>
                  <Users />
                </>
              }
            />

            <Route
              path="user/:id"
              element={
                <>
                  <FullUser />
                  <Users />
                </>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
