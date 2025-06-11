import React from 'react'

const Mycontext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  userData: {},
});

export default Mycontext;