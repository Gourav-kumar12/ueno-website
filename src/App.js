import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Mid from './Mid'

export const port=process.env.port || 3000;
export const App = () => {

  return (
    <>
  <Navbar>
  </Navbar>
  <Header>
  </Header>
  <Mid>
   </Mid>

    </>
  )
}
export default App;