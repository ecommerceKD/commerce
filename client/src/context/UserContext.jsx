import { createContext, useState, useEffect, useMemo } from "react";
import { axiosApi } from "../config/axios.config";

const UserContext = createContext();

const UserProvider = (props) => {

  const [idUser] = useState("6153b26681c938dcd135e229");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const { data } = await axiosApi({
        method: "GET",
        url: `user/${idUser}`,
      });

      setUser(data[0]);
      setLoading(false);
    }
    fetchUser();
  }, [loading]);

  const value = useMemo(() => ({ user, loading }), [user]);

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };