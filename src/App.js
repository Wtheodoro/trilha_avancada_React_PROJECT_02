import React, { useState } from "react";

import DarkPage from './pages/DarkPage'

function App() {

  const [theme, setTheme] = useState(true)

  const changeTheme = () => {
    setTheme(!theme)
  }

  console.log(theme)
  return (
      <>
      <DarkPage />
      </>
  );
}

export default App;

// tentando fazer a importação condicional