import { createContext, useEffect, useState } from "react";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [page, setPage] = useState(Number(localStorage.getItem("page")) || 1);

  // store the state in local storage
  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);
  return (
    <StateContext.Provider
      value={{
        page,
        setPage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
