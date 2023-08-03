import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setUser(null);
    navigate(`/`, { replace: true });
  }, []);

  return <div>Logging out... Redirecting to the main page.</div>;
};

export default Logout;
