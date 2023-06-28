import React, { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import "../styles/Home.css"

const getUserfromLS = () => {
  const users = localStorage.getItem('admin');
  if (users) {
    return JSON.parse(users);
  }
  else {
    return []
  };

};

export const contextHeader = createContext();
export default function Home() {
  const [admin, setAdmin] = useState(getUserfromLS)
  return (
    <>
      <div className="parent">
        <contextHeader.Provider value={{ admin }}>
          <div className="child"><Header /></div>
        </contextHeader.Provider>
        <div className="child">child2</div>
        <div className="child">child3</div>
      </div>
    </>
  );
}
