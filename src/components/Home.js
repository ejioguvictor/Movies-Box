import React, { useEffect, useState } from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//conponents

//Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';
//Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
  <useHomeFetch />
  // console.log(state)
  return (
    <div>Home Page</div>
  )
}
export default Home;