import React from 'react'
import { IMG_PATH_URL } from './utils/constonts'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
    <div className='w-32 pr-4'>
       <img src={IMG_PATH_URL + posterPath} alt='MoviePoster'/>
    </div>
  )
}

export default MovieCard