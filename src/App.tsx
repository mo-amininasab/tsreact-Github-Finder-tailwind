import React, { Fragment } from 'react'

// cmp
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search'

interface Props {
  
}

const App: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-auto w-3/4 mt-6">
      <Search />

      </div>
    </Fragment>
  )
}

export default App
