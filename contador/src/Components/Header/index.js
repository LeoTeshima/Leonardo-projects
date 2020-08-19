import React, { useState } from 'react'

const Header = () => {
  const [changeNumber, setChangeNumber] = useState(0)

  const increment = () => {
    setChangeNumber(changeNumber + 1);
  }

  return (
    <div className="menu">
      <h1 align="center">{changeNumber}</h1>
      <button type="button" onClick={increment}>Adicionar</button>
    </div>
  )
}

export default Header