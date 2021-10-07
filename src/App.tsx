import React, { Fragment } from 'react'

// cmp
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search'
import Users from './components/users/Users'

interface Props {
  
}

const App: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-auto w-3/4 mt-6 mb-12">
      <Search />
      <Users />

      </div>
    </Fragment>
  )
}

export default App
