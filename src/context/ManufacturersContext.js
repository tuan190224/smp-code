import React, { useState, useEffect, createContext } from "react";
import manufacturersApi from "../Api/manufacturersApi";

const ManufacturersContext = createContext();

function ManufacturersProvider({ children }) {
  const [manufacturers, setManufacturers] = useState([]);
  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await manufacturersApi.getAll();
        //console.log(response);
        setManufacturers(response);
      } catch (error) {
        console.log("failed to prd");
      }
    };
    fetchManufacturers();
  }, []);

  return (
    <ManufacturersContext.Provider value={manufacturers}>
      {children}
    </ManufacturersContext.Provider>
  );
}
export { ManufacturersContext, ManufacturersProvider };
