import React, { useState } from 'react'

const Header = () => {
  const [changeNumber, setChangeNumber] = useState(0)

  const incrementar = () => {
    setChangeNumber(changeNumber+1);
  }

  return (
    <div className="menu">
      <h1 align="center">{changeNumber}</h1>
      <button type="button" onClick={incrementar}>Adicionar</button>
    </div>
  )
}

export default Header