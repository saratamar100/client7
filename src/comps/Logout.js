import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    updateUser(null);
    navigate(`/`, { replace: true });
  }, []);

  return <div>Logging out... Redirecting to the main page.</div>;
};

export default Logout;
