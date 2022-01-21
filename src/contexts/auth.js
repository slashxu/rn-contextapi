import React, { createContext, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({})

function AuthProvider ({childern}) {

  const [user, setUser] = useState({});
  const navigation = useNavigation();

  function signIn(email, password){
    if(email !== '' && password !== ''){
      setUser({
        email: email,
        status: "Ativo"
      })

      navigation.navigate("Home");
    }
  }

  return(
    <AuthContext.Provider value={{ nome: "Sergio Junior", signIn, user }}>
      {childern}
    </AuthContext.Provider>
  )
}

export default AuthProvider;