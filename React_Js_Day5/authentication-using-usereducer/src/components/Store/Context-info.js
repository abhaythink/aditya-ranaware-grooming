import React, {  useState } from "react";

const ContextInfo = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  oldName:"",
  setName:()=>{},
});
export const MyProvider=({children})=>{

  const [oldName,setName]=useState("")
  return (
    <ContextInfo.Provider value={{oldName,setName}}>
      {children}
    </ContextInfo.Provider>
  );
};

export default ContextInfo;
