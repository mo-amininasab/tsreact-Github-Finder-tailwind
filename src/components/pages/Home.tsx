import React, { Fragment } from 'react'
import Search from '../users/Search'
import Users from '../users/Users'

interface Props {
  
}

const Home: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  )
}

export default Home
