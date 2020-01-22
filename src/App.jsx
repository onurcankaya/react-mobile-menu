import React from 'react'
import Menu from './components/menu'
import { menuData } from './menu-data'

function App() {
  return (
    <div>
      <Menu menuData={menuData} />
    </div>
  )
}

export default App
