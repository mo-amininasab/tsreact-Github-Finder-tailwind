import React, { Fragment } from 'react'

// cmp
import Navbar from './components/layout/Navbar'

interface Props {
  
}

const App: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Navbar />
    </Fragment>
  )
}

export default App
