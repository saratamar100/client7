import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

const UserProvider = ({ user, children }) => {
  // Receive user as a prop
  const [userDetails, setUserDetails] = useState(user); // Initialize with the user prop

  useEffect(() => {
    const storedUserDetails = Cookies.get("userDetails");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const updateUserDetails = (newDetails) => {
    setUserDetails(newDetails);
    Cookies.set("userDetails", JSON.stringify(newDetails));
  };

  return (
    <UserContext.Provider
      value={{ user: userDetails, updateUser: updateUserDetails }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
