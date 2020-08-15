import React from "react";
import { useSelector } from "react-redux";

export const AuthContext = React.createContext()

function AuthProvider({children}) {
  const [state, setState] = React.useState({
    user: null,
  })
  const auth = useSelector(store => store.auth)

  React.useEffect(() => {
    const { profile } = auth;
    setState({ profile: Object.keys(profile).length === 0 ? null : profile})

  }, [auth])

  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
