import React, { useState } from "react";

import DarkPage from './pages/DarkPage'
// import LightPage from './pages/LightPage'
import Button from './components/button'


function App() {

  const [theme, setTheme] = useState(true)
  // descobrir como exportar só essa constante theme

  const changeTheme = () => {
    setTheme(!theme)
  }

  console.log(theme)
  return (
      <>
      <DarkPage />
      {/* Botão ainda não está funcionando */}
      <div className="change-theme" onClick={changeTheme}>
        <Button name={"Mudar Tema"}/>
      </div>
      </>
  );
}

export default App;

// tentando fazer a importação condicional