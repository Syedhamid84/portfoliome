import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [formvalues, setFormvalues] = useState({
    firstname: "",
    lastname: "",
    useremail: "",
    usernumber: "",
    userskills: "",
    usercity: "",
    usermessage: "",
  });

  return (
    <DataContext.Provider value={{ formvalues, setFormvalues }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
