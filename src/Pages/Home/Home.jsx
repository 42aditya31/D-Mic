import React from 'react'

const Home = () => {

  const user = localStorage.getItem("user")
  console.log(JSON.parse(user))
  
  return (
    <div>
      Home Compoenets
    </div>
  )
}

export default Home
